import React from 'react';
import {
    View,
    Image
} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';




  const NavBar = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
                paddingVertical: 0,
                marginTop: 0,
                backgroundColor: COLORS.white,
            }}
        >
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    width: 50
                }}
                onPress={() => console.log("back")}
            >
                <Image
                    source={icons.back_arrow}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    width: 50
                }}
                onPress={() => console.log("More")}
            >
                <Image
                    source={icons.more}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.primary
                    }}
                />

            </TouchableOpacity>
        </View>
    )
}

export default NavBar;