import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FIREBASE from '../../../Firebase';
import InputData from '../../component';

class FormScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      phone: '',
      email: '',
      lokasi: '',
      report: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if (
      this.state.nama &&
      this.state.email &&
      this.state.phone &&
      this.state.lokasi &&
      this.state.report
    ) {
      const kontakReferensi = FIREBASE.database().ref('Kontak');
      const kontak = {
        nama: this.state.nama,
        phone: this.state.phone,
        lokasi: this.state.lokasi,
        email: this.state.email,
        report: this.state.report,
      };

      kontakReferensi
        .push(kontak)
        .then((data) => {
          Alert.alert('Laporan Anda telah tersimpan');
          this.props.navigation.navigate('Chat');
        })
        .catch((error) => {
          console.log('Error : ', error);
        });
    } else {
      Alert.alert(
        'Error',
        'Nama, No. Tlp, Email Lokasi dan Detail Report wajib diisi',
      );
    }
  };

  render() {
    return (
      <ScrollView>
        <Image source={require('../../assets/icon.png')} style={styles.bg1} />

        <View style={styles.bgks}>
          <Text style={styles.text}>Form Laporan</Text>
          <InputData
            label="Nama"
            placeholder="Masukan Nama"
            onChangeText={this.onChangeText}
            value={this.state.nama}
            namaState="nama"
          />
          <InputData
            label="Email"
            placeholder="Masukan Email"
            onChangeText={this.onChangeText}
            value={this.state.email}
            namaState="email"
          />
          <InputData
            label="No. Tlp"
            placeholder="Masukan No. Tlp"
            keyboardType="number-pad"
            onChangeText={this.onChangeText}
            value={this.state.phone}
            namaState="phone"
          />
          <InputData
            label="Lokasi"
            placeholder="Masukan Lokasi"
            onChangeText={this.onChangeText}
            value={this.state.lokasi}
            namaState="lokasi"
          />
          <InputData
            label="Detail Report"
            placeholder="Masukkan Detail Report"
            isTextArea={true}
            onChangeText={this.onChangeText}
            value={this.state.report}
            namaState="report"
          />

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.onSubmit()}>
              <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default FormScreen;

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
    flex: 1,
    position: 'relative',
    height: 300,
    width: 400,
    alignItems: 'center',
    opacity: 0.4,
  },
  bgks: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
