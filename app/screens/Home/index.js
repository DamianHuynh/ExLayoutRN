/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Text, StyleSheet, SafeAreaView} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// export default function Home({navigation}) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Home</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Game')}>
//         <Text>Game App</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Props extends Component {
  userList = [
    {name: 'wanda', avatar: require('../../assets/images/Zalo/wanda.jpg')},
    {name: 'yasuo', avatar: require('../../assets/images/Zalo/yasuo.jpg')},
    {name: 'captain', avatar: require('../../assets/images/Zalo/captain.jpg')},
    {name: 'flash', avatar: require('../../assets/images/Zalo/flash.jpg')},
    {name: 'tony', avatar: require('../../assets/images/Zalo/ironman.jpeg')},
    {
      name: 'petter',
      avatar: require('../../assets/images/Zalo/spiderman.jpeg'),
    },
  ];

  userSuggestions = [
    {name: 'strange', avatar: require('../../assets/images/Zalo/strange.jpg')},
    {name: 'kara', avatar: require('../../assets/images/Zalo/suppergirl.jpg')},
    {
      name: 'diana',
      avatar: require('../../assets/images/Zalo/wonderwoman.jpg'),
    },
    {
      name: 'natasha',
      avatar: require('../../assets/images/Zalo/blackwidow.jpeg'),
    },
    {name: 'strange', avatar: require('../../assets/images/Zalo/strange.jpg')},
    {name: 'kara', avatar: require('../../assets/images/Zalo/suppergirl.jpg')},
    {
      name: 'diana',
      avatar: require('../../assets/images/Zalo/wonderwoman.jpg'),
    },
    {
      name: 'natasha',
      avatar: require('../../assets/images/Zalo/blackwidow.jpeg'),
    },
    {name: 'strange', avatar: require('../../assets/images/Zalo/strange.jpg')},
    {name: 'kara', avatar: require('../../assets/images/Zalo/suppergirl.jpg')},
    {
      name: 'diana',
      avatar: require('../../assets/images/Zalo/wonderwoman.jpg'),
    },
    {
      name: 'natasha',
      avatar: require('../../assets/images/Zalo/blackwidow.jpeg'),
    },
  ];

  renderItemUser = ({item}) => {
    return (
      <View>
        <Image
          resizeMode="cover"
          source={item.avatar}
          style={{
            height: 80,
            width: 80,
            justifyContent: 'center',
            marginHorizontal: 10,
            borderRadius: 45,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'capitalize',
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  renderItemSug = () => {
    return this.userSuggestions.map((item, i) => (
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 8,
          backgroundColor: '#ddd',
          padding: 10,
        }}>
        <Image
          resizeMode="cover"
          source={item.avatar}
          style={{
            height: 80,
            width: 80,
            justifyContent: 'center',
            marginHorizontal: 10,
            borderRadius: 45,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {item.name}
            </Text>
            <Text>15 bạn chung</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: '#bbf',
                borderRadius: 20,
              }}>
              <Text>Kết bạn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ));
  };

  render() {
    return (
      <View style={{flex: 1, marginVertical: 50, paddingHorizontal: 10}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Entypo name="back-in-time" size={20} />
            <Text
              style={{
                marginLeft: 5,
                fontWeight: '600',
                fontSize: 18,
                alignItems: 'center',
              }}>
              Danh Sách tìm kiếm gần đây
            </Text>
          </View>
          <FlatList
            horizontal
            data={this.userList}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderItemUser}
            keyExtractor={(_, i) => i.toString()}
          />
        </View>
        <View style={{flex: 4}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Ionicons name="ios-people" size={20} />
            <Text
              style={{
                marginLeft: 5,
                fontWeight: '600',
                alignItems: 'center',
                fontSize: 18,
              }}>
              Gợi ý kết bạn
            </Text>
          </View>
          {/* <FlatList
            data={this.userSuggestions}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderItemSug}
            keyExtractor={(_, i) => i.toString()}
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
          /> */}
          <ScrollView>{this.renderItemSug()}</ScrollView>
        </View>
      </View>
    );
  }
}
