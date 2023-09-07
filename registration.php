<?php
// MySQL database credentials
$host = "localhost";
$user = "root";
$password = "";
$database = "database";

// Create connection
try {
    $conn = mysqli_connect($host, $user, $password);
    if (!$conn) {
        throw new Exception('Could not connect to the server');
        
    }
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS `database`";
if (mysqli_query($conn, $sql)) {
  echo "Database created successfully: ";
} else {
  echo "Error creating database: " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);

// Create a database connection
try {
    $conn = mysqli_connect($host, $user, $password, $database);
    if (!$conn) {
        throw new Exception('Could not connect to the database');
        
    }
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}

// Create users table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
mysqli_query($conn, $sql);

// Check if the registration form is submitted
if (isset($_POST["first_name"]) && isset($_POST["last_name"]) && isset($_POST["email"])) {
    
    // Get the user input
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    
    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        
        // Insert the user data into the database table
        $sql = "INSERT INTO users (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";
        
        if (mysqli_query($conn, $sql)) {
            header("Location: ../index.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}
?>