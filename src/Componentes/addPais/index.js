import { View, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarPais, atualizarPais } from "../../servicos/firestore";

export function ManterPais({ navigation, route }) {
    const [nomePais, setNomePais] = useState(route?.params?.nomePais)
    const [capitalPais, setcapitalPais] = useState(route?.params?.capitalPais)
    const [continentePais, setcontinentePais] = useState(route?.params?.continentePais)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    async function salvarPais() {
        if (nomePais == '') {
            setStatusErro('Nome')
            setMensagemErro('O campo não pode ser vazio')
        } else if (capitalPais == '') {
            setStatusErro('Capital')
            setMensagemErro('O Pais deve ter um valor')
        } 
        else if (continentePais == '') {
            setStatusErro('Continente')
            setMensagemErro('O campo não pode ser vazio')
        }
        else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarPais(route?.params?.id, { nomePais, capitalPais, continentePais })
            }
            else {
                resultado = await cadastrarPais({ nomePais, capitalPais, continentePais })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar país')
            } else {
                setNomePais('')
                setcapitalPais('')
                navigation.navigate('ListarPais') 
            }
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                label="País"
                value={nomePais}
                onChangeText={setNomePais}
                mode="outlined"
                error={statusErro == 'Descricao'}
                outlineColor="#404040"
                activeOutlineColor="#F4C095" 
                textColor="#F4C095"
                style={estilos.input} />
            {statusErro == 'Descricao' ? <HelperText type="error" visible={statusErro == 'Descricao'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Capital"
                value={capitalPais}
                onChangeText={setcapitalPais}
                mode="outlined"
                outlineColor="#404040"
                activeOutlineColor="#F4C095" 
                textColor="#F4C095"
                style={estilos.input} />
            {statusErro == 'Preco' ? <HelperText type="error" visible={statusErro == 'Preco'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Continente"
                value={continentePais}
                onChangeText={setcontinentePais}
                mode="outlined"
                outlineColor="#404040"
                activeOutlineColor="#F4C095" 
                textColor="#F4C095"
                style={estilos.input} />
            {statusErro == 'regiao' ? <HelperText type="error" visible={statusErro == 'regiao'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarPais()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}