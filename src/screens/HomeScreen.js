import react from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../imgs/logoSemfundo.png')} style={styles.logoheader}></Image>
            <View style={styles.areaiconsheader}>
                <Image style={styles.iconsheader} source={require('../icons/pesquisa.png')}></Image>
                <Image style={styles.iconsheader} source={require('../icons/carrinho.png')}></Image>

            </View>
        </View>
        <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 80,
        backgroundColor: '#1f1f1f',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15

    },
    logoheader: {
        width: 100,
        height: 50,
        marginTop: 20
    },
    areaiconsheader: {
        flexDirection: 'row',
        marginTop: 25
    },
    iconsheader: {
        margin: 15,
        width: 25,
        height: 25

    }

})
