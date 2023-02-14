/* eslint-disable no-undef */
import { password, credentials } from "./secureToken.js";

// Contact form variables
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("info");
const submit = document.getElementById("form-contact");

// Contact Form
function submitForm() {
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    reset();
  });
}
submitForm();

function sendEmail() {
  const emailFormat = `From: ${username.value} <br/ > Email address: ${email.value} <br /> Message: <br />${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: credentials,
    Password: password,
    To: credentials,
    From: email.value,
    Subject: subject.value,
    Body: emailFormat,
  }).then(() => alert("Message sent successfully!"));
}

function reset() {
  username.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
