import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './Home';
import Detail from './Detail';
import Live from './Live';
import Profile from './Profile';
import {View} from 'react-native';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const RootTab = () => {
  const tabBarOptions = {
    showLabel: false,
    style: {
      backgroundColor: '#343434',
      borderTopColor: '#343434',
    },
  };
  const tabBarIconContent = {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 32,
  };
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          const backgroundColor = focused ? '#819ee5' : '#343434';
          const size = focused ? 25 : 20;
          switch (route.name) {
            case 'HomeGame':
              iconName = 'home';
              break;
            case 'LiveGame':
              iconName = 'game-controller';
              break;
            case 'ProfileGame':
              iconName = 'user';
              break;

            default:
              break;
          }
          return (
            <View style={[{backgroundColor}, tabBarIconContent]}>
              <Entypo name={iconName} size={size} color="#fff" />
            </View>
          );
        },
      })}>
      <Tab.Screen name="HomeGame" component={Home} />
      <Tab.Screen name="LiveGame" component={Live} />
      <Tab.Screen name="ProfileGame" component={Profile} />
    </Tab.Navigator>
  );
};

export default function GameScreen() {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="RootGame" component={RootTab} />
      <Stack.Screen name="DetailGame" component={Detail} />
    </Stack.Navigator>
  );
}
