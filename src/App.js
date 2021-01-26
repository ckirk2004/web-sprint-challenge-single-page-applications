import React from "react";
import styled from 'styled-components';
import Navigation from './Navigation.js';
import Headline from './Jumbotron';
import FoodCard from './Card';

//Styles

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

const Logo = styled.h1`
  color: #B22222;
`;


const App = () => {
  return (
    <>
      <Header>
        <Logo>Lambda Eats</Logo>
        <Navigation />
      </Header>
      <Headline />
      <FoodCard />
    </>
  );
};
export default App;
