document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("image-gen-form");
  const resultSection = document.getElementById("result-section");
  const generatedImage = document.getElementById("generated-image");
  const downloadLink = document.getElementById("download-link");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const prompt = document.getElementById("prompt").value;

    try {
      // Replace 'YOUR_API_ENDPOINT' with your API endpoint and adjust request as needed
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY", // Add your API key if required
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const imageUrl = data.image_url; // Adjust according to API response

      // Set the image source and display it
      generatedImage.src = imageUrl;
      downloadLink.href = imageUrl;
      resultSection.style.display = "block";
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("There was an error generating the image. Please try again.");
    }
  });
});

// Function to auto-expand the textarea as the user types
function autoResizeTextarea(textarea) {
  textarea.style.height = "auto"; // Reset height to auto to shrink if content is removed
  textarea.style.height = textarea.scrollHeight + "px"; // Set height based on scroll height
}

// Get the textarea element
const textarea = document.getElementById("prompt");

// Add the input event listener to adjust the height on user input
textarea.addEventListener("input", function () {
  autoResizeTextarea(this);
});

// Call the function initially to adjust the height if there's default content
window.onload = () => {
  autoResizeTextarea(textarea);
};
