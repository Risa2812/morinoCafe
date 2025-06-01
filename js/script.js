//スライドショー
document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll('.slideshow .slide');
  let current = 0;
  const interval = 4000; // 5秒で切り替え

  //スマホでは静止画表示（3枚目のみ表示）
  if (window.innerWidth <= 768) {
    slides.forEach((slide, index) => {
      slide.style.display = index === 2 ? 'block' : 'none'; // 3枚目だけ表示
    });
    return; // スライドショーは実行しない
  }

  // PCではスライドショー実行（1回で終了）
  slides[current].classList.add('active');

  const slideshow = setInterval(() => {
    slides[current].classList.remove('active');
    current++;

    if (current >= slides.length) {
      current = slides.length - 1;
      slides[current].classList.add('active');
      clearInterval(slideshow); // 止める
      return;
    }

    slides[current].classList.add('active');
  }, interval);
});


  //フェードイン
  document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-element');

  if (window.innerWidth <= 768) {
    // スマホの場合：最初から表示
    elements.forEach(el => {
      el.classList.add('visible');
    });
    return;
  }
   
    // PCの場合：スクロールでフェードイン
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
  });
//ハンバーガー開閉スイッチ
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    btn.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  });