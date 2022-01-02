const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDgzMzg3MCwiZXhwIjoxOTU2NDA5ODcwfQ.1nnrzdiWTaLA82VqW-vsGxoi8F9vVs1J6jkPeVWodzg"
const API_URL = "https://zyesichgkjjujbpairss.supabase.co/rest/v1/Apprenants"

import { progression } from "./progression"

const principal = document.querySelector("main")

export function creerApprenants(details, position){
    const idButtonDetails = "btn_details-" + Math.random()
    const idCard = "btn-card-" + details.id
 
    position.insertAdjacentHTML(
        "beforeend",
        `
        <div id =${idCard}>
        <div class="card mb-3 m-2" style="width: 500px; height: 200px; border-radius: 15px;" >
        <div class="row g-0">
          <div class="col-md-4">
          <img src="src/images/profil.jpeg" class="img-fluid rounded-start w-100" alt="..." style="border-radius: 5px; height: 200px;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${details.prenom}   ${details.nom}</h5>
              <p class="card-text">${details.biographie}.</p>
              <p class="card-text" style="color: green"><small class="text-muted">${details.niveau}</small></p>
              <a href="#" class="card-link" id=${idButtonDetails}>Détails</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      `
      )
      
      // Récuperation des bouttons modifier et supprimer
      const bouttonDetails = document.getElementById(idButtonDetails)
      const idCarde = document.getElementById(idCard) 
     
      bouttonDetails.addEventListener("click", (event)=>{
          event.preventDefault();
          
          // on vide la page
          principal.innerHTML = "" 
          principal.insertAdjacentHTML(
            "beforeend",
            `
            <h2 class="text-center p-3"> Les détails de l'apprenant à voir ci-dessous </h2>
            <div class="card mb-3 m-5" style="max-width: 1500px; max-height: 280px; border-radius: 15px; border: none" >
            <div class="row g-0">
              <div class="col-md-4">
              <img src="src/images/profil.jpeg" class="img-fluid rounded-start w-100 h-50" alt="..." style=" border-radius: 5px;">
              </div>
              <div class="col-md-8 text-center my-2">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 50px; font-weight: bold">${details.prenom}   ${details.nom}</h5>
                  <p class="card-text" style="font-size: 30px;">${details.biographie}.</p>
                  <p class="card-text" style=""><small class="text-muted bg-danger" style="font-size: 25px;">${details.niveau}</small></p>
                </div>
              </div>
            </div>
          </div>
          
          `
          )
          
          //On affiche la progression des compétences 

          if (details.niveau == "Avancé"){
            progression("50%", "65%", "70%", "75%", "78%", "83%", "88%", "94%")
          }
          if (details.niveau == "Intérmédiaire"){
            progression("33%", "58%", "38%", "48%", "55%", "69%", "75%", "85%")
          }
          if (details.niveau == "Débutant"){
            progression("23%", "28%", "30%", "30%", "45%", "50%", "45%", "40%")
          }

      })

}