<?php
/**
 * Contact Form Email Handler (Simple Version - No PHPMailer Required)
 * Uses PHP's built-in mail() function
 * 
 * Note: This is a simpler alternative if PHPMailer is not available.
 * However, SMTP authentication with mail() can be tricky on some servers.
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

// Email configuration
define('TO_EMAIL', 'enquiries@getbucksbank.com');
define('FROM_EMAIL', 'enquiries@getbucksbank.com');
define('FROM_NAME', 'GetBucks Bank Contact Form');

// Get and sanitize form data
$fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$number = isset($_POST['number']) ? trim($_POST['number']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

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

// Basic spam protection
if (isset($_POST['website']) && !empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you for your message!']);
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

// Prepare email
$subject = 'New Contact Form Submission - GetBucks Bank';
$emailBody = "
New Contact Form Submission - GetBucks Bank

Full Name: {$fullname}
Email: {$email}
Mobile Number: {$number}

Message:
{$message}

---
This email was sent from the GetBucks Bank contact form.
";

// Email headers
$headers = "From: " . FROM_NAME . " <" . FROM_EMAIL . ">\r\n";
$headers .= "Reply-To: {$fullname} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail(TO_EMAIL, $subject, $emailBody, $headers);

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
?>

