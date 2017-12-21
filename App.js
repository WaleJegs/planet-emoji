import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import Home from './components/Home';
import Game from './components/Game';

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>What will I create today?</Text>
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

const RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
  },
  Game: {
    screen: Game,
    navigationOptions: {
      headerTitle: 'Planet Emoji'
    }
  }
});

export default RootNavigator;