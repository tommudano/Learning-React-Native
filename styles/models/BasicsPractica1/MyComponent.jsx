import React from "react";
import { View, Text } from "react-native";
import Greetings from "./Greetings";
import SelfPresentation from "./SelfPresentation";

const MyComponent = () => {
    return (
        <View>
            <Greetings name="Mariana"/>
            <Greetings name="Julia"/>
            <Greetings name="Roberto"/>
            <SelfPresentation/>
        </View>
    )
}

export default MyComponent