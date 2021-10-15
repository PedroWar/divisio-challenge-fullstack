import express from 'express'

import { mockUsers } from '../mocks/users'
import { PokeApi } from './pokemonApi' 

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/users', (req, res) => {
  res.send(mockUsers)
})

router.get('/pokedex', async (req, res)=> {
  let pokedex = new PokeApi();
  
  res.send(await pokedex.getPokedex())
})

export default router
