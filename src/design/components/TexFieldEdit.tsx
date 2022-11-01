import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

interface TextFieldEditProps {
  placeholder: string;
  // isSecure?: boolean;
  // onTextChange: Function;
}

export const TextFieldEdit: React.FC<TextFieldEditProps> = ({
  placeholder,
  // isSecure = false,
  // onTextChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        // secureTextEntry={isPassword}
        // onChangeText={(text) => onTextChange(text)}
        style={styles.textFieldEdit}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'65%',
    flexDirection: 'row',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#DBDBDB',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    paddingRight: 10,
  },
  textFieldEdit: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: '#000',
  },
});