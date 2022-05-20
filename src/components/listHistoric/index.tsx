import { useContext } from "react";
import { HistoricSearchContext } from "../../hooks/HistoricSearchContext";
import { Container, ContainerDisplayPrincipal } from "./styles";

//interface criada com os dados necessarios para manipulação da lista de historicos
import { propsHistoric } from "./interface";

//svg
import { FiMapPin } from "react-icons/fi";

export function ListOfHistoric() {

    const historicSearch = useContext(HistoricSearchContext)

    return (
        <Container>
            <h2>Historic</h2>
            {/* {historicSearch.historicSearch.map((elemento: any) => {
                return elemento.map((elemento2: any, index: any) => {
                    return <p key={index}>{elemento2.long_name}</p>
                })
            })} */}
            {
                historicSearch.historicSearch.map((address: propsHistoric) => {
                    return (
                        
                        <ContainerDisplayPrincipal>
                            <FiMapPin/>
                            <p>{address.name}</p>
                        </ContainerDisplayPrincipal>
                    )
                })
            }
        </Container>
    )
}