import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text>Game App</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
