<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_mang";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'] ?? '';
$password = $_POST['password'] ?? '';

$stmt = $conn->prepare("SELECT * FROM admin WHERE name = ? AND password = ?");
$stmt->bind_param("ss", $name, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $_SESSION['name'] = $row['name'];
    header("Location: admindash.php");
    exit();
} else {
    echo "<script>alert('Invalid username or password.')</script>";
    echo "<script>location.href='home.html'</script>";
}

$stmt->close();
$conn->close();