// import insererApprenant from "./insertion";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDgzMzg3MCwiZXhwIjoxOTU2NDA5ODcwfQ.1nnrzdiWTaLA82VqW-vsGxoi8F9vVs1J6jkPeVWodzg"
const API_URL = "https://zyesichgkjjujbpairss.supabase.co/rest/v1/Apprenants"

import { creerCarte } from './carte.js';
import { creerApprenants } from './apprenants.js';

// Recuperation des élément du formulaire
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNiveau = document.querySelector("#selection")   
const inputBiographie = document.querySelector("#bio")
const btnAjouter = document.querySelector("#ajouter")

const laListe = document.querySelector("#apprenants")
const btnSauvegarder = document.querySelector("#sauvegarder")
const contenuPage = document.querySelector("main")

//Tableau pour stocker les cartes
export let tab = [] 

// VERIFICATION DES MOTS SAISIS
inputBiographie.addEventListener("input", (event) => {
    const longueurMax = 130
    const contenuSaisi = inputBiographie.value
    const longueurSaisi = contenuSaisi.length
    const reste = longueurMax - longueurSaisi

    //actualiser le dom pour afficher le nombre
    const paragraphCompteur = document.getElementById("limite-text")
    const textSaisi = document.getElementById("text-progress")
    const textRestant = document.getElementById("text-restant")
    
    textSaisi.textContent = longueurSaisi
    textRestant.textContent = " Il vous reste " + reste


    if (reste < 0) {
        paragraphCompteur.style.color = "#CE0033"
        btnAjouter.disabled = true
    } else if (reste <= 16) {
        paragraphCompteur.style.color = "yellow"
        btnAjouter.disabled = false
    } else {
        paragraphCompteur.style.color = "#00000"
        btnAjouter.disabled = false
    }
})

// On n'ecoute l'événment sur le formulaire
btnAjouter.addEventListener("click", (event)=> {
    event.preventDefault()

    let indice
    // Récupération des valeurs saisies du formulaire
    const inputNomSaisi = inputNom.value
    const inputPrenomSaisi = inputPrenom.value
    const inputBiographieSaisi = inputBiographie.value
    const inputNiveauSaisi = inputNiveau.value
    
    // Vérificaation des informations du formulaire
    
    if (inputPrenomSaisi.trim().length < 4 || inputNomSaisi.trim().length < 4 || inputBiographieSaisi.trim().length < 8 || inputNiveauSaisi.trim().length < 3) {
      inputNom.classList.add("invalid")
      inputPrenom.classList.add("invalid")
      inputNiveau.classList.add("invalid")
      inputBiographie.classList.add("invalid")
      alert("Merci de saisir des informations correctes")
      return
    }
    
    // Création de l'element à mettre dans la carte 
    const nouveauApprenant = {
      nom : inputNomSaisi ,
      prenom : inputPrenomSaisi,
      niveau: inputNiveauSaisi,
      biographie : inputBiographieSaisi,
    }

    tab.push(nouveauApprenant)
    indice = tab.indexOf(nouveauApprenant)
    
    // Appel de la fonction pour creer une nouvelle carte
    creerCarte(nouveauApprenant, laListe, indice)

    inputNom.value = ""
    inputPrenom.value = ""
    inputBiographie.value = ""
    inputNiveau.value = ""
});

// Sauvegarde des données du carte sur la bases de données 
btnSauvegarder.addEventListener("click", (event)=>{
   event.preventDefault()
    // on vide la page
   contenuPage.innerHTML = "" 
   // on creer un tutre
   const titre = document.createElement("h3")
   titre.classList.add("p-5")
   titre.innerText = "La liste des apprenants"
   contenuPage.appendChild(titre)
   const div = document.createElement("div")
   div.classList.add("m-5")
   div.style.flexWrap = "wrap"
   div.classList.add("d-flex")
   titre.appendChild(div)



   // on ajoute tout les élements du tableau dans la base de données
   tab.forEach((apprenant)=>{
        fetch(API_URL, {
            method: "POST",
            headers: {
            apikey: API_KEY,
            "Content-Type": "application/json",
            Prefer: "return=representation",
            },
            body: JSON.stringify(apprenant),
        })
            .then((response) => response.json())
            .then((data) => {
            const ideeCreeAuNiveauAPI = data[0]
            // console.log(ideeCreeAuNiveauAPI)
            //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
            creerApprenants(ideeCreeAuNiveauAPI, div)
            })

        })

        // on affiche tout les élément de la base de données
            fetch(API_URL, {
              headers: {
                apikey: API_KEY,
              },
            })
              .then((response) => response.json())
              .then((infos) => {
                infos.forEach((info) => {
                  creerApprenants(info, div) 
                })
              })

    })