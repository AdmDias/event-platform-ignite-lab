import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Platform } from "../components/Platform";
import { Subscribe } from "../components/Subscribe";

const { Navigator, Screen } = createNativeStackNavigator();


export function StackRoutes() {
    return (
        <Navigator 
            initialRouteName="Subscribe" 
            screenOptions={{ headerShown: false }}
        >
           <Screen name="Subscribe" component={ Subscribe } />
           <Screen name="Platform" component={ Platform } />
        </Navigator>
    )
}