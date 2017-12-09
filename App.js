import React, { Component } from 'react';
import { View} from 'react-native';
import Header from './src/component/header';
import AlbumList from './src/component/albumList'

export default class App extends Component {
  render() {
    return (
        <View style={{flex:1}}>
            <Header headerText={'Albums!!'}/>
            <AlbumList />
        </View>
    );
  }
}

