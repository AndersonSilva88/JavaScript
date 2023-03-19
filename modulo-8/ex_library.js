const library = [
    {
        name: "Book #1",
        year: 2000,
        id: 1
    },
    {
        name: "Book #2",
        year: 2010,
        id: 2
    },
    {
        name: "Book #3",
        year: 2020,
        id: 3
    },

];

function search(id) {
    for (book of library) {
        if (id == book.id) {
            return book;
        }
    }
    return null;
}

console.log(search(2));