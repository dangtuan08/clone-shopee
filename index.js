function getEleById(id) {
  return document.getElementById(id);
}

function getEleByClass(classname) {
  return document.querySelector(classname);
}

function getEleAllByClass(classname) {
  return document.getElementsByClassName(classname);
}

const loginBtn = getEleById("login");
const signUpBtn = getEleById("signup");
const modal = getEleByClass(".modal");
const modalOverlay = getEleByClass(".modal__overlay");
const modalLoginForm = getEleByClass(".login-form");
const modalSignUpForm = getEleByClass(".signup-form");
const switchBtnModal = getEleAllByClass("auth-form__switch-btn");

console.log(switchBtnModal);

let isLoginForm = false;

resetModalForm = () => {
  modalLoginForm.classList.remove("show");
  modalSignUpForm.classList.remove("show");
  isLoginForm = false;
};

loginBtn.onclick = () => {
  modal.classList.add("modal--show");
  modalLoginForm.classList.add("show");
  isLoginForm = true;
  // console.log(modalLoginForm);
};

signUpBtn.onclick = () => {
  modal.classList.add("modal--show");
  modalSignUpForm.classList.add("show");
};

modalOverlay.onclick = () => {
  modal.classList.remove("modal--show");
  resetModalForm();
};

for (const btn of switchBtnModal) {
  console.log(btn);
  btn.onclick = () => {
    console.log("lick");
    if (isLoginForm) {
      modalLoginForm.classList.remove("show");
      modalSignUpForm.classList.add("show");
      isLoginForm = false;
    } else {
      modalLoginForm.classList.add("show");
      modalSignUpForm.classList.remove("show");
      isLoginForm = true;
    }
  };
}
