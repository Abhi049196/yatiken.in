<?php
// Include database connection file
include('db_connect.php');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];

    // Prepare SQL statement to insert data
    $sql = "INSERT INTO request_a_call_back (name, email, phone, service) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    // Bind parameters and execute
    if ($stmt) {
        $stmt->bind_param("ssss", $name, $email, $phone, $service);
        if ($stmt->execute()) {
            echo "Thank you for submitting your inquiry. Our team will review your request and get back to you shortly.";

        } else {
            echo "Error: Unable to submit request.";
        }
        
        $stmt->close();
    } else {
        echo "Error: Unable to prepare statement.";
    }
}

// Close database connection
$conn->close();
?>
