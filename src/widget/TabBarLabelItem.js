//import Libraries
import React, {PureComponent} from 'react'
import {Text} from 'react-native'

// create a component
export default class TabBarLabelItem extends PureComponent {
  render() {
    return (
      <Text
        style={{
          color: this.props.tintColor,
          textAlign: 'center',
          fontSize: 12,
          marginTop: -3,
          marginLeft: 3,
          marginBottom: 3
        }}
      >{this.props.content}</Text>
    );
  }
}
