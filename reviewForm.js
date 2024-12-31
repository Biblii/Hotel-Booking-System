// Function to fetch reviews from the database
function fetchReviews() {
    // Fetch data from the backend PHP file
    fetch('fetchReviews.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            console.log("Fetched Reviews:", data);

            // Call a function to display the reviews on the webpage
            displayReviews(data);
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
}

// Function to display fetched reviews in the HTML
function displayReviews(reviews) {
    // Target the wrapper or any container where you want to show the data
    const wrapper = document.querySelector('.wrapper');

    // Create a container for displaying reviews
    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'review-container';

    // Iterate through the reviews and create elements for each review
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        reviewCard.innerHTML = `
            <p><strong>Name:</strong> ${review.user_name}</p>
            <p><strong>Contact No:</strong> ${review.contact_no}</p>
            <p><strong>Room No:</strong> ${review.room_no}</p>
            <p><strong>Feedback:</strong> ${review.feedback}</p>
        `;

        // Append the review card to the container
        reviewContainer.appendChild(reviewCard);
    });

    // Append the review container to the wrapper
    wrapper.appendChild(reviewContainer);
}

// Call the fetchReviews function when the page loads
document.addEventListener('DOMContentLoaded', fetchReviews);
