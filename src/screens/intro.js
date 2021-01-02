import React from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';

import Header from '../components/header/header';
import { COLORS, FONTS, SIZES, icons } from '../../constants/';

const Intro = (props) =>
{

    setTimeout(() => {
        props.navigation.navigate('Login',{name:'Login'});
    }, 2500);

    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Image
        source={icons.fineo_logo}
        style={{
            width:220,
            height:120,
            resizeMode:'contain'
        }}
        />
        </View>
    )
}
export default Intro;
