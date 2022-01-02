/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tab\": () => (/* binding */ tab)\n/* harmony export */ });\n/* harmony import */ var _carte_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carte.js */ \"./src/carte.js\");\n/* harmony import */ var _apprenants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apprenants.js */ \"./src/apprenants.js\");\n// import insererApprenant from \"./insertion\";\nconst API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDgzMzg3MCwiZXhwIjoxOTU2NDA5ODcwfQ.1nnrzdiWTaLA82VqW-vsGxoi8F9vVs1J6jkPeVWodzg\"\nconst API_URL = \"https://zyesichgkjjujbpairss.supabase.co/rest/v1/Apprenants\"\n\n;\n\n\n// Recuperation des élément du formulaire\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputNiveau = document.querySelector(\"#selection\")   \nconst inputBiographie = document.querySelector(\"#bio\")\nconst btnAjouter = document.querySelector(\"#ajouter\")\n\nconst laListe = document.querySelector(\"#apprenants\")\nconst btnSauvegarder = document.querySelector(\"#sauvegarder\")\nconst contenuPage = document.querySelector(\"main\")\n\n//Tableau pour stocker les cartes\nlet tab = [] \n\n// VERIFICATION DES MOTS SAISIS\ninputBiographie.addEventListener(\"input\", (event) => {\n    const longueurMax = 130\n    const contenuSaisi = inputBiographie.value\n    const longueurSaisi = contenuSaisi.length\n    const reste = longueurMax - longueurSaisi\n\n    //actualiser le dom pour afficher le nombre\n    const paragraphCompteur = document.getElementById(\"limite-text\")\n    const textSaisi = document.getElementById(\"text-progress\")\n    const textRestant = document.getElementById(\"text-restant\")\n    \n    textSaisi.textContent = longueurSaisi\n    textRestant.textContent = \" Il vous reste \" + reste\n\n\n    if (reste < 0) {\n        paragraphCompteur.style.color = \"#CE0033\"\n        btnAjouter.disabled = true\n    } else if (reste <= 16) {\n        paragraphCompteur.style.color = \"yellow\"\n        btnAjouter.disabled = false\n    } else {\n        paragraphCompteur.style.color = \"#00000\"\n        btnAjouter.disabled = false\n    }\n})\n\n// On n'ecoute l'événment sur le formulaire\nbtnAjouter.addEventListener(\"click\", (event)=> {\n    event.preventDefault()\n\n    let indice\n    // Récupération des valeurs saisies du formulaire\n    const inputNomSaisi = inputNom.value\n    const inputPrenomSaisi = inputPrenom.value\n    const inputBiographieSaisi = inputBiographie.value\n    const inputNiveauSaisi = inputNiveau.value\n    \n    // Vérificaation des informations du formulaire\n    \n    if (inputPrenomSaisi.trim().length < 4 || inputNomSaisi.trim().length < 4 || inputBiographieSaisi.trim().length < 8 || inputNiveauSaisi.trim().length < 3) {\n      inputNom.classList.add(\"invalid\")\n      inputPrenom.classList.add(\"invalid\")\n      inputNiveau.classList.add(\"invalid\")\n      inputBiographie.classList.add(\"invalid\")\n      alert(\"Merci de saisir des informations correctes\")\n      return\n    }\n    \n    // Création de l'element à mettre dans la carte \n    const nouveauApprenant = {\n      nom : inputNomSaisi ,\n      prenom : inputPrenomSaisi,\n      niveau: inputNiveauSaisi,\n      biographie : inputBiographieSaisi,\n    }\n\n    tab.push(nouveauApprenant)\n    indice = tab.indexOf(nouveauApprenant)\n    \n    // Appel de la fonction pour creer une nouvelle carte\n    ;(0,_carte_js__WEBPACK_IMPORTED_MODULE_0__.creerCarte)(nouveauApprenant, laListe, indice)\n\n    inputNom.value = \"\"\n    inputPrenom.value = \"\"\n    inputBiographie.value = \"\"\n    inputNiveau.value = \"\"\n});\n\n// Sauvegarde des données du carte sur la bases de données \nbtnSauvegarder.addEventListener(\"click\", (event)=>{\n   event.preventDefault()\n    // on vide la page\n   contenuPage.innerHTML = \"\" \n   // on creer un tutre\n   const titre = document.createElement(\"h3\")\n   titre.classList.add(\"p-5\")\n   titre.innerText = \"La liste des apprenants\"\n   contenuPage.appendChild(titre)\n   const div = document.createElement(\"div\")\n   div.classList.add(\"m-5\")\n   div.style.flexWrap = \"wrap\"\n   div.classList.add(\"d-flex\")\n   titre.appendChild(div)\n\n\n\n   // on ajoute tout les élements du tableau dans la base de données\n   tab.forEach((apprenant)=>{\n        fetch(API_URL, {\n            method: \"POST\",\n            headers: {\n            apikey: API_KEY,\n            \"Content-Type\": \"application/json\",\n            Prefer: \"return=representation\",\n            },\n            body: JSON.stringify(apprenant),\n        })\n            .then((response) => response.json())\n            .then((data) => {\n            const ideeCreeAuNiveauAPI = data[0]\n            // console.log(ideeCreeAuNiveauAPI)\n            //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE\n            ;(0,_apprenants_js__WEBPACK_IMPORTED_MODULE_1__.creerApprenants)(ideeCreeAuNiveauAPI, div)\n            })\n\n        })\n\n        // on affiche tout les élément de la base de données\n            fetch(API_URL, {\n              headers: {\n                apikey: API_KEY,\n              },\n            })\n              .then((response) => response.json())\n              .then((infos) => {\n                infos.forEach((info) => {\n                  ;(0,_apprenants_js__WEBPACK_IMPORTED_MODULE_1__.creerApprenants)(info, div) \n                })\n              })\n\n    })\n\n//# sourceURL=webpack://schoolapp/./src/app.js?");

