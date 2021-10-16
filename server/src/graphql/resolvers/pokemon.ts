export default {
  Query: {
    pokemons: async (_source, _args, { dataSources }) => {
      return dataSources.PokeApi.getPokedex()
    },
    pokemon: async (_source, _args, { dataSources }) => {
      return dataSources.PokeApi.getPokemon(_args.id)
    } 
  }
}
