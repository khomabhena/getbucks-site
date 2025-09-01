// Server-side reCAPTCHA verification utility
// This should be used in your backend API endpoint

export const verifyRecaptcha = async (token, secretKey) => {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    return {
      success: data.success,
      score: data.score, // For v3
      action: data.action, // For v3
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
      'error-codes': data['error-codes'],
    };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return {
      success: false,
      'error-codes': ['network-error'],
    };
  }
};

// Example usage in your backend API:
/*
import { verifyRecaptcha } from './utils/recaptcha.js';

app.post('/api/login', async (req, res) => {
  const { captchaToken, username, password } = req.body;
  
  // Verify reCAPTCHA
  const recaptchaResult = await verifyRecaptcha(
    captchaToken, 
    process.env.RECAPTCHA_SECRET_KEY
  );
  
  if (!recaptchaResult.success) {
    return res.status(400).json({ 
      error: 'CAPTCHA verification failed',
      details: recaptchaResult['error-codes']
    });
  }
  
  // Proceed with login logic
  // ... your authentication code here
});
*/
