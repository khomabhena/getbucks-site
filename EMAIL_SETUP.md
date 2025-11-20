# Email Setup Guide for cPanel

## Overview

The contact form sends emails using SMTP through your cPanel email account (`enquiries@getbucksbank.com`).

## Setup Steps

### Step 1: Choose Your PHP Script

You have two options:

1. **send-email.php** - Uses PHPMailer (recommended for SMTP authentication)
2. **send-email-simple.php** - Uses PHP's built-in mail() function (simpler, but may not work with SMTP auth)

### Step 2: Install PHPMailer (For send-email.php)

#### Option A: Using Composer (Recommended)

1. SSH into your cPanel or use Terminal
2. Navigate to your project root
3. Run:
   ```bash
   composer require phpmailer/phpmailer
   ```

#### Option B: Manual Download

1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer/releases
2. Extract the ZIP file
3. Upload the `PHPMailer` folder to your server:
   - Option 1: `public_html/PHPMailer/`
   - Option 2: `api/PHPMailer/`
4. Update the `require_once` paths in `send-email.php` accordingly

### Step 3: Update Email Credentials

**For send-email.php:**
1. Open `api/send-email.php`
2. Find this line:
   ```php
   define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD_HERE');
   ```
3. Replace `YOUR_EMAIL_PASSWORD_HERE` with your actual email password for `enquiries@getbucksbank.com`

**For send-email-simple.php:**
- No password needed, but it may not work with SMTP authentication

### Step 4: Upload Files to cPanel

1. **Upload the API folder:**
   - Upload `api/` folder to `public_html/api/`
   - Make sure the structure is: `public_html/api/send-email.php`

2. **Set proper permissions:**
   - PHP files should have `644` permissions
   - Folders should have `755` permissions

### Step 5: Test the Endpoint

Test using curl or a tool like Postman:

```bash
curl -X POST https://yourdomain.com/api/send-email.php \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "fullname=Test User&email=test@example.com&number=1234567890&message=Test message"
```

Or test directly in browser (should show JSON response).

### Step 6: Security Considerations

1. **Never commit passwords to git!**
   - Consider using environment variables
   - Or keep password in a config file outside the repo
   - Or set it directly in cPanel after upload

2. **Add reCAPTCHA** (optional but recommended):
   - The form can be enhanced with Google reCAPTCHA
   - You already have reCAPTCHA setup in the project

3. **Rate Limiting** (optional):
   - Consider adding rate limiting to prevent spam
   - Can be done in PHP or via .htaccess

## Troubleshooting

### Email Not Sending

1. **Check PHP Error Logs:**
   - In cPanel, go to "Errors" or check error logs
   - Look for PHP errors related to email sending

2. **Verify SMTP Credentials:**
   - Double-check the email password
   - Ensure the email account exists in cPanel

3. **Test SMTP Connection:**
   - Try using the simple version first
   - Check if port 465 is blocked by firewall

4. **Check PHP mail() Function:**
   - Some hosts disable PHP's mail() function
   - PHPMailer with SMTP is more reliable

### Common Issues

- **"Class 'PHPMailer\PHPMailer\PHPMailer' not found"**
  - PHPMailer is not installed or path is wrong
  - Check the require_once paths

- **"SMTP connect() failed"**
  - Wrong SMTP credentials
  - Port 465 might be blocked
  - Try port 587 with TLS instead

- **"Email sent but not received"**
  - Check spam folder
  - Verify the TO_EMAIL address is correct
  - Check email account in cPanel

## Alternative: Use send-email-simple.php

If PHPMailer setup is too complex, you can use `send-email-simple.php` which uses PHP's built-in `mail()` function. However, this may not work with SMTP authentication on all servers.

## Next Steps

1. Upload files to cPanel
2. Update email password
3. Test the form
4. Monitor for spam and add reCAPTCHA if needed

