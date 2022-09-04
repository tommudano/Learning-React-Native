import React from "react";
import { Image } from "react-native";
import styles from "./ProfilePictureStyles";

const ProfilePicture = () => {
    return (
        <Image style={{width: 150, height: 150, borderRadius: 20, borderColor: "#E5F4E3", borderWidth: 1}} source={require('../../../../assets/profilePictureTomas.png')}/>
    )
}
export default ProfilePicture