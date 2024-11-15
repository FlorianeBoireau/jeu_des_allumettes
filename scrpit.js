let totalAllumettes = 50
let joueurActif = "joueur 1"

function retirerDesAllumettes(allumettesARetirer) {
    // forme raccourci de totalAllumettes = totalAllumettes - allumettesARetirer
    totalAllumettes -= allumettesARetirer
    // retourne le résultat
    return totalAllumettes
}

function changerJoueur() {
    // permet de vérifier quel joueur joue
    if (joueurActif === "joueur 1") {
        
        // permet de passer à l'autre joueur
        joueurActif = "joueur 2";
    } else {
        // reviens au premier joueur
        joueurActif = "joueur 1";
    }
    // permet de savoir à qui est le tour
    alert("C'est au tour du " + joueurActif);
}

function demander() {
// tant que totalAllumettes n'est pas a 0, retourner au prompt pour vérifier la condition du while
    do {
        // demande au joueur de rentrer un nombre 
        const demande = parseInt(prompt("Combien voulez-vous retirer d'allumettes"))
        // si ce nombre est plus grand que 6 alors on lui signifie
            if(demande > 6) {
                alert("Vous pouvez retirer que 6 allumettes maximum par tour")
                // evite que ca passe au joueur 2 si le joueur 1 n'a pas rentrer un nombre entre 1 et 6
                continue
            } else {
                // on retire et stoque le nombre d'allumettes retiré au total des allumettes
                totalAllumettes = retirerDesAllumettes(demande)
                // on affiche le nombre restant d'allumettes
                alert("il te reste " + totalAllumettes  + " allumettes")
            }
            // si totalAllumettes plus grand que 0 
            if(totalAllumettes > 0 ) {
                // on change de joueur
                changerJoueur()
            }
    }while(totalAllumettes != 0 ) // une fois la condition vérifier on sort de la boucle
    // on signifie que la joueur a gagné
        alert("Bravo, " + joueurActif + "a gagné le jeu des allumettes")

}

demander()
