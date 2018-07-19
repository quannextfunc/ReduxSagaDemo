import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from './src/store';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

class App extends Component {

   render() {
     return (
       <Provider store={store}>
         <View style={{ flex: 1 }}>
           <Header headerText={'Hello'} />
           <AlbumList />
         </View>
      </Provider>
     )
   }
}

export default App;
