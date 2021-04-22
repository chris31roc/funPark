import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


class SearchBooks extends Component {
  state = {
    search: "",
    books: [],
    error: "",
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value })
  }

  //function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          // store response
          let results = res.data.items
          //map through the array 
          results = results.map(result => {
            //store each book information in a new object 
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            return result;
          })
          this.setState({ books: results, search: ""})
        }
      })
      .catch(err => this.setState({ error: err.items }));
  }


  handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    API.saveBook(savedBooks)
      .then(console.log(savedBooks))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Container>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
        </Container>
      </Container>
    )
  }
}
export default SearchBooks;