//import libraries
import React, {PureComponent} from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

//import component
import {HeaderTitleText, Text2} from '../../widget/Text'

//import function
import screen from '../../common/screen'


export default class extends PureComponent {
  constructor(props) {
    super(props);
}

  //城市选择
  choseCity() {
    this.props.navigation.navigate('ChoseCity')
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableHighlight
          onPress={() => {
            this.choseCity()
          }}
        >
          <Image
            style={styles.headerImage}
            source={require('../../img/weather/add.png')}
          />
        </TouchableHighlight>
        <View style={styles.locationContainer}>
          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.location} source={require('../../img/weather/location.png')}/>
            <HeaderTitleText>昌平</HeaderTitleText>
          </View>
          <Text2>天通西苑1区</Text2>
        </View>
        <Image style={styles.headerImage} source={require('../../img/weather/share.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: screen.height * 0.06,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerImage: {
    width: 20,
    height: 20,
    opacity: 0.8
  },
  locationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    width: 14,
    height: 14,
    marginRight: 4
  },
})
