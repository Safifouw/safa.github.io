const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}



document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
