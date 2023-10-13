import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { logar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";

export function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    async function fazerLogin() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else {
            setMensagemError('')
            setStatusError('')
            const resultado = await logar(email, senha)
            if (resultado == 'sucesso') {
                navigation.replace('ListarPais', { email: email }) //replace apaga as telas anteriores da pilha. Caso o usuário clique no voltar do celular não volta para a tela de login
            } else
                setStatusSnakbar(true)
            setMensagemSnakbar("E-mail ou senha inválida")
            console.log(resultado)
        }
    }
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/1200px-OOjs_UI_icon_userAvatar-constructive.svg.png',
                }}
            />
            <Text style={{fontSize: 60, fontWeight: 'bold', color: '#F4C095'}}>
                Login
            </Text>
            <TextInput
                label="E-mail"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                error={statusError == 'email'}
                style={estilos.input}
                outlineColor="#404040"
                activeOutlineColor="#F4C095" 
                textColor="#F4C095"
            />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry={secureMode}
                right={
                    <TextInput.Icon
                        icon={secureMode ? 'eye-off' : 'eye'}
                        onPress={() => setSecureMode(!secureMode)}
                    />
                }
                outlineColor="#404040"
                activeOutlineColor="#F4C095" 
                textColor="#F4C095"
                style={estilos.input} />
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                {mensagemError}
            </HelperText> : null}
            <TouchableOpacity style={estilos.botao} onPress={() => fazerLogin()}>
                <Text style={estilos.textoButton}>Entrar</Text>
            </TouchableOpacity>
            <Text style={estilos.texto}> Ainda não tem uma conta?
                <Text style={estilos.textoLink}
                    onPress={() => navigation.navigate('Cadastrar')}> Cadastre-se</Text>
            </Text>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setStatusSnakbar(false)
                    },
                }}>
                {mensagemSnakbar} 
            </Snackbar>
        </View>
    )
}