function init() {
    renderBooks();
};

function createBookHtml(book, indexBook) {                                                                                  // erstellt den html code
    return  `
        <div class="book">
            <h4>${book.name}</h4>
            <h5>Author: ${book.author}</h5>
            <img class="bookImage" src="${book.img}">
            <div class="Likes">
                <p class="likes">likes: ${book.likes}&nbsp;</p>
                <button onclick="toggleLike(${indexBook})" class="like-btn ${book.liked ? 'liked' : ''}">
                    <img src="img/logos/heart full.png" class="heart-icon filled" />
                    <img src="img/logos/heart empty.png" class="heart-icon empty" />
                </button>
            </div>
            <div class="published-year-genre">
                <p>${book.publishedYear}&nbsp;${book.genre}</p>
            </div>
            <p class="price">Preis: ${book.price}€</p>
            <p class="comment-headline">Kommentar:</p>
            <div class="comment-container">
                <div class="comment-show">
                    ${renderComments(book.comments)}
                </div>
                <div class="comment-container-comment-with-button">
                    <div class="comment-container-comment-without-button">
                    <input id="commentName-${indexBook}" type="text" placeholder="Name:">
                    <input id="commentText-${indexBook}" type="text" placeholder="Schreibe einen Kommentar:">
                     </div>
                    <button class="paper-plan-btn" onclick="addComment(${indexBook})">
                    <img class="paper-plan-img" src="./img/logos/paper plan img.png">
                    </button>
                </div>
            </div>
        </div>
    `;
}

function addComment(bookIndex) {
    const name = document.getElementById(`commentName-${bookIndex}`).value;                                                 //holt den namen
    const text = document.getElementById(`commentText-${bookIndex}`).value;                                                 // holt den text

    if (name && text) {                                                                                                     //überprüft ob name und text ausgefüllt sind
        books[bookIndex].comments.push({ name: name, comment: text });                                                            // fügt neueen kommentar hinzu
        renderBooks();                                                                                                      // rendert bücher neu um neuen kommentar anzuzeigen
    }
}

function renderComments(comments) {
    let commentsHtml = "";
    for (let indexComment = 0; indexComment < comments.length; indexComment++) {
        let comment = comments[indexComment];                                                                               //speichert den aktuellen kommentar
        commentsHtml += `
            <div class="comment">
                <p class="comment-show">${comment.name}:  ${comment.comment}</p>
            </div>
        `;
    }
    return commentsHtml;
}
 
function renderBooks() {
    let contentRef = document.getElementById('booksGallery');                                                                 // hol den referenz auf element mit id booksGallery                                         
    contentRef.innerHTML = "";                                                                                               // leert den inhalt

    let allBooksHTML = ""; 

    for (let indexBook = 0; indexBook < books.length; indexBook++) {                                                         // durchläuft alle bücher im array
        let book = books[indexBook];
        let bookHTML = createBookHtml(book, indexBook); 
        let commentsHTML = renderComments(book.comments);                                                                   // erstellt den html code für das buch                                                                   // erstellt den html code für die kommentare
        bookHTML = bookHTML.replace('{{comments}}', commentsHTML); 
        allBooksHTML += bookHTML;                                                                                           // fügt das buch zum gesamten html code der bücher hinzu
    }
    contentRef.innerHTML = allBooksHTML; 
}

function toggleLike(bookIndex) {
    const book = books[bookIndex];                                                                                          
    book.liked = !book.liked;                                                                                               
    book.likes += book.liked ? 1 : -1;                                                                                      
    renderBooks();
    console.log(book.liked);                                                                                                
}



