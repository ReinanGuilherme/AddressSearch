import styled from 'styled-components'
import { propsShowListHistoric } from './interface'

export const Container = styled.div<propsShowListHistoric>`

    //pega a referencia de exibição do componente addressSearch para saber se irá exibir a lista ou não
    display: ${props => props.show == 1 ? "" : "none"};

    h2 {
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    //versão para mobile
    @media (max-width: 900px) {
        height: 30vh;
        position: absolute;
        top: 70vh;
        left: 0;
        right: 0;
        background: linear-gradient(to right,#121212,#212b46) ;
        background-repeat: no-repeat;
        overflow: scroll;

        h2 {
            background: linear-gradient(to right,#121212,#212b46) ;
            margin: 0;
            padding: 25px;
            position: fixed;
            right: 0;
            left: 0;
        }

        //espaçamento do h2 para primeira div
        h2+div {
            margin-top: 75px;
        }
    }

`

export const ContainerDisplayPrincipal = styled.div`

    border-bottom: 1px solid #fff;

    &:hover {
        background-color: #fff;
        cursor: default;

        button {
            color: #000;
            cursor: pointer;
        }
    }

    button {
        color: #fff;
        margin-right: 15px;
        padding: 10px;

        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 20px 1fr;

        p {
            text-align: left;
        }
    }

`