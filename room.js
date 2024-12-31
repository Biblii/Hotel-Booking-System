// Function to populate the rooms table
function populateRoomsTable() {
    fetch('fetchRoomData.php')  // Fetch data from the PHP file
        .then(response => response.json())  // Parse the JSON response
        .then(rooms => {
            const tableBody = document.getElementById('reviewtable');
            
            // Clear the table before inserting new data
            tableBody.innerHTML = "";

            // Loop through the rooms data and create table rows
            rooms.forEach(room => {
                const row = document.createElement('tr');

                // Create individual cells and append them to the row
                const roomNumberCell = document.createElement('td');
                roomNumberCell.textContent = room.room_number;

                const priceCell = document.createElement('td');
                priceCell.textContent = room.price;

                const typeCell = document.createElement('td');
                typeCell.textContent = room.type;

                const breakfastCell = document.createElement('td');
                breakfastCell.textContent = room.breakfast ? 'Yes' : 'No';

                const availabilityCell = document.createElement('td');
                availabilityCell.textContent = room.availability ? 'Available' : 'Not Available';

                // Append the cells to the row
                row.appendChild(roomNumberCell);
                row.appendChild(priceCell);
                row.appendChild(typeCell);
                row.appendChild(breakfastCell);
                row.appendChild(availabilityCell);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('reviewtable').innerHTML = '<tr><td colspan="5">Failed to load data. Please try again later.</td></tr>';
        });
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateRoomsTable);
