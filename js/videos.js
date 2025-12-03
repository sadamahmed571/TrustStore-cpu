 /* ========================================== */
    /* 1. منطق المودال */
    /* ========================================== */
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalThumb = document.getElementById('modalThumb');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const btnClose = document.getElementById('modalClose');

    function openModal(img, title, price, vidSrc) {
      modalThumb.style.backgroundImage = `url(${img})`;
      modalTitle.textContent = title;
      modalPrice.textContent = price;
      modalVideo.src = vidSrc;
      
      modal.classList.add('open');
      modalVideo.play();
    }

    btnClose.addEventListener('click', () => {
      modal.classList.remove('open');
      modalVideo.pause();
      modalVideo.src = "";
    });

    modal.addEventListener('click', (e) => {
      if(e.target === modal) btnClose.click();
    });

    /* ========================================== */
    /* 2. التشغيل التلقائي عند التمرير */
    /* ========================================== */
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9
    };

    const autoPlayObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().then(() => {
            setTimeout(() => {
              video.pause();
            }, 3000);
          }).catch(err => console.log("Autoplay prevented"));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }, observerOptions);

    document.querySelectorAll('.videos-auto-play-trigger').forEach(el => {
      autoPlayObserver.observe(el);
    });

    /* ========================================== */
    /* 3. سلايدر تلقائي بسيط (Auto Slider) */
    /* ========================================== */
    const track = document.getElementById('autoSliderTrack');
    
    // دالة لتحريك السلايدر تلقائياً كل 4 ثواني
    setInterval(() => {
        // حساب عرض البطاقة الواحدة
        const cardWidth = track.firstElementChild.clientWidth + 14; // العرض + الـ gap
        
        // التحقق مما إذا وصلنا للنهاية للعودة للبداية
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }, 4000);
