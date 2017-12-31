import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPics } from 'ic-rn-cc/api';

const log = response => {
  console.log('Response before', response.after, response);
  return response;
};

export default class App extends React.Component {
  componentDidMount() {
    getPics()
      .then(log)
      .then(res => getPics(res.after))
      .then(log)
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
