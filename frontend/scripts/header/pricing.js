document.addEventListener("DOMContentLoaded", () => {
    // Get all the plan buttons
    const buttons = document.querySelectorAll('.btn');

    // Function to handle the plan selection
    function selectPlan(planName) {
        // Handle different plans accordingly
        switch(planName) {
            case 'Basic':
                alert("You've selected the Basic plan.");
                // Redirect or do something for the Basic plan
                window.location.href = '/subscribe/basic'; // Example redirection
                break;
            case 'Pro':
                alert("You've selected the Pro plan.");
                // Redirect or do something for the Pro plan
                window.location.href = '/subscribe/pro'; // Example redirection
                break;
            case 'Enterprise':
                alert("You've selected the Enterprise plan.");
                // Show a contact form or direct the user to sales
                window.location.href = '/contact-sales'; // Example redirection
                break;
            default:
                alert("Please select a valid plan.");
        }
    }

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the plan name from the button's parent container (pricing card)
            const planName = event.target.closest('.pricing-card').querySelector('h2').innerText;

            // Call the function to handle the plan
            selectPlan(planName);
        });
    });
});
