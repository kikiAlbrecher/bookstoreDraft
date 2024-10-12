i = 0;

function init() {
  saveBooksToLocalStorage();
  getBooksFromLocalStorage();
  renderBooks();
}

function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getBooksFromLocalStorage() {
  let locStorageBooks = JSON.parse(localStorage.getItem("books"));

  if (locStorageBooks.length == 0) {
    books != locStorageBooks;
  } else {
    books = locStorageBooks;
  }
}

function renderBooks() {
  let contentRef = document.getElementById('all_books');
  contentRef.innerHTML = "";

  if (contentRef == 0 && books.length < 1) {
    books[i] != contentRef;
  }

  if (contentRef != 0) {
    for (let i = 0; i < books.length; i++) {
      contentRef.innerHTML += getBooksTemplate(i);
      renderComments(i);
    }
  }
}

function renderComments(i) {
  let commentRef = document.getElementById(`commentary_content_${i}`);
  commentRef.innerHTML = "";

  if (books[i].comments.length < 1) {
    books[i].comments != commentRef;
    commentRef.innerHTML += getNoCommentariesTemplate();
  }

  if (commentRef != 0) {
    for (let indexCommentaries = 0; indexCommentaries < books[i].comments.length; indexCommentaries++) {
      const comments = books[i].comments[indexCommentaries];
      let userName = comments.name;
      let userComment = comments.comment;
      commentRef.innerHTML += getCommentariesTemplate(userName, userComment);
    }
  }
}

function toggleLike(i) {
  let likesCountRef = document.getElementById(`likes_count_${i}`);

  if (books[i].liked == true) {
    books[i].liked = false;
    if (books[i].likes > 1) {
      likesCountRef = books[i].likes++;
    } else {
      books[i].likes = 0;
    }
  } else {
    books[i].liked = true;
    likesCountRef = books[i].likes--;
  }
  renderBooks();
  saveBooksToLocalStorage();
}

function addCommentary(i) {
  let userCommentRef = document.getElementById(`commentary_input_${i}`);
  let newComment = userCommentRef.value.trim()

  if (newComment == "") {
    alert`Eintrag fehlt!`;
  }

  if (newComment !== "") {
    let commentObj = {
      name: `guest`,
      comment: newComment,
    };
    books[i].comments.push(commentObj);
    userCommentRef.value = "";
    renderBooks();
    saveBooksToLocalStorage();
  }
}
