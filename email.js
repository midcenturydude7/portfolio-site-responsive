/* eslint-disable no-undef */
// import { password, credentials } from "./secureToken.js";

// Contact form variables
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("info");
const submit = document.getElementById("form-contact");

// Contact Form
function submitForm() {
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submit Btn Clicked!");
    sendEmail();
    reset();
  });
}
submitForm();

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mgriffes@gmail.com",
    Password: "97A8BC3C5171560F9583D4AE3DC5FA9EBA42",
    To: "mgriffes@gmail.com",
    From: email.value,
    Body: message.value,
  }).then(() => alert("Message sent successfully!"));
  console.log(message.value);
}

function reset() {
  username.value = "";
  email.value = "";
  message.value = "";
}
