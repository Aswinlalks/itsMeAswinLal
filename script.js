document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    const emailElement = document.querySelector('.contact-section .email');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            document.body.style.backgroundColor = this.getAttribute('data-bgcolor');
            emailElement.style.color = '#000'; // Change email color on hover
        });

        link.addEventListener('mouseleave', function() {
            document.body.style.backgroundColor = '#fff';
            emailElement.style.color = '#a0a080'; // Reset email color on mouse leave
        });
    });
});
