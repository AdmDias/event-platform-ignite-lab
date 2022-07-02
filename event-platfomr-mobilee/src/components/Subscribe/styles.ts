import { StyleSheet } from "react-native"

export const layout = StyleSheet.create({
    safeArea: {
        flex: 1, 
    },
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    bgImage: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
    },

    subscribe_section: {
        flexDirection: "column",
        backgroundColor: "#121214",
        borderColor: "#323238",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 24,
        paddingRight: 24 
    }
})

export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#E1E1E6"
    },
    description: {
        color: "#C4C4CC",
        fontSize: 20,
        padding: 24,
        marginBottom: 8,
        textAlign: "center",
        lineHeight: 30
    },
    textStrong: {
        color: "#81D8F7",
        fontWeight: "bold",
    },
    input: {
        marginTop: 8,
        backgroundColor: "#09090A",
        color: "#FFF",
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 20,
        height: 56,
        borderWidth: 1,
        borderRadius: 5
    },
    btnSubmit: {
        marginTop: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00875F",
        height: 54,
        borderRadius: 4
    }
})