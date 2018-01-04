import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

//Import component
import {Text3, Text2, Text1,} from '../../widget/Text'

export default class DayWeatherInfoItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {data} = this.props
    let borderLeftWidth = data.key ? 0: 1
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 6, paddingVertical: 6, borderRightWidth:1, borderColor: 'rgba(0,0,0, .1)', borderLeftWidth: borderLeftWidth}}>
        <Text3>{data.weekDay}</Text3>
        <Text style={{fontSize: 12, color: '#fff'}}>{data.date}</Text>
        <Text style={{
          backgroundColor: '#D2BD09',
          marginLeft: 6,
          borderRadius: 3,
          paddingHorizontal: 6,
          height: 16,
          fontSize: 11,
          color: '#fff',
          marginVertical: 4
        }}>{data.fogHazeOverview}</Text>
        <Text2>{data.dayWeather}</Text2>
        <Image style={{ width: 30, height: 30}} source={data.dayWeatherIcon} />
      </View>
    );
  }
}