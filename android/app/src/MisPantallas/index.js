import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Capo from '../screens/pruebaEliminar/Capo';
import Pantalla from '../screens/pruebaEliminar/Pantalla';
import Login_Usuario from '../screens/Usuario/Login_Usuario';
import Login_Restaurante from '../screens/Restaurante/Login_Restaurante';
import Register_Restaurante from '../screens/Restaurante/Register_Restaurante';
import Register_Usuario from '../screens/Usuario/Register_Usuario';
import ChangePassword_Usuario from '../screens/Usuario/ChangePassword_Usuario';
import ChangePassword_Restaurante from '../screens/Restaurante/ChangePassword_Restaurante';
import MisRestaurantes from '../screens/Restaurante/MisRestaurantes';
import MenuItem from '../screens/Restaurante/MenuItem_Restaurante';
import Menu from '../screens/Usuario/Menu';
import Horarios from '../screens/Restaurante/Horarios';
import FotosRestaurante from '../screens/Restaurante/FotosRestaurante';
import CrearMenu from '../screens/Restaurante/CrearMenu';
import MenuItemPlatoDetalle from '../screens/Restaurante/MenuItemPlatoDetalle';
import FavoritosConItems from '../screens/Usuario/FavoritosConItems';
import FavoritosNoitems from '../screens/Usuario/FavoritosNoItems';
import Perfil_Usuario from '../screens/Usuario/Perfil_Usuario';
import Perfil_Restaurante from '../screens/Restaurante/Perfil_Restaurante';
import MenuItem_Restaurante from '../screens/Restaurante/MenuItem_Restaurante';
import MenuItem_Usuario from '../screens/Usuario/MenuItem_Usuario';
import InformacionRestaurante from '../screens/Restaurante/InformacionRestaurante';
import Filtros from '../screens/Usuario/Filtros';

const Stack = createNativeStackNavigator();

function Inicio(props){
  return(
    <View style={styles.container}>
        <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login Usuario')}>
            <Image 
                style = {styles.imagen}
                source = {require('../assets/img/FotoInicio.png')}
                >
            </Image>
            </TouchableOpacity>                
        </View>

        <View>
            <Text style = {styles.text}>Morfando Inc</Text>
        </View>
            
    </View>
  );
}

function MisPantallas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenido!" component={Inicio} />
        <Stack.Screen name="Login Usuario" component={Login_Usuario} />
        <Stack.Screen name="Login Restaurante" component={Login_Restaurante} />
        <Stack.Screen name="Registrar Restaurante" component={Register_Restaurante} />
        <Stack.Screen name="Registrar Usuario" component={Register_Usuario} />
        <Stack.Screen name="Cambiar Contraseña de Usuario" component={ChangePassword_Usuario} />
        <Stack.Screen name="Cambiar Contraseña de Restaurante" component={ChangePassword_Restaurante} />
        <Stack.Screen name="Restaurantes" component={MisRestaurantes} />
        <Stack.Screen name="Detalle Restaurante" component={MenuItem_Restaurante} />
        <Stack.Screen name="Detalle Menú Restaurante" component={MenuItem_Usuario} />
        <Stack.Screen name="Menú" component={Menu} />
        <Stack.Screen name="Horarios" component={Horarios} />
        <Stack.Screen name="Subir Fotos" component={FotosRestaurante} />
        <Stack.Screen name="Crear Menú" component={CrearMenu} />
        <Stack.Screen name="Detalle del Plato" component={MenuItemPlatoDetalle} />
        <Stack.Screen name="Restaurantes Favoritos" component={FavoritosConItems} />
        <Stack.Screen name="Sin Favoritos" component={FavoritosNoitems} />
        <Stack.Screen name="Perfil Usuario" component={Perfil_Usuario} />
        <Stack.Screen name="Perfil Restaurante" component={Perfil_Restaurante} />
        <Stack.Screen name="Información Restaurante" component={InformacionRestaurante} />
        <Stack.Screen name="Filtros" component={Filtros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'orange',
      flex: 1,
  },
  imagen: {
      alignSelf: 'center',
      height: 186,
      width: 182,
      borderWidth: 2,
      backgroundColor: 'white',
      borderRadius: 100,
      marginTop: '50%',
  },
  text: {
      fontFamily: 'Poppins-Regular',
      fontSize: 48,
      color: 'black',
      alignSelf: 'center',

  },

});

export default MisPantallas;