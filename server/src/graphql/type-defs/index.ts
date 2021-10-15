import { mergeTypeDefs } from '@graphql-tools/merge'

import accountTypeDefs from './account'
import pokeTypeDefs from './pokemon'

export default mergeTypeDefs([
  accountTypeDefs,
  pokeTypeDefs
])
