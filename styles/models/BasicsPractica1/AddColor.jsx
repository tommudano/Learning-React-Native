import React from "react";
import { View, Text } from "react-native";

class AddColor extends React.Component {
    constructor (props) {
        super(props)
        this.addColorToList = this.addColorToList.bind(this)
    }

    render() {
        return (
            <button onClick={this.addColorToList}>Add red Color</button>
        )
    }
}

export default AddColor