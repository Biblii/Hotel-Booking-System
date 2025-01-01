<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_mang";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

$sql = "SELECT booking_id, guest_id, room_no, booking_date, checkIN AS check_in, checkOUT AS check_out, payment, payment_status FROM booking";
$result = $conn->query($sql);

$data = array();

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo json_encode(["error" => "No data found"]);
    exit();
}

$conn->close();

echo json_encode($data);