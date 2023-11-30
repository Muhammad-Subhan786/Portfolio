<?php
$servername = "localhost"; // Change to your database server name
$username = "root"; // Change to your database username
$password = "mysql"; // Change to your database password
$dbname = "contact_form_db"; // Change to your database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data and insert into the database
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "Your message has been sent and saved to the database.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

// Close the database connection
$conn->close();
?>
