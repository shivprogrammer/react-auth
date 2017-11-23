import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state= { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyADx3J9Jww7BucGUZlDqCq9uc9a6ukRIy8',
      authDomain: 'shivvyauth.firebaseapp.com',
      databaseURL: 'https://shivvyauth.firebaseio.com',
      projectId: 'shivvyauth',
      storageBucket: 'shivvyauth.appspot.com',
      messagingSenderId: '616929488519'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    )
  }
}

export default App;
