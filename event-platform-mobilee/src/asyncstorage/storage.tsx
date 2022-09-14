import { Toast } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ErrorToast } from "../components/ErrorToast";

const setItem = async(key: string, value: string | undefined) => {
    try {
        if(value){
            await AsyncStorage.setItem(key, value)
        }else{
            throw new Error('Error')
        }
    }catch(error){
        Toast.show({
            duration: 3000,
            render: () => <ErrorToast message='Erro ao salvar os dados no dispositivo'/>
        })
    }
}

const getItem = async(key: string) => {
    try {
        return await AsyncStorage.getItem(key)
    }catch(error){
        Toast.show({
            duration: 3000,
            render: () => <ErrorToast message='Erro ao resgatar os dados no dispositivo'/>
        })
    }
}

const removeItem = async(key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    }catch(error){
        Toast.show({
            duration: 3000,
            render: () => <ErrorToast message='Erro ao remover os dados no dispositivo'/>
        })
    }
}



export { setItem, getItem, removeItem }