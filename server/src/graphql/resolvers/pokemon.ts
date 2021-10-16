export default {
  Query: {
    pokemons: async (_source, _args, { dataSources }) => {
      return dataSources.PokeApi.getPokedex()
    }
  }
}
