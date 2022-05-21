import styled from 'styled-components'
import { propsShowListHistoric } from './interface'

export const Container = styled.div<propsShowListHistoric>`

    display: ${props => props.show == 1 ? "" : "none"};

    h2 {
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
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