import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { ListarPais } from "./src/Componentes/ListarPais"
import { ManterPais } from "./src/Componentes/addPais"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ title: 'Login | Dupla: Carlos Emanuel & Maria Clara Menezes | Turma 513', headerStyle: {backgroundColor: '#303030'}, headerTitleStyle: { color: '#F4C095'} }} />
                <Stack.Screen name='ListarPais' component={ListarPais} options={{ title: 'Listagem de Pais | Dupla: Carlos Emanuel & Maria Clara Menezes | Turma 513', headerStyle: {backgroundColor: '#303030'}, headerTitleStyle: { color: '#F4C095'} }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ title: 'Cadastro | Dupla: Carlos Emanuel & Maria Clara Menezes | Turma 513', headerStyle: {backgroundColor: '#303030'}, headerTitleStyle: { color: '#F4C095'} }} />
                <Stack.Screen name='ManterPais' component={ManterPais} options={{ title: 'Cadastrar/Atualizar Pais | Dupla: Carlos Emanuel & Maria Clara Menezes | Turma 513', headerStyle: {backgroundColor: '#303030'}, headerTitleStyle: { color: '#F4C095'} }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}