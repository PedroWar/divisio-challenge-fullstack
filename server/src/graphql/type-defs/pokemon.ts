import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    name: String,
    id: number
  }

  type Query {
   pokemons: [Pokemon]
  }

`
