document
  .querySelector(".login-form")
  .addEventListener("submit", noRebuteSubmit);
function noRebuteSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const Data = {
    email,
    password,
  };
  console.log("Collected data", Data);
  form.reset();
}