/***/ }),

/***/ "./src/apprenants.js":
/*!***************************!*\
  !*** ./src/apprenants.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creerApprenants\": () => (/* binding */ creerApprenants)\n/* harmony export */ });\n/* harmony import */ var _progression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progression */ \"./src/progression.js\");\nconst API_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDgzMzg3MCwiZXhwIjoxOTU2NDA5ODcwfQ.1nnrzdiWTaLA82VqW-vsGxoi8F9vVs1J6jkPeVWodzg\"\nconst API_URL = \"https://zyesichgkjjujbpairss.supabase.co/rest/v1/Apprenants\"\n\n;\n\nconst principal = document.querySelector(\"main\")\n\nfunction creerApprenants(details, position){\n    const idButtonDetails = \"btn_details-\" + Math.random()\n    const idCard = \"btn-card-\" + details.id\n \n    position.insertAdjacentHTML(\n        \"beforeend\",\n        `\n        <div id =${idCard}>\n        <div class=\"card mb-3 m-2\" style=\"width: 500px; height: 200px; border-radius: 15px;\" >\n        <div class=\"row g-0\">\n          <div class=\"col-md-4\">\n          <img src=\"src/images/profil.jpeg\" class=\"img-fluid rounded-start w-100\" alt=\"...\" style=\"border-radius: 5px; height: 200px;\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">${details.prenom}   ${details.nom}</h5>\n              <p class=\"card-text\">${details.biographie}.</p>\n              <p class=\"card-text\" style=\"color: green\"><small class=\"text-muted\">${details.niveau}</small></p>\n              <a href=\"#\" class=\"card-link\" id=${idButtonDetails}>Détails</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      `\n      )\n      \n      // Récuperation des bouttons modifier et supprimer\n      const bouttonDetails = document.getElementById(idButtonDetails)\n      const idCarde = document.getElementById(idCard) \n     \n      bouttonDetails.addEventListener(\"click\", (event)=>{\n          event.preventDefault();\n          \n          // on vide la page\n          principal.innerHTML = \"\" \n          principal.insertAdjacentHTML(\n            \"beforeend\",\n            `\n            <h2 class=\"text-center p-3\"> Les détails de l'apprenant à voir ci-dessous </h2>\n            <div class=\"card mb-3 m-5\" style=\"max-width: 1500px; max-height: 280px; border-radius: 15px; border: none\" >\n            <div class=\"row g-0\">\n              <div class=\"col-md-4\">\n              <img src=\"src/images/profil.jpeg\" class=\"img-fluid rounded-start w-100 h-50\" alt=\"...\" style=\" border-radius: 5px;\">\n              </div>\n              <div class=\"col-md-8 text-center my-2\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\" style=\"font-size: 50px; font-weight: bold\">${details.prenom}   ${details.nom}</h5>\n                  <p class=\"card-text\" style=\"font-size: 30px;\">${details.biographie}.</p>\n                  <p class=\"card-text\" style=\"\"><small class=\"text-muted bg-danger\" style=\"font-size: 25px;\">${details.niveau}</small></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          `\n          )\n          \n          //On affiche la progression des compétences \n\n          if (details.niveau == \"Avancé\"){\n            (0,_progression__WEBPACK_IMPORTED_MODULE_0__.progression)(\"50%\", \"65%\", \"70%\", \"75%\", \"78%\", \"83%\", \"88%\", \"94%\")\n          }\n          if (details.niveau == \"Intérmédiaire\"){\n            (0,_progression__WEBPACK_IMPORTED_MODULE_0__.progression)(\"33%\", \"58%\", \"38%\", \"48%\", \"55%\", \"69%\", \"75%\", \"85%\")\n          }\n          if (details.niveau == \"Débutant\"){\n            (0,_progression__WEBPACK_IMPORTED_MODULE_0__.progression)(\"23%\", \"28%\", \"30%\", \"30%\", \"45%\", \"50%\", \"45%\", \"40%\")\n          }\n\n      })\n\n}\n\n//# sourceURL=webpack://schoolapp/./src/apprenants.js?");

