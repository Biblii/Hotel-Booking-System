function populateRoomsTable() {
    fetch('http://localhost/hotel_transylvania/room.php') 
        .then(response => {
            console.log('HTTP response status:', response.status); 
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(rooms => {
            console.log('Fetched rooms data:', rooms); 
            const tableBody = document.getElementById('reviewtable');

            tableBody.innerHTML = "";

            if (rooms.error) {
                tableBody.innerHTML = `<tr><td colspan="5">${rooms.error}</td></tr>`;
                return;
            }

            rooms.forEach(room => {
                const row = document.createElement('tr');

                const roomNumberCell = document.createElement('td');
                roomNumberCell.textContent = room.room_number;

                const priceCell = document.createElement('td');
                priceCell.textContent = room.price;

                const typeCell = document.createElement('td');
                typeCell.textContent = room.type;

                const breakfastCell = document.createElement('td');
                breakfastCell.textContent = room.breakfast;

                const availabilityCell = document.createElement('td');
                availabilityCell.textContent = room.availability;

                row.appendChild(roomNumberCell);
                row.appendChild(priceCell);
                row.appendChild(typeCell);
                row.appendChild(breakfastCell);
                row.appendChild(availabilityCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('reviewtable').innerHTML = '<tr><td colspan="5">Failed to load data. Please try again later.</td></tr>';
        });
}
document.addEventListener('DOMContentLoaded', populateRoomsTable);