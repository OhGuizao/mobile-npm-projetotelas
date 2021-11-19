import React from 'react';
//Baixar o navigator com o codigo: npm install @react-navigation/native
//Baixar as screens com o codigo: npm install react-native-screens react-native-safe-area-context
//Logo após, importe o componente com o codigo abaixo...
import {NavigationContainer} from '@react-navigation/native';
//Baixar o empilhamento com o codigo: npm install @react-navigation/native-stack
//Logo após, importe o componente com o codigo abaixo...
import { createNativeStackNavigator} from '@react-navigation/native-stack';
//Importando as tags do navigation
import Home from './screens/Home';
import Camera from './screens/AppCamera';
import Galeria from './screens/Galeria';
import MapaGoogle from './screens/MapaGoogle';
import PaginaWeb from './screens/PaginaWeb';

const Pilha = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
      <Pilha.Screen name='Home' component={Home}/>
      <Pilha.Screen name='Camera' component={Camera}/>
      <Pilha.Screen name='Galeria' component={Galeria}/>
      <Pilha.Screen name='Mapa'component={MapaGoogle}/>
      <Pilha.Screen name='PaginaWeb' component={PaginaWeb} options={{headerShown:false}}/>
      </Pilha.Navigator>
    </NavigationContainer>
  
  );
}
