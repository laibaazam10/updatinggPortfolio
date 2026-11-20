const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Form page reload se roke

    const form = this;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/laibaazam116@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your message. I’ll get back to you soon.',
        });
        form.reset(); // Form clear kar de
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
        });
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Failed to send message. Please check your connection.',
      });
    });
  });

