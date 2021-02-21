import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {avatar, fontQuickSand} from '../../../assets';
import gameData from '../../../data/gameData';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContent}>
        <Image source={avatar} style={styles.avatarImage} />
        <Text style={[styles.text, styles.medium, styles.bold]}>CyberSoft</Text>
      </View>

      <View style={styles.badgeContainer}>
        <View style={styles.badgeContent}>
          <Text style={[styles.text, styles.bold]}>Pro Gamer</Text>
        </View>
        <View style={[styles.badgeContent, styles.coderBackground]}>
          <Text style={[styles.text, styles.bold, styles.textDark]}>
            Pro Coder
          </Text>
        </View>
      </View>

      <View style={styles.statContainer}>
        <View style={styles.statContent}>
          <Text style={[styles.text]}>
            <Text style={[styles.large, styles.bold]}>250</Text>{' '}
            <Text style={styles.textGray}>Games</Text>
          </Text>
        </View>
        <View>
          <Text style={[styles.text]}>
            <Text style={[styles.large, styles.bold]}>{gameData.length}</Text>{' '}
            <Text style={styles.textGray}>Purchases</Text>
          </Text>
        </View>
      </View>

      <View style={{flex: 3}}>
        <Text style={[styles.purchaseTitle, styles.text, styles.medium]}>
          Purchased Games
        </Text>

        <FlatList
          data={gameData}
          showsVerticalScrollIndicator={false}
          style={styles.purchaseContent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.purchaseItem}>
              <Image source={item.icon} style={styles.purchaseIcon} />
              <View style={styles.purchaseInfo}>
                <Text style={[styles.text, styles.bold]}>{item.title}</Text>
                <Text style={[styles.text, styles.small]}>
                  {Math.floor(Math.random() * 1000) + 1} Sales
                </Text>
              </View>
              <Text style={[styles.text, styles.bold, styles.textBlue]}>
                ${Math.floor(Math.random() * 50) + 1}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  text: {
    color: '#ffffff',
    fontFamily: fontQuickSand,
  },
  textDark: {
    color: '#000',
  },
  textGray: {
    color: '#9a9a9a',
  },
  textBlue: {
    color: '#819ee5',
  },
  large: {
    fontSize: 30,
  },
  medium: {
    fontSize: 20,
  },
  small: {
    fontSize: 12,
  },
  bold: {
    fontWeight: '700',
  },
  avatarContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
    marginBottom: 16,
  },
  avatarImage: {
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  badgeContent: {
    backgroundColor: '#819ee5',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  coderBackground: {
    backgroundColor: '#F0DB4F',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 32,
  },
  statContent: {
    marginHorizontal: 16,
  },
  purchaseTitle: {
    alignSelf: 'center',
  },
  purchaseContent: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 32,
  },
  purchaseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  purchaseIcon: {
    height: 80,
    width: 80,
    borderRadius: 12,
  },
  purchaseInfo: {
    flex: 1,
    marginHorizontal: 16,
  },
});
