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
    let pokerCardNumber = Math.ceil(Math.random() * pokerCardOptions.length);
    document.querySelector("#pokerCardNumber").innerHTML = pokerCardNumber;
  }

  function pokerCardIcon() {
    let pokerCardIcons = ["♦", "♥", "♠", "♣"];
    let pokerCardIconsRandom = Math.floor(
      Math.random() * pokerCardIcons.length
    );
    let selectedIcons = pokerCardIcons[pokerCardIconsRandom];
    document.querySelector("#pokerCardIcon").innerHTML = selectedIcons;
    return selectedIcons;
  }
  function pokerCardIcon2() {
    let icon = pokerCardIcon();
    document.querySelector("#samePokerIcon").innerHTML = icon;
  }
  pokerCardRandom();
  pokerCardIcon();
  pokerCardIcon2();
};

//pseudocodigo:
//1.generar numeros al azar
//2. imprimirlo en el html
//3. generar figuras al azar
//juntarlas
