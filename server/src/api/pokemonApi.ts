import * as https from "https"

export class PokeApi {
    readonly getListOptions = {
      hostname: 'pokeapi.co',
      port: 443,
      path: '/api/v2/pokemon?limit=20',
      method: 'GET'
    }

    constructor() {
    }

    async getPokemonList() {
      let data = '';
      let req = https.request(this.getListOptions, res => {
              console.log(`statusCode: ${res.statusCode}`)
  
              res.on('data', chunk => {
                  data += chunk;
              })
  
              res.on('end', () => {
                  console.log(JSON.parse(data)); // 'Buy the milk'
              })
          })
                  
          req.on('error', error => {
              console.error(error)
          })
          
          req.end()
  }
    
}