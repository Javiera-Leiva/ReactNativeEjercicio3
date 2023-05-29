import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PromedioNumeros = () => {
  const [numeros, setNumeros] = useState([]);
  const [promedio, setPromedio] = useState(0);

  const agregarNumero = () => {
    if (numeroInput.trim() === '') {
      return;
    }
    const numero = parseFloat(numeroInput);
    setNumeros([...numeros, numero]);
    setPromedio((promedio * numeros.length + numero) / (numeros.length + 1));
    setNumeroInput('');
  };

  const [numeroInput, setNumeroInput] = useState('');

  return (
    <View>
      <Text>Ingrese un número:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        keyboardType="numeric"
        value={numeroInput}
        onChangeText={setNumeroInput}
        required
      />
      <Button title="Agregar" onPress={agregarNumero} />

      {numeros.length > 0 ? (
        <View>
          <Text>Los números ingresados son: {numeros.join(', ')}</Text>
          <Text>El promedio es: {promedio.toFixed(2)}</Text>
        </View>
      ) : (
        <Text>No se han ingresado números aún</Text>
      )}
    </View>
  );
};

export default PromedioNumeros;
