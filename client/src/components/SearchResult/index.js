import React from "react";
import { Container, Row, Col } from "../Grid"
import "./style.css";

const SearchResult = props => {
      console.log('new books',props)

     return ( 
       
      <Container>
      <h3>Search Results</h3>
      <div className="card mb-5">
        <div className="card-body">
          {/* <Row className="SearchResult row" id={book.results.fullName + "Card"} key={book.results.id}> */}
          <Row>
            <Col size="2">
              <img src={props.books.images} alt={props.books.fullName} />
            </Col>
            <Col size="10" className="pl-2">
              <h3 className="bookTitle">{props.books.fullName}</h3>
              <h4 className="bookAuthor">{props.books.states}</h4>
              <img src={props.books.images} alt={props.books.fullName} />
              <p className="bookDescription pr-3">{props.books.description}</p>
            </Col>
          </Row>
          <Row>
            <button className="save btn mt-4 ml-3 mr-1" id={props.books.id} onClick={(event) => props.handleSavedButton(event)}>
              Save Park</button>             
            <a href={props.books.url} target="_blank" rel="noopener noreferrer">
              <button className="view btn mt-4">
                View Park</button>                 
            </a>
          </Row>
        </div>
      </div>
      {/* <h2>{props.books.fullName}</h2> */}
      </Container>
      
      );
      
}
export default SearchResult;