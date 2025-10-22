//Name
const form = document.getElementById("form");
const fullName = document.getElementById("Full-name");
const nameError = document.getElementById("name-error");
//email
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
// subject
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subject-error");
// message
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");

// success message
success = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Name
  const nameValue = fullName.value.trim();

  if (nameValue === "") {
    // nameError.hidden = false;
    nameError.classList.add("visible");
    nameError.textContent = "Please Enter Your Fullname";
    fullName.parentElement.classList.add("input-error");
  } else {
    // nameError.hidden = true;
    nameError.classList.remove("visible");
    fullName.parentElement.classList.remove("input-error");
    // nameError.textContent = "";
  }

  // email
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    // emailError.hidden = false;
    emailError.classList.add("visible");
    emailError.textContent = "Please enter your email";
    email.parentElement.classList.add("input-error");
  } else if (!emailPattern.test(emailValue)) {
    // emailError.hidden = false;
    emailError.classList.add("visible");
    emailError.textContent =
      "Please enter a valid email (e.g. name@example.com).";
    email.parentElement.classList.add("input-error");
  } else {
    // emailError.hidden = true;
    emailError.classList.remove("visible");
    email.parentElement.classList.remove("input-error");
  }

  // Subject
  const subjectValue = subject.value.trim();
  if (subjectValue === "") {
    // subjectError.hidden = false;
    subjectError.classList.add("visible");
    subjectError.textContent = "Please enter a subject.";
    subject.parentElement.classList.add("input-error");
  } else {
    // subjectError.hidden = true;
    subjectError.classList.remove("visible");
    subject.parentElement.classList.remove("input-error");
  }

  // Message
  const messageValue = message.value.trim();
  if (messageValue === "") {
    // messageError.hidden = false;
    messageError.classList.add("visible");
    messageError.textContent = "Please enter your message.";
    message.parentElement.classList.add("input-error");
  } else if (messageValue.length < 10) {
    // messageError.hidden = false;
    message.classList.add("visible");
    messageError.textContent = "Message must be at least 10 characters long.";
    message.parentElement.classList.add("input-error");
  } else {
    // messageError.hidden = true;
    message.classList.add("visible");
    message.parentElement.classList.remove("input-error");
  }

  //success validation
  const hasError =
    nameError.classList.contains("visible") ||
    emailError.classList.contains("visible") ||
    subjectError.classList.contains("visible") ||
    messageError.classList.contains("visible");

  if (!hasError) {
    // success.hidden = false;
    success.classList.add("visible");
  }

  // clear form
  // form.reset();

  setTimeout(() => {
    success.classList.remove("visible");
    form.reset();
  }, 1500);
});

// Name

fullName.addEventListener("input", () => {
  const nameValue = fullName.value.trim();

  if (nameValue !== "") {
    // nameError.hidden = true;
    nameError.classList.remove("visible");
  }
});

// email
email.addEventListener("input", () => {
  const emailValue = email.value.trim();
  if (emailValue !== "") {
    // emailError.hidden = true;
    emailError.classList.remove("visible");
  }
});

// Subject
subject.addEventListener("input", () => {
  const subjectValue = subject.value.trim();
  if (subjectValue !== "") {
    subjectError.classList.remove("visible");
  }
});

//message
message.addEventListener("input", () => {
  const messageValue = message.value.trim();
  if (messageValue !== "") {
    messageError.classList.remove("visible");
  }
});
