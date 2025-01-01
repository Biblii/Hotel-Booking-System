<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_mang";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

$sql = "SELECT room_no AS room_number, price, type, breakfast, avail_status AS availability FROM room";
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