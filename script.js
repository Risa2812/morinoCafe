//スライドショー
const slides = document.querySelectorAll('.slideshow .slide');
  let current = 0;
  const interval = 5000; // 5秒で切り替え

// 最初のスライドを表示
slides[current].classList.add('active');

const slideshow = setInterval(() => {
  // 現在のスライドを非表示にする
  slides[current].classList.remove('active');

  current++;

  // 最後のスライドに達したら、それを表示してスライドショー停止
  if (current >= slides.length) {
    // 1つ前の（最後の）スライドを再表示
    slides[slides.length - 1].classList.add('active');
    clearInterval(slideshow); // 自動切り替え停止
    return;
  }

  // 次のスライドを表示
  slides[current].classList.add('active');
}, interval);
 
  //フェードイン
  document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-element');

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