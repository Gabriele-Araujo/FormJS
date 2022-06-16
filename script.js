const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value;
  const emailValue = email.value;

  if (firstNameValue === "") {
    setErrorFor(firstName, "O nome é obrigatório");
  } else {
    setSuccessFor(firstName);
  }


  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }


  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //Pega a div anterior
  const small = formControl.querySelector("small");
  small.innerText = message; //Mensagem de erro
  formControl.className = "form-control error"; //Adiciona a classe
}

function setSuccessFor(input) {
  const formControl = input.parentElement; //Pega a div anterior
  formControl.className = "form-control success"; //Adiciona a classe
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
