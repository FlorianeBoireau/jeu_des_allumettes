sectionChampsDeTexteDansHtml = document.querySelector(".rentrer-un-numero")
compteurDansHtml = document.querySelector("#compteur")
champsDeTexteDansHtml = document.querySelector("#texte")
boutonValiderDansHTML = document.querySelector("#valider")

let totalAllumettes = 50

function retirerDesAllumettes(allumettesARetirer) {
    // forme raccourci de totalAllumettes = totalAllumettes - allumettesARetirer
    totalAllumettes -= allumettesARetirer
    // retourne le résultat
    return totalAllumettes
}

function saisie() {
    let saisie = champsDeTexteDansHtml.value
    console.log(saisie)
}

boutonValiderDansHTML.addEventListener("click",() =>{
    saisie()
    champsDeTexteDansHtml = ""   
}


function compteur() {
        do {
            totalAllumettes == champsDeTexteDansHtml
                if(champsDeTexteDansHtml > 6) {
                    totalAllumettes = compteurDansHtml--   
                }
        }while(totalAllumettes != 0 ) 
            
    }
)

