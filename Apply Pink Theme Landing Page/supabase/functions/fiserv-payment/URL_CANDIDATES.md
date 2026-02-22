# Fiserv / First Data URL candidates to try

Your function uses Api-Key + Message-Signature (HMAC) which matches **First Data Gateway** and **Fiserv EMEA**. Try these in order; after each, run the deploy and test with curl.

## 1. First Data sandbox – direct payments
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://cert.api.firstdata.com/gateway/v2/payments" --project-ref ulrakauzwxsztylzkies
```

## 2. First Data sandbox – payment URL (alternative path)
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://cert.api.firstdata.com/gateway/v2/payment-url" --project-ref ulrakauzwxsztylzkies
```

## 3. First Data production – direct payments
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://prod.api.firstdata.com/gateway/v2/payments" --project-ref ulrakauzwxsztylzkies
```

## 4. First Data – gateway base only (no path; some clients append path in code)
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://cert.api.firstdata.com/gateway/v2" --project-ref ulrakauzwxsztylzkies
```

## 5. Fiserv EMEA sandbox – payment URL
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://prod.emea.api.fiservapps.com/sandbox/ipp/payments-gateway/v2/payment-url" --project-ref ulrakauzwxsztylzkies
```

## 6. Fiserv EMEA sandbox – payments (already tried, 403)
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://prod.emea.api.fiservapps.com/sandbox/ipp/payments-gateway/v2/payments" --project-ref ulrakauzwxsztylzkies
```

## 7. Fiserv EMEA production – payments
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://prod.emea.api.fiservapps.com/ipp/payments-gateway/v2/payments" --project-ref ulrakauzwxsztylzkies
```

## 8. Fiserv CAT (test) EMEA
```bash
supabase secrets set FISERV_PAYMENTS_URL="https://cat.emea.api.fiservapps.com/sandbox/ipp/payments-gateway/v2/payments" --project-ref ulrakauzwxsztylzkies
```

After each `secrets set`, redeploy:
```bash
cd "/Users/princess/Desktop/HackHers/Apply Pink Theme Landing Page"
supabase functions deploy fiserv-payment --project-ref ulrakauzwxsztylzkies
```

Then test:
```bash
curl -s -X POST "https://ulrakauzwxsztylzkies.supabase.co/functions/v1/fiserv-payment" \
  -H "Content-Type: application/json" \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{"amount":5}' | jq .
```
