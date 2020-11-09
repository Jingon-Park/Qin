import React, { Component, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatHome from './home';
import chatRoom from './chatRoom';
import MailHome from '../mailBox/home'

const Stack = createStackNavigator();

export default function ChatScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ChatHome}
                options={{
                    headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('../../../image/menu_1.png')} style={{ height: 50, width: 50, resizeMode: 'contain'}}
                        />
                    </TouchableOpacity>,
                    headerTitle: () =>
                        <View style={{ alignItems: "center", flex:1 }}>
                            <Image source={require('../../../image/logo_mini_02.png')} style={{ height: 50, width: 50, resizeMode: 'contain'}}/>
                        </View>
                    ,
                    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('MailHome')}>
                        <Image source={require('../../../image/mail_y.png')} style={{ height:80, width:80, resizeMode: 'contain' }}/>
                        </TouchableOpacity>,
                }}
            />
            <Stack.Screen
                name="chatRoom"
                component={chatRoom}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MailHome"
                component={MailHome}
                options={{
                    headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require('../../../image/menu_1.png')} style={{ height: 50, width: 50, resizeMode: 'contain'}}
                        />
                    </TouchableOpacity>,
                    headerTitle: () =>
                        <View style={{ alignItems: "center", flex:1 }}>
                            <Image source={require('../../../image/logo_mini_02.png')} style={{ height: 50, width: 50, resizeMode: 'contain'}}/>
                        </View>
                    ,
                    headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('MailHome')}>
                        <Image source={require('../../../image/mail_y.png')} style={{ height:80, width:80, resizeMode: 'contain' }}/>
                        </TouchableOpacity>
                    ,
                }}
            />
        </Stack.Navigator>
    );
}