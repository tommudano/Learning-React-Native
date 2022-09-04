import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 0.1,
        backgroundColor: '#000000',
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"     
    },
    middle: {
        flex: 0.7,
        backgroundColor: '#EEEEEE',   
    },
    bottom: {
        flex: 0.2,
        backgroundColor: '#FFFFFF',
    },
    button: {
        width: 40,
        backgroundColor: "#FF0000",
        height: 40,
        borderRadius: 100,
        top: -15,
        alignSelf: "flex-start"
    }
})

export default styles