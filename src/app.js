/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
  }
  function pokerCardIcon() {
    let pokerCardIcons = [
      { icon: "♦", color: "red" },
      { icon: "♥", color: "red" },
      { icon: "♠", color: "black" },
      { icon: "♣", color: "black" }
    ];
    let pokerCardIconsRandom = Math.floor(
      Math.random() * pokerCardIcons.length
    );
    let selectedIcon = pokerCardIcons[pokerCardIconsRandom];
    document.querySelector("#pokerCardIcon").innerHTML = selectedIcon.icon;
    document.querySelector("#pokerCardIcon").style.color = selectedIcon.color;
    document.querySelector("#samePokerIcon").innerHTML = selectedIcon.icon;
    document.querySelector("#samePokerIcon").style.color = selectedIcon.color;
  }

  pokerCardRandom();
  pokerCardIcon();
};

//pseudocodigo:
//1.generar numeros al azar
//2. imprimirlo en el html
//3. generar figuras al azar
//juntarlas
