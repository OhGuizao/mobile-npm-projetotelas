import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { formato } from '../css/Styles';
import { createIconSetFromFontello, Fontisto } from '@expo/vector-icons';
import { useRef } from 'react';
import { Button } from 'react-native';

export default function AppCamera() {

    //Estamos definindo como nenhum configuração de permissão
    const [permissao, setPermissao] = React.useState(false);
    //referencia da documentação do react-camera(fazendo o botão de tirar a foto, olhar para esta referencia )
    const tef = useRef(null);
    //definir o tipo de camera que será aberta(camera back ou front)(Utilizando a penas o software de gerencimanento da camera)
    const [tipo, setTipo] = React.useState(Camera.Constants.Type.back)

    //Quando o AppCamera abrir, vamos fazer a camera do smartphone abrir também
    //, sem a necessidade do usuario cliclar em algum botão,
    // para isso acoantecer vamos usar o comando useEffect

    React.useEffect(() => {

        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermissao(status === 'granted');

        })

            ();

    },

        []);

    if (permissao == false) {
        return <View />;
    }

    return (
        <View style={formato.conteudo}>
            <Camera style={formato.conteudo} type={tipo}
                ref={ref => {
                    camera = ref;
                }}
            >

                <TouchableOpacity
                    onPress={() => {
                        setTipo(
                            tipo === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    
                    <Fontisto name="arrow-return-left" size={24} color="black" style={formato.back}/>

                </TouchableOpacity>
            </Camera>
            <Button title='tirar foto' onPress={()=>{
                    async() => {
                        const foto =await ref.current.TakePictureAsync();
                        console.log(foto);
                    }
            }}>

            </Button>
        </View >
    );
}