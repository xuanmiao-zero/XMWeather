import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Echarts from 'native-echarts';

export default class HourWeatherLineChart extends Component {
  render() {
    /*echarts配置*/
    const option = {
      //标题配置
      title: {
        show: false,
        text: '未来24小时气温变化',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 13,
          fontWeight: 'normal',
        },
        itemGap: 0
      },
      xAxis: [
        {
          type: 'category',
          // position:"bottom",
          // offset: 0,
          boundaryGap: false,
          //垂直分割线的配置
          splitLine: {
            show: true,
            lineStyle: {
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
            lineStyle: {
              color: '#fff',
              opacity: .1
            }
          },
          //坐标轴刻度配置
          axisTick: {
            show: false
          },
          //坐标轴刻度内容
          axisLabel: {
            textStyle: {
              color: '#ccc',
              fontSize: '10'
            },
            // 文字过多导致显示不全
            // interval: 0,
            // formatter:function(value,index)
            // {
            //   debugger
            //   if (index % 2 !== 0) {
            //     return '\n\n' + value;
            //   }
            //   else {
            //     return value;
            //   }
            // }
          }
        },
        // {
        //   position: "bottom",
        //   offset: 14,
        //   boundaryGap: false,
        //   splitLine: {
        //     show: false,
        //   },
        //   data: [{
        //     value: '3级',
        //     // 突出
        //     textStyle: {
        //       color: '#fff'
        //     }
        //   }, '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级', '3级'],
        //   //坐标轴刻度内容
        //   axisLabel: {
        //     textStyle: {
        //       color: '#ccc',
        //       fontSize: 10
        //     },
        //     // 文字过多导致显示不全
        //     interval: 0,
        //     formatter: function (value, index) {
        //       debugger
        //       if (index % 2 !== 0) {
        //         return '\n\n' + value;
        //       }
        //       else {
        //         return value;
        //       }
        //     }
        //   }
        // }
      ],
      yAxis: {
        min: 10,
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
              color: '#fff',
              opacity: .9
            }
          },
          //线条样式
          lineStyle: {
            normal: {
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
                fontSize: 8
              }
            }
          },
          symbolSize: 6,
        },
      ]
    };

    return (
      <ScrollView horizontal={true}>
          <View style={{marginTop: -40,marginBottom: -20, marginHorizontal:-70}}>
            <Echarts option={option} height={200} width={1000}/>
          </View>
      </ScrollView>

    );
  }
}