import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelcomeScreen from '../screens/WelcomeScreen'
import Navigation from '../screens/Navigation'

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }} >
      <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})