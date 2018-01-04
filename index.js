import { AppRegistry,Text } from 'react-native';
import React, {PureComponent} from 'react'
import RootScene from "./src/RootScene";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootScene/>
    );
  }
}
AppRegistry.registerComponent('XMWeather', () => App);
