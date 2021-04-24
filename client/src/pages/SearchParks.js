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
    console.log('search state',this.state.search)
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          // store response
          let results = res.data.data[0]
            //store each book information in a new object
            var result = {
              key: results.id,
              id: results.id,
              fullName: results.fullName,
              states: results.states,
              images: results.images.url,
              description: results.description,
              entranceFees: results.entranceFees,
              url: results.url
              }
            this.setState({ books: result, search: ""})
            return result;
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
