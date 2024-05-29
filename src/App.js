import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { NativeBaseProvider } from 'native-base'
import { ApolloProvider } from '@apollo/client'
import { store, persistor } from './Store'
import theme from './NativebaseTheme'
import graphqlClient from './Services/Graphql'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ApplicationNavigator from './Navigators/Application'

const App = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={graphqlClient}>
            <GestureHandlerRootView>
              <ApplicationNavigator />
            </GestureHandlerRootView>
          </ApolloProvider>
        </PersistGate>
      </NativeBaseProvider>
    </Provider>
  </SafeAreaProvider>
)

export default App
