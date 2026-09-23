document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thanks! Your message has been logged in the console.");
});
