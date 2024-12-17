
let liked = false;                                                  // true ist ge likeed... false ist ent bzw nicht liked


function countOnClick() {                                           // Funktion bei onclick
  let likeCountElement = document.getElementById("likeCount");      // Holt sich das Like-Count-Element
  let likeCount = parseInt(likeCountElement.innerHTML);             // Aktuelle Like-Anzahl abrufen

  // schaltstatus 
  if (liked) {                                                      // wenn bereits ge liked ist,
    likeCount --;                                                    // dann wird ent liked.
    liked = false;                                                  // und auf nicht liked gesetzt =  false
  } else {                                                          // wenn nicht, dann 
    likeCount ++;                                                    // dann wird beim ge liked einer mehr gezählt
    liked = true;                                                   // und auf liked gesetzt =  true
  }


likeCountElement.innerHTML = likeCount;                           // Like-Anzahl werd ausgeben bzw aktualisiert


let likeButton = document.getElementById("likeButton");           // Bild beim drücken auf button wechseln
  if (liked) {                                                      // wenn bereits ge liked ist,
    likeButton.innerHTML = '<img class="likes-logo-heart-img" src="./img/logos/heart full.png" alt="liked">'; // dann wird dasgefüllte herz img angezeigt
  }
  else {                                                          // wenn nicht ge liked ist, dann
    likeButton.innerHTML = '<img class="likes-logo-heart-img" src="./img/logos/heart empty.png" alt="like button">'; //dann wirds leere herz angezeigt.
  }
}
