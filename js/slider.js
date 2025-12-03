
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const indicators = document.querySelectorAll('.indicator');
            let currentSlide = 0;
            
            // وظيفة لتغيير الشريحة
            function showSlide(index) {
                // إخفاء جميع الشرائح
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // إظهار الشريحة المطلوبة
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                
                currentSlide = index;
            }
            
            // إضافة مستمعي الأحداث للمؤشرات
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showSlide(index);
                    resetTimer();
                });
            });
            
            // تبديل الشرائح تلقائياً
            let slideInterval = setInterval(nextSlide, 5000);
            
            function nextSlide() {
                let nextIndex = (currentSlide + 1) % slides.length;
                showSlide(nextIndex);
            }
            
            function resetTimer() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }
        });
   