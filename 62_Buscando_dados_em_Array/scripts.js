const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
            
        ],
    },
];

const totalCategories = booksByCategory.length // Saber o total das categorias

console.log(totalCategories); 
for(let category of booksByCategory) { // Pegando uma categoria dentro da categoria de livros e transformando o objeto na variavel
    console.log('Total de livros da categoria: ', category.category) // Pegando a propriedade categoria
    console.log(category.books.length) // Total de livros na categoria
}

function countAuthors() {
    let authors = []; // array que vai receber os autores
    for(let category of booksByCategory) { // loop que esta pegando a categoria
        for(let book of category.books) { // extraindo objeto do array e chamando de book
            if(authors.indexOf(book.author) === -1) { // se a expressão retornar -1 e pq não achou o autor dentro do array
                authors.push(book.author); // e se ele não achou o autor eu adiciono
            }
        }
    }
    console.log("Total de autores: ", + authors.length)

}

countAuthors();

function booksOfAuthor(author) {
    let books = []; // array que vai receber os books

    for(let category of booksByCategory) { // loop que esta pegando a categoria
        for(let book of category.books) { // extraindo objeto do array e chamando de book
           if(book.author === author) {
                books.push(book.title)
           }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)

}
booksOfAuthor('Augusto Cury');