import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class PokeApi extends RESTDataSource {
  baseURL = 'https://pokeapi.co/api/v2';

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async getPokedex(limit = 10) {
    const data = await this.get('/pokemon?limit=20/', {
      per_page: limit,
      order_by: 'name',
    });
    return data.results;
  }
}