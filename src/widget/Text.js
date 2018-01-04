import React from 'react';
import ReactNative, {StyleSheet, Dimensions, Text, ReactElement, View} from 'react-native'

export function HeaderTitleText({style, ...props}: Object): ReactElement {
  return <Text style={[styles.HeaderTitleText, style]} {...props} />
}

export function Text1({style, ...props}: Object): ReactElement {
  return <Text style={[styles.Text1, style]} {...props} />
}

export function Text2({style, ...props}: Object): ReactElement {
  return <Text style={[styles.Text2, style]} {...props} />
}

export function Text3({style, ...props}: Object): ReactElement {
  return <Text style={[styles.Text3, style]} {...props} />
}

export function Text5({style, ...props}: Object): ReactElement {
  return <Text style={[styles.Text5, style]} {...props} />
}

export function Text4({style, ...props}: Object): ReactElement {
  return <Text style={[styles.Text4, style]} {...props} />
}

export function Text15({style, ...props}: Object): ReactElement {
  return <Text style={[styles.Text15, style]} {...props} />
}

const styles = StyleSheet.create({
  HeaderTitleText: {
    fontSize: 16,
    color: '#fff',
    fontFamily:'PingFangSC-Regular'
  },
  Text1: {
    fontSize: 10,
    color: '#fff',
    fontFamily:'PingFangSC-Regular'
  },
  Text2: {
    fontSize: 13,
    color: '#fff',
    fontFamily:'PingFangSC-Regular'
  },
  Text3: {
    fontSize: 16,
    color: '#fff',
    fontFamily:'PingFangSC-Regular'
  },
  Text4: {
    fontSize: 18,
    color: '#fff',
    fontFamily:'PingFangSC-Regular'
  },
  Text5: {
    fontSize: 24,
    color: '#fff',
    fontFamily:'PingFangSC-Regular'
  },
  Text15: {
    fontSize: 100,
    color: '#fff',
    fontFamily:'sans-serif-thin'
  },
});

