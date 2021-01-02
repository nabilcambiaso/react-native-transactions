import React, { useState, useRef } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    ActivityIndicator
} from 'react-native';
import { VictoryPie } from 'victory-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import Login from '../components/login/login';
import {ChartPie} from '../components/charts/chart';
import NavBar from '../components/navbar/navbar';
import Header from '../components/header/header';

const Home = () => {

    // dummy data
    const styles = StyleSheet.create({
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
        }
    })
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "ByProgrammers' tuition center",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "ByProgrammers' tuition center",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "ByProgrammers' Book Store",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Les Courses",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "ByProgrammers' Pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Maison",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "ByProgrammers' Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "ByProgrammers' Baby Care Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "ByProgrammers' Supermarket",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "ByProgrammers' Fashion Store",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Bien Etre",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "ByProgrammers' Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "ByProgrammers' Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "ByProgrammers' Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "ByProgrammers' Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Autres",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 7,
            name: "Autres2",
            icon: icons.cloth_icon,
            color: COLORS.primary,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "ByProgrammers' Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "ByProgrammers' Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]

    const categoryListHeightAnimationValue = useRef(new Animated.Value(50)).current;
  
    const [showMoreToggle, setShowMoreToggle] = useState(true);
    const [categories, setCategories] = useState(categoriesData);
    //set buttons colors state on press
    const [viewMode, setViewMode] = useState("chart");
    const [selectedCategory, setSelectedCategory] = useState(null);
  

  

    function renderCategoryHeaderSection() {
        return (
            <View style={{
                paddingHorizontal: SIZES.padding
            }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            backgroundColor: COLORS.lightGray,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h4 }}>{new Date().toDateString()}</Text>
                        <Text style={{ color: COLORS.darkgray, ...FONTS.body3 }}>18% more than last month</Text>
                    </View>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                }}>

                    {/**title */}
                    <View >
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
                        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}> {categories.length} Total</Text>
                    </View>
                    {/**buttond */}
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 40,
                                backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                                borderRadius: 25
                            }}
                            onPress={() => setViewMode("chart")}
                        >
                            <Image
                                source={icons.chart}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray
                                }}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 40,
                                backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                                borderRadius: 25
                            }}
                            onPress={() => setViewMode("list")}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray
                                }}

                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        )

    }
    function renderCategoryList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        margin: 2,
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 5,
                        backgroundColor: COLORS.white,
                        ...styles.shadow
                    }}
                    onPress={() => setSelectedCategory(item)}
                >
                    <Image
                        source={item.icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: item.color,

                        }}
                    />
                    <Text style={{
                        marginLeft: SIZES.base, color: COLORS.primary,
                        ...FONTS.h4,
                    }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }} >
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={3}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 100.5,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        }
                        else {

                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 50,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        }
                        setShowMoreToggle(!showMoreToggle)
                    }
                    }
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "More" : "Less"}</Text>
                    <Image
                        source={showMoreToggle ? icons.down_arrow : icons.up_arrow}
                        style={{
                            marginLeft: 5,
                            width: 15,
                            height: 15,
                            alignSelf: 'center'
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle() {

        return (
            <View style={{ padding: SIZES.padding, backgroundColor: COLORS.lightGray2 }}>
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>Transaction Faite</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total </Text>
            </View>
        )
    }
    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        //filter pending expenses
        let incomingExpenses = allExpenses.filter(a => a.status == "P")
        const renderItem = ({ item, index }) => {
            return (
                <View
                    style={{
                        width: 300,
                        marginRight: SIZES.padding,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginVertical: SIZES.radius,
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                        ...styles.shadow
                    }}>
                    {/**title */}
                    <View style={{
                        flexDirection: 'row', padding: SIZES.padding,
                        alignItems: 'center'
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}>
                            <Image
                                source={selectedCategory.icon}
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: selectedCategory.color
                                }}
                            />
                        </View>
                        <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>
                            {selectedCategory.name}
                        </Text>
                    </View>
                    {/** Expenses Description*/}
                    <View style={{ paddingHorizontal: SIZES.padding }}>
                        <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
                        <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>{item.description}</Text>
                        {/**location */}
                        <Text style={{ marginTop: SIZES.padding, ...FONTS.h4 }}>Location</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={icons.pin}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.darkgray,
                                    marginRight: 5
                                }}
                            />
                            <Text style={{
                                marginBottom: SIZES.base, color: COLORS.darkgray,
                                ...FONTS.body4
                            }}>{item.location}</Text>
                        </View>
                    </View>
                    {/**price */}
                    <View style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color
                    }}>
                        <Text style={{
                            color: COLORS.white, ...FONTS.body3
                        }}>CONFIRM {item.total.toFixed(2)} USD</Text>
                    </View>
                </View>
            )
        }
        return (
            <View>
                {renderIncomingExpensesTitle()}
                {
                    incomingExpenses.length > 0 &&

                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }
                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                        

                    </View>
                }
            </View>
        )
    }

   
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
           { /*<ActivityIndicator size="small" color="#0000ff"/>*/}
            {/*Nav bar Section*/}
             <NavBar/>
            {/*header section*/}
            <Header/>
            
            <View>
                    <View>
                        {renderCategoryHeaderSection()}
                    </View>

                    <View contentContainerStyle={{ paddingBottom: 60 }} >
                        {
                            viewMode == "list" &&
                            <View>
                                {renderCategoryList()}
                                {renderIncomingExpenses()}
                            </View>
                        }
                        {
                            viewMode == "chart" &&
                            <View>
                                <ChartPie data={categories} />
                            </View>
                        }
                    </View>
                </View>
        </View>
    )
}

export default Home;