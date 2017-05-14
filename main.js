import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { increment, decrement, reset } from './src/actions';
import ContatoreStore from './src/ContatoreStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conto: ContatoreStore.getConto()
    };
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    ContatoreStore.addChangeListener(this.updateState);
  }
  componentWillUnmount() {
    ContatoreStore.removeChangeListener(this.updateState);
  }
  updateState() {
    this.setState({
      conto: ContatoreStore.getConto()
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Contatore</Text>
        <Text style={styles.conto}>Conto: {this.state.conto}</Text>
        <TouchableOpacity
          onPress={increment}
          style={styles.button}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decrement}
          style={styles.button}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reset}
          style={styles.button}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  conto: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    fontSize: 25
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

Expo.registerRootComponent(App);
