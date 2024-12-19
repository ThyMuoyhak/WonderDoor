const menuButton = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeButton = document.getElementById('close-btn');

  // Toggle the mobile menu
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full'); // Slide in/out
  });

  // Close the mobile menu when clicking the close button
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full'); // Slide out
  });


// slide show
const slideshow = document.querySelector('#slideshow .slides');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    // Update the slideshow position
    function updateSlideshow() {
      const offset = -currentIndex * 100;
      slideshow.style.transform = `translateX(${offset}%)`;
      updateDots();
    }

    // Update dots to show the current active slide
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    // Navigate to the previous slide
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + dots.length) % dots.length;
      updateSlideshow();
    });

    // Navigate to the next slide
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % dots.length;
      updateSlideshow();
    });

    // Click dots to navigate to specific slide
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlideshow();
      });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % dots.length;
      updateSlideshow();
    }, 5000);

   


  