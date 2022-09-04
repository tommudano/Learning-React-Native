import React from 'react'
import {View, Text} from 'react-native'
import styles from './Sixth'

const RoundedButton = () => {
    return (
        <View style={styles.button}></View>
    )
}

const Component = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}></View>
            <View style={styles.middle}></View>
            <View style={styles.bottom}>
                <RoundedButton></RoundedButton>
                <RoundedButton></RoundedButton>
            </View>
        </View>
    )
}

export default Component