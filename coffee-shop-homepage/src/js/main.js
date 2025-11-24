// This file contains JavaScript for interactive elements on the coffee shop homepage.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interactive feature: a welcome alert
    alert('Welcome to Our Coffee Shop!');

    // Function to handle form submission (if applicable)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }

    // Additional interactive features can be added here
});