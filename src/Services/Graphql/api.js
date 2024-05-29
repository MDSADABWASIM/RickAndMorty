import graphqlClient from './index'
import QUERY from './queries'

export const createUserDetails = async (user, setErrors) => {
  try {
    const { uid, displayName } = user
    let { email } = user
    const firstName = displayName.split(' ')[0]
    const lastName = displayName.split(' ').splice(1).join(' ')
    if (email === null) { email = '' }
    await graphqlClient.mutate({
      mutation: QUERY.CREATE_USER,
      variables: {
        id: uid,
        firstName,
        lastName,
        email,
        welcomeScreen: true,
      },
    })
  } catch (err) {
    setErrors(err.message)
  }
}

const getAllUsers = async (userId) => {
  try {
    return await graphqlClient.query({
      query: QUERY.GET_ALL_USER,
      variables: {
        userId,
      },
    })
  } catch (err) {
    return err
  }
}

const getUserById = async (id) => {
  try {
    return await graphqlClient.query({
      query: QUERY.GET_USER,
      variables: {
        id,
      },
    })
  } catch (err) {
    return err
  }
}

