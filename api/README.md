# Email API Setup Guide

This folder contains PHP scripts for handling contact form submissions.

## Files

1. **send-email.php** - Uses PHPMailer (recommended for SMTP authentication)
2. **send-email-simple.php** - Uses PHP's built-in mail() function (simpler but may not work with SMTP auth)

## Setup Instructions

### Option 1: Using PHPMailer (Recommended)

1. **Install PHPMailer via Composer:**
   ```bash
   cd api
   composer require phpmailer/phpmailer
   ```

2. **Or download PHPMailer manually:**
   - Download from: https://github.com/PHPMailer/PHPMailer
   - Extract to `api/PHPMailer/` folder
   - Update the require statements in `send-email.php`

3. **Update email credentials in send-email.php:**
   ```php
   define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD_HERE');
   ```

4. **Upload to cPanel:**
   - Upload `api/` folder to `public_html/api/`
   - Make sure `send-email.php` is accessible at `https://yourdomain.com/api/send-email.php`

### Option 2: Using Simple PHP mail() (Fallback)

1. **Update email in send-email-simple.php:**
   - The TO_EMAIL is already set to `enquiries@getbucksbank.com`
   - Note: This may not work with SMTP authentication on all servers

2. **Upload to cPanel:**
   - Upload `api/send-email-simple.php` to `public_html/api/`

## Security Notes

- **Never commit passwords to git!** Use environment variables or a config file outside the repo
- Consider adding reCAPTCHA verification
- Add rate limiting to prevent spam
- Consider using a `.htaccess` file to protect the API folder

## Testing

Test the endpoint using curl:
```bash
curl -X POST https://yourdomain.com/api/send-email.php \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "fullname=Test User&email=test@example.com&number=1234567890&message=Test message"
```

## Troubleshooting

- Check PHP error logs in cPanel
- Verify SMTP credentials are correct
- Ensure port 465 is not blocked
- Test with simple mail() first if PHPMailer doesn't work

