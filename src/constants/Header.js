import React from 'react';
import { StyleSheet, Image, Text, View, FlatList, Pressable, ScrollView } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>

            <Image source={require('../../assets/imgs/logoSemfundo.png')} style={styles.logoheader}></Image>
            <View style={styles.areaiconsheader}>
                <Image style={styles.iconsheader} source={require('../../assets/icons/pesquisa.png')}></Image>
                <Image style={styles.iconsheader} source={require('../../assets/icons/carrinho.png')}></Image>
            
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 85,
        backgroundColor: '#1f1f1f',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5

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

    },
  })
