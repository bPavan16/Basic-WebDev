const canvas = document.querySelector("canvas");
const colorPicker = document.getElementById("colorPick");
const Brush = document.getElementById("Brush");
const Eraser = document.getElementById("Eraser");
const Clear = document.getElementById("Clear");
const Save = document.getElementById("Save");
const sizeSlider = document.getElementById("sizeSlider");


const initalBack = 'white';

const ctx = canvas.getContext("2d");

let isDrawing = false;
let pencolor = "#000000";
let brushWidth = 5;
let type = 1;


sizeSlider.addEventListener('input',()=>{
  brushWidth = sizeSlider.value;
})

Clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

Save.addEventListener("click", () => {
  {
    const fileName = prompt(
      "Enter the name for the image file (without extension):"
    );
    if (!fileName) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `${fileName}.png`;
    link.click();
  }
});

colorPicker.addEventListener("input", () => {
  pencolor = colorPicker.value;
});

Brush.addEventListener("click", () => {
  type = 1;
});
Eraser.addEventListener("click", () => {
  type = 0;
});

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

// const drawing = (e) => {
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
// };

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  if (type == 1) ctx.strokeStyle = pencolor;
  else ctx.strokeStyle = initalBack;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});
