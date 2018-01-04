//import Libraries
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

//import Component
import RealTime from './RealTime'

import Buttons from './Buttons'

//import Function
import screen from '../../common/screen'

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{position: 'relative'}}>
        {/*标题栏*/}
        <View
          style={styles.header}
        >
          <Text style={[styles.headerTitle, styles.active]}>实时</Text>
          <Text style={[styles.headerTitle,]}>热点</Text>
        </View>
        {/*下面的场景*/}
        <RealTime />

        {/*按钮*/}
        <Buttons/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    height: screen.height * 0.07,
    width: screen.width,
    left: 0,
    top: 0,
    zIndex: 1000
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    opacity: .5,
    paddingHorizontal: 10,
    paddingVertical:3,
    borderBottomWidth: 2,
    borderColor: '#fff'
  },
  active: {
    opacity: 1,
  },

})