const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
  element.onclick = () => {
    if (element.id == "clear") {
      display.innerText = "";
    } else if (element.id == "backspace") {
      let value = display.innerText;
      value = value.toString();
      value = value.substr(0, value.length - 1);
      display.innerText = value;
    } else if (element.id == "equal" && display.innerText != "") {
      display.innerText = eval(display.innerText);
    } else if (element.id == "equal" && display.innerText == "") {
      display.innerText = "EMPTY!";
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    } else {
      display.innerText += element.id;
    }
  };
});

const toggler = document.querySelector(".theme-toggler");
const togglerBtn = document.querySelector(".toggler-icon");
const calc = document.querySelector(".dark");
let isDark = true;


toggler.onclick = () => {
  calc.classList.toggle("dark");
  toggler.classList.toggle("active");
  isDark = !isDark;
};
