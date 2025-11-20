# reCAPTCHA Setup for Contact Form

## Quick Setup Steps

### 1. Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **"Create"** to register a new site
3. Choose **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
4. Add your domain(s):
   - For development: `localhost`, `127.0.0.1`
   - For production: `getbucksbank.com`, `www.getbucksbank.com`
5. Accept the terms and click **"Submit"**
6. Copy your **Site Key** and **Secret Key**

### 2. Update Frontend Configuration

1. Open `src/config/recaptcha.js`
2. Replace `YOUR_RECAPTCHA_SITE_KEY_HERE` with your actual **Site Key**:
   ```javascript
   export const RECAPTCHA_SITE_KEY = 'your_actual_site_key_here';
   ```

### 3. Update Backend Configuration

1. Open `api/send-email.php`
2. Find this line:
   ```php
   define('RECAPTCHA_SECRET_KEY', 'YOUR_RECAPTCHA_SECRET_KEY_HERE');
   ```
3. Replace with your actual **Secret Key**:
   ```php
   define('RECAPTCHA_SECRET_KEY', 'your_actual_secret_key_here');
   ```

### 4. Test

1. Build and deploy your site
2. Visit the contact form
3. Complete the reCAPTCHA checkbox
4. Submit the form
5. Check that emails are sent successfully

## How It Works

1. **User fills out form** → Form fields are validated
2. **User completes reCAPTCHA** → Google generates a token
3. **Form submission** → Token is sent to PHP script along with form data
4. **Server verification** → PHP verifies token with Google's API
5. **Email sent** → If verification passes, email is sent

## Features

✅ **Client-side validation** - Submit button disabled until reCAPTCHA is completed  
✅ **Server-side verification** - Token verified on backend for security  
✅ **Auto-reset** - reCAPTCHA resets after submission or error  
✅ **Error handling** - Clear error messages if verification fails  
✅ **Responsive** - Works on mobile and desktop  

## Security Notes

- **Never commit secret keys to git!** Keep them in the PHP file on the server only
- The Site Key is safe to expose (it's public in your React code)
- The Secret Key must remain private (only in PHP on server)

## Troubleshooting

### "Invalid site key" error
- Check that your domain is added in reCAPTCHA console
- Verify the Site Key is correct in `src/config/recaptcha.js`

### "reCAPTCHA verification failed"
- Check that Secret Key is correct in PHP file
- Verify the token is being sent from the form
- Check PHP error logs for details

### reCAPTCHA not showing
- Check browser console for errors
- Verify the reCAPTCHA script is loaded in `index.html`
- Make sure `react-google-recaptcha` is installed: `npm install react-google-recaptcha`

## Testing with Test Keys

For development, you can use Google's test keys:
- **Site Key**: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` (always passes)
- **Secret Key**: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe` (always passes)

These keys work on `localhost` and always return success, useful for testing.

