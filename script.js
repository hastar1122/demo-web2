/* ==========================================================================
   Dermatology Clinic Premium JavaScript Logic
   Includes: Scroll animations, Counter, Slider compare, Lightbox, Carousel, 
             Accordion, Booking logic, Ripple effect, Mobile Nav
   ========================================================================== */

/* ==========================================================================
   Reusable drag/swipe carousel engine (used by Testimonials & Services)
   ========================================================================== */
function initDragCarousel({ trackSelector, cardSelector, dotsSelector, gap }) {
  const track = document.querySelector(trackSelector);
  const dotsContainer = document.querySelector(dotsSelector);
  if (!track || !dotsContainer) return;

  const cards = track.querySelectorAll(cardSelector);
  if (!cards.length) return;

  let currentIndex = 0;
  let cardWidth = cards[0].offsetWidth;

  const getVisibleCards = () => {
    const width = window.innerWidth;
    if (width <= 576) return 1;
    if (width <= 1024) return 2;
    return 3;
  };

  const maxIndex = () => Math.max(0, cards.length - getVisibleCards());

  const createDots = () => {
    dotsContainer.innerHTML = '';
    const dotCount = maxIndex() + 1;

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('data-index', i);
      dot.setAttribute('aria-label', `Xem mục ${i + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  };

  const updateSlider = () => {
    cardWidth = cards[0].offsetWidth;
    const amountToMove = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${amountToMove}px)`;

    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
  };

  let startX = 0;
  let currentX = 0;
  let isDraggingTrack = false;
  let originalTranslate = 0;

  const dragStart = (clientX) => {
    isDraggingTrack = true;
    startX = clientX;
    track.style.transition = 'none';
    originalTranslate = -currentIndex * (cardWidth + gap);
  };

  const dragMove = (clientX) => {
    if (!isDraggingTrack) return;
    currentX = clientX;
    track.style.transform = `translateX(${originalTranslate + (currentX - startX)}px)`;
  };

  const dragEnd = (threshold) => {
    if (!isDraggingTrack) return;
    isDraggingTrack = false;
    track.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

    const diffX = currentX - startX;
    if (diffX < -threshold && currentIndex < maxIndex()) {
      currentIndex++;
    } else if (diffX > threshold && currentIndex > 0) {
      currentIndex--;
    }
    updateSlider();
  };

  track.addEventListener('mousedown', (e) => dragStart(e.clientX));
  window.addEventListener('mousemove', (e) => dragMove(e.clientX));
  window.addEventListener('mouseup', () => dragEnd(100));

  track.addEventListener('touchstart', (e) => dragStart(e.touches[0].clientX));
  window.addEventListener('touchmove', (e) => dragMove(e.touches[0].clientX));
  window.addEventListener('touchend', () => dragEnd(50));

  createDots();
  window.addEventListener('resize', () => {
    if (currentIndex > maxIndex()) {
      currentIndex = maxIndex();
    }
    createDots();
    updateSlider();
  });
}


document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     0. Hero Banner Slider (arrows, dots, autoplay, touch swipe)
     ========================================================================== */
  const heroSlider = document.getElementById('hero-slider');

  if (heroSlider) {
    const heroSlides = Array.from(heroSlider.querySelectorAll('.hero-slide'));
    const heroDotsContainer = document.getElementById('hero-slider-dots');
    const heroPrevBtn = document.getElementById('hero-slider-prev');
    const heroNextBtn = document.getElementById('hero-slider-next');
    let heroIndex = 0;
    let heroTimer = null;

    heroSlides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hero-slider-dot';
      dot.setAttribute('aria-label', `Xem ảnh ${i + 1}`);
      if (i === 0) dot.classList.add('is-active');
      dot.addEventListener('click', () => {
        goToHeroSlide(i);
        resetHeroAutoplay();
      });
      heroDotsContainer.appendChild(dot);
    });
    const heroDots = Array.from(heroDotsContainer.children);

    const goToHeroSlide = (index) => {
      heroSlides[heroIndex].classList.remove('is-active');
      heroDots[heroIndex].classList.remove('is-active');
      heroIndex = (index + heroSlides.length) % heroSlides.length;
      heroSlides[heroIndex].classList.add('is-active');
      heroDots[heroIndex].classList.add('is-active');
    };

    const nextHeroSlide = () => goToHeroSlide(heroIndex + 1);
    const prevHeroSlide = () => goToHeroSlide(heroIndex - 1);

    const startHeroAutoplay = () => {
      if (heroSlides.length > 1) {
        heroTimer = setInterval(nextHeroSlide, 6000);
      }
    };
    const resetHeroAutoplay = () => {
      clearInterval(heroTimer);
      startHeroAutoplay();
    };

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener('click', () => {
        prevHeroSlide();
        resetHeroAutoplay();
      });
    }
    if (heroNextBtn) {
      heroNextBtn.addEventListener('click', () => {
        nextHeroSlide();
        resetHeroAutoplay();
      });
    }

    if (heroSlides.length > 1) {
      startHeroAutoplay();
      heroSlider.addEventListener('mouseenter', () => clearInterval(heroTimer));
      heroSlider.addEventListener('mouseleave', startHeroAutoplay);

      // Touch swipe support
      let heroTouchStartX = 0;
      heroSlider.addEventListener('touchstart', (e) => {
        heroTouchStartX = e.touches[0].clientX;
      });
      heroSlider.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - heroTouchStartX;
        if (Math.abs(diff) > 40) {
          diff < 0 ? nextHeroSlide() : prevHeroSlide();
          resetHeroAutoplay();
        }
      });
    }
  }


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
     3b. Services Full Grid (dich-vu.html only) - rendered from services-data.js
     ========================================================================== */
  const servicesFullGrid = document.getElementById('services-full-grid');
  if (servicesFullGrid && typeof SERVICES_DATA !== 'undefined') {
    servicesFullGrid.innerHTML = SERVICES_DATA.map((service, i) => `
      <div class="service-card reveal reveal-fade-up${i % 3 === 1 ? ' delay-100' : i % 3 === 2 ? ' delay-200' : ''}">
        <div class="service-image-box">
          <img src="${service.image}" alt="${service.title}" class="service-image" loading="lazy" width="400" height="260">
        </div>
        <div class="service-card-body">
          <h3>${service.title}</h3>
          <p>${service.shortDesc}</p>
          <div class="service-card-actions">
            <a href="index.html#booking-card" class="btn btn-primary btn-sm">Nhận tư vấn</a>
            <a href="dich-vu-chi-tiet.html?slug=${service.slug}" class="service-link">
              Xem chi tiết
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    // The global reveal observer above only saw elements present at initial
    // DOMContentLoaded, so newly injected cards need to be observed too.
    servicesFullGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }


  /* ==========================================================================
     3c. Service Detail Page (dich-vu-chi-tiet.html only) - reads ?slug= and
         renders full content from services-data.js
     ========================================================================== */
  const detailTitleEl = document.getElementById('detail-title');
  if (detailTitleEl && typeof SERVICES_DATA !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const service = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[0];

    document.title = `${service.title} | Phòng Khám Da Liễu Bác Sĩ Tân`;
    const pageTitleEl = document.getElementById('page-title');
    if (pageTitleEl) pageTitleEl.textContent = document.title;

    detailTitleEl.textContent = service.title;
    document.getElementById('detail-shortdesc').textContent = service.shortDesc;
    document.getElementById('breadcrumb-current').textContent = service.title;

    const detailImgEl = document.getElementById('detail-image');
    detailImgEl.src = service.image;
    detailImgEl.alt = service.title;

    document.getElementById('detail-intro-text').textContent = service.intro;

    const checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

    const benefitsListEl = document.getElementById('detail-benefits-list');
    benefitsListEl.innerHTML = service.benefits.map(item => `<li>${checkIcon}${item}</li>`).join('');

    const suitableListEl = document.getElementById('detail-suitable-list');
    suitableListEl.innerHTML = service.suitableFor.map(item => `<li>${checkIcon}${item}</li>`).join('');

    const delayClasses = ['', ' delay-100', ' delay-200', ' delay-300'];
    const stepsEl = document.getElementById('detail-process-steps');
    stepsEl.innerHTML = service.process.map((step, i) => `
      <div class="timeline-item reveal reveal-fade-up${delayClasses[i] || ''}">
        <div class="timeline-step-num">0${i + 1}</div>
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    `).join('');

    const relatedGridEl = document.getElementById('detail-related-grid');
    const related = SERVICES_DATA.filter(s => s.slug !== service.slug).slice(0, 3);
    relatedGridEl.innerHTML = related.map(s => `
      <div class="service-card reveal reveal-fade-up">
        <div class="service-image-box">
          <img src="${s.image}" alt="${s.title}" class="service-image" loading="lazy" width="400" height="260">
        </div>
        <div class="service-card-body">
          <h3>${s.title}</h3>
          <p>${s.shortDesc}</p>
          <div class="service-card-actions">
            <a href="index.html#booking-card" class="btn btn-primary btn-sm">Nhận tư vấn</a>
            <a href="dich-vu-chi-tiet.html?slug=${s.slug}" class="service-link">
              Xem chi tiết
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    // The global reveal observer above only saw elements present at initial
    // DOMContentLoaded, so newly injected content needs to be observed too.
    [stepsEl, relatedGridEl].forEach(container => {
      container.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    });
  }


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
     6. Before & After Category Viewer (sidebar swaps the comparison + info)
     ========================================================================== */
  const baCategoryButtons = document.querySelectorAll('.ba-category-btn');
  const baBeforeImg = document.getElementById('ba-before-img');
  const baResultChip = document.getElementById('ba-result-chip');
  const baAfterLabel = document.getElementById('ba-after-label');
  const baCustomer = document.getElementById('ba-customer');
  const baCondition = document.getElementById('ba-condition');
  const baQuote = document.getElementById('ba-quote');

  if (baCategoryButtons.length && baBeforeImg && baAfterImg) {
    baCategoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        baCategoryButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.getAttribute('data-filter');
        baBeforeImg.style.filter = filter === 'none' ? '' : filter;
        baAfterImg.style.filter = filter === 'none' ? '' : filter;

        baResultChip.textContent = btn.getAttribute('data-chip');
        baAfterLabel.textContent = btn.getAttribute('data-after-label');
        baCustomer.textContent = btn.getAttribute('data-customer');
        baCondition.textContent = btn.getAttribute('data-condition');
        baQuote.textContent = `"${btn.getAttribute('data-quote')}"`;

        // Reset the drag slider back to the 50/50 starting split
        if (baHandle) {
          baHandle.style.left = '50%';
          baAfterImg.style.clipPath = 'inset(0 0 0 50%)';
        }
      });
    });
  }


  /* ==========================================================================
     6b. Booking Modal (opens from any "Đặt lịch" / "Nhận tư vấn" trigger,
         including links pointing here from tin-tuc.html)
     ========================================================================== */
  const bookingModal = document.getElementById('booking-card');
  const bookingModalClose = document.getElementById('booking-modal-close-btn');
  const bookingTriggers = document.querySelectorAll('a[href$="#booking-card"]');

  if (bookingModal && bookingModalClose) {
    const openBookingModal = () => {
      bookingModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    const closeBookingModal = () => {
      bookingModal.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    bookingTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingModal();
      });
    });

    bookingModalClose.addEventListener('click', closeBookingModal);

    bookingModal.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-booking-close')) {
        closeBookingModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && bookingModal.classList.contains('is-open')) {
        closeBookingModal();
      }
    });

    // Handle arriving from another page via "index.html#booking-card"
    if (window.location.hash === '#booking-card') {
      openBookingModal();
    }
  }


  /* ==========================================================================
     7. Testimonials Carousel Slider
     ========================================================================== */
  initDragCarousel({
    trackSelector: '#reviews-track',
    cardSelector: '.review-card',
    dotsSelector: '#carousel-indicators',
    gap: 32
  });


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
     9b. Services Carousel (shares the drag-carousel engine with Testimonials)
     ========================================================================== */
  initDragCarousel({
    trackSelector: '#services-track',
    cardSelector: '.service-card',
    dotsSelector: '#services-carousel-indicators',
    gap: 28
  });


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