/***/ }),

/***/ "./src/carte.js":
/*!**********************!*\
  !*** ./src/carte.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creerCarte\": () => (/* binding */ creerCarte)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n// RÉCUPÉRATION DES ÉLÉMENTS DU FORMULAIRE\n\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputNIveau = document.querySelector(\"#selection\")\nconst inputBiographie = document.querySelector(\"#bio\")\nconst btnAjouter = document.querySelector(\"#ajouter\")\n\nfunction creerCarte(details, position, ind){\n\n    const idButtonModifier = \"btn_valider-\" + Math.random() \n    const idButtonSupprimer = \"btn_refuser-\" + Math.random()\n    const idCard = \"btn-card\" + Math.random()\n    const idBiographie = \"btn_biographie-\" + Math.random()\n    const idNiveau = \"btn_niveau-\" + Math.random()\n    const idPrenom = \"btn_prenom-\" + Math.random()\n    const idNom = \"btn_nom-\" + Math.random()\n\n    // On creer une carte pour chaque apprenants \n    position.insertAdjacentHTML(\n        \"beforeend\",\n        `\n        <div id =${idCard}>\n        <div class=\"card mb-3 m-2\" style=\"max-width: 1000px; max-height: 230px; border-radius: 15px;\" >\n        <div class=\"row g-0\">\n          <div class=\"col-md-4\">\n       \n          <img src=\"src/images/profil.jpeg\" class=\"img-fluid rounded-start w-100\" alt=\"...\" style=\"height: 230px; border-radius: 5px;\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\"> <span id = ${idPrenom}> ${details.prenom} </span> <span id = ${idNom}> ${details.nom}  </span> </h5>\n              <p class=\"card-text\" id = ${idBiographie}>${details.biographie}.</p>\n              <p class=\"card-text\" style=\"color: green\"><small class=\"text-muted\" id = ${idNiveau}>${details.niveau}</small></p>\n              <a href=\"#\" class=\"card-link\" id=${idButtonModifier}>Modifier</a>\n              <a href=\"#\" class=\"card-link\" id=${idButtonSupprimer}>Supprimer</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      `\n      )\n      \n      // Récuperation des bouttons modifier et supprimer\n      const bouttonModifier = document.getElementById(idButtonModifier)\n      const bouttonSupprimer = document.getElementById(idButtonSupprimer)\n      const idCarde = document.getElementById(idCard) \n      const nom = document.getElementById(idNom)\n      const prenom = document.getElementById(idPrenom)\n      const Biographie = document.getElementById(idBiographie)\n      const Niveau = document.getElementById(idNiveau)\n     \n      bouttonModifier.addEventListener(\"click\", (event)=>{\n          event.preventDefault();\n\n          // On recupére les valeurs de l'apprenant sur le formulaire\n          inputNom.value = details.nom\n          inputPrenom.value = details.prenom\n          inputBiographie.value = details.biographie\n          inputNIveau.value = details.niveau\n          \n          // on creer un bouton pour modifier les nouvellles informations saisies\n          btnAjouter.style.display = \"none\"\n          const editButton = document.createElement(\"button\");\n          editButton.innerText = \"Modifier\"\n          editButton.style.backgroundColor = \"#CE0033\"\n          editButton.style.borderRadius = \"5px\"\n          editButton.style.width = \"90px\"\n          editButton.style.height = \"50px\"\n          editButton.style.color = \"white\"\n          document.querySelector(\"form\").appendChild(editButton)\n          \n          // on écoute le bouton modifier\n          editButton.addEventListener(\"click\", (event)=>{\n              event.preventDefault()\n              // on affiche sur la carte les nouvelles informations \n              nom.textContent = inputNom.value\n              prenom.textContent = inputPrenom.value\n              Biographie.textContent = inputBiographie.value\n              Niveau.textContent = inputNIveau.value\n              \n              // On creer un nouveau element qui contient les modifications \n              const nouveauApprenant = {\n                nom : inputNom.value ,\n                prenom : inputPrenom.value,\n                niveau: inputNIveau.value,\n                biographie : inputBiographie.value,\n              }\n\n              // On remplace l'élément supprimer dans le tableau \n              _app__WEBPACK_IMPORTED_MODULE_0__.tab.splice(ind, 1, nouveauApprenant);\n              console.log(_app__WEBPACK_IMPORTED_MODULE_0__.tab)\n\n              // Aprés modification on supprime le bouton \n              editButton.remove(editButton)\n              \n              // on vide a nouveau le formulaire \n              inputNom.value = \"\"\n              inputPrenom.value = \"\"\n              inputBiographie.value = \"\"\n              inputNIveau.value = \"\"\n\n          })\n\n      })\n\n      bouttonSupprimer.addEventListener(\"click\", (event)=>{\n        event.preventDefault()\n        idCarde.parentNode.removeChild(idCarde);\n        // On supprime l'élément dans le tableau \n        _app__WEBPACK_IMPORTED_MODULE_0__.tab.splice(ind, 1)\n        console.log(_app__WEBPACK_IMPORTED_MODULE_0__.tab)\n        return false;\n      })\n\n\n}\n\n//# sourceURL=webpack://schoolapp/./src/carte.js?");

