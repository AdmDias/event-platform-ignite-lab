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
    }
})