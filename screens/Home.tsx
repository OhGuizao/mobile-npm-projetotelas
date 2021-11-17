import * as React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { formato } from '../css/Styles';

export default function Home({ navigation }) {
    return (
        <View>
            {/* <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/5d/b1/c2/5db1c284ba664ac3c02528bd04f99c89.png' }} style={formato.backimg}> */}

                <View style={formato.menu}>
                    {/* Objeto usado para formatação */}
                    <TouchableOpacity style={formato.btn} onPress={()=>{
                        navigation.navigate('Camera')
                    }}>
                    <Text style={formato.txtbtn}>Camera</Text>
                    </TouchableOpacity>
                </View>
            {/* </ImageBackground> */}
        </View>
    )
}