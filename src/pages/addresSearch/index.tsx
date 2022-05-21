import { GoogleMaps } from "../../components/googleMaps";
import { ListOfHistoric } from "../../components/listHistoric";
import { HistoricSearchProvider } from "../../hooks/HistoricSearchContext";

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Container, ContainerButton } from "./styles";
import { useState } from "react";

export function AddressSearch() {

    const [showListHistoric, setShowListHistoric] = useState(1)

    //alterando o estado de exibição da lista de historico
    function changeView() {
        if (showListHistoric == 1) {
            setShowListHistoric(2)
        } else {
            setShowListHistoric(1)
        }
    }

    return (
        //importando o context ao redor do elemento que irá utilizar seus atributos
        <HistoricSearchProvider>
            <Container show={showListHistoric}>
                <GoogleMaps />
                <ListOfHistoric show={showListHistoric} />
                {/* button que abre e fecha a lista de historicos */}
                <ContainerButton
                    show={showListHistoric}
                    onClick={changeView}>
                    {/* alterando o icone da direita para esquerda de acordo com a exibição da lista */}
                    {showListHistoric == 1 ? <IoIosArrowForward /> : <IoIosArrowBack />}
                </ContainerButton>
            </Container>
        </HistoricSearchProvider>
    )
}