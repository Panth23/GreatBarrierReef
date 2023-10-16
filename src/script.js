// Get the contact form element
const contactForm = document.querySelector('form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user's name
    const name = contactForm.elements.name.value;

    // Display a thank you message
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    contactForm.parentNode.appendChild(thankYouMessage);

    // Clear the form fields
    contactForm.reset();
});
