const doc = document.querySelector('html');
const hero = document.getElementById('hero');
const navbar = document.querySelector('nav');
const header = document.querySelector('header');

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