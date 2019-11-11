class StubAPI{

    constructor(){
         this.books=[
            {
                id:1,
                img:"images/1984.jpg",
                title:'1984',
                pages:200,
                genre:'Dystopian'
            },
            {
                id:2,
                img:"images/1984.jpg",
                title:'Good Omens',
                pages:300,
                genre:'Comedy'
            },
            {
                id:3,
                img:"images/1984.jpg",
                title:'Frankenstein',
                pages:150,
                genre:'Horror'
            }
        ]
    }

    addBook(id, title, pages, genre,callback) {
        let book = {
          "id": id,
          "title": title,
          "pages":pages,
          "genre":genre
        }
    
        this.books.push(book);
        console.log(this.books)
        

        if (callback) callback();
      }
}

export default new StubAPI();