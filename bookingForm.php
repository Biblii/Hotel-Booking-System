<?php
$servername = "localhost";  
$username = "root";         
$password = "";             
$dbname = "hotel_mang";    

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['user_name'];
$contact = $_POST['contact'];
$mail = $_POST['mail'];
$check_in = $_POST['checKIN'];
$check_out = $_POST['checkOUT'];
$room_type = $_POST['room_type'];
$payment_option = $_POST['paymentOption'];

$date1 = new DateTime($check_in);
$date2 = new DateTime($check_out);
$days = $date1->diff($date2)->days;

if ($days <= 0) {
    die("Invalid dates. Check-out date must be after check-in date.");
}

$payment_status = ($payment_option === "payNow") ? "paid" : "pending";

$price_per_day = 0;

if ($room_type === "single.b") {
    $type = "single";
    $breakfast = "yes";
    $price_per_day = 1000;
} elseif ($room_type === "deluxe.b") {
    $type = "deluxe";
    $breakfast = "yes";
    $price_per_day = 2000;
} elseif ($room_type === "suite.b") {
    $type = "suite";
    $breakfast = "yes";
    $price_per_day = 5000;
} elseif ($room_type === "single") {
    $type = "single";
    $breakfast = "no";
    $price_per_day = 800;
} elseif ($room_type === "deluxe") {
    $type = "deluxe";
    $breakfast = "no";
    $price_per_day = 1800;
} elseif ($room_type === "suite") {
    $type = "suite";
    $breakfast = "no";
    $price_per_day = 4600;
}

$total_payment = $days * $price_per_day;

$stmt_room = $conn->prepare("SELECT room_no FROM room WHERE type = ? AND breakfast = ? LIMIT 1");
$stmt_room->bind_param("ss", $type, $breakfast);
$stmt_room->execute();
$stmt_room->bind_result($room_no);
$stmt_room->fetch();
$stmt_room->close();

if (!$room_no) {
    die("No room available for the selected type and breakfast option.");
}

$stmt_guest = $conn->prepare("INSERT INTO guest (name, contact, mail) VALUES (?, ?, ?)");
$stmt_guest->bind_param("sss", $name, $contact, $mail);

if ($stmt_guest->execute()) {
    $guest_id = $conn->insert_id;
    $stmt_booking = $conn->prepare("INSERT INTO booking (guest_id, room_no, booking_date, checkIN, checkOUT, payment, payment_status) VALUES (?, ?, NOW(), ?, ?, ?, ?)");
    $stmt_booking->bind_param("iissis", $guest_id, $room_no, $check_in, $check_out, $total_payment, $payment_status);


    if ($stmt_booking->execute()) {
        header("Location: popup_reg.html?status=success");
        exit();
    } else {
        echo "Error in booking: " . $stmt_booking->error;
    }

    $stmt_booking->close();
} else {
    echo "Error in guest: " . $stmt_guest->error;
}

$stmt_guest->close();
$conn->close();