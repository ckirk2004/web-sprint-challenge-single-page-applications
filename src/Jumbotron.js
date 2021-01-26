import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import styled from 'styled-components';

const HeadTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items:center;
`;





const Headline = () => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <HeadTitle>Your Favorite Food, Delivered While Coding</HeadTitle>   
                <Button color='primary' size='lg'>Pizza?</Button>    
            </Container>
        </Jumbotron>
    )

}

export default Headline