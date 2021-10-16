import { gql } from 'apollo-server-express'

export default gql`
  type Pokemon {
    id: String!
    name: String!
    forms: [Pokemon]
    spriteFront: String
    spriteFrontShiny: String
    typeList:[String!]
    weight: Int
    height: Int
  } 

  type Query {
    pokemons: [Pokemon]
    pokemon(id: String!): Pokemon
  }

`
