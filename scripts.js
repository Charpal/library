function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`
  }

  const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)