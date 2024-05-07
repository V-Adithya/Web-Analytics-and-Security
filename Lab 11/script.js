function changeColor(color) {
  document.getElementById("red").classList.remove("red");
  document.getElementById("yellow").classList.remove("yellow");
  document.getElementById("green").classList.remove("green");
  document.getElementById(color).classList.add(color);
}

setInterval(function () {
  changeColor("red");
  setTimeout(function () {
    changeColor("green");
  }, 9000);
  setTimeout(function () {
    changeColor("yellow");
  }, 6000);
}, 3000);

document.getElementById("myButton").onclick = function () {
  x = color.getCssValue("color");
  if (x==)//Complete the code from here
  element.classList.remove("light red"); // Remove mystyle class from DIV
  element.classList.add("newone");
};
