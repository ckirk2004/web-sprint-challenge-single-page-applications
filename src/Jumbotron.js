import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items:center;
`;

const IntroButton = styled.a`
  background-color: white;
  padding: 7px 15px;
  color: maroon;
  border: 2px solid orange;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 20px;
    padding: 10px 20px;
  }
`;





const Headline = () => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <HeadTitle>Your Favorite Food, Delivered While Coding</HeadTitle>   
                <IntroButton>
          <Link to="/pizza">
            Pizza?
          </Link>
        </IntroButton>
            </Container>
        </Jumbotron>
    )

}

export default Headline