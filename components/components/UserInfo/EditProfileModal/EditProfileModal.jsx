import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import InputFields from "./InputFields/InputFields";
import styles from "./EditProfileModalStyles";

const EditProfileModal = (props) => {
    const closeModal = () => {
        props.setModalVisible(false)
    }

    return (
        <Modal animationType="slide" visible={props.modalVisible} transparent={true}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <TouchableOpacity>
                        <Text onPress={() => closeModal()} style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                    <InputFields setModalVisible={props.setModalVisible} userData={props.userData}/>
                </View>
            </View>
        </Modal>
    )
}

export default EditProfileModal