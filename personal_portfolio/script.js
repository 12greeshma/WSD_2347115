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
  


