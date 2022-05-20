import styled from "styled-components";

export const Container = styled.div`

    height: 50px;
    max-width: 500px;
    margin: 25px auto 25px auto;
    padding: 5px;

    border: 1px solid var(--colorWhite);
    border-radius: 25px;
    cursor: pointer;

    position: absolute;
    left: 0;
    right: 0;
    background: black;

    display: grid;
    grid-template-columns: 50px 1fr 50px;

    button {
        color: var(--colorWhite);
        font-size: 20px;
        cursor: pointer;
    }

    input {
        color: var(--colorWhite);
        font-size: 16px;
    }  
`
export const ContainerSVG = styled.span`

    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

`