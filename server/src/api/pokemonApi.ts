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
    })

    results = data.results    
    return results.map(x => x = this.prepareReq(x))
  }

  async getPokemon(id: Number) {
    const data = await this.get(`/pokemon/${id}`, {    });
    
    return this.prepareReq(data)
  }

  prepareReq(pokemon: any) : any{
    if(pokemon.id === undefined)
      pokemon.id = pokemon.url.split("/")[6]
    
    if(pokemon.forms !== undefined)
      pokemon.forms.map(form => form = form.name)

    if(pokemon.sprites !== undefined){
      pokemon.spriteFront = pokemon.sprites.front_default
      pokemon.spriteFrontShiny = pokemon.sprites.front_shiny
    }

    if(pokemon.types !== undefined) {
      pokemon.typeList = pokemon.types.map(type=> type.type.name)

      console.log("TIPO", pokemon.types)
    }
    return pokemon
  }

}