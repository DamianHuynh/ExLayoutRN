import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {avatar, fontQuickSand} from '../../../assets';
import gameData from '../../../data/gameData';

const SEPARATOR_HEIGHT = 10;

export default function Home({navigation}) {
  const GameItem = ({game}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.gameItem}
        onPress={() => navigation.navigate('DetailGame')}>
        <Image
          source={game.preview[0]}
          style={styles.gameBanner}
          resizeMode="contain"
        />
        <View
          style={[{backgroundColor: game.backgroundColor}, styles.gameInfo]}>
          <Image source={game.icon} style={styles.gameIcon} />
          <View style={styles.gameInfoContent}>
            <Text style={[styles.text, styles.medium, styles.bold]}>
              {game.title}
            </Text>
            <Text style={[styles.text, styles.small]}>{game.subTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={[styles.text, styles.large]}>
          Hello <Text style={styles.bold}>CyberSoft,</Text>
          {'\n'}
          <Text style={[styles.bold, styles.small]}>Best games for today</Text>
        </Text>
        <Image source={avatar} style={styles.avatar} />
      </View>

      <FlatList
        data={gameData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{paddingBottom: SEPARATOR_HEIGHT}}
        ItemSeparatorComponent={() => (
          <View style={{height: SEPARATOR_HEIGHT}} />
        )}
        renderItem={({item}) => <GameItem game={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 35,
  },
  text: {
    color: '#ffffff',
    fontFamily: fontQuickSand,
  },
  large: {
    fontSize: 30,
  },
  medium: {
    fontSize: 20,
  },
  small: {
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
  },
  gameItem: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  gameBanner: {
    height: 300,
    width: '100%',
  },
  gameInfo: {
    ...StyleSheet.absoluteFillObject,
    top: '65%',
    left: '5%',
    width: '90%',
    padding: 10,
    height: 100,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameIcon: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  gameInfoContent: {
    flexBasis: '80%',
  },
});