/***/ }),

/***/ "./src/progression.js":
/*!****************************!*\
  !*** ./src/progression.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"progression\": () => (/* binding */ progression)\n/* harmony export */ });\nconst principal = document.querySelector(\"main\")\n\nfunction progression(nb1, nb2, nb3, nb4, nb5, nb6, nb7, nb8){\n\n    principal.insertAdjacentHTML(\n        \"afterend\",\n          `<div class= \"m-5\">\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: ${nb1}; height: 30px; font-size: 15px\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Créer une base de données </div>\n              </div>\n              <br>\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped bg-secondary\" role=\"progressbar\" style=\"width: ${nb2}; height: 30px; font-size: 15px\" aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Développer la partie back-end d’une application web ou web mobile </div>\n              </div>\n              <br>\n              <div class=\"progress h-100 \">\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: ${nb3}; height: 30px; font-size: 15px\" aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Développer les composants d’accès aux données </div>\n              </div>\n              <br>\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped bg-dark\" role=\"progressbar\" style=\"width: ${nb4}; height: 30px; font-size: 15px\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce </div>\n              </div>\n              <br>\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: ${nb5}; height: 30px; font-size: 15px\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Réaliser une interface utilisateur avec une solution de gestion de contenu ou e- commerce </div>\n              </div>\n              <br>\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: ${nb6}; height: 30px; font-size: 15px\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Développer une interface utilisateur web dynamique </div>\n              </div>\n              <br>\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\" style=\"width: ${nb7}; height: 30px; font-size: 15px\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Réaliser une interface utilisateur web statique et adaptable </div>\n              </div>\n              <br>\n              <div class=\"progress h-100\">\n                <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: ${nb8}; height: 30px; font-size: 15px\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Maquetter une application </div>\n              </div>\n          </div>\n      `\n  )\n}\n\n//# sourceURL=webpack://schoolapp/./src/progression.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;