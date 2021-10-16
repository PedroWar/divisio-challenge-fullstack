import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    name: String,
    id: String
  }

  type Query {
   pokemons: [Pokemon]
  }

`
