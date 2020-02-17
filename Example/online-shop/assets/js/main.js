const btnLogin = document.getElementById("btn-login"),
  btnRegister = document.getElementById("btn-register"),
  frmLogin = document.querySelector(".auth-form__login"),
  frmRegister = document.querySelector(".auth-form__register"),
  modal = document.querySelector(".modal"),
  overLay = document.querySelector(".modal__overlay");

modal.style.display = "none";
frmLogin.style.display = "none";
frmRegister.style.display = "none";

btnLogin.addEventListener("click", () => {
  modal.style.display = "flex";
  frmRegister.style.display = "none";
  frmLogin.style.display = "block";
});

btnRegister.addEventListener("click", () => {
  modal.style.display = "flex";
  frmLogin.style.display = "none";
  frmRegister.style.display = "block";
});

overLay.addEventListener("click", () => {
  modal.style.display = "none";
});
