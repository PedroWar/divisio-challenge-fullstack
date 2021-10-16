import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class PokeApi extends RESTDataSource {
  baseURL = 'https://pokeapi.co/api/v2';

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async getPokedex(limit = 10) {
    let results = []
    
    const data = await this.get('/pokemon?limit=20/', {
      per_page: limit,
      order_by: 'name',
    });

    results = data.results    
    results.map(result=>result.id = result.url.split("/")[6])    

    return data.results;

  }
}