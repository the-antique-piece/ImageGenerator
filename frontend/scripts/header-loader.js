document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header-container");

    // Fetch the header HTML and insert it into the header element
    fetch("frontend/html/header/header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((data) => {
            headerElement.innerHTML = data;

            // Set up the event listener for the "X" button after loading the header
            document.querySelectorAll(".close-popup").forEach((closeButton) => {
                closeButton.addEventListener("click", () => {
                    const popupOverlay = document.querySelector(".overlay-container");
                    popupOverlay.style.display = "none"; // Close the popup
                });
            });
        })
        .catch((error) => console.error("Error loading header:", error));
});

function togglePopup() {
    const popupOverlay = document.querySelector(".overlay-container");
    popupOverlay.style.display = popupOverlay.style.display === "flex" ? "none" : "flex";
}
