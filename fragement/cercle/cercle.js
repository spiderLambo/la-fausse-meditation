const timer = document.querySelector(".timer"); // Element servant de timer
const boutton = document.querySelector("button"); // Element servant à commencer le timer
const cercle = document.querySelector(".cercle"); // Element servant de cercle
const respiration = document.querySelector(".respiration"); // Element servant d'indicateur sur la respiration

let tempsEnSecondes = 180; // definition du temps en secondes
let minute; // Définition du nombre de minutes
let secondes; // Définition du nombre de secondes
let tailleCercle = 30; // Définition de la taille du cercle

// Fonction pour réduire la taille du cercle
let reduireTaille = () => {
  // Changer la variable qui assigne la taille au cercle
  tailleCercle--;

  // Réduire la taille du cercle
  cercle.style.width = tailleCercle + "em";
  cercle.style.height = tailleCercle + "em";
  respiration.innerHTML = "Inspirer"; // Indiquer l'inspiration
};

// Fonction pour augmenter la taille du cercle
let augmenterTaille = () => {
  // Changer la variable qui assigne la taille au cercle
  tailleCercle++;

  // Augmenter la taille du cercle
  cercle.style.width = tailleCercle + "em";
  cercle.style.height = tailleCercle + "em";
  respiration.innerHTML = "Expirer"; // Indiquer l'expiration
};

// L'action s'éffectue au click
boutton.addEventListener("click", () => {
  // Mettre en place le timer
  setInterval(() => {
    minute = Math.floor(tempsEnSecondes / 60); // Definition du nombre de minutes
    secondes = tempsEnSecondes % 60; // Definition du nombre de secondes

    timer.innerHTML =
      secondes < 10 ? minute + ":0" + secondes : minute + ":" + secondes; // Afficher la durée, si le compteur de secondes est inferieur à 10, rajouter un 0 devant

    tempsEnSecondes = tempsEnSecondes <= 0 ? 0 : tempsEnSecondes - 1; // Si le temps en secondes est inferieur ou egal à 0 alors, on ne change pas sa valeur, sinon, on retire 1
  }, 1000); // Chaque secondes
});
