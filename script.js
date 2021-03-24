const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const button = document.getElementById('button');
const levels = document.getElementById('levels');
const reasons = document.getElementById('reasons');
const termsAndCondition = document.getElementById('checking1');
const experience = document.querySelector('.experience');

let checkboxChosen = false;
let radioChosen = false;

form.addEventListener('submit', function (event) {
  checkInputs(event);
});

function checkInputs(event) {
  // const formGroupName = document.getElementById('form-group-fullname');
  // const formGroupPhone = document.getElementById('form-group-phone');
  // const formGroupEmail = document.getElementById('form-group-email');
  // console.log(formGroupName);

  // formGroupName.classList.remove('error');
  // formGroupPhone.classList.remove('error');
  // formGroupEmail.classList.remove('error');

  let formGroupInputs = document.querySelectorAll('input');
  console.log(formGroupInputs);
  for (let i = 0; i < formGroupInputs.length; i++) {
    const formGroup = formGroupInputs[i].parentElement;
    const topFormGroup = formGroup.parentElement;
    formGroup.classList.remove('error');
    topFormGroup.classList.remove('error');
    experience.classList.remove('error');
  }

  // trim to remove the whitespaces
  const fullNameValue = fullName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  // Check if name is input
  if (fullNameValue == '') {
    setErrorFor(fullName, 'Full name cannot be blank', event);
  }

  // Check if phone number is input
  if (phoneValue == '') {
    setErrorFor(phone, 'Phone Number cannot be blank', event);
  }

  // Check if email is input
  if (emailValue == '') {
    setErrorFor(email, 'Email cannot be blank', event);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email', event);
  }

  // Check if radio button is chosen
  if (
    formGroupInputs[3].checked == true ||
    formGroupInputs[4].checked == true ||
    formGroupInputs[5].checked == true
  ) {
    radioChosen = true;
  } else {
    setErrorFor(levels, 'Choose one level', event);
  }

  // Check if one of checkboxed is chosen
  if (
    formGroupInputs[6].checked == false &&
    formGroupInputs[7].checked == false &&
    formGroupInputs[8].checked == false &&
    formGroupInputs[9].checked == false &&
    formGroupInputs[10].checked == false
  ) {
    setErrorFor(reasons, 'Choose at least one reason', event);
  } else {
    checkboxChosen = true;
  }

  // Check term&condition was crossed
  if (!formGroupInputs[14].checked) {
    setErrorFor(
      termsAndCondition,
      'Please read the terms and conditions and check this field',
      event
    );
  }

  // Scrolling up if validation didn't pass
  if (
    fullNameValue == '' ||
    phoneValue == '' ||
    emailValue == '' ||
    !radioChosen
  ) {
    parent.scrollTo(0, 500);
    return true;
  } else if (!formGroupInputs[14].checked || !checkboxChosen) {
    parent.scrollTo(0, 1000);
  }
}

function setErrorFor(input, message, event) {
  event.preventDefault();
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  formGroup.className = 'form-group error';
  small.innerText = message;
}

// function setSuccessFor(input) {
//   const formGroup = input.parentElement;
//   formGroup.className = 'form-group success';
// }

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
