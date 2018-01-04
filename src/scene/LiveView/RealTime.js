import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native'

//import Function
import screen from '../../common/screen'

/*
* 图片 image
* 标题 title
* 时间 time
* 地点 location
* 距离 distance
* 点赞数 likeNum
* 是否点赞 isLike
* 评论数 commentNum
* */
const realTimeData = [
  {
    key: 0,
    image:require('../../img/liveView/realTime/0.jpg'),
    title: '北京,多云,-1℃,西南风,3级',
    time: '12-14 17:26',
    location: '北京市朝阳区安贞西里五区3安贞路新华金融大厦',
    distance: '413km',
    likeNum: 0,
    isLike: false,
    commentNum: 0
  },
  {
    key: 1,
    image:require('../../img/liveView/realTime/1.jpg'),
    title: '北京,多云,-1℃,西南风,3级',
    time: '12-14 17:26',
    location: '北京市朝阳区安贞西里五区3安贞路新华金融大厦',
    distance: '413km',
    likeNum: 0,
    isLike: false,
    commentNum: 0
  },
  {
    key: 2,
    image:require('../../img/liveView/realTime/2.jpg'),
    title: '北京,多云,-1℃,西南风,3级',
    time: '12-14 17:26',
    location: '北京市朝阳区安贞西里五区3安贞路新华金融大厦',
    distance: '413km',
    likeNum: 3,
    isLike: false,
    commentNum: 0
  },
  {
    key: 4,
    image:require('../../img/liveView/realTime/3.jpg'),
    title: '北京,多云,-1℃,西南风,3级',
    time: '12-14 17:26',
    location: '北京市朝阳区安贞西里五区3安贞路新华金融大厦',
    distance: '413km',
    likeNum: 0,
    isLike: false,
    commentNum: 0
  },
  {
    key: 5,
    image:require('../../img/liveView/realTime/4.jpg'),
    title: '北京,多云,-1℃,西南风,3级',
    time: '12-14 17:26',
    location: '北京市朝阳区安贞西里五区3安贞路新华金融大厦',
    distance: '413km',
    likeNum: 0,
    isLike: false,
    commentNum: 0
  },
  {
    key: 0,
    image:require('../../img/liveView/realTime/0.jpg'),
    title: '北京,多云,-1℃,西南风,3级',
    time: '12-14 17:26',
    location: '北京市朝阳区安贞西里五区3安贞路新华金融大厦',
    distance: '413km',
    likeNum: 0,
    isLike: false,
    commentNum: 0
  },
]

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      realTimeData: realTimeData
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.realTimeData}
        extraData={this.state}
        renderItem={({item}) => <View>
          <Image style={styles.Image} source={item.image}></Image>

          <View style={styles.titleConatiner}>
            {/*标题*/}
            <Text style={styles.title}>{item.title}</Text>
            {/*时间*/}
            <Image style={styles.timeIcon} source={require('../../img/liveView/time.png')}/>
            <Text style={styles.time}>{item.time}</Text>
          </View>

          {/*地点和距离*/}
          <View style={styles.locationContainer}>
            <Text style={styles.location}>{item.location}</Text>
            <Text>{item.distance}</Text>
          </View>

          <View style={styles.likeAndComments}>
            {/*点赞*/}
            <View style={styles.likeContainer}>
              <Image style={styles.likeIcon} source={require('../../img/liveView/like.png')}/>
              <Text>点赞{item.likeNum}</Text>
            </View>
            {/*评论*/}
            <View style={styles.likeContainer}>
              <Image style={styles.likeIcon} source={require('../../img/liveView/comment.png')}/>
              <Text>评论{item.commentNum}</Text>
            </View>
          </View>
        </View>
        }
      />

    );
  }
}

const styles = StyleSheet.create({
  Image: {
    height: 231.5,
    width: screen.width,
    resizeMode: Image.resizeMode.cover
  },
  titleConatiner: {
    flexDirection: 'row',
    marginTop: -20,
    alignItems: 'center',
    marginHorizontal: 10
  },
  title: {
    flex: 1,
    color: '#fff',
    opacity: .8,
  },
  timeIcon: {
    width: 12,
    height: 12,
  },
  time: {
    color: '#fff',
    opacity: .8,
  },
  /*位置和距离*/
  locationContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 4,
    opacity: .6
  },
  location: {
    flex: 1,
  },
  /*点赞和评论*/
  likeAndComments: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  likeContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10,
    opacity: .8
  },
  likeIcon: {
    marginVertical: 0,
    marginRight: 6,
  }
})