/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  pokerCardRandom();
  setInterval(pokerCardRandom, 3000);
};
function pokerCardRandom() {
  let pokerCardOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let randomResult = Math.floor(Math.random() * pokerCardOptions.length);
  let pokerCardNumber = pokerCardOptions[randomResult];
  document.querySelector("#pokerCardNumber").innerHTML = pokerCardNumber;

  let pokerCardIcons = [
    { icon: "♦", color: "red" },
    { icon: "♥", color: "red" },
    { icon: "♠", color: "black" },
    { icon: "♣", color: "black" }
  ];
  let pokerCardIconsRandom = Math.floor(Math.random() * pokerCardIcons.length);
  let selectedIcon = pokerCardIcons[pokerCardIconsRandom];
  document.querySelector("#pokerCardIcon").innerHTML = selectedIcon.icon;
  document.querySelector("#pokerCardIcon").style.color = selectedIcon.color;
  document.querySelector("#samePokerIcon").innerHTML = selectedIcon.icon;
  document.querySelector("#samePokerIcon").style.color = selectedIcon.color;
}
function applyCardSize() {
  let width = document.querySelector("#addwidth").value;
  let height = document.querySelector("#addHeight").value;
  let pokerCard = document.querySelector("#pokerCard");

  if (width > 400) {
    pokerCard.style.width = width + "px";
  } else {
    alert("Por favor, pon un numero mayor");
  }
  if (height > 600) {
    pokerCard.style.height = height + "px";
  } else {
    alert("Por favor, pon un numero mayor");
  }
}
document.querySelector("#newCard").addEventListener("click", pokerCardRandom);
document
  .querySelector("#newSizeButton")
  .addEventListener("click", applyCardSize);
