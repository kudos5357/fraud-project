<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $description = filter_var($_POST['description'], FILTER_SANITIZE_STRING);
    $date = filter_var($_POST['date'], FILTER_SANITIZE_STRING);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: report_fraud.html?error=1");
        exit;
    }
    
    // Customize these values
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Fraud Report Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Date of Incident: $date\n";
    $email_body .= "Description of the Fraud:\n$description\n";
    
    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        header("Location: report_fraud.html?success=1");
    } else {
        header("Location: report_fraud.html?error=1");
    }
} else {
    header("Location: report_fraud.html");
}
?>
