/* main.js — site-wide interactions
   - theme toggle (persisted)
   - mobile nav toggle
   - card click flip for touch
   - contact form validation
*/

/* ===== Theme toggle ===== */
const themeToggleBtn = document.querySelectorAll('#themeToggle');
function setTheme(isDark){
  if(isDark) document.body.classList.add('dark');
  else document.body.classList.remove('dark');

  themeToggleBtn.forEach(btn => btn.setAttribute('aria-pressed', !!isDark));
}
const saved = localStorage.getItem('prefersDark') === 'true';
setTheme(saved);
document.querySelectorAll('#themeToggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    setTheme(isDark);
    localStorage.setItem('prefersDark', isDark);
  });
});

/* ===== Mobile nav toggle ===== */
const nav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

/* ===== Card click flip (for touch) ===== */
document.querySelectorAll('.project-card.flip').forEach(card => {
  card.addEventListener('click', () => {
    const inner = card.querySelector('.card-inner');
    if(inner) inner.classList.toggle('is-flipped');
  });
});

/* ===== Contact form validation ===== */
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const msg = document.getElementById('contactMessage');

    if(!name.value.trim() || name.value.trim().length < 2){
      showError('nameError','Please enter a name (min 2 chars)');
      valid = false;
    } else { clearError('nameError'); }

    const r = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if(!r.test(email.value.trim())){
      showError('emailError','Please enter a valid email');
      valid = false;
    } else { clearError('emailError'); }

    if(!msg.value.trim() || msg.value.trim().length < 10){
      showError('messageError','Message must be at least 10 characters');
      valid = false;
    } else { clearError('messageError'); }

    if(valid){
      const status = document.getElementById('contactStatus');
      status.textContent = '✅ Message sent (demo).';
      status.style.color = 'green';
      contactForm.reset();
    } else {
      const status = document.getElementById('contactStatus');
      status.textContent = 'Please fix the errors above.';
      status.style.color = 'crimson';
    }
  });
}
function showError(id, msg){ const el=document.getElementById(id); if(el){el.textContent=msg;} }
function clearError(id){ const el=document.getElementById(id); if(el){el.textContent='';} }

/* ===== small helpers ===== */
document.querySelectorAll('[id^="year"]').forEach(y => y.textContent = new Date().getFullYear());
