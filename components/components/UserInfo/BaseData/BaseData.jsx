import React from "react";
import { View, Text } from "react-native";
import styles from "./BaseDataStyles";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

const BaseData = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainInfoSection}>
                <View>
                    <Text selectable={true} style={[styles.baseTextStyles, styles.name]}>{props.userData.usersFullName}</Text>
                    <Text selectable={true} style={[styles.baseTextStyles, styles.username]}>@{props.userData.username}</Text>
                </View>
                <View>
                    <ProfilePicture/>
                </View>
            </View>
            <View>
                <Text selectable={true} style={[styles.baseTextStyles, styles.description]}>{props.userData.description}</Text>
            </View>
        </View>
    )
}

export default BaseData