let rand = document.getElementById("rand");
let selTxt = document.getElementById("selTxt");
let selPick = document.getElementById("selPick");
let colu = document.getElementById("colu");
let txt = document.getElementById("txt");
let disco = document.getElementById("disco");
let myInterval;

disco.addEventListener("click", () => {
  myInterval = setInterval(() => {
    let col = getRandomColor();
    txt.value = col;
    document.body.style.backgroundColor = col;
    colu.value = col;
  }, 2000);
});

function getRandomColor() {
  let col = "#";
  let str = "ABCDEF123456789";
  for (let i = 0; i < 6; i++) {
    col = col + str[Math.floor(Math.random() * str.length)];
  }
  return col;
}

rand.addEventListener("click", () => {
  window.clearInterval(myInterval);
  let col = getRandomColor();
  txt.value = col;
  document.body.style.backgroundColor = col;
  colu.value = col;
});

selTxt.addEventListener("click", () => {
  window.clearInterval(myInterval);
  let col = txt.value;
  document.body.style.backgroundColor = col;
  colu.value = col;
});

selPick.addEventListener("click", () => {
  window.clearInterval(myInterval);
  let col = colu.value;
  document.body.style.backgroundColor = col;
  txt.value = col;
});

function Change() {
  let col = getRandomColor();
  document.body.style.backgroundColor = col;
}
