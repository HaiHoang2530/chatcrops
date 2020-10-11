import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Fab, Button, List, Icon, Item} from 'native-base';
import {Send, Actions, InputToolbar, Composer} from 'react-native-gifted-chat';
import Icons from 'react-native-vector-icons';
//import Emoticons from 'react-native-emoticons';
//import {AnimatedEmoji} from 'react-native-animated-emoji'
import {CameraKitCamera} from 'react-native-camera-kit';
import {
  optionCamera,
  optionImagesPicker,
  optionVideos,
  options,
} from '../data/index';
//import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
//var ImagePicker = require('react-native-image-picker');

export const renderSend = props => {
  if (!props.text) {
    return (
      <Send
        {...props}
        containerStyle={{
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 4,
        }}
        alwaysShowSend={true}
      >
        <Icon
          name="heart"
          type="AntDesign"
          size={30}
          style={styles.iconheart}
        />
      </Send>
    );
  } else {
    return (
      <Send
        {...props}
        containerStyle={{
          width: 44,
          height: 44,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 4,
        }}
        alwaysShowSend={true}
      >
        <Icon
          name="controller-play"
          type="Entypo"
          size={30}
          style={styles.icon}
        />
      </Send>
    );
  }
};

export const scrollToBottom = () => {
  return (
    <View>
      <Icon name="controller-play" type="Entypo" size={30} color="#0099FF" />
    </View>
  );
};
export const renderInputTooBar = props => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#fff',
        paddingTop: 6,
      }}
      primaryStyle={{alignItems: 'center'}}
    />
  );
};
const HandleCameraImageCropPicker = () => {
  ImageCropPicker.openCamera ({
    mediaType: 'photo',
    disableCropperColorSetters: true,
    useFrontCamera: true,
    multiple: true,
  }).then (image => {
    console.log ('received image', image);
  });
};
const HandlePictureImageCropPicker = () => {
  ImageCropPicker.openPicker ({
    multiple: true,
  }).then (images => {
    console.log (images);
  });
};
export const renderActions = props => {
  if (!props.text) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <TouchableOpacity>

          <Icon
            name="pluscircle"
            type="AntDesign"
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => HandleCameraImageCropPicker ()}>
          <Icon name="camera" type="Entypo" size={30} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => HandlePictureImageCropPicker ()}>
          <Icon name="image" type="Entypo" size={30} style={styles.icon} />
        </TouchableOpacity>
        <Icon
          name="microphone"
          type="FontAwesome"
          size={30}
          style={styles.icon}
        />
      </View>
    );
  } else {
    return (
      <View>
        <TouchableOpacity onPress={() => ActionRight ()}>
          <Icon
            name="chevron-small-right"
            type="Entypo"
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
};
const ActionRight = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity onPress={() => HandleCameraImageCropPicker ()}>
        <Icon name="camera" type="Entypo" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
export const renderAccessory = props => {
  return <View style={{flex: 1}} />;
};
export const renderComposer = props => {
  return (
    <Item
      style={{
        flex: 1,
        height:40,
        backgroundColor: '#EDF1F7',
        borderRadius: 20,
        borderColor: '#E4E9F2',
        marginBottom:4
      }}
    >

      <Composer
        {...props}
        textInputStyle={{
          color: '#222B45',
          marginTop:8.5,
          marginLeft:15,
        }}
      />
      <TouchableOpacity  >
        <Icon name="emoji-happy" type="Entypo" size={30} style={styles.icon} />
      </TouchableOpacity>
    </Item>
  );
};
// const HandleEmoicon = () =>{
//   return(
//     <Emoticons
    
//     />
//   );
// }
export const renderMassegeImage = () => {
  return <View />;
};

const styles = StyleSheet.create ({
  icon: {
    color: '#0099FF',
    margin: 4,
  },
  iconheart: {
    color: '#FF0000',
  },
});
