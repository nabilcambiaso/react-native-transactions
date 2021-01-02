import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';


const Header = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding,
            backgroundColor: COLORS.white
        }}
        >
            <View>
                <Image
                    source={icons.fineo_logo}
                    style={{
                        width: 80,
                        height: 30,
                        backgroundColor: 'transparent',
                        tintColor: COLORS.red,
                        resizeMode: 'contain'

                    }}
                />
                <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>Prenez le contrôle de vos finances.</Text>
            </View>


        </View>
    )
}




export default Header;