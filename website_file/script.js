document.addEventListener("DOMContentLoaded",()=>{
 const form=document.getElementById("contactForm");
 if(form){form.addEventListener("submit",e=>{
   e.preventDefault();let valid=true;
   const name=document.getElementById("name");
   const email=document.getElementById("email");
   const message=document.getElementById("message");
   if(name.value.trim().length<2){document.getElementById("nameError").textContent="Name must be at least 2 characters.";valid=false;}else document.getElementById("nameError").textContent="";
   const emailRegex=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
   if(!emailRegex.test(email.value)){document.getElementById("emailError").textContent="Invalid email.";valid=false;}else document.getElementById("emailError").textContent="";
   if(message.value.trim().length<10){document.getElementById("messageError").textContent="Message must be at least 10 characters.";valid=false;}else document.getElementById("messageError").textContent="";
   if(valid){document.getElementById("formStatus").textContent="✅ Message sent (demo).";form.reset();}else{document.getElementById("formStatus").textContent="❌ Please fix errors.";}
 });}
});