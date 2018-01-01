import * as React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import ListContainer from './ListContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});

const Navigator = StackNavigator({
  List: {
    screen: ListContainer,
    navigationOptions: {
      headerTitle: 'Pics',
    },
  },
});

export default () => (
  <View style={styles.container}>
    <Navigator />
  </View>
);
