document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close-btn");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // Copy Referral Link
    document.querySelector(".copy-btn").addEventListener("click", () => {
        const input = document.querySelector(".referral-box input");
        input.select();
        document.execCommand("copy");
        alert("Referral link copied!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the "buy-btn" class
    let buyButtons = document.querySelectorAll(".buy-btn");

    // Add event listener to each button
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "funds.html"; // Redirect to login page
        });
    });
});