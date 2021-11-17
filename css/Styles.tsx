import { StyleSheet } from "react-native";

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
        height: 600,
        backgroundColor: '#90e0ef',
        borderRadius: 10,
        margin: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    btn: {
        width: '32%',
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    txtbtn: {
        fontSize: 10,
        textAlign: 'center',
    }
})