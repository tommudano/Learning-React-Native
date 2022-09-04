import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    tl: {
        flex: 0.5,
        backgroundColor: 'blue',
    },
    tr: {
        flex: 0.5,
        backgroundColor: 'red',        
    },
    bl: {
        flex: 0.5,
        backgroundColor: 'yellow',        
    },
    br: {
        flex: 0.5,
        backgroundColor: 'green',        
    },
    top: {
        flex: 0.5,
        flexDirection: "row"
    },
    bottom: {
        flex: 0.5,
        flexDirection: "row"
    }
})

export default styles