<?php
session_start();

error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!isset($_SESSION['name'])) {
    header('Location: home.html');
    exit();
}
$session_timeout = 120;

if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY']) > $session_timeout) {
    session_unset();     
    session_destroy();   
    header("Location: home.html");
    exit();
}
$_SESSION['LAST_ACTIVITY'] = time();

$name = $_SESSION['name'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="admindash.css">
</head>
<body>
    <div class="back-btn">
        <form action="http://localhost/hotel_transylvania/logout.php" method="POST">
            <button type="submit" class="logout-btn">Logout</button>
        </form>
    </div>
    <div class="dashboard">
        <a href="bookHistory.html" class="container">
            <img src="bookingHistoryicon.png" alt="Option 1" class="icon">
            <h3>Bookings</h3>
        </a>
        <a href="room.html" class="container">
            <img src="roomIcon.jpg" alt="Option 2" class="icon">
            <h3>Room Details</h3>
        </a>
        <a href="review.html" class="container">
            <img src="feedbackicon.png" alt="Option 3" class="icon">
            <h3>Reviews by Guests</h3>
        </a>
    </div>
</body>
</html>
