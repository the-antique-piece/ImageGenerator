document.addEventListener("DOMContentLoaded", function () {
    fetch("/frontend/html/footer/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-container").innerHTML = data;

            // Optional: Attach event listeners or initialize any footer-related logic here
            console.log("Footer loaded successfully");
        })
        .catch((error) => console.error("Error loading footer:", error));
});
