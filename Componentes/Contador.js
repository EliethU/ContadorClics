import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contador = ({ count }) => (
  <View style={styles.contadorContainer}>
    <Text style={styles.contadorTexto}>{count}</Text>
  </View>
);

const styles = StyleSheet.create({
  contadorContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 20,
    borderRadius: 10,    
  },
  contadorTexto: {
    fontSize: 120,
    color: '#fff',    
  },
});

export default Contador;