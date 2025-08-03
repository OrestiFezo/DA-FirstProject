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
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById("formMessage");

  const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;

  if (!name || !email || !message || !emailRegex.test(email)) {
    formMessage.className = "alert alert-danger";
    formMessage.textContent = "Please fill in all fields correctly.";
    formMessage.classList.remove("d-none");
    return;
  }
  // Build the form data manually
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("_captcha", "false"); 

  fetch("https://formsubmit.co/elsatafani04@gmail.com", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      thankYouModal.show();
      document.getElementById("contactForm").reset();
      formMessage.classList.add("d-none");
    } else {
      formMessage.className = "alert alert-danger";
      formMessage.textContent = "Something went wrong. Please try again.";
      formMessage.classList.remove("d-none");
    }
  })
  .catch(error => {
    formMessage.className = "alert alert-danger";
    formMessage.textContent = "There was a problem sending your message.";
    formMessage.classList.remove("d-none");
    console.error(error);
  });

  // Hide alert after 5 seconds
  setTimeout(() => {
    formMessage.classList.add("d-none");
  }, 5000);
});
