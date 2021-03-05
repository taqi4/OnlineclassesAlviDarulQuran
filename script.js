const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click',() =>{
    navLinks.classList.toggle("open");
    toggleBtn.classList.toggle("active");
});