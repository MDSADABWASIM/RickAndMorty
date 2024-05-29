import React from 'react'
import { Button, VStack, Text, FlatList, HStack, Image, Input, Spinner } from 'native-base'
import { navigationRef } from '../Navigators/navUtils'
import { Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../Store/actions'
import { RefreshControl } from 'react-native-gesture-handler'
import { Keyboard } from 'react-native'


function SearchBar({ dispatch }) {
  let searchQuery
  return <Input placeholder="Type name here" variant="filled" width="100%" borderRadius="10" py="1" px="2"
    value={searchQuery}
    onChangeText={(text) => { searchQuery = text }}
    onSubmitEditing={() => dispatch(actions.User.filterUser(searchQuery))}
    returnKeyType="search"
    rightElement={<Button onPress={() => {
      Keyboard.dismiss()
      dispatch(actions.User.filterUser(searchQuery))
    }
    }>search</Button>}
  />
}


const Home = () => {
  const userStore = useSelector(state => state.User)
  const dispatch = useDispatch()

  const navRef = navigationRef


  return (
    <VStack p={4} >
      {userStore.users && userStore.users.length > 0 ? <SearchBar dispatch={dispatch} /> : <></>}
      {userStore.isFetching ?
        <Spinner />
        : <Button
          onPress={() => {
            dispatch(actions.User.getAllUsers())
          }}
          mt={8} borderRadius={8} backgroundColor={'green.500'} >
          {userStore.users && userStore.users.length > 0 ? 'Refresh data' : 'Get data'}
        </Button>}
      <RefreshControl
        refreshing={userStore.isFetching}
        onRefresh={() => {
          dispatch(actions.User.getAllUsers())
        }} >
        <FlatList data={userStore.isSearching ? userStore.filteredUsers : userStore.users}
          renderItem={({
            item,
          }) => {
            return (
              <Pressable onPress={() => {
                navRef.navigate('Details', item)
              }} >
                <HStack mr={8} mt={8}>
                  <Image alt="user image" key={item.image} src={item.image} size={20} mr={8} borderRadius={8} />
                  <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>{item.name}
                  </Text>
                </HStack>
              </Pressable>
            )
          }}
          keyExtractor={item => item.id} />
      </RefreshControl>
    </VStack >)
}

export default Home
