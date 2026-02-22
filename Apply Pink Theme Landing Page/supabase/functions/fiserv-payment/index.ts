const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function base64FromArrayBuffer(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function createMessageSignature(
  apiKey: string,
  secret: string,
  clientRequestId: string,
  timestamp: string,
  requestBody: string
): Promise<string> {
  const rawSignature = apiKey + clientRequestId + timestamp + requestBody;
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const data = encoder.encode(rawSignature);
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, data);
  return base64FromArrayBuffer(signature);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const apiKey = Deno.env.get("FISERV_API_KEY");
  const apiSecret = Deno.env.get("FISERV_API_SECRET");
  const paymentsUrl = Deno.env.get("FISERV_PAYMENTS_URL");
  const storeId = Deno.env.get("FISERV_STORE_ID");
  const notificationUrl = Deno.env.get("FISERV_NOTIFICATION_URL");

  if (!apiKey || !apiSecret || !paymentsUrl) {
    return new Response(
      JSON.stringify({ ok: false, error: "Missing Fiserv environment variables" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const { amount, currency = "USD", orderId, description } = await req.json();

    if (!amount) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required payment fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const clientRequestId = crypto.randomUUID();
    const timestamp = Date.now().toString();

    const requestBody: Record<string, unknown> = {
      transactionAmount: {
        total: Number(amount).toFixed(2),
        currency,
      },
      transactionType: "SALE",
    };

    if (storeId) requestBody.storeId = storeId;
    if (orderId) requestBody.orderId = orderId;
    if (notificationUrl) requestBody.transactionNotificationURL = notificationUrl;
    if (description) requestBody.hostedPaymentPageText = description;

    const bodyString = JSON.stringify(requestBody);
    const messageSignature = await createMessageSignature(
      apiKey,
      apiSecret,
      clientRequestId,
      timestamp,
      bodyString
    );

    const fiservResponse = await fetch(paymentsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": apiKey,
        "Client-Request-Id": clientRequestId,
        "Timestamp": timestamp,
        "Message-Signature": messageSignature,
      },
      body: bodyString,
    });

    const text = await fiservResponse.text();
    let parsed: unknown = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = text;
    }

    return new Response(
      JSON.stringify({
        ok: fiservResponse.ok,
        status: fiservResponse.status,
        data: parsed,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
