// Function to populate the booking table
function populateBookingTable() {
    fetch('fetchBookingData.php')  // Fetch data from the PHP file
        .then(response => response.json())  // Parse the JSON response
        .then(bookings => {
            const tableBody = document.getElementById('bookingTableBody');
            
            // Clear the table before inserting new data
            tableBody.innerHTML = "";

            // Loop through the booking data and create table rows
            bookings.forEach(booking => {
                const row = document.createElement('tr');

                // Create individual cells and append them to the row
                const bookingIdCell = document.createElement('td');
                bookingIdCell.textContent = booking.booking_id;

                const guestIdCell = document.createElement('td');
                guestIdCell.textContent = booking.guest_id;

                const guestNameCell = document.createElement('td');
                guestNameCell.textContent = booking.guest_name;

                const roomNumberCell = document.createElement('td');
                roomNumberCell.textContent = booking.room_number;

                const checkInCell = document.createElement('td');
                checkInCell.textContent = booking.check_in;

                const checkOutCell = document.createElement('td');
                checkOutCell.textContent = booking.check_out;

                const paymentStatusCell = document.createElement('td');
                paymentStatusCell.textContent = booking.payment_status;

                const totalAmountCell = document.createElement('td');
                totalAmountCell.textContent = booking.total_amount;

                // Create actions cell with buttons (for example: View or Edit)
                const actionsCell = document.createElement('td');
                actionsCell.innerHTML = `
                    <button onclick="viewBookingDetails(${booking.booking_id})">View</button>
                    <button onclick="editBooking(${booking.booking_id})">Edit</button>
                    <button onclick="deleteBooking(${booking.booking_id})">Delete</button>
                `;

                // Append the cells to the row
                row.appendChild(bookingIdCell);
                row.appendChild(guestIdCell);
                row.appendChild(guestNameCell);
                row.appendChild(roomNumberCell);
                row.appendChild(checkInCell);
                row.appendChild(checkOutCell);
                row.appendChild(paymentStatusCell);
                row.appendChild(totalAmountCell);
                row.appendChild(actionsCell);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('bookingTableBody').innerHTML = '<tr><td colspan="9">Failed to load data. Please try again later.</td></tr>';
        });
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateBookingTable);

// Functions for actions (View, Edit, Delete)
function viewBookingDetails(bookingId) {
    alert(`Viewing details for booking ID: ${bookingId}`);
    // Here you can implement the logic to show booking details in a popup or navigate to another page
}

function editBooking(bookingId) {
    alert(`Editing booking ID: ${bookingId}`);
    // Here you can implement the logic to open an edit form or modal
}

function deleteBooking(bookingId) {
    alert(`Deleting booking ID: ${bookingId}`);
    // Here you can implement the logic to delete the booking (e.g., by making an API request)
}
