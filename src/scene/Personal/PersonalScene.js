import React, {PureComponent} from 'react'
import {
  View, Text, Button, Image, ScrollView, FlatList, StyleSheet
} from 'react-native'

//import component

//import function
import screen from '../../common/screen'

//data
/*
* key: key
* 图标 icon
* 图标背景色 iconBgColor
* 标题 title
* 底部是否有分隔条 isSeparated
* */

const personListData = [
  {
    key: 0,
    icon: require('../../img/personal/realView.png'),
    iconBgColor: '#907BD4',
    title: '我的实景',
    isSeparated: false,
  },
  {
    key: 1,
    icon: require('../../img/personal/envelope.png'),
    iconBgColor: '#F0BB52',
    title: '我的消息',
    isSeparated: true,
  },
  {
    key: 2,
    icon: require('../../img/personal/skin.png'),
    iconBgColor: '#00BFE6',
    title: '天气主题',
    isSeparated: false,
  },
  {
    key: 3,
    icon: require('../../img/personal/welfare.png'),
    iconBgColor: '#EA665F',
    title: '领取福利',
    isSeparated: false,
  },
  {
    key: 4,
    icon: require('../../img/personal/app.png'),
    iconBgColor: '#E65C73',
    title: '最美应用',
    isSeparated: false,
  },
  {
    key: 5,
    icon: require('../../img/personal/shoppingCart.png'),
    iconBgColor: '#99CC00',
    title: '积分商城',
    isSeparated: false,
  },
  {
    key: 6,
    icon: require('../../img/personal/member.png'),
    iconBgColor: '#F4C521',
    title: '会员特权',
    isSeparated: false,
  },
  {
    key: 7,
    icon: require('../../img/personal/historyWeather.png'),
    iconBgColor: '#7CA9E6',
    title: '历史天气',
    isSeparated: false,
  },
  {
    key: 8,
    icon: require('../../img/personal/majorEvent.png'),
    iconBgColor: '#F19149',
    title: '大事件',
    isSeparated: false,
  },
  {
    key: 9,
    icon: require('../../img/personal/alarm.png'),
    iconBgColor: '#FF59B5',
    title: '定时播报',
    isSeparated: true,
  },
  {
    key: 10,
    icon: require('../../img/personal/setting.png'),
    iconBgColor: '#00CC88',
    title: '设置',
    isSeparated: false,
  },
  {
    key: 11,
    icon: require('../../img/personal/feedback.png'),
    iconBgColor: '#556FB5',
    title: '意见反馈',
    isSeparated: false,
  },
  {
    key: 12,
    icon: require('../../img/personal/house.png'),
    iconBgColor: '#3AB1E9',
    title: '官网',
    isSeparated: false,
  },
]


export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      personListData: personListData
    }
  }

  static navigationOptions = {
    title: '我',
    headerStyle: {
      height: screen.height * 0.06,
      backgroundColor: 'rgba(30,144,255,1)',
      opacity: .8,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    headerTitleStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontFamily: 'sans-serif-thin'
    }
  };

  render() {
    return (
      <ScrollView style={{backgroundColor: '#F5F5F5'}}>

        {/*用户头像*/}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FAFAFA',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: '#EEEEEE'
          }}>
          <View style={{borderRadius: 100,}}>
            <Image style={{width: 44, height: 44,}} source={require('../../img/personal/avator1.png')}/>
          </View>
          <View style={{flex: 1, justifyContent: 'space-around', paddingHorizontal: 14,}}>
            <Text style={{width: 100,}}>xuanmiao</Text>
            <View style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#7FBEFC',
              width: 100,
              justifyContent: 'center',
              marginTop: 4,
              paddingVertical: 2
            }}>
              <Image source={require('../../img/personal/calendar.png')}></Image>
              <Text style={{color: '#7FBEFC', fontSize: 12}}>点击签到</Text>
            </View>
          </View>
          <Image style={{height: 20, width: 20, opacity: .6}} source={require('../../img/personal/rightArrow.png')}/>
        </View>

        {/*列表*/}
        <FlatList
          data={this.state.personListData}
          renderItem={
            ({item}) => <View style={[{
              flexDirection: 'row',
              backgroundColor: '#FAFAFA',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
            }, item.isSeparated ? styles.separatedBar :{} ]}>
              {/*图标*/}
              <View style={{borderRadius: 100, backgroundColor:item.iconBgColor, width: 44, height: 44, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 26, height: 26,}} source={item.icon}/>
              </View>
              {/*标题*/}
              <View style={{
                flex: 1, justifyContent: 'space-around', paddingHorizontal: 14,
                borderBottomWidth: 1,
                borderColor: '#EEEEEE',
                paddingVertical: 20,
              }}>
                <Text style={{width: 100}}>{item.title}</Text>
              </View>
              {/*向右箭头*/}
              <Image style={{height: 20, width: 20, opacity: .6}}
                     source={require('../../img/personal/rightArrow.png')}/>
            </View>
          }
          extraData={this.state}//正确出发FlatList的更新
        >
        </FlatList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  separatedBar: {
    marginBottom: 20,
    shadowColor: '#E5E5E5',
    //为ios添加阴影
    shadowOffset: {height: 2},
    //为android添加阴影
    elevation: 2
  }
})