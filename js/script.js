//let d = new Date();
//        alert("Today's date is " + d);
// Explication des variables :
// choix : les initiales des couleurs disponbibles; tirage : le choix de l'ordinateur; nom_image : raccourci pour appeler les images;
// ext : fin du nom des images; essai : numero de la tentative; proposition : les 4 couleurs proposees par le joueur;
// compare : une copie du tirage pour comparaison avec la proposition; ok : nombre de pions blancs; ok2 : nombre de pions noirs;
// fini : jeu termine (gagne ou solution affichee)

var choix = new Array('','r','v','b','j','o','f');
var tirage = new Array();
var nom_image = "images/mm_";
var ext = ".gif";
var essai = 0;
var proposition = new Array(0);
var compare = new Array();
var ok = 0;
var ok2 = 0;
var fini = false;


// La fonction de tirage des pions par l'ordinateur
function alleatoire() {

// On repete l'operation 4 fois (4 pions)
	for ( i = 0; i < 4; i++ ) {

// Sur 6 couleurs possibles
		var possibilites = 6;

// Generation d'un nombre alleatoire
		var nombre_alleatoire = Math.random();
		var index = Math.round( ( possibilites - 1 ) * nombre_alleatoire ) + 1;

// Affectation d'une lettre (pion) au tirage
		tirage[i] = choix[index];
		}
	}

// Affichage des choix du joueur
function propose(lettre) {

// Si la partie est deja terminee
	if (fini) {
		alert('Vous avez deja termine cette partie !\nCliquez sur le bouton \'Rejouer\' pour demarrer une nouvelle partie');
		}

// Sinon...
	else {

// S'il y a deja 4 couleurs proposees
		if ( proposition.length == 4 ) {
			alert('Vous avez deja propose 4 couleurs.\nPour corriger, cliquez sur "Effacer" et recommencez la ligne');
			}

// Sinon...
		else {

// On stocke la proposition
			proposition[proposition.length] = lettre;

// On remplace l'image transparente de la bonne ligne et de la bonne 'case' par la couleur choisie par le joueur
			eval("document.prop" + essai + (proposition.length - 1)).src = nom_image + lettre + ext;
			}
		}
	}

// Verification de la proposition
function verif() {

// Si la proposition ne comporte pas 4 pions
	if ( proposition < 4 ) {

// Si la partie est deja terminee
		if (fini) {
			alert('Vous avez deja termine cette partie !\nCliquez sur le bouton \'Rejouer\' pour demarrer une nouvelle partie');
			}

// Sinon...
		else {
			alert('Vous n\'avez pas complete votre ligne.');
			}
		}

// Si la proposition fait 4 pions :
	else {

// On cree une copie du tirage de l'ordinateur qu'on pourra modifier
		compare[0] = tirage[0];
		compare[1] = tirage[1];
		compare[2] = tirage[2];
		compare[3] = tirage[3];
		for ( i = 0; i < 4; i++ ) {

// Si un pion propose est identique au pion du tirage (a la bonne place)
			if ( compare[i] == proposition[i] ) {

// On marque qu'il faudra un pion blanc
				ok++;

// On ecrase les pions identiques (pour eviter de les recompter comme etant 'mal places')
				compare[i] = "x";
				proposition[i] = "y";
				}
			}

// On teste si un pion propose existe dans la reponse (il ne pourra pas etre au bon endroit car on les a retires au-dessus)
		for ( j = 0; j < 4; j++ ) {
			for ( k = 0; k < 4; k++ ) {
				if ( compare[j] == proposition[k] ) {

// On marque qu'il faudra un pion noir
					ok2++;
					compare[j] = "x";
					proposition[k] = "y";
					}
				}
			}

// S'il faut des pions blancs
		if ( ok > 0 ) {
			for ( i = 0; i < ok; i++ ) {

// On en place autant que necessaires a la place des images transparentes
				eval("document.rep" + essai + i).src = nom_image + "2" + ext;
				}
			}

// S'il faut des pions noirs
		if ( ok2 > 0 ) {
			for ( i = ok; i < (ok + ok2); i++ ) {
				eval("document.rep" + essai + i).src = nom_image + "1" + ext;
				}
			}

// S'il n'y a ni blancs ni noirs a placer, on place une croix (pour marquer que l'ordinateur a verifie et que rien n'est bon)
		if ( (ok + ok2) == 0 ) {
			eval("document.rep" + essai + "0").src = nom_image + "0" + ext;
			}

// Si c'est le dixieme essai (on commence a zero) et que la proposition n'est pas la bonne
		if ( essai == 9 && ok != 4 ) {

// On marque la partie comme terminee
			fini = true;
			alert('Vous avez perdu !\nVoici la solution :');

// On affiche la solution
			document.tirage0.src = nom_image + tirage[0] + ".gif";
			document.tirage1.src = nom_image + tirage[1] + ".gif";
			document.tirage2.src = nom_image + tirage[2] + ".gif";
			document.tirage3.src = nom_image + tirage[3] + ".gif";
			}

// Si la proposition correspond au tirage
		if ( ok == 4 ) {
			fini = true;
			alert('Bravo !\nVous avez reussi en ' + (essai + 1) + ' coups !');
			document.tirage0.src = nom_image + tirage[0] + ".gif";
			document.tirage1.src = nom_image + tirage[1] + ".gif";
			document.tirage2.src = nom_image + tirage[2] + ".gif";
			document.tirage3.src = nom_image + tirage[3] + ".gif";
			}

// On prepare le tour suivant :
// Remise a zero de la proposition, des pions blancs et noirs, on augmente le numero du tour et on previent si on arrive au dernier essai
		proposition = new Array(0);
		compare = new Array();
		ok = 0;
		ok2 = 0;
		essai++;
		if ( essai == 9 && !fini ) {
			alert('Attention, c\'est votre derniere chance...');
			}
		}
	}

// Affichage de la solution
function solution() {

// On marque la partie comme terminee
	fini = true;

// On affiche les images de la solution
	document.tirage0.src = nom_image + tirage[0] + ".gif";
	document.tirage1.src = nom_image + tirage[1] + ".gif";
	document.tirage2.src = nom_image + tirage[2] + ".gif";
	document.tirage3.src = nom_image + tirage[3] + ".gif";
	}

// Effacement de la proposition en cours
function effacer() {

// si la partie est deja terminee
	if (fini) {
		alert('Vous avez deja termine cette partie !\nCliquez sur le bouton \'Rejouer\' pour demarrer une nouvelle partie');
		}
	else {
		for ( i = 0; i < 4; i++) {

// On efface la proposition en cours
			proposition = new Array(0);

// On remplace toute la ligne en cours par des images transparentes
			eval("document.prop" + essai + i).src = nom_image + "px" + ext;
			}
		}
	}

// Rechargement de la page pour reinitialiser le jeu
function rejouer() {
	history.go(0);
	}
