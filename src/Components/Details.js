import { Box, Text, Image, Button } from 'native-base'
import React from 'react'
import { navigationRef } from '../Navigators/navUtils'


const Details = () => {
  const navRef = navigationRef
  const item = navRef.getCurrentRoute().params
  return (
    <Box flex={1} backgroundColor={'blue.50'} alignItems={'center'}>
      <Image src={item.image} borderRadius={8} resizeMode="contain" alt="user image" height={'40%'} width={'100%'} mt={8} mb={8} />
      <Text style={{ fontSize: 20, fontWeight: 800 }}>{item.name}</Text>
      <Text mb={50}>{item.gender}</Text>
      <Button onPress={() => navRef.goBack()} variant={'outline'}>Go back</Button>
    </Box>
  )
}

export default Details
