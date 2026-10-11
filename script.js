const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        themeToggle.textContent = 'Dark Mode';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Light Mode';
    }
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.classList.remove('hidden');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        feedback.textContent = 'Error: Please fill in all required form fields before submitting.';
        feedback.className = 'text-sm font-medium p-4 rounded-xl bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-300 border border-red-200 dark:border-red-900';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        feedback.textContent = 'Error: The email address format is invalid. Please check your input.';
        feedback.className = 'text-sm font-medium p-4 rounded-xl bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-300 border border-red-200 dark:border-red-900';
        return;
    }

    feedback.textContent = 'Success: Your message has been sent successfully!';
    feedback.className = 'text-sm font-medium p-4 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900';
    form.reset();
});