//import libraries
import React, {PureComponent} from 'react'

import {
  ScrollView,
} from 'react-native'

//import component
import FirstScreen from './FirstScreen'
import WeatherDetail from './WeatherDetail'

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{
        flex: 1,
        paddingTop: 20,
      }}>
        <FirstScreen />
        <WeatherDetail />
      </ScrollView>
    );
  }
}

