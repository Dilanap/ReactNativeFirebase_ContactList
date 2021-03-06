import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const CardKontak = ({id, kontakItem, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailKontak', {id: id})}>
      <View>
        <Text style={styles.nama}>{kontakItem.nama}</Text>
        <Text style={styles.alamat}>{kontakItem.alamat}</Text>
      </View>
      
    </TouchableOpacity>
  );
};

export default CardKontak;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ccccff',
    borderRadius: 6,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  alamat: {
    fontSize: 12,
    color: 'black',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
