import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../components';
import FIREBASE from '../../config/FIREBASE'

export default class TambahKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    if(this.state.nama && this.state.alamat) {
      
      const kontakReferensi = FIREBASE.database().ref('Kontak');
      const kontak = {
        nama: this.state.nama,
        alamat: this.state.alamat
      }

      kontakReferensi
        .push(kontak)
        .then((data) => {
          Alert.alert('Data Anda Berhasil Tersimpan');
          this.props.navigation.replace('Home');
        })
        .catch((error) => {
          console.log("Error : ", error);
        })


    }else {
      Alert.alert('Error', 'Nama dan Alamat wajib diisi');
    }
    
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Name"
          placeholder="Input Name"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />

        <InputData
          label="Address"
          placeholder="Input Address"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat"
        />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
