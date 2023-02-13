// import { password, credentials } from "./secureToken.js";

// Contact form variables
// const username = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("info");
const submit = document.getElementById("submit-btn");

// Contact Form
function submitForm() {
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submit Btn Clicked!");
    // sendEmail();
  });
}
submitForm();

/* eslint-disable no-undef */
// function sendEmail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: credentials,
//     Password: password,
//     To: credentials,
//     From: email.value,
//     Body: message.value,
//   }).then(() => alert("Message sent successfully!"));
// }
