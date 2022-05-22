import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import { useContext, useState } from "react";
import { HistoricSearchContext } from "../../hooks/HistoricSearchContext";
import { BarAddressSearch } from "../BarAddressSearch";

import { Container } from "./styles";

export function GoogleMaps() {

    const [map, setMap] = useState<google.maps.Map>()
    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>()
    const [positionLatAndLng, setPositionLatAndLng] = useState<any[]>([{ lat: -10.988865, lng: -37.0481787 }])

    //hook responsavel por armazenar o historico de pesquisa
    const HistoricSearch = useContext(HistoricSearchContext)

    const onMapLoad = (map: google.maps.Map) => {
        setMap(map)
    }

    const onLoad = (ref: google.maps.places.SearchBox) => {
        setSearchBox(ref)
    }

    const onPlacesChanged = () => {
        const places = searchBox!.getPlaces()
        const place = places![0]
        const localization = {
            lat: place?.geometry?.location?.lat() || 0,
            lng: place?.geometry?.location?.lng() || 0,
        }
        //adicionando os registros de busca ao hook HistoricSearch
        HistoricSearch.setHistoricSearch([...HistoricSearch.historicSearch, {
            //nome do local pesquisado
            name: place?.name,
            //dados de localização do ponto selecionado
            latAndLng: {
                lat: place.geometry?.location?.lat() || 0,
                lng: place.geometry?.location?.lng() || 0
            },
            //enviando o state do mapa que contem a função de redirecionamento
            redirect: map
        }])

        //adicionando as localizações onde o Marker deve ser exibido
        setPositionLatAndLng([...positionLatAndLng, localization])

        map?.panTo(localization)
    }

    return (
        <Container>
            <LoadScript
                //carregando as bibliotecas extras
                googleMapsApiKey="AIzaSyBzh5iMzIvUaMNyRSCc7JpL-uiOXTNS8uE"
                libraries={['places']}
            >
                <GoogleMap
                    onLoad={onMapLoad}
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={positionLatAndLng[0]}
                    zoom={15}
                >
                    {/* exibindo o campo de busca */}
                    <StandaloneSearchBox
                        onLoad={onLoad}
                        onPlacesChanged={onPlacesChanged}
                    >
                        <BarAddressSearch />
                    </StandaloneSearchBox>

                    {/* exibindo o marcador do local selecionado */}
                    {positionLatAndLng.map((markerPosition, index) => {
                        return <Marker key={index} position={markerPosition} />
                    })}
                </GoogleMap>
            </LoadScript>
        </Container>
    )
}