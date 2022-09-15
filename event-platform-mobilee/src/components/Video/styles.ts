import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: "100%",
        height: "100%",
    },
    content: {
        flex: 1, 
        padding: 24
    },

    buttonDownloadFiles: {
        marginTop: 64, 
        flex: 1, 
        flexDirection: "row", 
        minHeight: 140 
    },

    buttonLeftIcon: {
        justifyContent: "center",
        backgroundColor: "#015F43", 
        paddingRight: 23, 
        paddingLeft: 23, 
    },
    buttonInfo: {
        flex: 1, 
        flexDirection: "column", 
        justifyContent: "space-around",
        padding: 16, 
    },
    buttonInfoTitle: {
        fontSize: 22, 
        fontWeight: "bold", 
        color: "#E1E1E6",
        lineHeight: 30
    },
    buttonInfoDescription: {
        marginTop: 4,
        fontSize: 16, 
        color: "#E1E1E6"
    },
    buttonRightIcon: {
        justifyContent: "center",
        paddingRight: 23, 
        paddingLeft: 23, 
    }
})