import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#252525',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 200, 
        height: 200
    },
    input: {
        backgroundColor: '#303030',
        height: 50,
        width: "90%",
        paddingHorizontal: 10,
        marginTop: 10,
    },
    botao: {
        alignItems: 'center',
        height: 50,
        marginTop: 10,
        backgroundColor: '#303030',
        borderRadius: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#F4C095',
    },
    textoButton: {
        fontSize: 20,
        color: '#F4C095',
        fontWeight: '500', 
    },
    texto: {
        marginTop: 10,
        color: '#F4C095',
        fontSize: 12,
    },
    textoLink:{
        color: '#2B35AF',
    },

})