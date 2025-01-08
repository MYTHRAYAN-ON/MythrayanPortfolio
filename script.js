const navItems = document.getElementsByClassName("nav-item");

// Iterate over the collection and add the event listener to each element
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    // Remove the "active" class from all nav-items
    for (let j = 0; j < navItems.length; j++) {
      navItems[j].classList.remove("active");
    }
    // Add the "active" class to the clicked nav-item
    this.classList.add("active");
  });
}


document.getElementById("menu-icon").addEventListener("click", function() {
  this.classList.toggle("active");
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});








document.addEventListener('DOMContentLoaded', () => {
  // Select the target elements
  const homeSection = document.querySelector('.home');
  const homeContent = document.querySelector('.home-content');
  const homeImg = document.querySelector('.home-img');
  

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply the animation dynamically
        homeContent.style.opacity = '0'; // Start the animation hidden
        homeImg.style.opacity = '0';
        
        homeContent.style.animation = 'zoomIn 1.5s ease-in forwards';
        homeImg.style.animation = 'zoomIn 1.5s ease-in forwards';

        // Reset the animation and visibility after it completes
        setTimeout(() => {
          homeContent.style.animation = 'none';
          homeImg.style.animation = 'none';
          homeContent.style.opacity = '1'; // Reset to visible state
          homeImg.style.opacity = '1';
        }, 1500); // Match the animation duration
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the section is visible
  });

  // Observe the "Home" section
  observer.observe(homeSection);
});


document.addEventListener('DOMContentLoaded', () => {
  // Select the target elements
  const creationsSection = document.querySelector('.creations');
  const leftFadeElements = document.querySelectorAll('.left-fade');
  const rightFadeElements = document.querySelectorAll('.right-fade');
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        leftFadeElements.forEach((el) => {
          el.classList.add('animate', 'fadeInLeft');
          el.addEventListener('animationend', () => {
            el.classList.remove('animate', 'fadeInLeft');
          }, { once: true }); // Ensures the event fires only once
        });

        rightFadeElements.forEach((el) => {
          el.classList.add('animate', 'fadeInRight');
          el.addEventListener('animationend', () => {
            el.classList.remove('animate', 'fadeInRight');
          }, { once: true });
        });
      }
    });
  }, {
    threshold: 0.2 // Trigger when 50% of the section is visible
  });

  // Observe the creations section
  observer.observe(creationsSection);
});


document.addEventListener('DOMContentLoaded', () => {
  // Select the target elements
  const educationSection = document.querySelector('.education');
  const educationElements = document.querySelectorAll('.timeline-content');
  
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        educationElements.forEach((el) => {
          el.classList.add('animate', 'highlighting');
          el.addEventListener('animationend', () => {
            el.classList.remove('animate', 'highlighting');
          }, { once: true }); // Ensures the event fires only once
        });

      }
    });
  }, {
    threshold: 0.2 // Trigger when 50% of the section is visible
  });

  // Observe the creations section
  observer.observe(educationSection);
});




