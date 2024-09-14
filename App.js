import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';

// Asegúrate de que las rutas de las imágenes sean correctas
const backgroundImage = './ContadorClics/logo/logo.png'; // Imagen de fondo
const logoImage = './ContadorClics/logo/logo.png'; // Logo

export default function App() {
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Función para reiniciar el contador
  const handleReset = () => {
    setCount(0);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        {/* Logo en lugar del texto freeCodeCamp */}
        <Image source={logoImage} style={styles.logo} />

        {/* Contenedor del contador */}
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{count}</Text>
        </View>

        {/* Botón para incrementar el contador */}
        <View style={styles.buttonContainer}>
          <Button title="Clic" onPress={handleIncrement} color="blue" />
        </View>

        {/* Botón para reiniciar el contador */}
        <View style={styles.buttonContainer}>
          <Button title="Reiniciar" onPress={handleReset} color="green" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 50, // Ajusta el tamaño del logo según sea necesario
    marginBottom: 20,
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Opcional: Agregar un fondo semitransparente
  },
  counterText: {
    fontSize: 64,
    color: 'white',
  },
  buttonContainer: {
    marginBottom: 10,
    width: 200,
  },
});