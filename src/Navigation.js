import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`;

const NavLink = styled.a`
    color: #ffffff;
    font-weight: 500;
    text-decoration: none;
    padding: 15px 60px;
    width: 100%
    height: 32px;
    background-color: #811818;
    border: 1px solid #ffffff;
    cursor: pointer;
    transition: 0.2s;

        &:hover {
            background-color: white;
            color: #811818;
            text-decoration: none;
        };

`;

const Navigation = () => {
    return (
        <NavBar>
                <NavLink>Home</NavLink>
                <NavLink>Help</NavLink>
        </NavBar>
    );
};

export default Navigation
