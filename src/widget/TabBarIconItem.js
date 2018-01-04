//import Libraries
import React, {PureComponent} from 'react'
import {Image} from 'react-native'

// create a component
export default class TabBarIconItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused ? selectedImage : this.props.normalImage}
                style={{
                    tintColor: this.props.tintColor,
                    width: 24,
                    height: 24,
                    resizeMode: 'contain'
                }}/>
        );
    }
}
