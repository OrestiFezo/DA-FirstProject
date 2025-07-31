document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav_link');

    // Toggle menu on icon click
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        });
    }

    // Close menu when any nav_link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show-menu');
        });
    });
});
//Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!name || !email || !message) {
      // Show error
      formMessage.className = "alert alert-danger";
      formMessage.textContent = "Please fill in all fields.";
      formMessage.classList.remove("d-none");
    } 
    else {
      formMessage.className = "alert alert-success";
      formMessage.textContent = "Your message has been sent successfully. Thank you!";
      formMessage.classList.remove("d-none");
      document.getElementById("contactForm").reset();
    }
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add("d-none");
    }, 5000);
  });
  