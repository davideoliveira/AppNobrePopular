import React from 'react';
import { StyleSheet, Image, Text, View, FlatList, Pressable, ScrollView } from 'react-native';
import { dbcategorias, dbpropaganda } from '../constants/fakeApi';



export default function HomeScreen() {

 

      


  return (
    <ScrollView style={styles.container}>

        <View style={styles.header}>

            <Image source={require('../../assets/imgs/logoSemfundo.png')} style={styles.logoheader}></Image>
            <View style={styles.areaiconsheader}>
                <Image style={styles.iconsheader} source={require('../../assets/icons/pesquisa.png')}></Image>
                <Image style={styles.iconsheader} source={require('../../assets/icons/carrinho.png')}></Image>

            </View>
        </View>

        <FlatList
            data={dbpropaganda}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.propaganda}>
                    <Image source={item.imgUrl} style={styles.imagepropaganda}/>
                </Pressable>
            )}

        />

        <FlatList
            data={dbcategorias}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.categorias}>
                    <Image source={item.imgUrl} style={styles.imagecategorias}/>
                    <Text style={styles.textcategoria}>{item.text}</Text>
                </Pressable>
            )}

        />

        <View style={styles.topico}>
            <Text style={styles.textTopico}>Mais Vendidos</Text>
            <FlatList
            data={dbcategorias}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.categorias}>
                    <Image source={item.imgUrl} style={styles.imagecategorias}/>
                    <Text style={styles.textcategoria}>{item.text}</Text>
                </Pressable>
            )}

        />
        </View>


        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        width: '100%',
        height: 85,
        backgroundColor: '#1f1f1f',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 20

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
    propaganda: {
        width: 290,
        height: 275,
        borderRadius:10,
        // backgroundColor: 'black',
        alignItems: 'center',
        marginBottom: 25
        

    },
    imagepropaganda: {
        width: 275,
        height: 275,
        borderRadius: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1
    },
    categorias: {
        marginLeft: 5,
        width: 90,
        height: 125,
        // backgroundColor: 'orange',
        alignItems: 'center',

    },
    imagecategorias: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderColor: '#d3d3d3',
        borderWidth: 1
    },
    textcategoria: {
        marginTop: 5,
        fontSize: 12
    },

    topico: {
        paddingLeft: 10,
        paddingTop: 25,
        borderTopColor: '#d3d3d3',
        borderTopWidth: 1
    },
    textTopico: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10

    }
    

})
