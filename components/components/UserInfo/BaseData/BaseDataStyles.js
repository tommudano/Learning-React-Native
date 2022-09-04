import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    baseTextStyles: {
        color: "#E5F4E3",
        fontFamily: "Roboto"
    },
    name: {
        fontSize: 21,
        fontWeight: "800"
    },
    username: {
        fontSize: 18,
        fontWeight: "900",
        color: "#C75000"
    },
    description: {
        fontSize: 15,
        textAlign: "left",
        lineHeight: 20,
        letterSpacing: 1.1
    },
    container: {
        flexDirection: 'column',
        marginBottom: 40
    },
    mainInfoSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    }
})

export default styles