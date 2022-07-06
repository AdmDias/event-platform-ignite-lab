import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native"

export const layout = StyleSheet.create({
    safeArea: {
        flex: 1, 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
    },
    container: {
        flex: 1,
        // flexDirection: "column",
        justifyContent: "flex-start",
        // alignItems: "flex-start",
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
    }
})

export const styles = StyleSheet.create({
    navigation: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    video: {
        alignSelf: 'center',
        width: "100%",
        height: "100%",
    },
    button: {
        marginTop: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 4,
        height: 56,
    },
    primary: {
        backgroundColor: "#00875F",
        borderColor: "#00875F",
    },
    secondary: {
        backgroundColor: "transparent",
        borderColor: "#81D8F7",
        
    }
})