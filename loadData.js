const loadDataFromStorage = () => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (data !== null) {
      for (const item of data) {
        books.push(item);
      }
    }
  
    document.dispatchEvent(new Event(RENDER_EVENT));
  };