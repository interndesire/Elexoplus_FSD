// Functionality runs once DOM structure is completely loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE NAVBAR TOGGLE
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on any dynamic links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // 2. MODAL POPUP WINDOW LOGIC
    const signUpModal = document.getElementById('signUpModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const triggers = document.querySelectorAll('.open-modal-trigger');

    // Open Modal
    const openModal = () => signUpModal.classList.add('active');
    // Close Modal
    const closeModal = () => signUpModal.classList.remove('active');

    if (openModalBtn) openModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    // Bind any additional CTA buttons in section modules
    triggers.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Close modal window if background overlay clicked
    window.addEventListener('click', (e) => {
        if (e.target === signUpModal) {
            closeModal();
        }
    });


    // 3. SECURE FORM SIMULATIONS
    const contactForm = document.getElementById('contactForm');
    const registerForm = document.getElementById('registerForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents reloading
            alert('Success! Thank you for requesting a product demo. We will contact you soon.');
            contactForm.reset();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents reloading
            alert('Registration complete! Welcome to your clean Elexoplus Admin Panel.');
            closeModal();
            registerForm.reset();
        });
    }
});