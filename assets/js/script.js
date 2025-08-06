// Elementos
const form = document.querySelector("form");
const inputs = document.querySelectorAll('.required');
const checkOk = document.querySelectorAll('.inputWrapper .checkOK');
const alerts = document.querySelectorAll('.alert');

// Eventos
form.addEventListener('submit', (event) => {
  event.preventDefault()

  nameValidate();
  emailValidate();
  userNameValidate();
  passwordValidate();
  comparePassword();
})

inputs[0].addEventListener('input', nameValidate);
inputs[1].addEventListener('input', emailValidate);
inputs[2].addEventListener('input', userNameValidate);
inputs[3].addEventListener('input', passwordValidate);
inputs[4].addEventListener('input', comparePassword);

// Loops
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', () => {
    setError(i)
  });

  inputs[i].addEventListener('input', () => {
    switch (i) {
      case 0: nameValidate(); break;
      case 1: emailValidate(); break;
      case 2: userNameValidate(); break;
      case 3: passwordValidate(); break;
      case 4: comparePassword(); break;
    }
  });
}

// Functions
function nameValidate() {
  if (inputs[0] === "" || inputs[0].value.length < 3) {
    removeOk(0)
    setError(0);
  } else {
    removeError(0);
    setOk(0)
  }
}

function emailValidate() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(inputs[1].value)) {
    removeOk(1)
    setError(1);
  } else {
    removeError(1);
    setOk(1)
  }
}

function userNameValidate() {
  if (inputs[2] === "" || inputs[2].value.length < 3) {
    removeOk(2)
    setError(2);
  } else {
    removeError(2);
    setOk(2)
  }
}
function passwordValidate() {
  if (inputs[3].value.length < 8) {
    removeOk(3)
    setError(3);
  } else {
    removeError(3);
    setOk(3)

    comparePassword()
  }
}

function comparePassword() {
  if (inputs[3].value === inputs[4].value && inputs[4].value.length >= 8) {
    setOk(4)
    removeError(4);
  } else {
    setError(4);
    removeOk(4)
  }
}

// Aux Functions
function setError(index) {
  alerts[index].style.display = "flex"
}

function removeError(index) {
  alerts[index].style.display = "none"
}

function setOk(index) {
  checkOk[index].style.display = "block"
}

function removeOk(index) {
  checkOk[index].style.display = "none"
}