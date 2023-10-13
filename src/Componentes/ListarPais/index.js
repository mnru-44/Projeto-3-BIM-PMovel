import { View, FlatList, ImageBackground } from "react-native"
import { estilos } from "./estilos"
import { BotaoAdd } from "../botaoAdd"
import { useEffect, useState } from "react"
import { buscarPais, pegarpaisTempoReal } from "../../servicos/firestore"
import { ItemLista } from "../CardPais"

export function ListarPais({ navigation }) {
    const [Pais, setPais] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function carregarPais() {
        setRefreshing(true)
        const PaisFirestore = await buscarPais()
        setPais(PaisFirestore)
        setRefreshing(false)
    }
    useEffect(() => {
        carregarPais()
        pegarpaisTempoReal(setPais)
    }, [])

    return (
        <View style={estilos.container}>
            {Pais.length > 0 && (<FlatList
                data={Pais}
                renderItem={({ item }) => <ItemLista pais={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                refreshing={refreshing}
                onRefresh={carregarPais}
            />)
            }
            <BotaoAdd onPress={() => navigation.navigate('ManterPais')} />
        </View>
    )
}