//Contact Form
const form = document.getElementById("form");
const fullName = document.getElementById("Full-name");
const nameError = document.getElementById("name-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = fullName.value.trim();
  if (nameValue === "") {
    nameError.hidden = false;
    nameError.textContent = "Please Enter Your Fullname";
    fullName.classList.add("input-error");
  } else {
    nameError.hidden = true;
    fullName.classList.remove("input-error");
  }
});
