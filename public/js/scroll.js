document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1 // Срабатывает когда 10% элемента видно
    });
  
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
  });