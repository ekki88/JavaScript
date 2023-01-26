// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.getElementById("title");

function handelMouseEnter() {
  title.innerText = "Mouse is here !";
  title.style.color = "#1abc9c";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone !";
  title.style.color = "#3498db";
}

function handelWindowResize() {
  title.innerText = "You just resized !";
  title.style.color = "#9b59b6";
}

function handelMouseRight() {
  title.innerText = "That was a right click !";
  title.style.color = "#f39c12";
}

title.addEventListener("mouseenter", handelMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handelWindowResize);
title.addEventListener("contextmenu", handelMouseRight);
