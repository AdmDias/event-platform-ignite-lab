import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/RootStackParams';

import { Platform } from "../screens/Platform";
import { Subscribe } from "../screens/Subscribe";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    return (
        <Navigator 
            initialRouteName="Platform" 
            screenOptions={{ headerShown: false }}
        >
           <Screen name="Subscribe" component={ Subscribe } />
           <Screen name="Platform" component={ Platform } />
        </Navigator>
    )
}