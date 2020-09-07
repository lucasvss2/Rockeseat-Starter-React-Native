/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Perfil"
        onPress={ () => navigation.navigate('Perfil', {nome:'Lucas'})}
      />
    </View>
  );
}
