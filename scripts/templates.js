function getBooksTemplate(i) {
  return `
    <div class="book_example">
                        <h2 class="book_name">${books[i].name}</h2>
                        <hr class="separator">
                        <div class="dfr cc">
                            <img class="book_cover" src="assets/img/book_img.jpg" alt="Cover">
                        </div>
                        <hr class="separator">
                        <div class="basic_data_div dfc">
                            <div class="price_and_likes dfr sbc">
                                <h2 class="price_tag dfr sbsf">${books[i].price.toFixed(2).replace('.',',')} €</h2>
                                <div class="like_div dfr sbc">
                                    <span onload="likedOrNot() id="likes_count_${i}">${books[i].likes}</span>
                                    <button class="book_btns">
                                        <img class="like_dislike_icon" id="like_${i}" src="${books[i].liked ? "assets/icons/dislike.png" : "assets/icons/like.png"}"
                                            onclick="toggleLike(${i})" alt="like">
                                    </button>
                                </div>
                            </div>
                            <div class="book_details dfc">
                                <div class="author_year_genre dfr"><span class="book_details_details">Autor: </span><span>${books[i].author}</span></div>
                                <div class="author_year_genre dfr"><span class="book_details_details">Erscheinungsjahr: </span><span>${books[i].publishedYear}</span></div>
                                <div class="author_year_genre dfr"><span class="book_details_details">Genre: </span><span>${books[i].genre}</span></div>
                            </div>
                        </div>
                        <hr class="separator">
                        <div class="commentary_div">
                            <h3 class="book_details">Kommentare: </h3>
                            <div class="commentary_area dfcr" id="commentary_content_${i}"></div>
                            <div class="dfr sbsf">
                                <input type="text" class="commentary" id="commentary_input_${i}" required placeholder="Schreibe dein Kommentar ...">
                                <button onclick="addCommentary(${i})" class="book_btns">
                                    <img class="send_icon" src="assets/icons/send.png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
    `;
}

function getCommentariesTemplate(userName, userComment) {
  return `
  <table class="comments dfr">
    <tr class="display_comment">
      <td class="comment_writer">[${userName}]:</td>
      <td class="comment_text">${userComment}</td>
    </tr>
  </table>
  `;
}

function getNoCommentariesTemplate() {
    return `
    <span class="comments dfr">Es ist noch kein Kommentar vorhanden.</span>
    `;
}
