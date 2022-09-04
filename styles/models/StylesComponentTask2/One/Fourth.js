import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center"
    },
    main: {
        flex: 1/3,
        flexDirection: "row",
    },
    left: {
        flex: 0.25,
        backgroundColor: 'red',
    },
    middle: {
        flex: 0.5,
        backgroundColor: 'yellow',        
    },
    right: {
        flex: 0.25,
        backgroundColor: 'green',        
    }
})

export default styles