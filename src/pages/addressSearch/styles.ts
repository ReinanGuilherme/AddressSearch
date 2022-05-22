import styled from "styled-components";

import { propsShowListHistoric } from "./interface";

export const Container = styled.div<propsShowListHistoric>`

    display: grid;
    grid-template-columns: ${props => props.show == 1 ? "1fr 30vw" : "1fr"};

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
    
`

export const ContainerButton = styled.button<propsShowListHistoric>`

    position: absolute;
    right: ${props => props.show == 1 ? "30vw" : "0vw"};
    bottom: 50vh;
    padding: 5px;
        
    color: #fff;
    background: linear-gradient(#121212,#212b46) ;
    cursor: pointer;

    border-radius: 5px 0 0 5px;

    @media (max-width: 900px) {
        bottom: ${props => props.show == 1 ? "30vh" : "0vh"};
        border-radius: 5px 5px 0 0;
        right: 50vw;
    }
`