import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = (text) => {
    this.setState({email: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.bg1} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    alignItems: 'center',
  },
  input: {
    margin: 15,
    width: 380,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  submitButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    margin: 15,
    height: 40,
    width: 100,
    borderRadius: 15,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  bg1: {
    height: 300,
    width: 400,
  },
});
