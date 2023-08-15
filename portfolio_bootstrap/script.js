function sendMessage() 
{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you,for your Response ${name}! Your message sended succesfully:) \n\nEmail: ${email}\nMessage: ${message}`);

  }
  
 
  const navLinks = document.querySelectorAll('nav a');
  const frames = document.querySelectorAll('.frame');
  
  navLinks.forEach((link) => 
  {
    link.addEventListener('click', (event) => 
    {
      event.preventDefault();
      const targetFrame = document.querySelector(link.getAttribute('href'));
      frames.forEach((frame) => frame.style.display = 'none');
      targetFrame.style.display = 'block';
    });
  });
  

// Get the modal and the buttons
const modal = document.getElementById("cvModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if clicked outside
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
