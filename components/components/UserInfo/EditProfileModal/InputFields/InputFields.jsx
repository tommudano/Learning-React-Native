import React, { useState } from "react";
import { View, Text, Modal, TextInput } from "react-native";
import ConfirmEditButton from "./ConfirmEditButton/ConfirmEditButton";
import styles from "./InputFieldsStyles";

const InputFields = (props) => {
    const [usersFullName, setUsersFullName] = useState(props.userData.usersFullName)
    const [username, setUsername] = useState(props.userData.username)
    const [description, setDescription] = useState(props.userData.description)

    return (
        <View>
            <View style={styles.inputGroup}>
                <TextInput onChangeText={value => {setUsersFullName(value)}} placeholder={props.userData.usersFullName} style={styles.shortInput}/>
                <TextInput onChangeText={value => {setUsername(value)}} placeholder={props.userData.username} style={styles.shortInput}/>
                <TextInput onChangeText={value => {setDescription(value)}} placeholder={props.userData.description} style={styles.longInput} multiline={true} numberOfLines={4}/>
            </View>
            <ConfirmEditButton setModalVisible={props.setModalVisible} userData={{userData: props.userData, newData: {usersFullName, username, description}}}/>
        </View>
    )
}

export default InputFields