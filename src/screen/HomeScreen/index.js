import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Mulai</Text>
  </TouchableOpacity>
);

function HomeScreen({navigation}) {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate('Chat')}
      onDone={() => navigation.navigate('Chat')}
      pages={[
        {
          backgroundColor: 'lightblue',
          image: <Image source={require('../../assets/potrait.png')} />,
          title: 'Selamat Datang di ComplainApp',
          subtitle: 'Tekan Next untuk melihat petunjuk melapor',
        },

        {
          backgroundColor: 'lightyellow',
          image: <Image source={require('../../assets/potrait.png')} />,
          title: 'Cara Untuk Melapor',
          subtitle:
            'Tekan Mulai di kanan bawah, lalu Anda akan di arahkan kedalam Agent Chat kami',
        },
      ]}
    />
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
