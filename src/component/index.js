import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const InputData = ({
  label,
  placeholder,
  keyboardType,
  isTextArea,
  onChangeText,
  namaState,
  value,
}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.text}>{label} :</Text>
        <TextInput
          style={styles.area}
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          placeholderTextColor="skyblue"
          keyboardType={keyboardType}
          value={value}
          onChangeText={(text) => onChangeText(namaState, text)}
        />
      </>
    );
  }
  return (
    <>
      <Text style={styles.text}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="skyblue"
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(namaState, text)}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
  area: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
