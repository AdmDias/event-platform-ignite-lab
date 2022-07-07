import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native"

export const layout = StyleSheet.create({
    safeArea: {
        flex: 1, 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#09090A",
        position: "relative"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
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