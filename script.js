
let books = {
  { "bookOne": 
           {
           "name": "Die Geheimnisse des Ozeans",
           "author": "Clara Meer",
           "likes": 1250,
           "liked": true,
           "price": 19.99,
           "publishedYear": 2018,
           "genre": "Fantasy",
           "comments": 
               {
               "name": "Leser123",
               "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
               },
               {
               "name": "Bookworm84",
               "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
               },
               {
               "name": "FantasyFanatic",
               "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
               },
               {
               "name": "SciFiGuru",
               "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
               },
               {
               "name": "NovelLover",
               "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
               }
           } 
    }

   } 








// unklar hilfe video machen 

// mit json datei? array da  drin function in js aufrufen lassen und dann verwenden?
// container mit js neuen kreieren? oder  leere in html und da befüllen
// habe pfad img zu array dazu falsch?



// let currentIndex = 0;                                                  //startet bei 0


// function displayBooks() {                                              //function, books anzeigen
//   const container = document.getElementById('booksContainer');         // constantinante container ist id booksContainer
//   container.innerHTML = '';                                            // container leeren

//   books.forEach((book, index) => {                                     // durch jedes buch im array blättern
//     const bookElement = document.createElement('div');                 // div container über js hinzufügen Parameter?????
//     bookElement.classList.add('book');
    
//   });
// }

// neu laden mit onload??? laden der seite und anzeien lassen
                                             

// function getJSONByAPI(){                                                //holt daten  aus  json datei
//   fetch("./src/scripts/book.json").then((response) => {                 // fetch gibt  promis zurück dateiname und  lokalisation
//     console.log(response);
//     return response.json()
//   })
//   .then((profile) => {
//     console.log(profile);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }

// getJSONByAPI();