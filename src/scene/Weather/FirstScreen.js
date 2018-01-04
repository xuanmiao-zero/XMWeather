import React, {PureComponent} from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

//import function
import screen from '../../common/screen'

//import component
import {Text1, Text2, Text3, Text4, Text5, Text15} from '../../widget/Text'

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{paddingHorizontal: 10,}}>
        {/*雾霾指数*/}
        <View style={styles.fogHazeIndexContainer}>
          <View style={{
            flexDirection: 'row',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)'
          }}>
            <View style={{
              width: 20,
              height: 20,
              backgroundColor: '#EB7E21',
              borderRadius: 100,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image
                style={styles.fogHazeIndexImage}
                source={require('../../img/weather/leaves.png')}
              />
            </View>
            <View style={{
              justifyContent: 'center',
              marginHorizontal: 5,
            }}>
              <Text3>134</Text3>
              <Text2>轻度</Text2>
            </View>
          </View>

        </View>

        {/*红包*/}
        <View style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          paddingRight: 14,
          paddingVertical: 4
        }}>
          <Image source={require('../../img/weather/redEnvelope.png')}></Image>
        </View>

        {/*占位*/}
        <View style={{
          height: screen.height * 0.46,
        }}></View>

        <View style={{paddingVertical: 6,}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 10,
            opacity: 0.8,
          }}>
            <Text2>
              更多精彩内容
            </Text2>
            <Image style={{width: 16, height: 16}} source={require('../../img/weather/rightArrow.png')}></Image>
          </View>
          <View style={{height: 120, flexDirection: 'row', justifyContent: 'flex-start',}}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row', marginTop: -30}}>
                <Text15 style={{flex: 2}}>-4°</Text15>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text5 style={{left: -34, marginBottom: 20}}>晴</Text5>
                </View>
              </View>
              <View style={{flexDirection: 'row', opacity: 0.8, alignItems: 'center'}}>
                <Image style={{width: 14, height: 14}} source={require('../../img/weather/windDirection.png')}></Image>
                <Text2>2级</Text2>
                <Image style={{width: 14, height: 14, marginLeft: 14}}
                       source={require('../../img/weather/redar.png')}></Image>
                <Text2>有点冷,请保暖</Text2>
                <Image style={{width: 14, height: 14}} source={require('../../img/weather/rightArrow.png')}></Image>
              </View>
            </View>
            <View style={{flex: 1, height: 100, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 10}}>
              <View style={{justifyContent: 'space-around'}}>
                <View style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  width: 32,
                  height: 32,
                  borderRadius: 32,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('../../img/weather/speaker.png')}></Image>
                </View>
                <Image source={require('../../img/weather/cleanGlass.png')}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fogHazeIndexContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
  },
  fogHazeIndexImage: {
    width: 16,
    height: 16,
  }
})