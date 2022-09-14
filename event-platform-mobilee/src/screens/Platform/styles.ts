import { StyleSheet, Platform, Dimensions } from "react-native"
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const layout = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#09090A",
        position: "relative"
    },
    header: {
        backgroundColor: "#09090A",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: getStatusBarHeight(),
        paddingBottom: 16,
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: "flex-start",
        minHeight: Dimensions.get('window').height
    }
})

export const styles = StyleSheet.create({
    navigation: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})