import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

export const ImageDiv = styled.div`
    text-align: center;
`;  //ImageDiv
export const Image = styled.img`
    height: 52px;
`;  // Image
export const Header = styled.header`
    text-align: center;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
`;   // Header

export const Container = styled.div`
    align-items: center;

    min-height: 80vh;
    ${media.handheld`
        width: 100%;
    `}
`;  // const Container

export const Main = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );  //
};  // export const Main
