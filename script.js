/* Toggle Mobile Menu */
const menuIcon = document.querySelector('#header nav i');
const navMenu = document.querySelector('#header nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/* Tab Navigation for About Section */
// const tabLinks = document.querySelectorAll('.tab-links');
// const tabContents = document.querySelectorAll('.tab-contents');

// tabLinks.forEach((link, index) => {
//     link.addEventListener('click', () => {
//         tabLinks.forEach(link => link.classList.remove('active-link'));
//         tabContents.forEach(content => content.classList.remove('active-tab'));

//         link.classList.add('active-link');
//         tabContents[index].classList.add('active-tab');
//     });
// });

// Function to handle tab switching
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

// Function to open a specific tab by name
function opentab(tabName) {
    // Remove active classes from all tabs and contents
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));

    // Activate the selected tab and content
    document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`).classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// Default tab setup to ensure correct initial state
window.onload = () => {
    document.querySelector('.tab-links.active-link').click();
};

/* Scroll-to-Top Button */
const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Portfolio Hover Effect */
const portfolioItems = document.querySelectorAll('.work');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const layer = item.querySelector('.layer');
        layer.style.opacity = 1;
    });

    item.addEventListener('mouseleave', () => {
        const layer = item.querySelector('.layer');
        layer.style.opacity = 0;
    });
});

/* Form Validation */
const form = document.querySelector('#contact form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email.');
    } else {
        alert('Thank you for your message!');
        form.reset();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
