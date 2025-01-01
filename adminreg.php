<?php
$servername = "localhost";  
$username = "root";         
$password = "";             
$dbname = "hotel_mang";    

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$role = $_POST['role'];
$contact_no = $_POST['contact_no'];
$password = $_POST['password'];

$stmt = $conn->prepare("INSERT INTO admin (name, role, contact_no, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $role, $contact_no, $password);

if ($stmt->execute()) {
    header("Location: popup_reg.html?status=success");
    exit();
} else {
    echo "Error: " . $stmt->error;
}
$stmt->close();
$conn->close();