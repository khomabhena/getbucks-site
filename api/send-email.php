<?php
/**
 * Contact Form Email Handler
 * Sends emails via SMTP using PHPMailer
 */

// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Include PHPMailer
// Option 1: If using Composer, uncomment the line below:
// require_once __DIR__ . '/../vendor/autoload.php';

// Option 2: If PHPMailer is in the same directory, uncomment these:
// require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
// require_once __DIR__ . '/PHPMailer/src/SMTP.php';
// require_once __DIR__ . '/PHPMailer/src/Exception.php';

// Option 3: If PHPMailer is in a parent directory:
// require_once __DIR__ . '/../PHPMailer/src/PHPMailer.php';
// require_once __DIR__ . '/../PHPMailer/src/SMTP.php';
// require_once __DIR__ . '/../PHPMailer/src/Exception.php';

// Check if PHPMailer is available and load it
$phpmailerAvailable = false;

// Try to load PHPMailer from various possible locations
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
    $phpmailerAvailable = class_exists('PHPMailer\PHPMailer\PHPMailer');
} elseif (file_exists(__DIR__ . '/PHPMailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/src/SMTP.php';
    require_once __DIR__ . '/PHPMailer/src/Exception.php';
    $phpmailerAvailable = class_exists('PHPMailer\PHPMailer\PHPMailer');
} elseif (file_exists(__DIR__ . '/../PHPMailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/../PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/../PHPMailer/src/SMTP.php';
    require_once __DIR__ . '/../PHPMailer/src/Exception.php';
    $phpmailerAvailable = class_exists('PHPMailer\PHPMailer\PHPMailer');
}

// Email configuration - UPDATE THESE WITH YOUR ACTUAL CREDENTIALS
define('SMTP_HOST', 'mail.getbucksbank.com');
define('SMTP_PORT', 465);
define('SMTP_USERNAME', 'enquiries@getbucksbank.com');
define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD_HERE'); // Update this with actual password
define('SMTP_FROM_EMAIL', 'enquiries@getbucksbank.com');
define('SMTP_FROM_NAME', 'GetBucks Bank Website Contact Form');
define('SMTP_TO_EMAIL', 'enquiries@getbucksbank.com');
define('SMTP_TO_NAME', 'GetBucks Bank');

// reCAPTCHA configuration - UPDATE WITH YOUR SECRET KEY
define('RECAPTCHA_SECRET_KEY', 'YOUR_RECAPTCHA_SECRET_KEY_HERE'); // Get from https://www.google.com/recaptcha/admin

// Function to verify reCAPTCHA token
function verifyRecaptcha($token, $secretKey) {
    if (empty($token)) {
        return ['success' => false, 'error-codes' => ['missing-input-response']];
    }
    
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = [
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    if ($result === FALSE) {
        return ['success' => false, 'error-codes' => ['network-error']];
    }
    
    return json_decode($result, true);
}

// Get and sanitize form data
$fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$number = isset($_POST['number']) ? trim($_POST['number']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$recaptchaToken = isset($_POST['recaptcha_token']) ? trim($_POST['recaptcha_token']) : '';

// Validation
$errors = [];

if (empty($fullname)) {
    $errors[] = 'Fullname is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($number)) {
    $errors[] = 'Mobile number is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// Verify reCAPTCHA
if (!empty(RECAPTCHA_SECRET_KEY) && RECAPTCHA_SECRET_KEY !== 'YOUR_RECAPTCHA_SECRET_KEY_HERE') {
    $recaptchaResult = verifyRecaptcha($recaptchaToken, RECAPTCHA_SECRET_KEY);
    
    if (!$recaptchaResult['success']) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'reCAPTCHA verification failed. Please try again.',
            'errors' => $recaptchaResult['error-codes'] ?? []
        ]);
        exit;
    }
}

// Basic spam protection - honeypot field (if you add one)
if (isset($_POST['website']) && !empty($_POST['website'])) {
    // Bot detected
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for your message!']); // Fake success to confuse bots
    exit;
}

// If validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit;
}

// Sanitize inputs
$fullname = htmlspecialchars($fullname, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$number = htmlspecialchars($number, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Check if PHPMailer is available, otherwise use simple mail()
if (!$phpmailerAvailable) {
    // Fallback to simple mail() function
    $subject = 'New Contact Form Submission - GetBucks Bank';
    $emailBody = "
New Contact Form Submission - GetBucks Bank

Full Name: {$fullname}
Email: {$email}
Mobile Number: {$number}

Message:
{$message}

---
This email was sent from the GetBucks Bank Website contact form.
Reply to: {$email}
    ";

    $headers = "From: " . SMTP_FROM_NAME . " <" . SMTP_FROM_EMAIL . ">\r\n";
    $headers .= "Reply-To: {$fullname} <{$email}>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $mailSent = mail(SMTP_TO_EMAIL, $subject, $emailBody, $headers);

    if ($mailSent) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for contacting us! We will get back to you shortly.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Sorry, there was an error sending your message. Please try again later or contact us directly.'
        ]);
    }
    exit;
}

try {
    // Create PHPMailer instance
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS; // Use SSL/TLS
    $mail->Port = SMTP_PORT;
    $mail->CharSet = 'UTF-8';
    
    // Recipients
    $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
    $mail->addAddress(SMTP_TO_EMAIL, SMTP_TO_NAME);
    $mail->addReplyTo($email, $fullname); // Reply-to the sender's email
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission - GetBucks Bank';
    
    // Email body
    $emailBody = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #faa819; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #faa819; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Full Name:</div>
                    <div class='value'>{$fullname}</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>{$email}</div>
                </div>
                <div class='field'>
                    <div class='label'>Mobile Number:</div>
                    <div class='value'>{$number}</div>
                </div>
                <div class='field'>
                    <div class='label'>Message:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $mail->Body = $emailBody;
    
    // Plain text version
    $mail->AltBody = "
New Contact Form Submission - GetBucks Bank

Full Name: {$fullname}
Email: {$email}
Mobile Number: {$number}

Message:
{$message}
    ";
    
    // Send email
    $mail->send();
    
    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We will get back to you shortly.'
    ]);
    
} catch (Exception $e) {
    // Log error (you can log to a file for debugging)
    error_log("Email sending failed: " . $mail->ErrorInfo);
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again later or contact us directly.'
    ]);
}
?>

