import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    sidenav: {
        position: "absolute", 
        width: "100%", 
        height: "100%",
        zIndex: 2, 
        padding: 24, 
        backgroundColor: "#29292E", 
    },
    title: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "bold"
    },
    lessonsContainer: {
        marginTop: 24, 
        borderBottomColor: '#323238', 
        borderBottomWidth: 1
    }
})