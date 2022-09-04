import React from 'react'
import {View, Text} from 'react-native'
import styles from './Fourth'

const Component = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={[styles.left]}><Text></Text></View>
                <View style={[styles.middle]}><Text></Text></View>
                <View style={[styles.right]}><Text></Text></View>
            </View>
        </View>
    )
}

export default Component