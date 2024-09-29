document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("image-gen-form");
  const resultSection = document.getElementById("result-section");
  const generatedImage = document.getElementById("generated-image");
  const downloadLink = document.getElementById("download-link");
  const loadingMessage = document.getElementById("loading-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const prompt = document.getElementById("prompt").value;

    // Show loading message while waiting for the response
    loadingMessage.textContent = "Generating image, please wait...";
    resultSection.style.display = "none"; // Hide result section initially

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY", // Add your API key if needed
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const imageUrl = data.image_url; // Adjust based on your API response structure

      // Set the image source and display it
      generatedImage.src = imageUrl;
      downloadLink.href = imageUrl;
      downloadLink.download = "generated-image.png"; // Optionally provide a download name
      resultSection.style.display = "block"; // Display the result section with image
    } catch (error) {
      console.error("Error generating image:", error);
      alert("An error occurred while generating the image. Please try again.");
    } finally {
      // Hide the loading message
      loadingMessage.textContent = "";
    }
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
});
