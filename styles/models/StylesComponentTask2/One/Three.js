import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    tl: {
        flex: 0.75,
        backgroundColor: 'blue',
    },
    tr: {
        flex: 0.25,
        backgroundColor: 'red',        
    },
    bl: {
        flex: 2/3,
        backgroundColor: 'pink',        
    },
    br: {
        flex: 1/3,
        backgroundColor: 'green',        
    },
    top: {
        flex: 0.5,
        flexDirection: "column"
    },
    bottom: {
        flex: 0.5,
        flexDirection: "row"
    }
})

export default styles