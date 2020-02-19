// déclaration des différentes variables que l'on utilise
var tabChoix = ['r', 'v', 'b', 'j', 'o', 'f'];
var tirage = new Array();
var compare = new Array();
var essai = 0;
var proposition = new Array(0);
var okCouleur = 0;
var okPosition = 0;
var fini = false;
var nom_image = "logo/images/mm_";
var ext = ".gif";

// technique pour tricher
console.log(tirage);

// génère une ligne aléatoirement et l'assigne en tant que solution à trouver
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
  }
  if (proposition.length == 4) {
    alert("Vous avez choisi 4 couleurs effacer ou valider pour continuer");
  } else {
    proposition[proposition.length] = color;
    eval("document.prop" + essai + (proposition.length - 1)).src = nom_image + color + ext;
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
  if (proposition.length < 4) {
    alert("Vous n'avez pas choisie assez de couleur");
  }
  else {
    var compare = tirage.slice()
    for (let i = 0; i <= 3; i++) {
      if (compare[i] === proposition[i]) {
        compare[i] = 'Null';
        proposition[i] = 'Null';
        okPosition++;
      }
    }
    for (let i = 0; i < compare.length; i++) {
      if (compare[i] != 'Null') {
        if (proposition.indexOf(compare[i]) >= 0) {
          proposition[proposition.indexOf(compare[i])] = 'Null';
          compare[i] = 'Null';
          okCouleur++;
        }
      }
    }
    okP(okPosition);
    okC(okCouleur, okPosition);
    essai++;
    if (okPosition === 4) {
      fini = true;
      alert("Vous avez gagner en " + essai + " essais !");
    }
    else {
      if (essai > 9) {
        alert("Vous avez perdu le code caché est dans la solution");
        solution();
      }
    }
    clearProposition();
    okPosition = 0;
    okCouleur = 0;
  }
}

function rejouer() {
  history.go(0);
}

function okP(okPosition) {
  console.log('okP : ' + okPosition);
  if (okPosition > 0) {
    for (let i = 0; i < okPosition; i++) {
      eval("document.rep" + essai + i).src = nom_image + "1" + ext;
      console.log("nb boucle P " + i);
    }
  }
}

function okC(okCouleur, okPosition) {
  console.log('okC : ' + okCouleur);
  if (okCouleur > 0) {
    for (let i = okPosition; i < okPosition+okCouleur; i++) {
      console.log("nb boucle C " + i);
      eval("document.rep" + essai + i).src = nom_image + "2" + ext;
      
    }
  }
}

function solution() {
  fini = true;
  document.tirage0.src = nom_image + tirage[0] + ".gif";
  document.tirage1.src = nom_image + tirage[1] + ".gif";
  document.tirage2.src = nom_image + tirage[2] + ".gif";
  document.tirage3.src = nom_image + tirage[3] + ".gif";
}
