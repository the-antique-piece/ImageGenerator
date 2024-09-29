document.addEventListener("DOMContentLoaded", function() {
    // This script will load resources dynamically
    const resourcesList = document.querySelectorAll(".resources-list");

    resourcesList.forEach(list => {
        list.addEventListener("click", (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                const link = event.target.getAttribute("href");
                window.open(link, "_blank");
            }
        });
    });
});
