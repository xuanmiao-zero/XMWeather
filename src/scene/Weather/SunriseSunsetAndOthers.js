import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{height: 160, marginTop: 4, flexDirection: 'row',}}>
        <View style={{flex: 1, backgroundColor: 'rgba(255,255,255, .1)', marginHorizontal: 1, alignItems: 'center'}}>
          <View style={{flex: 2}}></View>
          <Text style={{flex: 1, color: '#fff', opacity: .6}}>日落日出</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'rgba(255,255,255, .1)', marginHorizontal: 1, flexDirection: 'row', paddingHorizontal: 14, paddingVertical: 8}}>
          <View style={{flex:1, justifyContent: 'space-around'}}>
            <Text style={{color: '#fff', opacity: .8}}>体感</Text>
            <Text style={{color: '#fff', opacity: .8}}>湿度</Text>
            <Text style={{color: '#fff', opacity: .8}}>气压</Text>
            <Text style={{color: '#fff', opacity: .8}}>能见度</Text>
          </View>
          <View style={{flex:1, justifyContent: 'space-around', alignItems: 'flex-end'}}>
            <Text style={{ color: '#fff', opacity: .8}}>3°</Text>
            <Text style={{ color: '#fff', opacity: .8}}>20%</Text>
            <Text style={{ color: '#fff', opacity: .8}}>1031 hpa</Text>
            <Text style={{ color: '#fff', opacity: .8}}>32km</Text>
          </View>
        </View>
      </View>
    );
  }
}