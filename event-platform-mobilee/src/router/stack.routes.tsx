import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useToast } from 'native-base';
import { getItem } from '../asyncstorage/storage';
import Platform from "../screens/Platform";
import { Subscribe } from "../screens/Subscribe";
import { CustomToast } from '../components/CustomToast';
import { Loading } from '../components/Loading';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
    const toast = useToast()
    const [userID, setUserID] = useState<string | null | undefined>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function renderRoute() {
            const userID = await getItem('@USERID')
            if (userID) {
                setUserID(userID)
                toast.show({
                    placement: 'top',
                    duration: 3000,
                    render: () => <CustomToast type='success' message='Bem-vindo de volta' />
                })
            }
        }
        renderRoute().finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <Loading />

    return (
        <Navigator 
            screenOptions={{ 
                headerShown: false,
                animation: 'fade_from_bottom'
            }}
        >
            {
                userID ? <Screen name="Platform" component={ Platform } /> : <Screen name="Subscribe" component={ Subscribe } />
            }
        </Navigator>
    )
}