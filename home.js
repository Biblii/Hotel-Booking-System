document.addEventListener("DOMContentLoaded", () => {
    const firstBlock = document.querySelector(".firstBlock");
    const toggleBtn = document.querySelector(".toggle-btn");
    const adminLoginBtn = document.getElementById("adminLoginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("closeBtn");
    const loginForm = document.getElementById("loginForm");

    let isExpanded = false;

    if (firstBlock && toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            if (isExpanded) {
                firstBlock.style.bottom = "-500px";
                toggleBtn.innerHTML = "▲";
            } else {
                firstBlock.style.bottom = "0";
                toggleBtn.innerHTML = "▼";
            }
            isExpanded = !isExpanded;
        });
    }

    if (adminLoginBtn && loginModal && closeBtn) {
        adminLoginBtn.addEventListener("click", () => {
            loginModal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            loginModal.style.display = "none";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Login submitted!");
            if (loginModal) loginModal.style.display = "none";
        });
    }
});
