// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Purchase button click
function purchase(item) {
    alert(`You selected ${item}. Purchase flow coming soon!`);
}

// Contact form submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}
