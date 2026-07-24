// ==========================
// Property Tax Page Script
// ==========================

// Countdown Date
const targetDate = new Date("August 31, 2026 23:59:59").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Run every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Payment Button Effect
const payBtn = document.querySelector(".pay-btn");

if (payBtn) {

    payBtn.addEventListener("click", function () {

        payBtn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Redirecting...';

    });

}

// Small Fade Animation
const cards = document.querySelectorAll(".card, .benefit-card, .faq-box");

cards.forEach((card, index) => {

    card.style.opacity = "0";

    setTimeout(() => {

        card.style.opacity = "1";
        card.style.transition = "0.5s";

    }, index * 150);

});