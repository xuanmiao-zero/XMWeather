import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import Echarts from 'native-echarts';

// import component
import DayWeatherInfoItem from './DayWeatherInfoItem'
import NightWeatherInfoItem from './NightWeatherInfoItem'

/*
周几 weekDay
日期: date
雾霾指数 fogHazeIndex
雾霾概述: fogHazeOverview
白天天气:   dayWeather
天气图标: dayWeatherIcon
晚上天气:  nightWeather
天气图标: nightWeatherIcon
 */
const WeatherInfo = [
  {
    key: 0,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png')
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
  {
    key: 1,
    weekDay: '昨天',
    date: '12/30',
    fogHazeIndex: 36,
    fogHazeOverview: '优质',
    dayWeather: '雾',
    dayWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
    nightWeather: '晴',
    nightWeatherIcon: require('../../img/weather/WeatherIcon/sun.png'),
  },
]

export default class TrendLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WeatherInfo: WeatherInfo
    }
  }

  render() {
    /*echarts配置*/
    const option = {
      //标题配置
      xAxis: [
        {
          type: 'category',
          // position:"bottom",
          // offset: 0,
          //垂直分割线的配置
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0,0,0,1)',
              opacity: .1
            }
          },
          data: [
            {
              value: '0:00',
              // 突出
              textStyle: {
                color: '#fff'
              }
            }, '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
          //坐标轴轴线配置
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
              opacity: .1
            }
          },
          //坐标轴刻度配置
          axisTick: {
            show: true,
            length: 20,
            lineStyle: {
              color: 'rgba(0,0,0,.8)',
              opacity: .1,
            }
          },
          //坐标轴刻度内容
          axisLabel: {
            show: false,
            textStyle: {
              color: '#ccc',
              fontSize: '10'
            },
          }
        },
        //天气轴线
      ],
      yAxis: {
        min: -20,
        max: 20,
        interval: 10,
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'transparent'
          }
        }
      },
      series: [
        {
          type: 'line',
          data: [11, 11, 15, 13, 20, 13, 10, 11, 11, 15, 13, 12, 13, 10, 11, 11, 15, 13, 12, 13, 10, 16, 10, 13],
          // smooth: true,
          symbol: 'circle',
          color: '#fff',
          opacity: .7,
          //折点
          itemStyle: {
            normal: {
              color: 'rgba(250,191,0, 1)',
              opacity: .9
            }
          },
          //线条样式
          lineStyle: {
            normal: {
              color: 'rgba(250,191,0, .8)',
              width: 2,
              opacity: 0.6,
            }
          },
          //折点数值
          label: {
            normal: {
              show: true,
              formatter: '{c}°',
              position: 'top',
              textStyle: {
                color: 'rgba(255,255,255, 1)',
                fontSize: 8
              }
            }
          },
          symbolSize: 6,
          //标线样式
          /*markLine: {
            symbol: 'none',
            data: [
              {
                yAxis: 40
              },
              {
                yAxis: -20
              },

            ],
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false
              },
            },
            lineStyle: {
              normal: {
                type: 'solid',
                color: 'rgba(0,0,0,.1)'
              },
              emphasis: {
                type: 'solid'
              }
            }
          }*/
        },
        {
          type: 'line',
          data: [-11, -11, -15, -13, -20, -13, -10, -11, -11, -15, -13, -12, -13, -10, -11, -11, -15, 1 - 3, -12, -13, -10, -16, -10, -13],
          // smooth: true,
          symbol: 'circle',
          color: '#fff',
          opacity: .7,
          //折点
          itemStyle: {
            normal: {
              color: 'rgba(0,210,255, 1)',
              opacity: .9
            },
            emphasis: {
              color: 'rgba(0,210,255, 1)',
              opacity: .9
            }
          },
          //线条样式
          lineStyle: {
            normal: {
              color: 'rgba(0,210,255, .8)',
              width: 2,
              opacity: 0.6,
            }
          },
          //折点数值
          label: {
            normal: {
              show: true,
              formatter: '{c}°',
              position: 'top',
              textStyle: {
                color: 'rgba(255,255,255, 1)',
                fontSize: 8
              }
            }
          },
          symbolSize: 6,
          //标线样式
          /*markLine: {
            symbol: 'none',
            data: [
              {
                yAxis: 40
              },
              {
                yAxis: -20
              },

            ],
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false
              },
            },
            lineStyle: {
              normal: {
                type: 'solid',
                color: 'rgba(0,0,0,.1)'
              },
              emphasis: {
                type: 'solid'
              }
            }
          }*/
        },
      ]
    };

    return (
      <ScrollView horizontal={true}>
        <View>
          <View style={{width: 1280, height: 106}}>
            <FlatList
              data={this.state.WeatherInfo}
              renderItem={({item}) => <DayWeatherInfoItem data={item} style={styles.WeatherInfoItem}>{item.key}</DayWeatherInfoItem>}
              extraData={this.state} //正确触发FlatList的更新
              numColumns={1}
              horizontal={true}
              style={styles.WeatherInfo}
            ></FlatList>
          </View>
          <View style={{marginTop: -40, marginBottom: -60, marginHorizontal: -160,}}>
            <Echarts option={option} height={200} width={1600}/>
          </View>
          <View style={{width: 1280, height: 106}}>
            <FlatList
              data={this.state.WeatherInfo}
              renderItem={({item}) => <NightWeatherInfoItem data={item} style={styles.WeatherInfoItem}>{item.key}</NightWeatherInfoItem>}
              extraData={this.state} //正确触发FlatList的更新
              numColumns={1}
              horizontal={true}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  WeatherInfo: {},
  WeatherInfoItem: {}
})