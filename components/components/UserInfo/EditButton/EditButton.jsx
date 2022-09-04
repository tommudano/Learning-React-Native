import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./EditButtonStyles";

const EditButton = (props) => {
    const showModal = () => {
        props.setModalVisible(true)
    }

    return (
        <TouchableOpacity onPress={() => showModal()} style={styles.button} >
            <View>
                <Text style={styles.buttonText}>Editar el Perfil</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EditButton