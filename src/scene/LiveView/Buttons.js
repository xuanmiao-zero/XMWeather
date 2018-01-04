// import libraries
import React, {PureComponent} from 'react'
import {
  View,
  Image
} from 'react-native'
import ActionButton from './ActionButton'

//import function
import screen from '../../common/screen'

export default class extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ActionButton
          buttonColor="rgba(30,144,255,1)"
          btnOutRange={"rgba(30,144,255,1)"}
          position='right'
          radius = {70}
          active={false} //默认是否打开
          icon={<Image source={require('../../img/liveView/+.png')}></Image>}
          size={50}
          style={{marginRight: 50, }}
        >
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" style={{ zIndex: 2, }} onPress={() => console.log("notes tapped!")}>
            <Image style={{ zIndex: 2, }} source={require('../../img/liveView/camera.png')}/>

          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Image source={require('../../img/liveView/gallery.png')}/>
          </ActionButton.Item>
        </ActionButton>
    );
  }
}