// Elementos
const inputs = document.querySelectorAll('.required');
const checkOk = document.querySelectorAll('.inputWrapper .checkOK');
const alerts = document.querySelectorAll('.alert');

// Eventos
inputs[0].addEventListener('input', nameValidate);
// inputs[0].addEventListener('click', () => {if (inputs[0].value === "") {
//   setError(0)
// }});
inputs[1].addEventListener('input', emailValidate);
inputs[2].addEventListener('input', nameValidate);
inputs[3].addEventListener('input', passwordValidate);
inputs[4].addEventListener('input', repeatPasswordValidate);

// Funções
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

function passwordValidate() {
  if (inputs[3])
}

function repeatPasswordValidate() {

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