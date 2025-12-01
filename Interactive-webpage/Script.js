// 1️⃣ Hero Animation
const heroText = document.getElementById('heroText');
heroText.addEventListener('mouseover', () => {
  heroText.style.color = '#ff4081';
  heroText.style.transform = 'scale(1.1)';
});
heroText.addEventListener('mouseout', () => {
  heroText.style.color = '';
  heroText.style.transform = '';
});

// 2️⃣ Light / Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.className);
});
document.body.className = localStorage.getItem('theme') || 'light-mode';

// 3️⃣ Counter Game with Confetti
let points = 0;
const pointsDisplay = document.getElementById('points');
const clickBtn = document.getElementById('clickBtn');
const confettiContainer = document.getElementById('confetti');

clickBtn.addEventListener('click', () => {
  points++;
  pointsDisplay.textContent = points;
  if(points % 10 === 0) spawnConfetti();
});

function spawnConfetti() {
  for(let i=0;i<30;i++){
    const conf = document.createElement('div');
    conf.style.position = 'absolute';
    conf.style.width = '8px';
    conf.style.height = '8px';
    conf.style.background = `hsl(${Math.random()*360},100%,50%)`;
    conf.style.top = '0px';
    conf.style.left = Math.random() * window.innerWidth + 'px';
    conf.style.opacity = '0.8';
    conf.style.borderRadius = '50%';
    conf.style.transition = 'transform 1s ease, opacity 1s ease';
    confettiContainer.appendChild(conf);
    setTimeout(() => {
      conf.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random()*360}deg)`;
      conf.style.opacity = '0';
    }, 50);
    setTimeout(() => conf.remove(), 1100);
  }
}

// 4️⃣ Collapsible FAQ
document.querySelectorAll('.faq-card').forEach(card => {
  card.addEventListener('click', () => {
    const answer = card.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// 5️⃣ Password Visibility & Strength
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');

togglePassword.addEventListener('click', () => {
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
});

passwordField.addEventListener('input', () => {
  const val = passwordField.value;
  let strength = Math.min(val.length * 10, 100);
  passwordStrength.style.width = strength + '%';
  if(strength < 40) passwordStrength.style.background = 'red';
  else if(strength < 70) passwordStrength.style.background = 'orange';
  else passwordStrength.style.background = 'green';
});

// 6️⃣ Form Validation
const signupForm = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = passwordField.value.trim();
  let valid = true;
  let message = '';

  if(name === '') { valid = false; message += 'Name cannot be empty. '; }
  if(email === '' || !/^\S+@\S+\.\S+$/.test(email)) { valid = false; message += 'Enter a valid email. '; }
  if(password.length < 6) { valid = false; message += 'Password must be 6+ chars. '; }

  if(valid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully! 🎉';
    signupForm.reset();
    passwordStrength.style.width = '0%';
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = message;
  }
});

// 7️⃣ Easter Egg
const secretCode = 'POWERLEARN';
let typedKeys = '';
document.addEventListener('keydown', (e) => {
  typedKeys += e.key.toUpperCase();
  if(typedKeys.includes(secretCode)) {
    alert('✨ You found the secret easter egg! ✨');
    typedKeys = '';
  }
  if(typedKeys.length > secretCode.length) typedKeys = typedKeys.slice(-secretCode.length);
});

// 8️⃣ Parallax Cursor
const cursor = document.getElementById('cursorTrail');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
