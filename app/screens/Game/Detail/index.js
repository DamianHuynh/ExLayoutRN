import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontQuickSand} from '../../../assets';

export default function Detail({navigation, route}) {
  const {
    params: {game},
  } = route;

  const renderStars = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      star.push(
        <Ionicons
          key={i}
          name="ios-star"
          size={16}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginLeft: 5}}
          color={Math.floor(game.rating) >= i ? '#8195ee' : '#434958'}
        />,
      );
    }
    return <View style={styles.row}>{star}</View>;
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={game.preview[0]} style={styles.gameBanner} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-close" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.infoContainer}>
          <View style={styles.gameIconContent}>
            <Image source={game.icon} style={styles.gameIcon} />
          </View>
          <View style={styles.titleContent}>
            <Text style={[styles.text, styles.medium, styles.bold]}>
              {game.title}
            </Text>
            <Text style={[styles.text, styles.textGray]}>{game.subTitle}</Text>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Ionicons name="md-cloud-download" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.row}>
            {renderStars()}
            <Text
              style={[
                styles.text,
                styles.bold,
                styles.textGray,
                styles.rating,
              ]}>
              {game.rating}
            </Text>
          </View>
          <Text style={[styles.text, styles.bold, styles.textGray]}>
            {game.age}
          </Text>
          <Text style={[styles.text, styles.bold, styles.textGray]}>
            Game of the day
          </Text>
        </View>
      </View>

      <View style={styles.previewContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {game.preview.map((image, key) => (
            <View style={styles.previewContent} key={key}>
              <Image source={image} style={styles.gameImagePreview} />
            </View>
          ))}
        </ScrollView>
      </View>

      <Text style={[styles.text, styles.textGray, styles.description]}>
        {game.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  row: {
    flexDirection: 'row',
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
  textGray: {
    color: '#9a9a9a',
  },
  gameBanner: {
    height: 350,
    width: '100%',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 5,
    height: 40,
    width: 40,
    backgroundColor: '#34343480',
    borderRadius: 25,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleContent: {
    flex: 2,
    marginLeft: 16,
    marginRight: 8,
  },
  gameIconContent: {
    shadowColor: '#fff',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  gameIcon: {
    height: 80,
    width: 80,
    borderRadius: 16,
  },
  downloadButton: {
    backgroundColor: '#819ee8',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  rating: {
    marginLeft: 5,
  },
  previewContainer: {
    marginVertical: 8,
  },
  previewContent: {
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  gameImagePreview: {
    height: 200,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  description: {
    marginHorizontal: 16,
    lineHeight: 22,
  },
});
