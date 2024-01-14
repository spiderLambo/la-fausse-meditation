const timer = document.querySelector(".timer"); // Element servant de timer
const boutton = document.querySelector(".cerclebtn"); // Element servant à commencer le timer
const cercle = document.querySelector(".cercle-forme"); // Element servant de cercle
const respiration = document.querySelector(".respiration"); // Element servant d'indicateur sur la respiration

let tempsEnSecondes = 90; // definition du temps en secondes
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

// arreter l'animation
let arret = () => {
  cercle.style.animation = "none";
  // Augmenter la taille du cercle
  cercle.style.width = "30em";
  cercle.style.height = "30em";
  respiration.innerHTML = ""; // Indiquer l'expiration
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
    // Moment ou la réduction de taille s'éffectue
    if (
      (tempsEnSecondes >= 70 &&
        (tempsEnSecondes % 4 === 1 || tempsEnSecondes % 4 === 2)) ||
      (70 > tempsEnSecondes && tempsEnSecondes >= 66) ||
      (60 > tempsEnSecondes && tempsEnSecondes >= 50) ||
      30 > tempsEnSecondes
    ) {
      reduireTaille();
    }
    // Moment ou l'augmentation de taille s'éffectue
    if (
      (tempsEnSecondes >= 70 &&
        (tempsEnSecondes % 4 === 3 || tempsEnSecondes % 4 === 0)) ||
      (66 > tempsEnSecondes && tempsEnSecondes >= 60) ||
      (50 > tempsEnSecondes && tempsEnSecondes >= 30)
    ) {
      augmenterTaille();
    }
    // Début de la rotation du cercle
    if (20 > tempsEnSecondes) {
      cercle.style.animation = "rotation 1s linear infinite";
    }
    // Fin de toutes les animations
    if (0 === tempsEnSecondes) {
      arret();
    }
  }, 1000); // Chaque secondes
});
