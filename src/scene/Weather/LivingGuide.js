import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native'

//import component
import {Text1, Text2, Text3, Text4} from '../../widget/Text'

//data
/*
* key
* icon
* title
* recommend
* */
const recommendData = [
  {
    key: 0,
    icon: require('../../img/weather/constellation.png'),
    title: '今日星座',
    recommend: '水瓶座'
  },
  {
    key: 1,
    icon: require('../../img/weather/HuangCalendar.png'),
    title: '老黄历',
    recommend: '冬月十六'
  },
  {
    key: 2,
    icon: require('../../img/weather/cosmetic.png'),
    title: '化妆指数',
    recommend: '滋润保湿'
  },
  {
    key: 3,
    icon: require('../../img/weather/car.png'),
    title: '洗车指数',
    recommend: '较适宜'
  },
  {
    key: 4,
    icon: require('../../img/weather/capsule.png'),
    title: '感冒指数',
    recommend: '少发'
  },
  {
    key: 5,
    icon: require('../../img/weather/aircraft.png'),
    title: '旅游指数',
    recommend: '较适宜'
  },
  {
    key: 6,
    icon: require('../../img/weather/sport.png'),
    title: '运动指数',
    recommend: '较不宜'
  },
  {
    key: 7,
    icon: require('../../img/weather/uvIndex.png'),
    title: '紫外线指数',
    recommend: '最弱'
  },
  {
    key: 8,
    icon: require('../../img/weather/limitLine.png'),
    title: '明日限行',
    recommend: '3, 8'
  },
  {
    key: 9,
    icon: require('../../img/weather/add32.png'),
  },
]

export default class LivingGuide extends PureComponent {
  constructor(props) {
    super(props);
    this.state= {
      recommendData: recommendData
    }
  }

  render() {
    let {recommendData} = this.state
    return (
      <View style={{marginVertical: 4, }}>
        <View style={{flexDirection: 'row',  alignItems:'center', paddingVertical: 10, backgroundColor: 'rgba(255,255,255, .1)'}}>
          <Image source={require('../../img/weather/shirt.png')} style={{opacity: .8, marginHorizontal: 20}}/>
          <View style={{opacity: .8}}>
            <Text2 >今天温度-5~2℃,冷</Text2>
            <Text2>天气冷了, 建议穿皮夹克,厚呢外套,羽绒服等冬季棉衣</Text2>
          </View>
        </View>

        {/*推荐项*/}
        <FlatList
          data={recommendData}
          renderItem={({item}) => <View style={{ flex:1, marginTop:1, marginLeft: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, backgroundColor: 'rgba(255,255,255, .1)'}}>
            <Image source={item.icon}/>
            <Text style={{fontSize: 12, color: '#fff', opacity: .6, marginVertical: 4,}}>{item.title}</Text>
            <Text style={{color: '#fff', opacity: .8,}}>{item.recommend}</Text>
          </View>
          }
          extraData={this.state} //正确出发FlatList的更新
          numColumns={4}
        >
        </FlatList>
      </View>
    );
  }
}