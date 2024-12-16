
<?php
// db_connect.php

$servername = "127.0.0.1:3306";
$username = "u398777525_yatiken";
$password = "Yatiken@123";
$dbname = "u398777525_yatiken"; // Update with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
