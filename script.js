// Handle the "Buy Now" button click
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-product");
            const productPrice = this.getAttribute("data-price");

            // Display a confirmation message
            alert(`You have selected "${productName}" for $${productPrice}.`);

            // Add product to the cart (local storage for demo purposes)
            addToCart(productName, productPrice);
        });
    });
});

// Function to add products to the cart
function addToCart(productName, productPrice) {
    // Retrieve cart from local storage or initialize a new one
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product to the cart
    cart.push({ productName, productPrice });

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optional: Show updated cart in console
    console.log("Cart updated:", cart);
}

// General script for all pages
document.addEventListener("DOMContentLoaded", function () {
    // Highlight the active navigation link
    highlightActiveNav();

    // Handle contact form submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmission);
    }

    // Display a welcome message on the homepage
    if (document.title === "EcoLife Solutions") {
        displayWelcomeMessage();
    }
});

// Highlight the active navigation link
function highlightActiveNav() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = "#4caf50";
            link.style.color = "white";
            link.style.borderRadius = "5px";
        }
    });
}

// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Basic form validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission (can be replaced with an actual API call)
    alert("Thank you for your message! We'll get back to you soon.");
    document.querySelector(".contact-form").reset();
}

// Display a welcome message on the homepage
function displayWelcomeMessage() {
    if (!localStorage.getItem("welcomeMessageShown")) {
        alert("Welcome to EcoLife Solutions! Explore sustainable living.");
        localStorage.setItem("welcomeMessageShown", true);
    }
}

// Add smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").replace(".html", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = this.href;
        }
    });
});