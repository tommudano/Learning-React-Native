import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 0.1,
        backgroundColor: '#000000',
    },
    middle: {
        flex: 0.7,
        backgroundColor: '#EEEEEE',        
    },
    bottom: {
        flex: 0.2,
        backgroundColor: '#FFFFFF', 
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        flex: 0.3,
        backgroundColor: "#000000",
        height: 40,
        borderRadius: 50
    }
})

export default styles