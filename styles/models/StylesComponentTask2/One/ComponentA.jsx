import React from 'react'
import {View, Text} from 'react-native'
import styles from './Three'

const Component = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={[styles.left, styles.tl]}><Text></Text></View>
                <View style={[styles.rigth, styles.tr]}><Text></Text></View>
            </View>
            <View style={styles.bottom}>
                <View style={[styles.left, styles.bl]}><Text></Text></View>
                <View style={[styles.rigth, styles.br]}><Text></Text></View>
            </View>
        </View>
    )
}

export default Component