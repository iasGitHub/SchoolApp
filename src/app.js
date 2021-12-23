const infoApprenants = document.querySelector("form")
const laListe = document.getElementById("apprenants");
const inputNom = document.getElementById("nom")
const inputPrenom = document.getElementById("prenom")
const selectNiveau = document.getElementById("selection")
const inputBio = document.getElementById("bio")
const ajouter = document.getElementById("ajouter")


infoApprenants.addEventListener("submit", (event) => {
    event.preventDefault()

    // RECUPERATION DES VALEURS DU FORMULAIRE
    nomSAisi = inputNom.value
    prenomSaisi = inputPrenom.value
    niveauChoisi = selectNiveau.value
    biographieSaisi = inputBio.value

    if (nomSAisi.trim().length < 4 || prenomSaisi.trim().length < 7) {
        alert("Merci de saisir des informations correctes")
        return
    }

    let nouveauApprenant = {
        nom : nomSAisi,
        prenom : prenomSaisi,
        niveau : niveauChoisi,
        biographie : biographieSaisi,
    }
    insererApprenant(nouveauApprenant)
})

function insererApprenant(details){

    laListe.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="card card-idea m-2" style="width: 18rem" id="">
          <div class="card-body">
              <h5 class="card-title fw-bold">${details.nom}</h5>
              <p class="card-subtitle mb-2 text-muted">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, numquam deleniti cumque quibusdam sequi at?
              </p>
              <p class="card-text">${details.prenom}
              </p>
              <div class="d-flex justify-content-between">
                  <i
                      class="bi bi-check-circle text-success card-link"
                      style="font-size: 2rem" 
                  ></i>
              </div>
          </div>
      </div>
      `
      )
    
}

//console.log(details)