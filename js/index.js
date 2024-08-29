anime({
    targets: '#logo',
    translateX: [-100, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 500
  });

  // Animation für die Telefonnummer
  anime({
    targets: '#telephone',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 800
  });

  // Animation für die E-Mail
  anime({
    targets: '#email',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1100
  });

  // Animation für den About-Titel
  anime({
    targets: '#about',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1400
  });

    window.addEventListener('scroll', function() {
      var nav = document.querySelector('nav');
      nav.classList.toggle('scrolled', window.scrollY > 0);
    });

    // slider

    document.addEventListener('DOMContentLoaded', function () {
      const slideInElements = document.querySelectorAll('.slide-in');
  
      function checkSlide() {
          slideInElements.forEach((element) => {
              const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
              const elementBottom = element.offsetTop + element.clientHeight;
              const isHalfShown = slideInAt > element.offsetTop;
              const isNotScrolledPast = window.scrollY < elementBottom;
  
              if (isHalfShown && isNotScrolledPast) {
                  element.style.opacity = 1;
                  element.style.transform = 'translateY(0)';
              } else {
                  element.style.opacity = 0;
                  element.style.transform = 'translateY(20px)';
              }
          });
      }
  
      window.addEventListener('scroll', checkSlide);
  });
  