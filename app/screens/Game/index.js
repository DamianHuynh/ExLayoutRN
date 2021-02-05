import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import {avatar, fontQuickSand} from '../../assets';

import gameData from '../../data/gameData';

export default function GameScreen() {
  const GameItem = ({game}) => {
    return (
      <View style={styles.gameItem}>
        <Image
          source={game.preview[0]}
          style={styles.gameBanner}
          resizeMode="stretch"
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
      </View>
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
        contentContainerStyle={{paddingBottom: 60}}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <GameItem game={item} />}
        ItemSeparatorComponent={() => <View style={{height: 60}} />}
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
  },
  gameBanner: {
    height: 300,
    width: '100%',
  },
  gameInfo: {
    ...StyleSheet.absoluteFillObject,
    top: '80%',
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
