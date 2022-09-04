import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    modal: {
        width: "70%",
        height: "60%",
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    modalText: {
        color: '#333333',
        fontFamily: 'Roboto',
        fontWeight: "700",
        fontSize: 15,
        textAlign: "center"
    },
    closeButton: {
        alignSelf: "flex-end",
        fontWeight: "900",
        fontSize: 18,
        color: "#CCCCCC"
    }
})

export default styles