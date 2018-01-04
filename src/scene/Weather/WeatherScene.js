//import libraries
import React, {PureComponent} from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native'

//import component
import TopBar from './TopBar'
import ScrollBar from './ScrollBar'

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'test',
  });

  render() {
    return (
      <View style={{flex: 1,backgroundColor: '#fff'}}>
        <ImageBackground style={styles.backgroundImage}  source={require('../../img/weather/weatherBackground.jpeg')}>
          <View style={{flex:1}}>

            {/*顶栏*/}
            <TopBar navigation={this.props.navigation}/>
            {/*滚动栏*/}
            <ScrollBar></ScrollBar>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
  }
})
