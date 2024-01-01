const timer = document.querySelector(".timer"); // Element servant de timer
const boutton = document.querySelector("button"); // Element servant à commencer le timer

let tempsEnSecondes = 180; // definition du temps en secondes
let minute; // Définition du nombre de minutes
let secondes; // Définition du nombre de secondes

boutton.addEventListener("click", () => {
  // Mettre en place le timer
  setInterval(() => {
    minute = Math.floor(tempsEnSecondes / 60); // Definition du nombre de minutes
    secondes = tempsEnSecondes % 60; // Definition du nombre de secondes

    timer.innerHTML =
      secondes < 10 ? minute + ":0" + secondes : minute + ":" + secondes; // Afficher la durée, si le compteur de secondes est inferieur à 10, rajouter un 0 devant

    tempsEnSecondes = tempsEnSecondes <= 0 ? 0 : tempsEnSecondes - 1; // Si le temps en secondes est inferieur ou egal à 0 alors, on ne change pas sa valeur, sinon, on retier 1
  }, 1000); // Chaque secondes
});
