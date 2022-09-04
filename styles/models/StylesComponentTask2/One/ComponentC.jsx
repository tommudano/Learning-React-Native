import React from 'react'
import {View, Text} from 'react-native'
import styles from './Fifth'

const HorizontalRow = () => {
    return (
        <View style={styles.row}>
            <View style={[styles.left]}></View>
            <View style={[styles.middle]}></View>
            <View style={[styles.right]}></View>
        </View>
    )
}

const Component = () => {
    return (
        <View style={styles.container}>
            <HorizontalRow></HorizontalRow>
            <View style={styles.midRow}>
                <View style={[styles.left]}></View>
                <View style={[styles.middle]}></View>
                <View style={[styles.right]}></View>
            </View>
            <HorizontalRow></HorizontalRow>
        </View>
    )
}

export default Component