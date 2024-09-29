document.addEventListener('DOMContentLoaded', () => {
    // Get the contact form element
    const contactForm = document.querySelector('.contact-form');
  
    // Add event listener for form submission
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get form input values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Simple form validation
      if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
      }
  
      // Email validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Simulate sending message (AJAX or backend integration can be added here)
      const responseMessage = `Thank you, ${name}! We have received your message and will respond to you shortly.`;
      
      // Display success message
      alert(responseMessage);
  
      // Optionally clear the form
      contactForm.reset();
    });
  });
  