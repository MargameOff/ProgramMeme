import srcLeChat from "../img/monchatcursed.png";

class Displayer {
    

  memesDisplay() {
    //suppression de l'ancien affichage
    let elem = document.getElementById("center");
    elem.parentNode.removeChild(elem);

    //création de l'affichage multi-elements
    let header = document.getElementById("header");
    header.innerHTML =
      '<img class="photo" src="' +
      srcLeChat +
      '" alt="Un Potichat" /><h1>Program<span class="violet">Meme</span></h1>';
      let section = document.getElementById("header");
      let newDiv = document.createElement("div");
      let newSelect = document.createElement("select");
      let newDefaultOption = document.createElement("option");
      newSelect.setAttribute("id", "sel")
      newDefaultOption.selected = 'selected';
      newDefaultOption.disabled = true;
      newDefaultOption.textContent="Nombre de Memes";
      newSelect.appendChild(newDefaultOption);
      for (let index = 1; index < 7; index++) {
        let newOption = document.createElement("option");
        newOption.value=index*5;
        newOption.textContent=(index*5)+" memes";
        newSelect.appendChild(newOption);
      }
      newDiv.setAttribute("class","select");
      newDiv.setAttribute("id","select");
      newDiv.appendChild(newSelect);
      section.appendChild(newDiv);

  }

  singleMemeDisplay(meme){
    let sel = document.getElementById('select')
    sel.parentNode.removeChild(sel);
    let elem = document.getElementById("result");
    elem.parentNode.removeChild(elem);
    let section = document.getElementById('section')

    //Création des elements 
    let newSection=document.createElement('section')
    let newDiv = document.createElement('div')
    let newTitre = document.createElement('h2')
    let newImage = document.createElement('img')
    let newScore = document.createElement('h3')
    let newASource = document.createElement('a')
    let newAside = document.createElement('aside')
    let newDiv2 = document.createElement('div')
    let newDiv3 = document.createElement('div')
    let newPseudo = document.createElement('h2')
    let newImagePseudo = document.createElement('img')
    let newKarma = document.createElement('h3')
    let newProfil = document.createElement('a')
    
    newDiv.setAttribute("class","center")
    newDiv.setAttribute("id","center")
    newDiv2.setAttribute("class","center")
    newDiv2.setAttribute("id","center")
    newImage.setAttribute('class','singlememe')
    newImagePseudo.setAttribute('class','userpp')
    newTitre.textContent=meme.text
    newImage.src=meme.srcImage
    newScore.textContent='Score: '+meme.score
    newASource.textContent='Source du Post'
    newASource.href=meme.srcPost
    newImagePseudo.src= meme.srcPpUser
    newPseudo.textContent=meme.username
    newKarma.textContent='Karma : '+meme.karma
    newProfil.textContent="Profil de l'auteur"
    newProfil.href=meme.srcUser
    newSection.style.float='left'
    newSection.style.width='68%'
    newAside.style.float='right'
    newAside.style.width='25%'
    newAside.style.borderRadius='40px';
    newAside.style.marginRight='40px'
    newImagePseudo.style.width='170'
    newImagePseudo.style.height='170'
    newImagePseudo.style.borderRadius='50%'
    newDiv.style.color='aliceblue'
    newDiv.style.fontFamily='"Sora", sans-serif'
    newImage.style.maxHeight='800'
    newImage.style.maxWidth='500'
    newASource.style.background=''
    newAside.style.paddingBottom='30px'
    newAside.style.color='aliceblue'
    newAside.style.fontFamily='"Sora", sans-serif'

    newDiv.appendChild(newTitre)
    newDiv.appendChild(newImage)
    newDiv.appendChild(newScore)
    newDiv.appendChild(newASource)
    newDiv3.appendChild(newImagePseudo)
    newDiv3.appendChild(newPseudo)
    newDiv2.appendChild(newDiv3)
    newDiv2.appendChild(newKarma)
    newDiv2.appendChild(newProfil)
    newAside.appendChild(newDiv2)
    newSection.appendChild(newDiv)
    section.appendChild(newSection)
    section.appendChild(newAside)
    //section.parentElement.insertBefore(newAside,section.nextSibling)
  }
}
export { Displayer };
