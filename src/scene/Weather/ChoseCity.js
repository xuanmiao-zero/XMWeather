import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  FlatList,
  ListView
} from 'react-native'

// import function
import screen from '../../common/screen'

//import data
let popularCitiesData = [
  {key: '北京'},
  {key: '上海'},
  {key: '广州'},
  {key: '深圳'},
  {key: '武汉'},
  {key: '南京'},
  {key: '桂州'},
  {key: '西安'},
  {key: '郑州'},
  {key: '成都'},
  {key: '东莞'},
  {key: '沈阳'},
  {key: '天津'},
  {key: '北京'},
  {key: '上海'},
  {key: '广州'},
  {key: '深圳'},
  {key: '武汉'},
  {key: '南京'},
  {key: '桂州'},
  {key: '西安'},
  {key: '郑州'},
  {key: '成都'},
  {key: '东莞'},
  {key: '沈阳'},
  {key: '天津'},


  {key: '北京'},
  {key: '上海'},
  {key: '广州'},
  {key: '深圳'},
  {key: '武汉'},
  {key: '南京'},
  {key: '桂州'},
  {key: '西安'},
  {key: '郑州'},
  {key: '成都'},
  {key: '东莞'},
  {key: '沈阳'},
  {key: '天津'},


  {key: '北京'},
  {key: '上海'},
  {key: '广州'},
  {key: '深圳'},
  {key: '武汉'},
  {key: '南京'},
  {key: '桂州'},
  {key: '西安'},
  {key: '郑州'},
  {key: '成都'},
  {key: '东莞'},
  {key: '沈阳'},
  {key: '天津'},


  {key: '北京'},
  {key: '上海'},
  {key: '广州'},
  {key: '深圳'},
  {key: '武汉'},
  {key: '南京'},
  {key: '桂州'},
  {key: '西安'},
  {key: '郑州'},
  {key: '成都'},
  {key: '东莞'},
  {key: '沈阳'},
  {key: '天津'},


  {key: '北京'},
  {key: '上海'},
  {key: '广州'},
  {key: '深圳'},
  {key: '武汉'},
  {key: '南京'},
  {key: '桂州'},
  {key: '西安'},
  {key: '郑州'},
  {key: '成都'},
  {key: '东莞'},
  {key: '沈阳'},
  {key: '天津'},
]

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popularCities: popularCitiesData
    }
  }

  static navigationOptions = {
    title: '添加城市',
    headerTintColor: 'white',
    headerStyle: {
      height: screen.height * 0.06,
      backgroundColor: '#3A484B',
      opacity: 0.8,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    headerTitleStyle: {
      alignSelf: 'center',
      color: '#ffffff',
      fontSize: 16,
      fontFamily: 'sans-serif-thin'
    },
  };

  render() {
    return (
      <View>
        <ImageBackground style={styles.mainImageBackground}
                         source={require('../../img/weather/choseCityBackground.jpg')}>
          <View style={styles.topContainer}>
            <View style={styles.searchContainer}>
              <Image style={styles.searchIcon} source={require('../../img/weather/search.png')}></Image>
              <TextInput
                style={styles.searchTextInput}
                placeholderTextColor='#E0E3DF'
                placeholder='请输入城市名称,拼音或英文'
                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
              ></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 15}}>
              <Image source={require('../../img/weather/location.png')}></Image>
              <Text style={{color: '#fff',}}>当前位置:北京 <Text>(点击重新定位)</Text></Text>
            </View>
            <View style={{borderBottomWidth: 2, borderColor: 'rgba(255,255,255,0.1)',}}></View>
            <Text style={{color: '#fff', fontSize: 12, marginVertical: 10}}>热门城市</Text>
          </View>
          <FlatList
            data={this.state.popularCities}
            renderItem={({item}) => <Text style={styles.popularCitiesListItem}>{item.key}</Text>}
            extraData={this.state} //正确触发FlatList的更新
            numColumns={3}
            columnWrapperStyle={styles.popularCitiesListColumnWrapperStyle}
          ></FlatList>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainImageBackground: {
    width: screen.width,
    height: screen.height,
    paddingVertical: 15
  },
  searchContainer: {
    borderRadius: 100,
    overflow:'hidden',
    borderColor: 'rgba(255,255,255,0.1)',
    // borderColor: '#fff',
    height: 30,
    borderWidth: 1,
    paddingHorizontal: 4,
    backgroundColor: 'rgba(45,60,63, 0.5)',
    flexDirection: 'row',
    alignItems:'center'
  },
  searchTextInput: {
    color: '#E0E3DF',
    height: 30,
    paddingVertical: 0,
    flex: 1,

  },
  searchIcon: {
    // position: 'absolute', top: 21, left: 33
  },
  popularCitiesListItem: {
    color: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.05)',
    backgroundColor: 'rgba(0,0,0, 0.1)',
    paddingVertical: 4,
    paddingHorizontal: 26,
    borderRadius: 100,
    marginVertical: 4,
  },
  popularCitiesListColumnWrapperStyle: {
    justifyContent: 'space-around',
    paddingHorizontal: 25,
  },
  topContainer: {
    paddingHorizontal: 25,
  }
})