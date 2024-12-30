document.addEventListener('DOMContentLoaded', function () {
    // Event listeners for buttons
    document.getElementById('downloadFW').addEventListener('click', function () {
        window.location.href = 'https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64';
    });

    document.getElementById('openinbrowser').addEventListener('click', function () {
        window.location.href = 'https://discord.com/app';
    });

    document.getElementById('downloadForWin').addEventListener('click', function () {
        window.location.href = 'https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64';
    });

    document.getElementById('signup').addEventListener('click', function () {
        window.location.href = 'https://discord.com/register';
    });

    // Event listeners for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });

    // Event listeners for footer links
    const footerLinks = document.querySelectorAll('.footer-col ul li a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(link.getAttribute('href'), '_blank');
        });
    });
});
