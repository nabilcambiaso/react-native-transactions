import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';
import Header from '../header/header';

const Login = (props) =>
{
    return (
        <View>
        <Header/>
        <ScrollView style={{
            marginTop: 100,
        }}>
            <View style={{
                paddingTop: SIZES.base,
                margin: SIZES.padding,

            }}>
                <Text style={{ color: COLORS.secondary, ...FONTS.h2, textAlign: 'center' }}>Bonjour!</Text>
                <Text style={{ ...FONTS.body4, textAlign: 'center' }}>Connectez vous pour accéder à votre espace de suivi de votre budget</Text>
            </View>

            <View style={{
                marginHorizontal: SIZES.padding
            }}>
                <TextInput
                    placeholder="Adresse Email"
                    style={{
                        borderColor: COLORS.lightBlue,
                        borderWidth: 1,
                        borderRadius: 15,
                        height: 35,
                        marginVertical: SIZES.base,
                        textAlign: 'center'
                    }}
                >

                </TextInput>
                <TextInput
                    placeholder="Mot de Passe"
                    style={{
                        borderColor: COLORS.lightBlue,
                        borderWidth: 1,
                        borderRadius: 15,
                        height: 35,
                        textAlign: 'center'

                    }}
                >
                </TextInput>
            </View>
            <View style={{
                
                alignItems:'center',
                justifyContent:'center',
                marginTop:SIZES.base
            }}>
                <TouchableOpacity style={{
                    width:150,
                    height:30,
                    borderWidth:0.5,
                    backgroundColor:COLORS.primary,
                    borderRadius:13,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                onPress={()=>props.navigation.navigate('Home')}
                >
                    <Text style={{...FONTS.h3, color:COLORS.white}}>Se Connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingTop:SIZES.base,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                onPress={()=>props.navigation.navigate('Creer Un Compte',{name:'Creer Un Compte'})}
                >
                    <Text style={{...FONTS.body4, color:COLORS.primary}}>Creer Un Compte ?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    )
}
export default Login;
