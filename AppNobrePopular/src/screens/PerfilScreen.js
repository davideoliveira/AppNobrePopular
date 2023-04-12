import react from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';



export default function PerfilScreen() {
  return (
    <View style={styles.container}>

        <View style={styles.box}>

            <View style={styles.iconperson}>
              <ImageBackground source={require('../../assets/imgs/logoNobrePopular1.jpg')}/>
            </View>

            <View style={styles.info}>

            </View>


        </View>
        <Text>Tela de Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'

    },
    box: {
      backgroundColor: '#A9A9A9',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      
    },
    iconperson: {
      marginTop: 20,
      borderRadius: '50%',
      borderWidth: 2,
      // backgroundColor: 'orange',
      height: 100,
      width: 100,
    },
    info: {
      marginTop: 20,
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      borderTopEndRadius: 25,
      borderTopStartRadius: 25


    }
})
