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
    lessonTitle: {
        fontSize: 18, 
        color: "#E1E1E6", 
        fontWeight: "bold"
    },
    lessonDescription: {
        marginTop: 16, 
        fontSize: 14, 
        color: "#E1E1E6", 
        lineHeight: 20
    },
    teacherInfo: {
        flex: 1, 
        flexDirection: "row", 
        marginTop: 24
    },
    teacherAvatar: {
        width: 63, 
        height: 63, 
        borderRadius: 50, 
        borderColor: "#81D8F7", 
        borderWidth: 2, 
        justifyContent: "flex-start"
    },
    teacher: {
        flex: 1, 
        flexDirection: "column", 
        justifyContent: "space-around", 
        paddingLeft: 18
    },
    teacherName: {
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#E1E1E6"
    },
    teacherBiography: {
        fontSize: 14, 
        color: "#E1E1E6",
        lineHeight: 18
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
    },

    buttonText: {
        marginLeft: 10, 
        color: "#FFF", 
        fontWeight: "bold"
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