//Importation des dépendances
import "./css/style.scss";
import "./font/Sora-ExtraBold.ttf"
import srcLeChat from "./img/monchatcursed.png";
import { Memes } from "./js/memes.js";
import { Displayer } from "./js/displayer.js";
//import random from './html/random.html';

//Définition des variables necessaires et couleurs
const displayer = new Displayer();
const color = [
  "#6002ee",
  "#0004ee",
  "#1dce26",
  "#ce961d",
  "#ce321d",
  "#ce1d8a",
];

//tirage au sort d'une couleur et application
var nbColor = Math.floor(Math.random() * color.length);
document.documentElement.style.setProperty("--color", color[nbColor]);

document.getElementById("image").innerHTML =
  '<img class="photoAccueil" src="' + srcLeChat + '" alt="Un Potichat">';

var memes = new Memes("result");

function fetchMeme() {
  displayer.memesDisplay();
  memes.EventLis();
  memes.memeSelector(10);
}


window.fetchMeme = fetchMeme;
