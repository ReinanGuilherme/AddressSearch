import styled from 'styled-components'

export const Container = styled.div`

    h2 {
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
    }

`

export const ContainerDisplayPrincipal = styled.div`

    padding: 10px;
    border-bottom: 1px solid #fff;

    display: flex;

    &:hover {
        color: #000;
        background-color: #fff;
        cursor: pointer;
    }

    svg {
        margin-right: 15px;
    }

`