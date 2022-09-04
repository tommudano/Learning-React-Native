import React from "react";
import { View, Text } from "react-native";
import AddColor from "./AddColor";

class SelfPresentation extends React.Component {
    constructor () {
        super()
        this.state = {
            age: 21,
            favouriteColors: ['balck', 'blue']
        }
    }

    addColorToList(color) {
        this.setState({
            favouriteColors: this.state.favouriteColors.concat([color])
        })
    }

    render() {
        return(
            <View>
                <Text>Hi my name is Tom!</Text>
                <Text>Im {this.state.age} years old</Text>
                {this.state.favouriteColors.map((color, key) => <Text key={key}>One of my favorite colors is {color}</Text>)}
                <Text onPress={() => this.addColorToList('red')}>Add the red color!</Text>
            </View>
        )
    }

}

export default SelfPresentation