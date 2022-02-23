import { Meme } from "./meme.js";
import { Displayer } from "./displayer.js";

var displayer = new Displayer();


class Memes {
  cardNumber = "25";
  subreddit = "ProgrammerHumor";
  type = ["hot", "random"];
  divIdName;
  constructor(divIdName) {
    this.divIdName = divIdName;
  }

  EventLis(){
    let loc = this;
    (function(loc){
    document.getElementById("sel").addEventListener("change", function () {
      loc.memeSelector(this.value);
    })
  })(loc)
  }

  async memeSelector(maxMeme) {    
    document.getElementById('result').innerHTML=""
    const response = await fetch(
      `https://www.reddit.com/r/${this.subreddit}/${this.type[0]}.json?t=week&limit=100`
    );
    var json = await response.json();
    let nbGood = "0";
    let nbAvalible = [...Array(100).keys()];
    while (nbGood < maxMeme) {
      let value = Math.floor(Math.random()*nbAvalible.length);
      if (!this.postIsAMeme(json, nbAvalible[value])) {
        nbAvalible.splice(value,1);
      } else {
        nbGood++;
        this.memeGrabber(nbAvalible[value], json);
        nbAvalible.splice(value,1);
      }
    }
  }

  postIsAMeme(json, id) {
    console.log(id)
    console.log(json)
    let url = json.data.children[id].data.url
    return (
      url.match(/\.(jpeg|jpg|gif|png)$/) != null
    );
  }

  async memeGrabber(id, json) {
    var tmpMeme = new Meme();
    tmpMeme.srcImage = json.data.children[id].data.url;
    tmpMeme.username = json.data.children[id].data.author;
    tmpMeme.srcPost =
      "https://www.reddit.com" + json.data.children[id].data.permalink;
    tmpMeme.text = json.data.children[id].data.title;
    tmpMeme.srcUser =
      "https://www.reddit.com/user/" + json.data.children[id].data.author;
    tmpMeme.id = json.data.children[id].data.id;
    tmpMeme.score = json.data.children[id].data.score;
    console.log(tmpMeme);
    let e = await this.findUserInformation(tmpMeme.username);
    tmpMeme.karma = e[0];
    tmpMeme.srcPpUser = e[1];
    this.multipleMemesDisplayer(tmpMeme);
  }

  async findUserInformation(username) {
    const response = await fetch(
      `https://www.reddit.com/user/${username}/about.json`
    );
    const json = await response.json();
    let karma = json.data.total_karma;
    let profilePicture = json.data.icon_img.split("?")[0];
    return [karma, profilePicture];
  }

  async multipleMemesDisplayer(meme) {
    var main = document.getElementById(this.divIdName);
    let newDiv = document.createElement("div");
    let newImage = document.createElement("img");
    let newUsername = document.createElement("h4");
    let newKarma = document.createElement("h4");
    let newA = document.createElement("div");

    newKarma.textContent = "Karma de l'Auteur: " + meme.karma;
    newKarma.style.color = "white";
    newA.style.background = "none";
    newA.style.padding = "";
    newA.style.color = "";
    newA.onclick = function () {
      displayer.singleMemeDisplay(meme);
    };
    //newA.setAttribute("href","https://google.com/"+meme.id);
    newImage.setAttribute("class", "img");
    newImage.src = meme.srcImage;
    newUsername.textContent = "Auteur: " + meme.username;
    newUsername.style.color = "white";

    newA.appendChild(newImage);
    newDiv.appendChild(newA);
    newDiv.appendChild(newUsername);
    newDiv.appendChild(newKarma);
    main.appendChild(newDiv);
  }
}
export { Memes };
