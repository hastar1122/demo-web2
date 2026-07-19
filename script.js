/* ==========================================================================
   Dermatology Clinic Premium JavaScript Logic
   Includes: Scroll animations, Counter, Slider compare, Lightbox, Carousel, 
             Accordion, Booking logic, Ripple effect, Mobile Nav
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Sticky Header & Back to Top Scroll Actions
     ========================================================================== */
  const header = document.querySelector('.header-wrapper');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const headerHeight = 80;

  window.addEventListener('scroll', () => {
    // Header Sticky toggle
    if (window.scrollY > headerHeight) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }

    // Back to top visibility toggle
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  });

  // Smooth scroll back to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  /* ==========================================================================
     2. Mobile Hamburger Menu Toggle
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });

  // Close menu when navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Manage active nav item highlighted class
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');

      hamburgerBtn.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    });
  });


  /* ==========================================================================
     3. Scroll Reveal Animations (Intersection Observer)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  /* ==========================================================================
     4. Statistics Counter Animation
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 2000; // 2 seconds total animation
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // EaseOutQuad formula for smooth deceleration
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);

      if (target >= 1000) {
        // Format large values with comma separator and plus sign
        element.textContent = currentVal.toLocaleString('en-US') + '+';
      } else if (element.getAttribute('data-target') === '98') {
        // Percentage value
        element.textContent = currentVal + '%';
      } else {
        // Normal count with plus sign
        element.textContent = currentVal + '+';
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure exact target is set at the end
        if (target >= 1000) {
          element.textContent = target.toLocaleString('en-US') + '+';
        } else if (element.getAttribute('data-target') === '98') {
          element.textContent = target + '%';
        } else {
          element.textContent = target + '+';
        }
      }
    };

    requestAnimationFrame(animate);
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(num => countUp(num));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }


  /* ==========================================================================
     5. Before & After Interactive Comparison Slider
     ========================================================================== */
  const baContainer = document.getElementById('ba-interactive-slider');
  const baAfterImg = document.getElementById('ba-after-img');
  const baHandle = document.getElementById('ba-handle');

  if (baContainer && baAfterImg && baHandle) {
    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = baContainer.getBoundingClientRect();
      const positionX = clientX - rect.left;
      let percentage = (positionX / rect.width) * 100;

      // Bound slider limits
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;

      baHandle.style.left = `${percentage}%`;
      baAfterImg.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    };

    // Mouse Events
    baHandle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setPosition(e.clientX);
    });

    // Touch Events for Mobile
    baHandle.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        setPosition(e.touches[0].clientX);
      }
    });

    // Handle click/tap directly on container
    baContainer.addEventListener('click', (e) => {
      if (e.target !== baHandle && !baHandle.contains(e.target)) {
        setPosition(e.clientX);
      }
    });
  }


  /* ==========================================================================
     6. Before & After Lightbox modal
     ========================================================================== */
  const baGalleryItems = document.querySelectorAll('.ba-gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxBeforeImg = document.getElementById('lightbox-before-img');
  const lightboxAfterImg = document.getElementById('lightbox-after-img');
  const lightboxTitle = document.getElementById('lightbox-case-title');

  if (lightbox && lightboxClose) {
    baGalleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const beforeSrc = item.getAttribute('data-before');
        const afterSrc = item.getAttribute('data-after');
        const title = item.getAttribute('data-title');

        lightboxBeforeImg.src = beforeSrc;
        lightboxAfterImg.src = afterSrc;
        lightboxTitle.textContent = title;

        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
      });
    });

    const closeLightboxModal = () => {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      // Reset sources to prevent layout jumps later
      setTimeout(() => {
        lightboxBeforeImg.src = '';
        lightboxAfterImg.src = '';
      }, 300);
    };

    lightboxClose.addEventListener('click', closeLightboxModal);
    
    // Close on overlay clicking
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightboxModal();
      }
    });

    // Close on ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightboxModal();
      }
    });
  }


  /* ==========================================================================
     7. Testimonials Carousel Slider
     ========================================================================== */
  const track = document.getElementById('reviews-track');
  const cards = document.querySelectorAll('.review-card');
  const dotsContainer = document.getElementById('carousel-indicators');

  if (track && cards.length > 0 && dotsContainer) {
    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth;
    let gap = 32; // match gap value of 2rem in style.css
    
    const getVisibleCards = () => {
      const width = window.innerWidth;
      if (width <= 576) return 1;
      if (width <= 1024) return 2;
      return 3;
    };

    const maxIndex = () => {
      return cards.length - getVisibleCards();
    };

    // Create Indicators Dots
    const createDots = () => {
      dotsContainer.innerHTML = '';
      const dotCount = maxIndex() + 1;
      
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
        });
      }
    };

    const updateSlider = () => {
      cardWidth = cards[0].offsetWidth;
      const amountToMove = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${amountToMove}px)`;

      // Update dots
      const dots = document.querySelectorAll('.carousel-dot');
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    // Touch Swipe Drag Events
    let startX = 0;
    let currentX = 0;
    let isDraggingTrack = false;
    let originalTranslate = 0;

    track.addEventListener('mousedown', (e) => {
      isDraggingTrack = true;
      startX = e.clientX;
      track.style.transition = 'none';
      originalTranslate = -currentIndex * (cardWidth + gap);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingTrack) return;
      currentX = e.clientX;
      const diffX = currentX - startX;
      track.style.transform = `translateX(${originalTranslate + diffX}px)`;
    });

    window.addEventListener('mouseup', (e) => {
      if (!isDraggingTrack) return;
      isDraggingTrack = false;
      track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      const diffX = e.clientX - startX;
      const threshold = 100; // Min drag distance to trigger switch

      if (diffX < -threshold && currentIndex < maxIndex()) {
        currentIndex++;
      } else if (diffX > threshold && currentIndex > 0) {
        currentIndex--;
      }
      updateSlider();
    });

    // Touch Events for Testimonials Carousel on Mobile
    track.addEventListener('touchstart', (e) => {
      isDraggingTrack = true;
      startX = e.touches[0].clientX;
      track.style.transition = 'none';
      originalTranslate = -currentIndex * (cardWidth + gap);
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDraggingTrack) return;
      currentX = e.touches[0].clientX;
      const diffX = currentX - startX;
      track.style.transform = `translateX(${originalTranslate + diffX}px)`;
    });

    window.addEventListener('touchend', (e) => {
      if (!isDraggingTrack) return;
      isDraggingTrack = false;
      track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      const diffX = currentX - startX;
      const threshold = 50;

      if (diffX < -threshold && currentIndex < maxIndex()) {
        currentIndex++;
      } else if (diffX > threshold && currentIndex > 0) {
        currentIndex--;
      }
      updateSlider();
    });

    // Initial setup and responsive watch
    createDots();
    window.addEventListener('resize', () => {
      // Re-adjust slider indices in case width wraps
      if (currentIndex > maxIndex()) {
        currentIndex = maxIndex();
      }
      createDots();
      updateSlider();
    });
  }


  /* ==========================================================================
     8. FAQ Accordion Logic (Smooth height transition)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const headerBtn = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');

    headerBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items first
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-body').style.maxHeight = null;
        otherItem.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
      });

      // Toggle current FAQ
      if (!isActive) {
        item.classList.add('active');
        headerBtn.setAttribute('aria-expanded', 'true');
        // Compute content scrollHeight dynamically for smooth slide
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        headerBtn.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      }
    });
  });


  /* ==========================================================================
     9. Booking Form Submission Handling
     ========================================================================== */
  const bookingForm = document.getElementById('hero-booking-form');
  const bookingFormWrapper = document.querySelector('.booking-form-wrapper');
  const bookingSuccessCard = document.getElementById('booking-success-card');
  const resetBookingBtn = document.getElementById('booking-reset-btn');

  if (bookingForm && bookingSuccessCard) {
    // Restrict date input to today and future dates
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect data (for simulation)
      const name = document.getElementById('booking-name').value;
      const phone = document.getElementById('booking-phone').value;
      const service = document.getElementById('booking-service').value;
      const date = document.getElementById('booking-date').value;

      console.log('Đặt lịch mới:', { name, phone, service, date });

      // Perform a premium slide transition to success card
      bookingFormWrapper.style.display = 'none';
      bookingSuccessCard.style.display = 'block';
    });

    resetBookingBtn.addEventListener('click', () => {
      // Reset form fields
      bookingForm.reset();
      
      // Re-setup date min
      const dateInput = document.getElementById('booking-date');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
      }

      // Revert views
      bookingSuccessCard.style.display = 'none';
      bookingFormWrapper.style.display = 'block';
    });
  }


  /* ==========================================================================
     10. Button Click Ripple Effect
     ========================================================================== */
  const rippleButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-white');

  rippleButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      // Don't trigger standard ripple if click is on sliding handles
      if (this.classList.contains('ba-handle-button')) return;

      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rippleSpan = document.createElement('span');
      rippleSpan.classList.add('ripple');
      rippleSpan.style.left = `${x}px`;
      rippleSpan.style.top = `${y}px`;

      this.appendChild(rippleSpan);

      // Remove ripple span after animation finishes
      setTimeout(() => {
        rippleSpan.remove();
      }, 600);
    });
  });

});
