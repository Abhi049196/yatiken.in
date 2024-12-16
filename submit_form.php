<?php
// Include the database connection file
include 'db_connect.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $countryCode = htmlspecialchars(trim($_POST['form_country_code']));
    $customCountryCode = isset($_POST['custom_country_code']) ? htmlspecialchars(trim($_POST['custom_country_code'])) : '';
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['form_message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // If 'Other' is selected, use the custom country code
    if ($countryCode === 'other' && !empty($customCountryCode)) {
        $countryCode = $customCountryCode;
    }

    // Ensure required fields are not empty
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contact_form (name, email, country_code, phone, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $email, $countryCode, $phone, $message);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Thank you for submitting your inquiry. Our team will review your request and get back to you shortly.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Invalid request method.";
}

// Close the database connection
$conn->close();
?>
