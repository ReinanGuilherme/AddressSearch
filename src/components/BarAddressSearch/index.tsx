//importando os icones que serão usados
import { useRef } from 'react';
import { FiMapPin } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

//importando estilo personalizado
import { Container, ContainerSVG } from "./styles";

export function BarAddressSearch() {

    let refInputSearch = useRef<HTMLInputElement>(null)

    function clearSearch() {
        if (refInputSearch.current != null) {
            refInputSearch.current.value = ""
        }
    }

    return (
        <Container>
            {/* exibe o icone PIN MAP SVG */}
            <ContainerSVG>
                <FiMapPin />
            </ContainerSVG>

            <input ref={refInputSearch} type="text" placeholder='Search...' />

            <button onClick={clearSearch}><AiOutlineClose /></button>
        </Container>
    )
}