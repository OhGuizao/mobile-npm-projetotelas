import { StyleSheet, Dimensions } from "react-native";

export const formato = StyleSheet.create({
    conteudo: {
        flex: 1,
        justifyContent: 'center'
    },
    backimg: {
        flex: 1,
        width: '100%',
        height: 'auto',
        resizeMode: 'cover'
    },
    menu: {
        width: '100%',
        height: 150,
        backgroundColor: '#212529',
        borderRadius: 5,
        margin: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
    },
    btn: {
        width: 107,
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 1000,
        borderRadius:10
    },
    txtbtn: {
        fontSize: 12,
        textAlign: 'center',
        color:'#ccc'
    },
    back:{
        position:'relative'
    },
    mapa:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
    pw:{
        flex:1,
        justifyContent:'center',
        marginTop:35
    }
})