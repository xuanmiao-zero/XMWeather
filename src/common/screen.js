import {Dimensions, Platform, PixelRatio} from 'react-native'

export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  STATUSBAR_HEIGHT: (Platform.OS === 'ios' ? 20 : 0),
  APPBAR_HEIGHT: (Platform.OS === 'ios' ? 44 : 56),
}

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 750;
export  function px2dp(uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx;
}