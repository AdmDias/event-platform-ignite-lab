import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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