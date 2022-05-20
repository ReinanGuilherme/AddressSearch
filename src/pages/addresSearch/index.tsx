import { GoogleMaps } from "../../components/googleMaps";
import { ListOfHistoric } from "../../components/listHistoric";
import { HistoricSearchProvider } from "../../hooks/HistoricSearchContext";

import { IoIosArrowForward} from 'react-icons/io'

import { Container } from "./styles";

export function AddressSearch() {
    
    return (        
        //importando o context ao redor do elemento que irá utilizar seus atributos
        <HistoricSearchProvider>
            <Container>                
                <GoogleMaps/>
                <ListOfHistoric/>
                {/* <button><IoIosArrowForward/></button> */}
            </Container>
        </HistoricSearchProvider>
    )
}