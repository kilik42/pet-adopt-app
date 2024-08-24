import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
export default function LoginScreen() {
  return (
    <View>
      <Image source={require('../../assets/images/login.png')} 
      style={{
        width: '100%',
        height: 500
      }}
      />

      <View style={{
        padding: 20,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Text style={{
          padding: 20,
          fontSize: 24,
          fontWeight: 'bold'
        }}>Ready to make a new friend?</Text>
        <Text style={{
          fontFamily: 'outfitr',
          fontSize: 16,
          color: '#666',
          textAlign: 'center',
          color: Colors.gray,
          marginTop: 10
        }}>Let's adopt the pet which you like and make a choice</Text>
        </View>
    </View>
  )
}