import React, { useState } from "react";
import { View, Text } from "react-native";
import BaseData from "./BaseData/BaseData";
import EditButton from "./EditButton/EditButton";
import EditProfileModal from "./EditProfileModal/EditProfileModal";
import styles from "./UserInfoStyles";

const UserInfo = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [usersFullName, setUsersFullName] = useState("Tomas Mudano")
    const [username, setUsername] = useState("tommudano")
    const [description, setDescription] = useState("Lorem ipsum dolo r sit amet, consectetur adipisicing elit. Consectetur dolore aperiam esse? Libero beatae nostrum aspernatur, nisi itaque doloribus praesentium, deserunt provident molestiae dicta sequi nihil ullam temporibus eum impedit")

    return (
        <View style={styles.container}>
            <BaseData userData={{usersFullName, username, description}}/>
            <EditButton setModalVisible={setModalVisible}/>
            <EditProfileModal userData={{usersFullName, setUsersFullName, username, setUsername,description, setDescription}} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

export default UserInfo