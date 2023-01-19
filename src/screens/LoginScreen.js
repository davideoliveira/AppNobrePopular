import react, { useState } from 'react';
import { ImageBackground, Image, Pressable, StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';

export default function LoginScreen() {

    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../imgs/fundoNobrePopular.jpg')}>
                <Image source={require('../imgs/logoNobrePopular1.jpg')} style={{width: '100%', height:150}}/>
                
                <View style={styles.content}>

                    <Text style= {styles.tittle1}>Olá, vamos começar?</Text>
                    <Text style={styles.tittle2}>Faça seu login no App Nobre Popular</Text>

                    <View style={styles.form}>
                        <TextInput
                        style={styles.input}
                        placeholder = 'Email'
                        placeholderTextColor={'#63877E'}
                        value={inputEmail}
                        onChangeText={value => setInputEmail(value)}
                        />

                        <TextInput
                        style={styles.input}
                        placeholder = 'Senha'
                        placeholderTextColor={'#63877E'}
                        value={inputEmail}
                        onChangeText={value => setInputSenha(value)}
                        />

                        <View style={styles.botoes}>
                            <Pressable
                                style={styles.buttonesquecesenha}
                                onPress={() => console.log}>
                                <Text style={{color: 'orange'}}>Esqueci minha senha</Text>
                            </Pressable>

                            <Pressable 
                                style={styles.botaoAcessar}
                                onPress={() => {}}>
                                <Text>Entrar</Text>
                            </Pressable>
                        </View>

                    </View>

                    <Text style={styles.textredesocial}>Entre usando:</Text>
                    <View style={styles.redessociais}>
                        <Image source={require('../icons/apple.png')} style={styles.icons}/>
                        <Image source={require('../icons/GMAIL.png')} style={styles.icons}/>
                        <Image source={require('../icons/microsoft.png')} style={styles.icons}/>
                    </View>

                    <View style={styles.cadastro}>
                        <Text>Ainda não tem uma conta?  </Text>
                        <Text onPress={() =>{}} style={{color: 'orange'}}>Cadastre-se</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#FFF'
    },
    tittle1: {
        marginTop: 30,
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 18
    },
    form: {
        marginTop: 25
    },
    input: {
       backgroundColor: '#e9e9e9',
       borderRadius: 5,
       padding: 5,
       marginTop: 10,
       marginBottom: 10,
       width: 250,
       height: 40,

    },
    botoes: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    },
    botaoAcessar: {
        width: 75,
        height: 35, 
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center'

    },
    textredesocial: {
        marginTop: 90,
        marginBottom: 20,
        textAlign:'center'
    },
    redessociais: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icons: {
        width: 35,
        height:35
    },
    cadastro: {
        flexDirection: 'row',
        marginTop: 100
    }
  });