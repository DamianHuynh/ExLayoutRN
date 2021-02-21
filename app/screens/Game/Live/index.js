import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import {fontQuickSand} from '../../../assets';
import gameData from '../../../data/gameData';

export default function Live() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.large, styles.bold]}>Streaming</Text>
        <View style={styles.searchContent}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here ..."
            placeholderTextColor="#838383"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.popularContainer}>
        <Text style={[styles.text]}>Popular Games</Text>
        <ScrollView
          style={styles.listPopularContent}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {gameData.map((game, key) => (
            <View style={styles.popularContent} key={key}>
              <Image source={game.icon} style={styles.gameIcon} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.liveSectionContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, styles.medium, styles.bold]}>
            Live Games
          </Text>
          <Text style={[styles.text, styles.bold, styles.textBlue]}>
            View All
          </Text>
        </View>
        <FlatList
          data={gameData}
          style={styles.liveContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <Image source={item.preview[0]} style={styles.gameBanner} />
              <View style={styles.liveInfo}>
                <View style={styles.liveTitle}>
                  <Text style={[styles.text, styles.medium, styles.bold]}>
                    {item.title}
                  </Text>
                </View>
                <View style={styles.liveBadge}>
                  <Text style={[styles.text, styles.medium, styles.bold]}>
                    Live
                  </Text>
                </View>
              </View>
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
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
  },
  header: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  searchContent: {
    marginHorizontal: 8,
    marginVertical: 32,
    borderRadius: 100,
    backgroundColor: '#404040',
    justifyContent: 'center',
  },
  searchInput: {
    paddingVertical: 16,
    paddingLeft: 32,
    paddingRight: 64,
  },
  searchButton: {
    position: 'absolute',
    right: 16,
  },
  popularContainer: {
    paddingHorizontal: 16,
  },
  listPopularContent: {
    flexGrow: 0,
    marginVertical: 16,
    marginLeft: -16,
  },
  popularContent: {
    marginHorizontal: 16,
  },
  gameIcon: {
    height: 80,
    width: 80,
    borderRadius: 12,
  },
  liveSectionContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveContainer: {
    flex: 1,
    marginTop: 16,
  },
  gameBanner: {
    backgroundColor: 'red',
    height: 210,
    aspectRatio: 16 / 9,
    borderRadius: 12,
    marginBottom: 16,
  },
  liveInfo: {
    position: 'absolute',
    top: 8,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveTitle: {
    marginRight: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#819ee5',
    borderRadius: 4,
  },
  liveBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#e54949',
    borderRadius: 4,
  },
});
