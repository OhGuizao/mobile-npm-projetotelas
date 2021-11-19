import * as React from 'react';
import { Button, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { formato } from '../css/Styles';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 





export default function Home({ navigation }) {

    return (
        <View>
            <View style={formato.menu}>

                <ScrollView horizontal={true}>
                {/* Objeto usado para formatação */}
                <TouchableOpacity style={formato.btn} onPress={() => {
                    navigation.navigate('Camera')
                }}>
                    <MaterialIcons style={formato.txtbtn} name="add-a-photo" color="black" />
                    <Text style={formato.txtbtn}>Camera</Text>
                </TouchableOpacity>





                <TouchableOpacity style={formato.btn} onPress={() => {
                    navigation.navigate('Galeria')
                }}>
                    <MaterialIcons style={formato.txtbtn} name="add-photo-alternate" color="black" />
                    <Text style={formato.txtbtn}>Galeria</Text>

                </TouchableOpacity>



                <TouchableOpacity style={formato.btn} onPress={() => {
                    navigation.navigate('Mapa')
                }}>
                    <FontAwesome style={formato.txtbtn} name="map-marker"  color="black" />
                    <Text style={formato.txtbtn}>Mapa Google</Text>
                </TouchableOpacity>


                <TouchableOpacity style={formato.btn} onPress={() => {
                    navigation.navigate('PaginaWeb')
                }}>
                    <Foundation style={formato.txtbtn} name="web" color="black" />
                    <Text style={formato.txtbtn}>Pagina web</Text>
                </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    )

}