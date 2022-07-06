import { StyleSheet, Platform, StatusBar } from "react-native"

export const layout = StyleSheet.create({
    safeArea: {
        flex: 1, 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
        flex: 1,
        backgroundColor: "#09090A"
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
    },
})

export const styles = StyleSheet.create({
    title: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "bold"
    }
})