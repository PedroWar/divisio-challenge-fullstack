const { RESTDataSource } = require('apollo-datasource-rest');

export class PokeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co//api/v2/';
  }

//   async getMovie(id) {
//     return this.get(`movies/${encodeURIComponent(id)}`);
//   }

  async getPokemonList(limit = 10) {
    const data = await this.get('pokemon?limit=20', {
      per_page: limit,
      order_by: 'most_viewed',
    });
    return data.results;
  }
}