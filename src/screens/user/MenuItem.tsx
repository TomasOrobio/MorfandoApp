import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import {COLORS} from '../../theme/appTheme';

const MenuItem = () => {
  return (
    <View style = {styles.container}>

      <View style = {{flex: .3}}>
            <TouchableOpacity style = {styles.buttonBack}>
              <Text style = {styles.textBack}>BACK</Text>
            </TouchableOpacity>
      </View>

      <View style = {{flex: 1}}>
        <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

      <View style = {{flex: .5, flexDirection: 'row'}}>
        <View style = {{flex: 1.5}}>
            <Text style={styles.textNombreRestaurante}>Nombre restaurante</Text>
            <Text style = {styles.textCalificacion}>Calificación
            <Text style = {styles.textDireccion}> Dirección</Text>
            </Text>
            <Text style={styles.textDireccion}>Dirección</Text>
        </View>

        <View style = {{flex: .5}}>
            <Text style={styles.textIconos}>ICONO MAPA</Text>
        </View>
        

      </View>

      
      <View style = {{flex: .3, flexDirection: 'row'}}>
        <View style = {{flex: 1}}>
        <Text style={styles.textIconos}>iconos</Text>
        </View>

        <View style = {{flex: 1}}>
        <Text style={styles.textIconos}>iconos</Text>
        </View>

        <View style = {{flex: 1}}>
        <Text style={styles.textIconos}>iconos</Text>
        </View>
      </View>

      <View style = {{flex: 2}}>
        <ScrollView>
        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
        </View>
        </View>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
        </View>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
        </View>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
        </View>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Resto.jpg')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textComida}>Comida</Text>
            <Text style = {styles.textDescuento}>_%</Text>
            <Text style = {styles.textPrecio}> Precio</Text>
            
            </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/LibreGluten.png')}
           />
          </View>

            <View style = {{flex: .5}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/Vegano.png')}
           />
          </View>
        </View>

        </ScrollView>
      </View>
      
      </View>
    
  );
};
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blanco,
      flex: 1,      
    },
    buttonBack: {
        width: '15%',
        height: '50%',
        color: COLORS.negro,
        borderColor: COLORS.principal,
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: COLORS.principal,
    
    },
    textBack: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.negro,
        textAlign: 'center',
    },
    imagenResto: {
        alignSelf: 'center',
        height: '100%',
        width: '100%'
    },
    imagen: {
        alignSelf: 'center',
        height: '100%',
        width: '70%',
        borderRadius: 30,
        resizeMode: 'contain',
    },
    textComida: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: COLORS.negro
    },
    textDescuento: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        borderWidth: 2,
        borderColor: COLORS.principal,
        borderRadius: 10,
        backgroundColor: COLORS.principal,
        width: '20%',
        textAlign: 'center',
        color: COLORS.blanco
    },
    textPrecio: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: COLORS.principal

    },
    textNombreRestaurante: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: COLORS.negro,
        left: 5
    },
    textEspecialidad: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: COLORS.gris,
        left: 5

    },
    textCalificacion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: COLORS.gris,
        left: 5

    },
    textDireccion: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: COLORS.gris,
        left: 5

    },
    imagen1: {
        alignSelf: 'center'

    },
    textIconos: {
        color: COLORS.gris
    },
    
    
  
  });
  
  export default MenuItem;