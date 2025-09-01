# Google reCAPTCHA v2 Setup Guide

## Overview

This implementation uses Google reCAPTCHA v2 "I'm not a robot" checkbox to protect your login forms from bots and automated attacks.

## Setup Steps

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to register a new site
3. Choose "reCAPTCHA v2" → "I'm not a robot" Checkbox
4. Add your domain(s):
   - For development: `localhost`, `127.0.0.1`
   - For production: `yourdomain.com`, `www.yourdomain.com`
5. Accept the terms and click "Submit"
6. Copy your **Site Key** and **Secret Key**

### 2. Update Configuration

Replace the test key in `src/components/LoginLayout.jsx`:

```javascript
// Replace this line:
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // This is a test key

// With your actual site key:
const RECAPTCHA_SITE_KEY = "your_actual_site_key_here";
```

### 3. Backend Integration

For complete security, you must verify the CAPTCHA token on your server:

1. **Install the verification utility** (already created in `src/utils/recaptcha.js`)
2. **Set up environment variables**:
   ```bash
   RECAPTCHA_SECRET_KEY=your_secret_key_here
   ```
3. **Implement server-side verification** in your API endpoint:

```javascript
import { verifyRecaptcha } from "./utils/recaptcha.js";

app.post("/api/login", async (req, res) => {
  const { captchaToken, username, password } = req.body;

  // Verify reCAPTCHA
  const recaptchaResult = await verifyRecaptcha(
    captchaToken,
    process.env.RECAPTCHA_SECRET_KEY
  );

  if (!recaptchaResult.success) {
    return res.status(400).json({
      error: "CAPTCHA verification failed",
      details: recaptchaResult["error-codes"],
    });
  }

  // Proceed with login logic
  // ... your authentication code here
});
```

## Features

### ✅ What's Implemented:

- **reCAPTCHA v2 Checkbox**: User-friendly "I'm not a robot" verification
- **Client-side Integration**: React component with proper event handling
- **Form Validation**: Submit button disabled until CAPTCHA is completed
- **Error Handling**: Displays error messages for failed verification
- **Auto-reset**: CAPTCHA resets after successful form submission
- **Responsive Design**: Works on mobile and desktop

### 🔧 Customization Options:

- **Theme**: Change `theme="light"` to `"dark"` for dark theme
- **Size**: Change `size="normal"` to `"compact"` for smaller widget
- **Language**: Add `hl="es"` for Spanish, `hl="fr"` for French, etc.

## Security Benefits

### 🛡️ Protection Against:

- **Bot Attacks**: Automated form submissions
- **Spam**: Mass registration/login attempts
- **Brute Force**: Password guessing attacks
- **Scraping**: Automated data extraction

### 🔒 Additional Security Measures:

- **Server-side Verification**: Token validation on backend
- **Rate Limiting**: Implement on your API endpoints
- **IP Blocking**: Block suspicious IP addresses
- **Session Management**: Proper session handling

## Testing

### Development Testing:

- Use the test keys provided by Google
- Test on `localhost` and `127.0.0.1`
- Verify both success and failure scenarios

### Production Testing:

- Test with real domain
- Monitor reCAPTCHA analytics in Google Console
- Check for false positives/negatives

## Troubleshooting

### Common Issues:

1. **"Invalid site key"**: Check domain configuration in reCAPTCHA console
2. **"Network error"**: Verify internet connection and API endpoints
3. **"CAPTCHA expired"**: Implement proper error handling
4. **Mobile issues**: Test on various devices and screen sizes

### Debug Mode:

Add `data-badge="inline"` to the ReCAPTCHA component for debugging:

```javascript
<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={RECAPTCHA_SITE_KEY}
  onChange={handleCaptchaChange}
  onExpired={handleCaptchaExpired}
  theme="light"
  size="normal"
  data-badge="inline"
/>
```

## Analytics

Monitor your reCAPTCHA performance in the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin):

- Success/failure rates
- User experience metrics
- Security insights
- Domain-specific analytics

## Best Practices

1. **Always verify on server-side**: Never trust client-side validation alone
2. **Handle errors gracefully**: Provide clear error messages to users
3. **Monitor performance**: Watch for false positives affecting legitimate users
4. **Keep keys secure**: Never expose secret keys in client-side code
5. **Regular updates**: Keep reCAPTCHA library updated
