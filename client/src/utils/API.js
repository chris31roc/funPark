import axios from "axios"
export default {
    // Get book from google search
    getGoogleSearchBooks: function(query) {
        return axios.get("https://developer.nps.gov/api/v1/parks?parkCode=" + query + "&api_key=F1WzG5P6ue6yaVx0LGhg9iEbvFjbGk2WQnDy3cAc" )
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}