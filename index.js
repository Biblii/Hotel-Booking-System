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
