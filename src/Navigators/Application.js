import React from 'react'
import { StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './navUtils'
import Home from '../Components/Home'
import Details from '../Components/Details'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}
      edges={['left', 'right']}
      mode="padding">
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
        animated={true}
        style={{
          height: Platform.OS === 'ios' ? 26 : StatusBar.currentHeight,
        }}
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="Details" component={Details}
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
