# Fiserv Edge Function – Vault secrets

Set these in **Supabase Dashboard → Project Settings → Vault** (exact names, case-sensitive).

## Required

| Secret name             | Description        |
|-------------------------|--------------------|
| `FISERV_API_KEY`        | Fiserv API key     |
| `FISERV_API_SECRET`     | Fiserv API secret  |
| `FISERV_PAYMENTS_URL`   | Fiserv payments API base URL |

## Optional

| Secret name                  | Description           |
|-----------------------------|-----------------------|
| `FISERV_STORE_ID`          | Store ID if required |
| `FISERV_NOTIFICATION_URL`  | Webhook/notification URL |

After adding or changing secrets, **redeploy** the function or the new values won’t be available:

```bash
cd "/path/to/Apply Pink Theme Landing Page"
supabase functions deploy fiserv-payment --project-ref ulrakauzwxsztylzkies
```

---

## 403 "access denied"

That response comes **from Fiserv’s API**, not Supabase. The function forwards Fiserv’s status and body.

**Fix:**

1. **Use the exact URL from your Fiserv docs**  
   `FISERV_PAYMENTS_URL` must be the **full** payment endpoint (base + path), e.g.:
   - Sandbox (EMEA): `https://prod.emea.api.fiservapps.com/sandbox/ipp/payments-gateway/v2/payments`
   - Production (EMEA): `https://prod.emea.api.fiservapps.com/ipp/payments-gateway/v2/payments`  
   If you use a different Fiserv product/region, get the URL from [Fiserv Developer Portal](https://docs.fiserv.dev) or your Fiserv rep.

2. **Match key/secret and URL**  
   Use the same environment: sandbox key/secret with sandbox URL, production with production URL.

3. **Update the secret and redeploy:**
   ```bash
   cd "/path/to/Apply Pink Theme Landing Page"
   supabase secrets set FISERV_PAYMENTS_URL="https://YOUR_FULL_FISERV_PAYMENT_URL" --project-ref ulrakauzwxsztylzkies
   supabase functions deploy fiserv-payment --project-ref ulrakauzwxsztylzkies
   ```
