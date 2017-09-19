import styled from 'styled-components';
import { media } from '../utils/media';

export const Container = styled.div`
    display:flex;
    border: 1px rgb(200, 200, 200) solid;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
    ${media.handheld`
        width:100%;
    `}
`;