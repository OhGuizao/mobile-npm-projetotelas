import * as React from 'react';
import { Button, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { formato } from '../css/Styles';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {

    return (
        <View>
            {/* <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/5d/b1/c2/5db1c284ba664ac3c02528bd04f99c89.png' }} style={formato.backimg}> */}
            <View style={formato.menu}>
                {/* Objeto usado para formatação */}
                <TouchableOpacity style={formato.btn} onPress={() => {
                    navigation.navigate('Camera')
                }}>
                    <MaterialIcons name="add-photo-alternate" size={24} color="black" />
                </TouchableOpacity>





                <TouchableOpacity style={formato.btn} onPress={() => {
                    navigation.navigate('Galeria')
                }}>
                    <Text>Galeria</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}