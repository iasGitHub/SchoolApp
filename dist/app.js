/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const infoApprenants = document.querySelector(\"form\")\nconst laListe = document.getElementById(\"apprenants\");\nconst inputNom = document.getElementById(\"nom\")\nconst inputPrenom = document.getElementById(\"prenom\")\nconst selectNiveau = document.getElementById(\"selection\")\nconst inputBio = document.getElementById(\"bio\")\nconst ajouter = document.getElementById(\"ajouter\")\n\n\ninfoApprenants.addEventListener(\"submit\", (event) => {\n    event.preventDefault()\n\n    // RECUPERATION DES VALEURS DU FORMULAIRE\n    nomSAisi = inputNom.value\n    prenomSaisi = inputPrenom.value\n    niveauChoisi = selectNiveau.value\n    biographieSaisi = inputBio.value\n\n    if (nomSAisi.trim().length < 4 || prenomSaisi.trim().length < 7) {\n        alert(\"Merci de saisir des informations correctes\")\n        return\n    }\n\n    let nouveauApprenant = {\n        nom : nomSAisi,\n        prenom : prenomSaisi,\n        niveau : niveauChoisi,\n        biographie : biographieSaisi,\n    }\n    insererApprenant(nouveauApprenant)\n})\n\nfunction insererApprenant(details){\n\n    laListe.insertAdjacentHTML(\n        \"afterbegin\",\n        `\n      <div class=\"card card-idea m-2\" style=\"width: 18rem\" id=\"\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title fw-bold\">${details.nom}</h5>\n              <p class=\"card-subtitle mb-2 text-muted\">\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, numquam deleniti cumque quibusdam sequi at?\n              </p>\n              <p class=\"card-text\">${details.prenom}\n              </p>\n              <div class=\"d-flex justify-content-between\">\n                  <i\n                      class=\"bi bi-check-circle text-success card-link\"\n                      style=\"font-size: 2rem\" \n                  ></i>\n              </div>\n          </div>\n      </div>\n      `\n      )\n    \n}\n\n//console.log(details)\n\n//# sourceURL=webpack://schoolapp/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;