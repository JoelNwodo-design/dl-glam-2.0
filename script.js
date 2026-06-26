
const supabaseUrl  = 'https://rghspobxnphvmzhnakmv.supabase.co'
const supabaseKey  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnaHNwb2J4bnBodm16aG5ha212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzc3NTMsImV4cCI6MjA5NzkxMzc1M30.fSIJv7L3BjLqoPlWOahwCp6lrLJIANSPESFmMEXad-o'



let btn = document.getElementById('menuBtn')
btn.addEventListener('click', async () => {
    const menu = document.getElementById('navLinks');
  const btn = document.querySelector('#menuBtn');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', menu.classList.contains('open'));
})


// Close on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('navLinks');
  const btn = document.querySelector('#menuBtn');
  if (!document.querySelector('#menuBtn').contains(e.target)) {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
  }
});

// Close when a nav link is clicked
document.querySelectorAll('navLinks a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
    document.querySelector('#menuBtn').setAttribute('aria-expanded', false);
  });
});

