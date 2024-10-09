document.querySelectorAll(".read-more").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Feature coming soon!");
    });
});
