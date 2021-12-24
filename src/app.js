const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxMzY4OSwiZXhwIjoxOTU0OTg5Njg5fQ.eW1mB199JfwekcQ1tbTpY2gwkM5HhxJTYzJMHpDQ1_w"
const API_URL = "https://edeaeijsaktqxssxcxqx.supabase.co/rest/v1/Apprenant"

const infoApprenants = document.querySelector("form")
const laListe = document.getElementById("apprenants");
const inputNom = document.getElementById("nom")
const inputPrenom = document.getElementById("prenom")
const selectNiveau = document.getElementById("selection")
const inputBio = document.getElementById("bio")
const ajouter = document.getElementById("ajouter")

const tabApprenants = []
const sauvegarder = document.getElementById("sauvegarder")


// const btnModifier = "btn-valider" + details.id
// const idCard = "numero_card-" + details.id


infoApprenants.addEventListener("submit", (event) => {
    event.preventDefault()

    // RECUPERATION DES VALEURS DU FORMULAIRE
    nomApprenant = inputNom.value
    prenomApprenant = inputPrenom.value
    niveauChoisi = selectNiveau.value
    biographieSaisi = inputBio.value

    if (nomApprenant.trim().length < 4 || prenomApprenant.trim().length < 7 || biographieSaisi.trim().length < 10) {
        alert("Merci de saisir des informations correctes")
        return
    }

    let nouveauApprenant = {
        nom : nomApprenant,
        prenom : prenomApprenant,
        niveau : niveauChoisi,
        biographie : biographieSaisi,
    }

    insererApprenant(nouveauApprenant)
    tabApprenants.push(nouveauApprenant)
    //console.log(tabApprenants.length)
})

function insererApprenant(details){

    laListe.insertAdjacentHTML(
        "afterbegin",
        `<div class="card mb-3" style="max-width: 540px;>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./src/images/profil.jpeg" class="img-fluid rounded-pill" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${details.nom} ${details.prenom}</h5>
                        <p class="card-text">${details.biographie}</p>
                    </div>
                </div>
                <p class="card-text"><small class="float-end">${details.niveau}</small></p>
            </div>
        </div>
        `
    )
}

// ENVOIE DES DETAILS VERS LA BASE DE DONNÉES VIA L'API

sauvegarder.addEventListener("click", ()=>{

    // ENVOIE DE LA LISTE VERS LA BASE
    tabApprenants.forEach((apprenant)=>{
        fetch(API_URL, {
            method: "POST",
            headers : {
                apikey : API_KEY,
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(apprenant),
        })
    })
})


// const modifier = document.getElementById(btnmodifier)

// // MODIFIER/SUPPRIMER CARTE
    
// function func_btnModifier(btnModifier,idModifier)
// {
//     btnModifier.addEventListener("click",(event)=>{
//         event.preventDefault()
//         //alert("bonjour")
//         //console.log(apprenants)
//         apprenants.forEach(apprenant=>{
//             if(apprenant.id==idModifier)
//             {
//                 nom.value=apprenant.nom
//                 prenom.value=apprenant.prenom
//                 biographie.value=apprenant.biographie
//                 console.log(apprenant.nom)
//                 btnAjouter.value="Modifier"
//                 btnAjouter.textContent="Modifier"
//                 console.log(btnAjouter)
//                 sessionStorage.setItem("apprenantAMod",idModifier)
//             }
            
//         })
//     })
// }


// function func_btnSupprimer(btnSupprimer,idSpprimer,carteSupprimer){
//     btnSupprimer.addEventListener("click",(event)=>{
//         event.preventDefault()
//         apprenants.forEach(apprenant=>{
//             if(apprenant.id==idSpprimer)
//             {
//                 //console.log(apprenants)
//                 //console.log(apprenants.length)
//                 const index=apprenants.indexOf(apprenant)
//                 apprenants.splice(index,1)
//                 divTableauApprenant.removeChild(carteSupprimer)
//                 console.log(apprenants)
               
//             }else{
//                 console.log("mauvaise idee")
//                 console.log(idSpprimer)
               
//             }
            
//         })
       
        
//     })
// }

// RÉCUPÉRATION DES INFOS DE LA BASE DE DONNÉES ET AFFICHAGE SUR UNE NOUVELLE PAGE

// listeDesIdees.addEventListener("click", (event) => {
//     proposition.innerHTML = ""
//     event.preventDefault()  
//     fetch(API_URL, {
//               method : "GET",
//               headers : {
//               apikey: API_KEY,
//           },
//       })
//       .then((response) => response.json())
//       .then((idees) => {
//         idees.forEach((donnee) => {
//           creerCarte(donnee)
//         })
//       })
//   })