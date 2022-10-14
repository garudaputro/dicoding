document.addEventListener("render-book", () => {
    const unfinishedBook = document.getElementById("incompleteBookshelfList");
    unfinishedBook.innerHTML = "";
  
    const finishedBook = document.getElementById("completeBookshelfList");
    finishedBook.innerHTML = "";
  
    for (const bookItem of books) {
      const bookElement = makeBookElement(bookItem);
      if (!bookItem.isComplete) {
        unfinishedBook.append(bookElement);
      } else {
        finishedBook.append(bookElement);
      }
    }
  });