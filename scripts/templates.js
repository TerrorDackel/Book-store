let bookTemplate = `
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
                ${renderComments(book.comments)} <!-- Comments section -->
            </div>
            <input id="commentName-${indexBook}" type="text" placeholder="Dein Name">
            <input id="commentText-${indexBook}" type="text" placeholder="Schreibe einen Kommentar">
            <button class="paper-plan-btn" onclick="addComment(${indexBook})">
                <img class="paper-plan-img" src="./img/logos/paper plan img.png">
            </button>
        </div>
    </div>
`;

let commentTemplate = `
    <div class="comment">
        <p class="comment-show">${comment}</p>
    </div>
`;
