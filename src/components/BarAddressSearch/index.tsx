//importando os icones que serão usados
import { FiMapPin, FiSearch } from 'react-icons/fi'


//importando estilo personalizado
import { Container, ContainerSVG } from "./styles";

export function BarAddressSearch() {
    return (
        <Container>
            {/* exibe o icone PIN MAP SVG */}
            <ContainerSVG>
                <FiMapPin/>
            </ContainerSVG>

            <input type="text" />
            
            <button><FiSearch/></button>
        </Container>
    )
}