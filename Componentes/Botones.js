import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ onPress, title, color }) => (
  <TouchableOpacity onPress={onPress} style={[styles.boton, { backgroundColor: color }]}>
    <Text style={styles.botonTexto}>{title}</Text>
  </TouchableOpacity>
);

const Botones = ({ incrementar, reiniciar, disminuir}) => (
  <View style={styles.botonesContainer}>
    <Boton onPress={incrementar} title="Incrementar" color="#000080" />
    <Boton onPress={disminuir} title="Disminuir" color="#D2042D" />
    <Boton onPress={reiniciar} title="Reiniciar" color="#50C878" />
  </View>
);

const styles = StyleSheet.create({
  botonesContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boton: {
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Botones;
