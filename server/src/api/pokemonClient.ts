import * as https from "https"

const getListOptions = {
  hostname: 'pokeapi.co',
  port: 443,
  path: '/api/v2/pokemon?limit=20',
  method: 'GET'
}

export async function reqPokedex() {
    let data = '';
    let req = https.request(getListOptions, res => {
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


