import ImageGallery from "/frontend/components/imageGallery.js";

const images = [
    "/generated_images/image1.jpg",
    "/generated_images/image2.jpg",
    "/generated_images/image3.jpg",
    // Add more image URLs as needed
];

document.addEventListener("DOMContentLoaded", () => {
    const galleryElement = document.getElementById("image-gallery");
    const imageGallery = new ImageGallery(images, galleryElement);
});
