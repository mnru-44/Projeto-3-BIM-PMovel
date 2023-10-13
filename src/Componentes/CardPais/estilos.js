import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 5,
    },
    card: {
        flexDirection: 'row',
        width: 600,
        height: 150,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        elevation: 5,
        backgroundColor: '#303030',
        borderWidth: 2,
        borderColor: '#404040'
    },
    textoContainer: {
        maxWidth: '70%',
    },
    textoNome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F4C095',
        overflow: 'hidden',
        position: 'relative'
    },
    textoPreco: {
        color: '#1D7874',
        fontSize: 22,
    },
    textoContinente: {
        color: '#1D7874',
        fontSize: 22,
    },  
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    editButton: {
        height: 40,
        width: 45,
        backgroundColor: '#6495ED',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 45,
        backgroundColor: '#FA8072',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center'
    },
});