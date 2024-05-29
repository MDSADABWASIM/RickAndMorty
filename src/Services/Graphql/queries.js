import { gql } from '@apollo/client'

/**
 * This files describes the different queries defined to
 * interact with the graphql server.
 *
 * To use graphql in your components, checkout sample implementation
 * of Home.js (or) check out
 *
 * https://www.apollographql.com/docs/tutorial/queries/#fetching-a-list
 */

const GET_USER = gql`
  query getUser($id: ID!) {
    character(id: $id) {
        id
        name
        gender
        image
      }
    }
`


const GET_ALL_USER = gql`
  query {
      characters {
        results {
          id
          name
          gender
          image
        }
    }
  }
`



export default {
  GET_USER,
  GET_ALL_USER,
}
