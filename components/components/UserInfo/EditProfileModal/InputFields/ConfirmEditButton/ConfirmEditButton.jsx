import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./ConfirmEditButtonStyles";

const ConfirmEditButton = (props) => {
    const changeUserData = () => {
        props.userData.userData.setUsersFullName(props.userData.newData.usersFullName.trim() === '' ? props.userData.userData.usersFullName : props.userData.newData.usersFullName)
        props.userData.userData.setUsername(props.userData.newData.username.trim() === '' ? props.userData.userData.username : props.userData.newData.username)
        props.userData.userData.setDescription(props.userData.newData.description.trim() === '' ? props.userData.userData.description : props.userData.newData.description)
        props.setModalVisible(false)
    }

    return (
        <TouchableOpacity style={styles.button} >
            <View>
                <Text onPress={() => changeUserData()} style={styles.buttonText}>Save Changes</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ConfirmEditButton