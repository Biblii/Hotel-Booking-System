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
$contact = $_POST['contact'];
$review = $_POST['review'];
$room_no = $_POST['room_no'];

$guestQuery = $conn->prepare("SELECT guest_id FROM guest WHERE contact = ?");
$guestQuery->bind_param("s", $contact);
$guestQuery->execute();
$guestResult = $guestQuery->get_result();

if ($guestResult->num_rows > 0) {
    $guestRow = $guestResult->fetch_assoc();
    $guest_id = $guestRow['guest_id'];

    $bookingQuery = $conn->prepare("SELECT booking_id FROM booking WHERE guest_id = ? AND room_no = ?");
    $bookingQuery->bind_param("ss", $guest_id, $room_no);
    $bookingQuery->execute();
    $bookingResult = $bookingQuery->get_result();

    if ($bookingResult->num_rows > 0) {
        $bookingRow = $bookingResult->fetch_assoc();
        $booking_id = $bookingRow['booking_id'];

        $stmt = $conn->prepare("INSERT INTO review (review, room_no, booking_id, re_date) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $review, $room_no, $booking_id, $re_date);

        if ($stmt->execute()) {
            header("Location: popup_reg.html?status=success");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "It seems like you haven't been to our hotel yet! stay once and then leave a review<3";
    }

    $bookingQuery->close();
} else {
    echo "It seems like you haven't been to our hotel yet! be our guest once and then leave a review<3";
}

$guestQuery->close();
$conn->close();