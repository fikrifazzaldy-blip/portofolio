// Inisialisasi AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
});

// Typing effect untuk slogan
(function typingEffect(){
  const el = document.getElementById('slogan');
  const text = "Membangun solusi digital yang intuitif dan berdampak dengan sentuhan elegan.";
  let i = 0;
  const speed = 28; // ms per karakter

  function type(){
    if(i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    } else {
      // Optionally keep the full text displayed (no loop) — stops after typing
      return;
    }
  }
  // Start typing after a short delay
  setTimeout(type, 400);
})();

// Smooth scrolling for internal links (enhanced)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const targetId = this.getAttribute('href').slice(1);
    if(!targetId) return;
    const target = document.getElementById(targetId);
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav if open
      const nav = document.getElementById('main-nav');
      if(nav.classList.contains('open')) nav.classList.remove('open');
    }
  });
});

// Menu toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
menuToggle && menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Contact form handler (demo)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation already enforced by required attributes.
    // Here we just show a friendly message (replace with real submission).
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Mengirim...";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      form.reset();
      alert("Terima kasih! Pesan Anda telah dikirim (demo).");
    }, 900);
  });
}

// Tampilkan tahun sekarang di footer
document.getElementById('year').textContent = new Date().getFullYear();