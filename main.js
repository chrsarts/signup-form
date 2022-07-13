const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phonenum");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (e) => {
  const inputControl = e.parentElement;
  const errorMsg = inputControl.querySelector(".error");

  errorMsg.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isValidPhone = (phone) => {
  const re = /\d{3}\.?-?\s?\d{3}\.?-?\s?\d{4}/;
  return re.test(Number(phone));
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passValue = password.value.trim();
  const passValue2 = password2.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name is required.");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name is required.");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Email is required.");
  } else if (!validateEmail) {
    setError(email, "A valid email is required.");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Phone Number is required.");
  } else if (!isValidPhone) {
    setError(phone, "Phone Number must be in the right format.");
  } else {
    setSuccess(phone);
  }

  if (passValue === "") {
    setError(password, "Password is required.");
  } else if (passValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else {
    setSuccess(password);
  }
  if (passValue2 === "") {
    setError(password2, "Please confirm your password");
  } else if (passValue2 !== passValue) {
    setError(password2, "Password doesn't match.");
  } else {
    setSuccess(password2);
  }
};
