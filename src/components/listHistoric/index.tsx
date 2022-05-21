import { useContext } from "react";
import { HistoricSearchContext } from "../../hooks/HistoricSearchContext";
import { Container, ContainerDisplayPrincipal } from "./styles";

//interface criada com os dados necessarios para manipulação da lista de historicos
import { propsHistoric } from "./interface";

//svg
import { FiMapPin } from "react-icons/fi";

export function ListOfHistoric({ show }: any) {

    const historicSearch = useContext(HistoricSearchContext)

    return (
        <Container show={show}>
            <h2>Address Historic</h2>
            {/* {historicSearch.historicSearch.map((elemento: any) => {
                return elemento.map((elemento2: any, index: any) => {
                    return <p key={index}>{elemento2.long_name}</p>
                })
            })} */}
            {
                historicSearch.historicSearch.map((address: propsHistoric, index) => {
                    return (

                        <ContainerDisplayPrincipal key={index}>
                            {/* botão que redireciona para o endereço escolhido da lista de historicos */}
                            <button onClick={() => address.redirect.panTo(address.latAndLng as google.maps.LatLng)}>
                                <FiMapPin />
                                <p>{address.name}</p>
                            </button>
                        </ContainerDisplayPrincipal>
                    )
                })
            }
        </Container>
    )
}