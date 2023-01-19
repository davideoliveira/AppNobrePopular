import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

const { width } = Dimensions.get('window')

export default function HomeScreen() {

    const data = [
        {
            imgUrl: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/296724753_563860588550563_4951329833204329998_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=50nA5YkLJTwAX_teJxb&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA5zDb8DMtbxeMOecXzktfOVJmPG-dc9b1UXJfc4yai7g&oe=63CE901A",
          },
        {
          imgUrl: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/299127506_572839517652670_694975961580244906_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=1OXqThux3KsAX_zaJLT&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfA2LJ5vB214D7OUUq1Hi6CQXpVf3PkW78qqLJfHzTRuug&oe=63CE6EB3",
        },
        {
          imgUrl: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/298087547_572839067652715_6338806114902372333_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=w9w-Hya37ZsAX9LELB6&_nc_oc=AQlyN5P1Z0Gl9NdsUNt2wFesLqHTaKzdln0QssYIrulxd5pfG1W2FbKISzcfGqi9vTjY9wj7UwZ7AY_-tQGj0Yx0&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfCISrv7Sa_F_BFTuwexhpSccDrmFpFIYVqwTgc84-VtqA&oe=63CEB6B6",
        },
        {
          imgUrl: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t39.30808-6/294780661_561680655435223_7252242019487505528_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_ohc=41YZwAVsGqMAX_5A0-c&_nc_ht=scontent.fcgh2-1.fna&oh=00_AfB61Efm3xB9jZYe-msdt1U8lXT4TDVc3Uccs7IYvUP-ag&oe=63CE7615",
        },
    ];

    const CarouselCardItem = ({ item, index }, parallaxProps) => {
    return (
        <View style={styles.carrossel} >
            <ParallaxImage
                    source={{ uri: item.imgUrl }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0}
                    {...parallaxProps}
                />
          
        </View>
    )
    }


      


  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image source={require('../imgs/logoSemfundo.png')} style={styles.logoheader}></Image>
            <View style={styles.areaiconsheader}>
                <Image style={styles.iconsheader} source={require('../icons/pesquisa.png')}></Image>
                <Image style={styles.iconsheader} source={require('../icons/carrinho.png')}></Image>

            </View>
        </View>

        <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={width}
        sliderHeight={width}
        itemWidth={275}
        hasParallaxImages={true}
        />
        <Text>ver</Text>
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
    carrossel: {
        width: 275,
        height: 275,

    },
      imageContainer: {
        flex: 1,
        borderRadius: 8,
    },


})
