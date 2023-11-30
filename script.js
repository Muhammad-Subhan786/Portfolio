// script.js
// Add JavaScript for responsive navigation (toggle menu)
const navToggle = document.querySelector('.nav-toggle');
const navUL = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling when clicking on navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    // script.js

// Array of text to display in the hero section
const heroTexts = [
    "We drive growth through targeted online strategies",
    "Maximize your online presence with us",
    "Digital marketing solutions that deliver results",
    "Your Success, Our Priority"
];

// Index to track the current text
let currentTextIndex = 0;

// Function to update the hero text
function updateHeroText() {
    const heroTextElement = document.getElementById("hero-text");
    heroTextElement.textContent = heroTexts[currentTextIndex];
    
    // Increment the index and loop back to the beginning if necessary
    currentTextIndex = (currentTextIndex + 1) % heroTexts.length;
}

// Update the hero text every 3 seconds (3000 milliseconds)
setInterval(updateHeroText, 3000);
// script.js

// ... Your existing JavaScript ...

// Get the "Get Started" button element
const getStartedButton = document.getElementById("get-started-btn");

// Add a hover effect to the button
getStartedButton.addEventListener("mouseenter", function () {
    getStartedButton.style.backgroundColor = "#FF6A4D"; // Change button color on hover
});

getStartedButton.addEventListener("mouseleave", function () {
    getStartedButton.style.backgroundColor = "#FF512F"; // Restore original button color
});

// Add a tooltip when hovering over the button
getStartedButton.addEventListener("mouseover", function () {
    const tooltip = document.createElement("span");
    tooltip.textContent = "Click to Begin";
    tooltip.className = "tooltip";
    getStartedButton.appendChild(tooltip);
});

getStartedButton.addEventListener("mouseout", function () {
    const tooltip = getStartedButton.querySelector(".tooltip");
    if (tooltip) {
        getStartedButton.removeChild(tooltip);
    }
});
// script.js

// ... Your existing JavaScript ...

// Text animation function
function animateText(element, text, delay) {
    let index = 0;
    element.textContent = "";

    function addLetter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(addLetter, delay);
        }
    }

    addLetter();
}

// Call the text animation function
const heroTextElement = document.getElementById("hero-text");
animateText(heroTextElement, "We drive growth through targeted online strategies", 50);

// script.js

// Testimonials data (replace with your actual client reviews and image URLs)
// script.js

// Testimonials data with ratings (replace with your actual client reviews and ratings)
const testimonialsData = [
    {
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5, // Rating out of 5 stars
        image: "tuter.jpg", // Client picture URL
    },
    {
        name: "Jane Smith",
        review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        rating: 4, // Rating out of 5 stars
        image: "subhan.jpg", // Client picture URL
    },
    {
        name: "David Johnson",
        review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        rating: 5, // Rating out of 5 stars
        image: "client3.jpg", // Client picture URL
    },
    // Add more testimonials with ratings and client pictures here...
];

// Function to populate the testimonial cards
function populateTestimonials() {
    const testimonialCardsContainer = document.querySelector(".testimonial-cards");

    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = document.createElement("div");
        testimonialCard.classList.add("testimonial-card");
        testimonialCard.innerHTML = `
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}'s picture">
            </div>
            <p>${testimonial.review}</p>
            <p class="client-name">- ${testimonial.name}</p>
            <div class="testimonial-rating">
                ${getRatingStarsHTML(testimonial.rating)}
            </div>
        `;
        testimonialCardsContainer.appendChild(testimonialCard);
    });
}

// Function to generate HTML for rating stars using images
function getRatingStarsHTML(rating) {
    const maxRating = 5; // Maximum rating (e.g., 5 stars)
    let starsHTML = "";

    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            starsHTML += `<img src="STAR.jpg" alt="Star" class="star-image">`; // Use filled star images for rated
        } else {
            starsHTML += `<img src="STAR.png" alt="Star" class="star-image">`; // Use empty star images for unrated
        }
    }

    return starsHTML;
}

// Call the function to populate testimonials
populateTestimonials();

    // Form validation for the contact form
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const errorContainer = document.querySelector('.error-container');

            let isValid = true;

            if (!nameInput.value.trim()) {
                isValid = false;
                showError('Please enter your name.');
            }

            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                isValid = false;
                showError('Please enter a valid email address.');
            }

            if (!messageInput.value.trim()) {
                isValid = false;
                showError('Please enter your message.');
            }

            if (isValid) {
                // Form is valid - you can send the form data to your server here
                // For this example, we'll just show a success message
                showSuccess('Your message has been sent!');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            }
        });
    }

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;

        const errorContainer = document.querySelector('.error-container');
        errorContainer.innerHTML = '';
        errorContainer.appendChild(errorDiv);
    }

    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;

        const errorContainer = document.querySelector('.error-container');
        errorContainer.innerHTML = '';
        errorContainer.appendChild(successDiv);
    }

    function isValidEmail(email) {
        // Very basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
