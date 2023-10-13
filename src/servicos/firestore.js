import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";

export async function cadastrarPais(data) {
    try {
        await addDoc(collection(db, 'Pais'), data)
        return 'sucesso'
    } catch (error) {
        return 'erro'
    }
}

export async function buscarPais() {
    try {
        const querySnapshot = await getDocs(collection(db, 'Pais'))
        let Pais = []
        querySnapshot.forEach((doc) => {
            let pais = { id: doc.id, ...doc.data() }
            Pais.push(pais)
        });
        return Pais
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizarPais(paisID, data) {
    try {
        const paisRef = doc(db, 'Pais', paisID)
        await updateDoc(paisRef, data)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'error'
    }

}

export async function deletarPais(paisID) {
    try {
        const paisRef = doc(db, 'Pais', paisID)
        await deleteDoc(paisRef)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function pegarpaisTempoReal(setPais) {
    const ref = query(collection(db, 'Pais'))
    onSnapshot(ref, (querySnapshot) => {
        const Pais = []
        querySnapshot.forEach((doc) => {
            Pais.push({ id: doc.id, ...doc.data() })
        })
        setPais(Pais)
    })
}