import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

//Import component
import {Text3, Text2, Text1,} from '../../widget/Text'

export default class NightWeatherInfoItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {data} = this.props
    let borderLeftWidth = data.key ? 0: 1
    return (
      <View style={{justifyContent: 'center', alignItems: 'center',paddingHorizontal: 11, paddingVertical: 6, borderRightWidth:1, borderColor: 'rgba(0,0,0, .1)', borderLeftWidth: borderLeftWidth}}>
        <Image style={{ width: 30, height: 30}} source={data.nightWeatherIcon} />
        <Text2>{data.nightWeather}</Text2>
      </View>
    );
  }
}