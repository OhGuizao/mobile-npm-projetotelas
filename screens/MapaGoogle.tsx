import * as React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { formato } from '../css/Styles'

export default function MapaGoogle() {
    const [markes, SetMarkers] = React.useState([
        {
            latlng: { latitude: -23.540782581608212, longitude: -46.57497903136882 },
            title: "Senac Tatuapé",
            description: 'Local de estudo técnico'
        },


        {
            latlng: { latitude: -23.54122733276289, longitude: -46.57514371265654 },
            title: "Casa do Pastel",
            description: 'Local de pastel'
        },


        {
            latlng: { latitude: -23.540115840048212, longitude: -46.576538461326756 },
            title: "Metro Tatuapé",
            description: 'Local de transporte'
        },
    ]);
    return (
        <View style={formato.conteudo}>


            <View></View>
            <View />
            <MapView
                initialRegion={{
                    latitude: -23.540782581608212,
                    longitude: -46.57497903136882,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007
                }}
                style={formato.mapa}
            >

                {
                    markes.map((m, ix) => (
                        <Marker
                            key={ix}
                            coordinate={m.latlng}
                            title={m.title}
                            description={m.description}
                        />
                    ))

                }
            </MapView>
        </View>
    )
}