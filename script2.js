// Retrieve the data
let params = new URL(document.location).searchParams;
let paramName = params.get('fullName');
let paramLevel = params.get('level');
let paramEmail = params.get('email');

let titleMessage = document.getElementById('titleMessage');
titleMessage.innerText = 'Thank you for registering, ' + paramName + ' 💟';

let pMessage = document.getElementById('pMessage');
pMessage.innerText =
  'You successfully registered for our ' +
  paramLevel +
  ' trial class!' +
  'We will get back to you with the email address: ' +
  paramEmail +
  '🌈';
