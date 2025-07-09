const doc = document.querySelector('html');
const hero = document.getElementById('hero');
const navbar = document.querySelector('nav');
const header = document.querySelector('header');
const opacityFadeElements = document.querySelectorAll('.observed');
const paragraphs = document.querySelectorAll('p');

const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-fade');
        } else {
            entry.target.classList.remove('opacity-fade');
        }
    });
}, options);
opacityFadeElements.forEach(element => {
    observer.observe(element);
});

const newObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-fade-slow')
                } else {
            entry.target.classList.remove('opacity-fade-slow');
        }
    });
}, options);
paragraphs.forEach(paragraph => {
    newObserver.observe(paragraph);
});



doc.addEventListener('scrollend', () => {
    if (window.pageYOffset > hero.offsetHeight) {
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }
});
   
function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('active');
            sidebar.style.display = sidebar.classList.contains('active') ? 'flex' : 'none';
            
        }

        
function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('active');
            sidebar.style.display = 'none';
        }