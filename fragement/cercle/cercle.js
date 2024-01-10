const timer = document.querySelector(".timer"); // Element servant de timer
const boutton = document.querySelector("button"); // Element servant à commencer le timer
const cercle = document.querySelector(".cercle"); // Element servant de cercle
const respiration = document.querySelector(".respiration"); // Element servant d'indicateur sur la respiration

let tempsEnSecondes = 32; // definition du temps en secondes
let minute; // Définition du nombre de minutes
let secondes; // Définition du nombre de secondes
let tailleCercle = 30; // Définition de la taille du cercle
let rotation = 0; // Définition de la variable pour faire tourner cercle

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

let animation = () => {
  setTimeout(reduireTaille(), 1000);
  setTimeout(augmenterTaille(), 1000);
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

    // Animation faite en fonction du nombre de secondes
    if (
      tempsEnSecondes >= 70 &&
      (tempsEnSecondes % 4 === 1 || tempsEnSecondes % 4 === 2)
    ) {
      reduireTaille();
    }
    if (
      tempsEnSecondes >= 70 &&
      (tempsEnSecondes % 4 === 3 || tempsEnSecondes % 4 === 0)
    ) {
      augmenterTaille();
    }
    if (70 > tempsEnSecondes && tempsEnSecondes >= 66) {
      reduireTaille();
    }
    if (66 > tempsEnSecondes && tempsEnSecondes >= 60) {
      augmenterTaille();
    }
    if (60 > tempsEnSecondes && tempsEnSecondes >= 50) {
      reduireTaille();
    }
    if (50 > tempsEnSecondes && tempsEnSecondes >= 30) {
      augmenterTaille();
    }
    if (30 > tempsEnSecondes) {
      reduireTaille();
      cercle.tyle.rotate = rotation + "deg";
      rotation++;
    }
  }, 1000); // Chaque secondes
});
