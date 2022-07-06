import { StyleSheet, Platform, StatusBar } from "react-native"

export const styles = StyleSheet.create({
    releaseDataLesson: {
        color: "#8D8D99",
        fontSize: 16,
    },
    itemLesson: {
        marginTop: 8, 
        padding: 16, 
        borderColor: "#323238", 
        borderWidth: 1, 
        borderRadius: 4
    },
    itemHeader: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    availableLesson: {
        marginLeft: 10, 
        fontSize: 16, 
        fontWeight: "600",
    },
    typeLesson: {
        alignItems: "center", 
        justifyContent: "center",
        borderColor: "#00B37E", 
        borderRadius: 4, 
        borderWidth: 1, 
        padding: 3, 
    },
    titleLesson: {
        marginTop: 16, 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#C4C4CC"
    }
})