import react from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable, ScrollView } from 'react-native';

import { dbprodutos } from '../constants/fakeApi';



export default function OfertaScreen() {

  const atalho = [
    {
      icon: require('../../assets/icons/user.png'),
      text: 'Minhas ofertas'
    },
    {
      icon: require('../../assets/icons/user.png'),
      text: ' Compre pelo televendas'
    },
    {
      icon: require('../../assets/icons/user.png'),
      text: 'Produtos salvos'
    },
    {
      icon: require('../../assets/icons/user.png'),
      text: 'Encontre uma loja'
    },
    {
      icon: require('../../assets/icons/user.png'),
      text: 'Enviar receita digital'
    },
    {
      icon: require('../../assets/icons/user.png'),
      text: 'Meus convênios'
    },
  ]

  return (
    <ScrollView style={styles.container}>

      <View style={styles.topico}>
            <Text style={styles.textTopico}>Exclusivo no App</Text>

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

        <View style={styles.topico}>
            <Text style={styles.textTopico}>Você pode gostar</Text>

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

        <View style={styles.topico}>
            <Text style={styles.textTopico}>Meus Atalhos</Text>

            <FlatList
            data={atalho}
            horizontal
            style={{flexGrow: 0 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <Pressable style={styles.atalhos}>
                    <View style={styles.containerImageAtalho}>

                      <Image source={item.icon} style={styles.imageAtalhos}/>

                      <View style={styles.notifica}>
                        <Text style={styles.textnotifica}>1</Text>
                      </View>
                    </View>
                    <Text style={styles.textAtalho}>{item.text}</Text>
                    
                    
                </Pressable>
            )}/>
        </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'

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


    atalhos: {
        width: 125,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#e9e9e9',
        borderWidth: 0.5,
        borderRadius: 15,
        margin: 5,
        paddingBottom: 10,
        marginBottom: 100
        // backgroundColor: 'orange',
        
        
    },
    containerImageAtalho:
    {
      width: 125,
      borderRadius: 15,
      justifyContent:'space-between',     
      flexDirection: 'row',
      // backgroundColor: 'orange',

    },
    imageAtalhos: {
        width: 40,
        height: 40,
        alignItems: 'center',
        margin: 10,
    },
    notifica: {
      backgroundColor: 'orange',
      width: 20,
      height: 20,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:10,
      marginTop: 10
    },
    textnotifica: {
      fontWeight: 'bold',
      color: '#3f3f3f'
    },
    textAtalho: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})