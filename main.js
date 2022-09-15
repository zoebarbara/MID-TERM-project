const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
});

hamburger.addEventListener('click', () => {
  const mobileMenu =  document.querySelector('#mobileMenu')
  mobileMenu.classList.toggle("hiddenMenu");
})


// FORM VALIDATION
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isPhoneValid = (phone) => {
  const re = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  return re.test(phone);
}

const userNameValidation = () => {
  let valid = false;
  const min = 3;
  const max = 40;
}

//FETCH
const form = document.getElementById("contactForm");
if(form){
  form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(form);
  // console.log(formData);
  //const user = Object.fromEntries(formData);
  // console.log(data);

  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phone = formData.get('phone').trim();
  const message = formData.get('message').trim();

  const data = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  const userData = { item: data };

  const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
  const fetchParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-KEY": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
    },
    body: JSON.stringify(userData),
  };

  fetch(url, fetchParams)
    .then((response) => response.json())
    .then((output) => console.log(output))
    .catch((error) => console.log("Something went wrong.", error))
    .finally(() => alarm('El formulario se ha enviado correctamente'));
})}
