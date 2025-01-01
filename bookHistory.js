function populateBookingTable() {
    fetch('http://localhost/hotel_transylvania/bookHistory.php')
        .then(response => response.json())
        .then(bookings => {
            const tableBody = document.getElementById('bookingTableBody');
            tableBody.innerHTML = "";
            if (bookings.error) {
                tableBody.innerHTML = `<tr><td colspan="8">${bookings.error}</td></tr>`;
                return;
            }
            bookings.forEach(booking => {
                const row = document.createElement('tr');
                const bookingIdCell = document.createElement('td');
                bookingIdCell.textContent = booking.booking_id;

                const guestIdCell = document.createElement('td');
                guestIdCell.textContent = booking.guest_id;

                const roomNumberCell = document.createElement('td');
                roomNumberCell.textContent = booking.room_no;

                const bookingDateCell = document.createElement('td');
                bookingDateCell.textContent = booking.booking_date;

                const checkInCell = document.createElement('td');
                checkInCell.textContent = booking.check_in;

                const checkOutCell = document.createElement('td');
                checkOutCell.textContent = booking.check_out;

                const paymentCell = document.createElement('td');
                paymentCell.textContent = booking.payment;

                const paymentStatusCell = document.createElement('td');
                paymentStatusCell.textContent = booking.payment_status;
                const actionsCell = document.createElement('td');
                actionsCell.innerHTML = `
                    <button onclick="viewBookingDetails(${booking.booking_id})">View</button>
                    <button onclick="editBooking(${booking.booking_id})">Edit</button>
                    <button onclick="deleteBooking(${booking.booking_id})">Delete</button>
                `;
                row.appendChild(bookingIdCell);
                row.appendChild(guestIdCell);
                row.appendChild(roomNumberCell);
                row.appendChild(bookingDateCell);
                row.appendChild(checkInCell);
                row.appendChild(checkOutCell);
                row.appendChild(paymentCell);
                row.appendChild(paymentStatusCell);
                row.appendChild(actionsCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('bookingTableBody').innerHTML = '<tr><td colspan="8">Failed to load data. Please try again later.</td></tr>';
        });
}
document.addEventListener('DOMContentLoaded', populateBookingTable);
function viewBookingDetails(bookingId) {
    alert(`Viewing details for booking ID: ${bookingId}`);
}

function editBooking(bookingId) {
    alert(`Editing booking ID: ${bookingId}`);
}

function deleteBooking(bookingId) {
    alert(`Deleting booking ID: ${bookingId}`);
}