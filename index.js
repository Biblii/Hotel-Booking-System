document.addEventListener("DOMContentLoaded", () => {
    const firstBlock = document.querySelector(".firstBlock");
    const toggleBtn = document.querySelector(".toggle-btn");

    let isExpanded = false; // Track the toggle state

    toggleBtn.addEventListener("click", () => {
        if (isExpanded) {
            firstBlock.style.bottom = "-500px"; // Hide partially
            toggleBtn.innerHTML = "▲"; // Update arrow direction
        } else {
            firstBlock.style.bottom = "0"; // Show fully
            toggleBtn.innerHTML = "▼"; // Update arrow direction
        }
        isExpanded = !isExpanded; // Toggle the state
    });
});

// Get elements
const adminLoginBtn = document.getElementById('adminLoginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');

// Open the modal when the "Admin Login" button is clicked
adminLoginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

// Close the modal when the close button (x) is clicked
closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
});


// Handle login form submission (you can handle login logic here)
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add logic to verify the credentials (e.g., using AJAX or form submission)
    alert('Login submitted!');
    loginModal.style.display = 'none'; // Close modal after submission
});
