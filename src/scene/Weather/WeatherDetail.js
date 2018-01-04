import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView
} from 'react-native'

//import function
import screen from '../../common/screen'

//import component
import {Text3, Text2, Text1,} from '../../widget/Text'
import HourWeatherLineChart from './HourWeatherLineChart'
import TrendLineChart from './TrendLineChart'
import SunriseSunsetAndOthers from './SunriseSunsetAndOthers'
import LivingGuide from './LivingGuide'

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.chartsContainer}>
        <View style={{flex: 1}}>
          {/*小三角*/}
          <View style={{alignItems: 'center'}}>
            <Image style={{opacity: .6}} source={require('../../img/weather/smallTriangle.png')}/>
          </View>

          {/*今天和明天天气简介*/}
          <View style={{height: 70, flexDirection: 'row'}}>
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(255,255,255,.1)',
              marginHorizontal: 1,
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 2,
            }}>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text3>今天</Text3>
                  <Text style={{
                    backgroundColor: '#D2BD09',
                    marginLeft: 6,
                    borderRadius: 3,
                    paddingHorizontal: 6,
                    height: 16,
                    fontSize: 11,
                    color: '#fff'
                  }}>71良好</Text>
                </View>
                <Text3>-6~5℃</Text3>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../../img/weather/WeatherIcon/moon.png')}></Image>
                <Text3>晴</Text3>
              </View>
            </View>
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(255,255,255,.1)',
              marginHorizontal: 1,
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 2,
            }}>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text3>明天</Text3>
                  <Text style={{
                    backgroundColor: '#EB7E21',
                    marginLeft: 6,
                    borderRadius: 3,
                    paddingHorizontal: 6,
                    height: 16,
                    fontSize: 11,
                    color: '#fff'
                  }}>71良好</Text>
                </View>
                <Text3>-6~5℃</Text3>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../../img/weather/WeatherIcon/sun.png')}></Image>
                <Text3>晴</Text3>
              </View>
            </View>
          </View>

          {/* 小时天气 空气质量 降水量*/}
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,.1)',
              marginVertical: 4,
              alignItems: 'center'
            }}>

            {/*标题切换*/}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,.4)',
                paddingVertical: 1,
                paddingHorizontal: 1,
                borderRadius: 2
              }}>
              <Text2
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  backgroundColor: 'rgba(255,255,255, .3)',
                  borderRadius: 2
                }}>小时天气</Text2>
              <Text2
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 2
                }}>空气质量</Text2>
              <Text2
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 2
                }}>降水量</Text2>
            </View>

            {/*提示信息*/}
            <View style={{
              alignItems: 'center',
              marginVertical: 8
            }}>
              <Text style={{color: 'rgba(255,255,255,.8)'}}>未来24小时晴</Text>
            </View>
            {/*小时折线图*/}
            <HourWeatherLineChart/>
          </View>

          {/*趋势和列表*/}
          <View>
            {/*标题切换*/}
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.1)',
                marginVertical: 2,
                alignItems: 'center'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 8,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,.4)',
                  paddingVertical: 1,
                  paddingHorizontal: 1,
                  borderRadius: 2
                }}>
                <Text2
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 2,
                    backgroundColor: 'rgba(255,255,255, .3)',
                    borderRadius: 2
                  }}>趋势</Text2>
                <Text2
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 2,
                    borderRadius: 2
                  }}>列表</Text2>
              </View>

              {/*趋势折线图*/}
              <TrendLineChart/>
            </View>
          </View>

          {/*日落日出和其他杂项*/}
          <SunriseSunsetAndOthers />

          {/*生活指南*/}
          <LivingGuide />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chartsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.4)',
    paddingHorizontal: screen.width * .01,
    paddingBottom: 20
  }
})