function populateReviewsTable() {
    fetch('http://localhost/hotel_transylvania/review.php') 
        .then(response => response.json()) 
        .then(reviews => {
            const tableBody = document.getElementById('reviewtable');
            
            tableBody.innerHTML = "";
            reviews.forEach(review => {
                const row = document.createElement('tr');
                const reviewIDCell = document.createElement('td');
                reviewIDCell.textContent = review.review_id;

                const bookingIDCell = document.createElement('td');
                bookingIDCell.textContent = review.booking_id;

                const roomNumberCell = document.createElement('td');
                roomNumberCell.textContent = review.room_no;

                const dateCell = document.createElement('td');
                dateCell.textContent = review.re_date;

                const reviewCell = document.createElement('td');
                reviewCell.textContent = review.review;

                const actionsCell = document.createElement('td');
                actionsCell.innerHTML = `
                    <button onclick="viewReviewDetails('${review.review_id}')">View</button>
                    <button onclick="deleteReview('${review.review_id}')">Delete</button>
                `;

                row.appendChild(reviewIDCell);
                row.appendChild(bookingIDCell);
                row.appendChild(roomNumberCell);
                row.appendChild(dateCell);
                row.appendChild(reviewCell);
                row.appendChild(actionsCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('reviewtable').innerHTML = '<tr><td colspan="6">Failed to load data. Please try again later.</td></tr>';
        });
}

document.addEventListener('DOMContentLoaded', populateReviewsTable);

function viewReviewDetails(reviewID) {
    alert(`Viewing details for review ID: ${reviewID}`);
}

function deleteReview(reviewID) {
    if (confirm(`Are you sure you want to delete review ID: ${reviewID}?`)) {
        alert(`Review ID: ${reviewID} deleted successfully.`);
    }
}