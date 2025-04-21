const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuButton.addEventListener("click",  () => {
    mobileMenu.classList.toggle("hidden");
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        if (window.innerWidth < 768) {
            mobileMenu.classList.add('hidden');
        }
    });
});