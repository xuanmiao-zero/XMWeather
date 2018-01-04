//import Libraries
import React, {PureComponent} from 'react'
import {Easing, Animated, StatusBar} from 'react-native'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'

// import CardStackStyleInterpolator from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'


//import function
import screen from './common/screen'

//import Component
import WeatherScene from './scene/Weather/WeatherScene'
import LiveViewScene from './scene/LiveView/LiveViewScene'
import PersonalScene from './scene/Personal/PersonalScene'
import TabBarLabelItem from './widget/TabBarLabelItem'
import TabBarIconItem from './widget/TabBarIconItem'
import ChoseCity from './scene/Weather/ChoseCity'

const Tab = TabNavigator(
  {
    Weather: {
      screen: WeatherScene,
      navigationOptions: ({navigation}) => ({
        header: null,
        tabBarLabel: '天气',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarIconItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/weather/weatherInactivated.png')}
            selectedImage={require('./img/weather/weatherActivating.png')}
          />
        )
      })
    },
    LiveView: {
      screen: LiveViewScene,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: ({tintColor}) => (
          <TabBarLabelItem
            tintColor={tintColor}
            content='实景'
          />
        ),
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarIconItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/liveView/liveViewInactivated.png')}
            selectedImage={require('./img/liveView/liveViewActivating.png')}
          />
        )
      })
    },
    Personal: {
      screen: PersonalScene,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: ({tintColor}) => (
          <TabBarLabelItem
            tintColor={tintColor}
            content='我'
          />
        ),
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarIconItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/personal/personalInactivated.png')}
            selectedImage={require('./img/personal/personalActivating.png')}
          />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // swipeEnabled: false,// 禁止左右滑动
    animationEnabled: true,
    initialRouteName: 'LiveView',
    tabBarOptions: {
      showLabel: true,
      // scrollEnable: true, 这个具体作用是什么?
      labelStyle: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: -3,
        marginLeft: 3,
        marginBottom: 3
      },
      activeTintColor: '#1E90FF',
      inactiveTintColor: '#A0A0A0',
      style: {
        backgroundColor: '#151515',
        height: screen.height * 0.07,
      }
    }
  }
)

// configure NavigationAnimate
const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
    const {scene} = sceneProps;
    const {route} = scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
  transitionSpec: {
    duration: 150,
    easing: Easing.easeOut,
    timing: Animated.timing,
  },
});

//configure StackNavigator
const Navigator = StackNavigator(
  {
    Tab: {screen: Tab},
    ChoseCity: {screen: ChoseCity},
  },
  {
    initialRouteName: 'Tab', // 默认显示界面
    transitionConfig: TransitionConfiguration,
  },
)

//第一次调用的时候，第一个参数route就是initialRoute
renderScene = (route, navigator) => {
  return (
    <route.scene navigator={navigator}/>
  );
}

//export RootScene
export default class RootScene extends PureComponent {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
      />
    );
  }
}

