// Mock the IntersectionObserver since it's not natively available in JSDOM
class IntersectionObserver {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
    }
    observe(element) {
      // Trigger the callback with a mock entry when observe is called
      this.callback([{ isIntersecting: true, target: element }]);
    }
    unobserve() {
      return null;
    }
  }
  
  // Set up the IntersectionObserver globally
  global.IntersectionObserver = IntersectionObserver;
  
  describe("script.js functionality", () => {
    let document;
  
    beforeEach(() => {
      // Set up a basic HTML structure for testing
      document = `
        <body>
          <div class="navbar">
            <a href="#section1">Section 1</a>
            <a href="#section2">Section 2</a>
          </div>
          <section id="section1" style="height: 800px;"></section>
          <section id="section2" style="height: 800px;"></section>
          <div class="steps">
            <div class="step"></div>
            <div class="step"></div>
          </div>
          <video></video>
        </body>
      `;
      document.body.innerHTML = document;
    });
  
    test("should add smooth scrolling to navbar links", () => {
      // Mock the scrollIntoView method
      Element.prototype.scrollIntoView = jest.fn();
  
      require("./script");
  
      // Simulate a click event on the first navbar link
      const navbarLinks = document.querySelectorAll(".navbar a");
      const firstLink = navbarLinks[0];
      const section1 = document.getElementById("section1");
  
      firstLink.click();
  
      // Check that the scrollIntoView was called on the target section
      expect(section1.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    });
  
    test("should not scroll if the target section does not exist", () => {
      Element.prototype.scrollIntoView = jest.fn();
  
      require("./script");
  
      const navbarLinks = document.querySelectorAll(".navbar a");
  
      // Modify the link's href to point to a non-existing section
      navbarLinks[0].setAttribute("href", "#nonexistent");
  
      navbarLinks[0].click();
  
      // Check that scrollIntoView is not called since the section doesn't exist
      expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
    });
  
    test("should apply 'fade-in' class to steps when intersecting", () => {
      require("./script");
  
      const steps = document.querySelectorAll(".step");
  
      steps.forEach((step) => {
        // Check that each step now has the 'fade-in' class after IntersectionObserver triggers
        expect(step.classList.contains("fade-in")).toBe(true);
      });
    });
  
    test("should autoplay and mute the video", () => {
      require("./script");
  
      const video = document.querySelector("video");
  
      // Check that the video is set to autoplay and muted
      expect(video.autoplay).toBe(true);
      expect(video.muted).toBe(true);
    });
  
    test("should not fail if video element is not present", () => {
      // Remove the video element
      document.querySelector("video").remove();
  
      expect(() => require("./script")).not.toThrow();
    });
  });
  