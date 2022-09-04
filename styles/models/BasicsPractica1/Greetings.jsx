import React from "react"
import {View, Text} from "react-native"

// const Greetings = (props) => {
//     return (
//         <Text>Hello {props.name}!</Text>
//     )
// }

class Greetings extends React.Component {
    render() {
        return(
            <Text>Hello {this.props.name}!</Text>
        )
    }
}

export default Greetings