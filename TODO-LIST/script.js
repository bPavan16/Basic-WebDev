let list = document.getElementById("list");
let inputBox = document.getElementById("input-box");
let ListItem = document.getElementsByTagName("li");
let SubBtn = document.getElementById("SubBtn");

let prev = null;

SubBtn.addEventListener("click", () => {
  reminder();
});

const reminder = () => {
  if (inputBox.value != "") {
    let newLi = document.createElement("li");
    newLi.innerText = inputBox.value;
    inputBox.value = "";
    newLi.classList.toggle("uncheck");
    list.appendChild(newLi);
  }

  SubBtn.addEventListener("click", () => {
    if (inputBox.value != "") {
      let newLi = document.createElement("li");
      newLi.innerText = inputBox.value;
      inputBox.value = "";
      list.appendChild(newLi);
      ListItem = document.getElementsByTagName("li");
    }
  });

  Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("strike");
      element.classList.toggle("check");
      element.classList.toggle("uncheck");
    });



    element.addEventListener("dblclick", () => {
      element.remove();
    });
  });
};
