document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navbar links (internal sections only)
  document.querySelectorAll(".navbar a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetSection = document.querySelector(this.getAttribute("href"));

      // Ensure target section exists before proceeding
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Animation for steps section using IntersectionObserver
  const steps = document.querySelectorAll(".step");

  // Observer to detect when each step enters the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Apply observer to all .step elements
  steps.forEach((step) => {
    observer.observe(step);
  });

  // Video autoplay logic
  const video = document.querySelector("video");
  if (video) {
    video.autoplay = true;
    video.muted = true; // Mute video to autoplay on most browsers
    video.load(); // Ensure the video is loaded
  }
});
