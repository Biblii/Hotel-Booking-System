// Function to populate the reviews table
function populateReviewsTable() {
    fetch('fetchReviewData.php')  // Fetch data from the PHP file
        .then(response => response.json())  // Parse the JSON response
        .then(reviews => {
            const tableBody = document.getElementById('reviewtable');
            
            // Clear the table before inserting new data
            tableBody.innerHTML = "";

            // Loop through the reviews data and create table rows
            reviews.forEach(review => {
                const row = document.createElement('tr');

                // Create individual cells and append them to the row
                const guestNameCell = document.createElement('td');
                guestNameCell.textContent = review.guest_name;

                const roomNumberCell = document.createElement('td');
                roomNumberCell.textContent = review.room_number;

                const reviewCell = document.createElement('td');
                reviewCell.textContent = review.review;

                const dateCell = document.createElement('td');
                dateCell.textContent = review.date;

                // Create actions cell with buttons (for example: View or Delete)
                const actionsCell = document.createElement('td');
                actionsCell.innerHTML = `
                    <button onclick="viewReviewDetails('${review.guest_name}')">View</button>
                    <button onclick="deleteReview('${review.guest_name}')">Delete</button>
                `;

                // Append the cells to the row
                row.appendChild(guestNameCell);
                row.appendChild(roomNumberCell);
                row.appendChild(reviewCell);
                row.appendChild(dateCell);
                row.appendChild(actionsCell);

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
document.addEventListener('DOMContentLoaded', populateReviewsTable);

// Functions for actions (View, Delete)
function viewReviewDetails(guestName) {
    alert(`Viewing details for review by: ${guestName}`);
    // Here you can implement the logic to show review details in a popup or navigate to another page
}

function deleteReview(guestName) {
    alert(`Deleting review by: ${guestName}`);
    // Here you can implement the logic to delete the review (e.g., by making an API request)
}
