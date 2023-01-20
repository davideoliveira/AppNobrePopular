import React from 'react';
import { StyleSheet, Image, Text, View, FlatList, Pressable, ScrollView } from 'react-native';
import { dbcategorias, dbprodutos, dbpropaganda, dbpublicidade, dblogomarcas } from '../constants/fakeApi';



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
            data={dbprodutos}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.produtos}>
                    <Image source={item.img} style={styles.imageProdutos}/>
                    <Text style={styles.textProdutos}>{item.text}</Text>
                    
                    <View style={styles.textdescricao}>
                        <View>
                        <Text style={styles.textProdtotal}>{item.precoTotal}</Text>
                        <Text style={styles.textProdDescontado}>{item.precoDescontado}</Text>
                        </View>
                        <Image style={styles.imageAdicionar} source={require('../../assets/icons/botao-adicionar.png')}/>
                        
                    </View>
                </Pressable>
            )}/>

        </View>

        <View style={styles.topicoPublicidade}>

            <Pressable style={styles.publicidade}>
                <Image source={require('../../assets/imgs/propaganda/propagandafralda.jpg')} style={styles.imagePublicidade}/>
            </Pressable>

            <Pressable style={styles.publicidade}>
                <Image source={require('../../assets/imgs/propaganda/propagandajohnsons.jpg')} style={styles.imagePublicidade}/>
            </Pressable>

        </View>

        <View style={styles.topico}>
            <Text style={styles.textTopico}>Ofertas do Dia</Text>

            <FlatList
            data={dbprodutos}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.produtos}>
                    <Image source={item.img} style={styles.imageProdutos}/>
                    <Text style={styles.textProdutos}>{item.text}</Text>
                    
                    <View style={styles.textdescricao}>
                        <View>
                        <Text style={styles.textProdtotal}>{item.precoTotal}</Text>
                        <Text style={styles.textProdDescontado}>{item.precoDescontado}</Text>
                        </View>
                        <Image style={styles.imageAdicionar} source={require('../../assets/icons/botao-adicionar.png')}/>
                        
                    </View>
                </Pressable>
            )}/>

        </View>

        <View style={styles.topicoPublicidade}>

            <Pressable style={styles.publicidade}>
                <Image source={require('../../assets/imgs/propaganda/propagandasabonete.jpg')} style={styles.imagePublicidade}/>
            </Pressable>

        </View>

        <FlatList
            data={dblogomarcas}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.categorias}>
                    <Image source={item.img} style={styles.imagecategorias}/>
                    <Text style={styles.textcategoria}>{item.text}</Text>
                </Pressable>
            )}

        />


        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'

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
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 25,
        borderTopColor: '#d3d3d3',
        borderTopWidth: 1,
        marginBottom: 25
    },
    textTopico: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingLeft: 5,
    },
    produtos: {
        width: 175,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e9e9e9',
        borderWidth: 1,
        borderRadius: 15,
        margin: 5,
        // backgroundColor: 'orange',
    },

    imageProdutos: {
        width: 130,
        height: 130,
        alignItems: 'center',
        margin: 10
    },
    textdescricao: {
        width: '100%',
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    textProdutos: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textProdtotal: {
        fontSize: 12,
        color: '#909090'
        
    },
    textProdDescontado: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    imageAdicionar: {
        width: 45,
        height: 45,
    },
    topicoPublicidade: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 25,
        borderTopColor: '#d3d3d3',
        borderTopWidth: 1,
        marginBottom: 25,
        alignItems: 'center',
        
    },
    publicidade: {
        width: '100%',
        height: 125,
        alignItems: 'center',
        borderRadius: 25,
        margin: 10,
        borderColor: '#e9e9e9',
        borderWidth: 1,
    },
    imagePublicidade: {
        width:'100%',
        borderRadius: 25,
        height: 125
    }
    

})
