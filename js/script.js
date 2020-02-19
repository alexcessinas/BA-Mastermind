var tabChoix = ['r', 'v', 'b', 'j', 'o', 'f'];
var tirage = new Array();
var compteur = new Array();
var essai = 0;
var proposition = new Array(0);
var okCouleur = 0;
var okPosition = 0;
var fini = false;
var nom_image = "logo/images/mm_";
var ext = ".gif";

console.log(tirage);

// génère une ligne aléatoirement
function couleurAlea() {
  for (i = 0; i < 4; i++) {
    var nombre_aleatoire = Math.random();
    var index = Math.round(5 * nombre_aleatoire);
    tirage[i] = tabChoix[index];
  }
}
// Reproduire 4 fois pour récupérer la couleur d'une ligne
function choixJoueur(color) {
  if (fini) {
    alert("Vous avez déjà gagner, rejouer :D ");
  }
  else {
    if (proposition.length == 4) {
      alert("Vous avez choisi 4 couleurs effacer ou valider pour continuer");
    } else {
      proposition[proposition.length] = color;
      eval("document.prop" + essai + (proposition.length - 1)).src = nom_image + color + ext;
    }
  }
}

// vide la ligne de l'utilisateur
function clearProposition() {
  proposition = new Array(0);
  for (let i = 0; i < 4; i++) {
    eval("document.prop" + essai + i).src = nom_image + "px" + ext;
  }
}
// compare la ligne généré avec la ligne de l'utilisateur
function comparaison() {
  for (let i = 0; i < 3; i++) {
    if (tirage[i] === proposition[i]) {
      proposition[i] = '-1';
      okPosition++;
    }
    else {
      compteur[compteur.length]=i
    }
  }
  
  okP(okPosition);
  okC(okCouleur);
  essai++;
  /*if (okPosition === 3) {
    fini = true;
    alert("Vous avez gagner en " + essai + " essais !");
  }
  else{
    if (essai>9){
      alert("Vous avez perdu le code caché était " + solution());
    }
    else{
      alert("try again !");
    }
  }*/
=======
  }

>>>>>>> 516e0e466ad49756573cce14b52c43c2780bdd18
  clearProposition();
  okPosition = 0;
  okCouleur = 0;
}

function rejouer() {
  history.go(0);
}

function okP(okPosition) {
  for (let i = 0; i < okPosition + 1; i++) {
    eval("document.rep" + essai + i).src = nom_image + "2" + ext;
  }
}

function okC(okCouleur) {
  for (let i = 0; i < okCouleur + 1; i++) {
    eval("document.rep" + essai + i).src = nom_image + "1" + ext;
  }
}
/*function partie() {
  while (fini || essai < 10) {
    jeu;

  }
  if (okPosition === 4) {
    alert("Vous avez gagner en " + essai + " !");
  } else {
    alert("Vous avez perdu le code caché était " + tabChoix[0] + "|" + tabChoix[1] + "|" + tabChoix[2] + "|" + tabChoix[3]);
  }
}
// définir effacer,selection,valider dans le html
function jeu() {
  while (test) {
    if (effacer) {
      clearProposition;
    }
    if (selection) {
      choixJoueur(color);
    }
    if (valider) {
      verif()
    }
  }
}

function verif() {

  comparaison;
  essai += 1;
  test = false;
  if (okPosition === 4) {
    fini = false
  }
}*/

function solution() {
  fini = true;
  document.tirage0.src = nom_image + tirage[0] + ".gif";
  document.tirage1.src = nom_image + tirage[1] + ".gif";
  document.tirage2.src = nom_image + tirage[2] + ".gif";
  document.tirage3.src = nom_image + tirage[3] + ".gif";
}
