
var tabChoix = new Array('r','v','b','j','o','f');

var tirage = new Array();
var essai = 0;
var proposition = new Array(0);
var okPosition = 0;
var okCouleur = 0;
var test = true; 
var fini = true;
// génère une ligne aléatoirement
function couleurAlea(){
	for (let i = 0 ; i < 4 ; i++){
		var nombre_aleatoire =Math.random();
		var index = Math.round(5*nombre_aleatoire);
		tirage[i]=tabChoix[index];
	}
}
// Reproduire 4 fois pour récupérer la couleur d'une ligne
function choixJoueur(color){
	if (length(proposition)>4){
		alert("Vous avez choisi 4 couleurs effacer ou valider pour continuer");
	}
	else{
		proposition[i]=color;
	}
}
// vide la ligne de l'utilisateur
function clearProposition(){
	for(let i =  0; i < 4; i++)
	{
		proposition[i]='';
	}
}
// compare la ligne généré avec la ligne de l'utilisateur
function comparaison(){
	for (let i = 0; i < 4; i++){
		for (let j = 0; i < 4;i++){
			if (tirage[i]===proposition[j]){
				if (i===j){
					okPosition +=1;
				}
				else{
					okCouleur +=1;
				}
			}
		}
	}
	clearProposition
}

function partie(){
	while(fini || essai<10){
			jeu;
	}
	if (okPosition===4) {
		alert("Vous avez gagner en "+essai+" !");
	}
	else{
		alert("Vous avez perdu le code caché était "+tabChoix[0]+"|"+tabChoix[1]+"|"+tabChoix[2]+"|"+tabChoix[3]);
	}
}
// définir effacer,selection,valider dans le html
function jeu(){
	while(test){
		if (effacer){
			clearProposition;
		}
		if (selection){
			choixJoueur(color);
		}
		if (valider){
			comparaison;
			essai +=1;
			test=false;
			if (okPosition===4){
				fini=false
			}
		}
	}
}