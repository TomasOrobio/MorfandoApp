import React from "react";
import { StyleSheet, View, Text, TextInput, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import {COLORS} from "../../theme/appTheme";

const MisRestaurantes = () => {
  return (
    <View style = {styles.container}>
        <View style = {{flex: .1}}>
            <Text style = {styles.textTitle}>Mis Restaurantes</Text>
        </View>

        <ScrollView style = {{flex: 1}}>
        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>

        <View style = {{flex: 1, flexDirection: 'row'}}>
            <View style = {{flex: 1}}>
            <Image 
          style = {styles.imagen}
          source = {require('../../../assets/images/restaurante-random.png')}
           />
          </View>

            <View style = {{flex: 1.5}}>
            <Text style = {styles.textNombre}>Dean & Dennys</Text>
            <Text style = {styles.textUbicacion}>Palermo, Buenos Aires</Text>
            </View>

            <View style = {{flex: .5}}>
                <TouchableOpacity style = {styles.buttonEditar}>
                    <Text style = {styles.textEditar}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>


        </ScrollView>

        <View style = {{flex: .2}}>
            <TouchableOpacity style = {styles.buttonAgregar}>
                <Text style = {styles.textAgregar}>+</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
};
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blanco,
      flex: 1,    
    },
    buttonEditar: {
        
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.negro,
    },
    textNombre: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        textAlign: 'left',
        color: COLORS.negro,
        marginTop: 5

    },
    textUbicacion: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        textAlign: 'left',
        color: COLORS.gris,
        marginTop: 5

    },
    imagen: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        margin: 5
        
    },
    textAgregar: {
        fontSize: 50,
        alignSelf: 'center',
        bottom: 5,
        color: COLORS.blanco

    },
    textEditar: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 5,
        color: COLORS.gris

    },
    buttonAgregar: {
        width: '15%',
        height: '50%',
        backgroundColor: COLORS.principal,
        alignSelf: 'flex-end',
        margin: 30,
        borderRadius: 100,
        textAlign: 'center'

    },
  
  });
  
  export default MisRestaurantes;