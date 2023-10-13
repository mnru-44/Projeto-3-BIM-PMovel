import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import Icon from 'react-native-vector-icons/AntDesign';
import { deletarPais } from "../../servicos/firestore";

export function ItemLista({ pais, navigation }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.card} >
                <View style={estilos.textoContainer}>
                    <Text style={estilos.textoNome} numberOfLines={1}>{pais.nomePais}</Text>
                    <Text style={estilos.textoPreco}>Capital: {pais.capitalPais}</Text>
                    <Text style={estilos.textoContinente}>Continente: {pais.continentePais}</Text>
                </View>
                <View style={estilos.buttonsContainer}>
                    <TouchableOpacity style={estilos.editButton} onPress={() => navigation.navigate('ManterPais', pais)}>
                        <Icon
                            name={'edit'}
                            size={20}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.deleteButton} onPress={() => deletarPais(pais.id)} >
                        <Icon
                            name={'delete'}
                            size={20}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}