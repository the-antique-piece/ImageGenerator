class ImageGallery {
    constructor(images, galleryElement) {
      this.images = images; // Array of image URLs
      this.galleryElement = galleryElement; // DOM element to render the gallery
      this.selectedImage = null; // To hold the currently selected image
      this.init();
    }

    init() {
      this.renderGallery();
    }

    // Render image thumbnails
    renderGallery() {
      this.galleryElement.innerHTML = ''; // Clear the gallery element
      this.images.forEach((image) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = 'Gallery Image';
        thumbnail.classList.add('thumbnail'); // Add the thumbnail class for styling
        thumbnail.addEventListener('click', () => this.openImage(image));
        this.galleryElement.appendChild(thumbnail);
      });
    }

    // Open the selected image in a larger view
    openImage(imageUrl) {
      if (this.selectedImage) {
        this.selectedImage.remove(); // Remove previous image
      }

      this.selectedImage = document.createElement('img');
      this.selectedImage.src = imageUrl;
      this.selectedImage.alt = 'Selected Image';
      this.selectedImage.classList.add('selected-image');

      // Create a modal to display the image
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.appendChild(this.selectedImage);
      modal.addEventListener('click', () => this.closeImage(modal));

      document.body.appendChild(modal); // Add modal to the body
    }

    // Close the modal
    closeImage(modal) {
      document.body.removeChild(modal); // Remove modal from the DOM
    }
}

// Export the ImageGallery class for use in other modules
export default ImageGallery;
