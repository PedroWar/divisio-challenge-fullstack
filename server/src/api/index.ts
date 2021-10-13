import express from 'express'

import { mockUsers } from '../mocks/users'
import { reqPokedex } from './pokemonClient' 

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/users', (req, res) => {
  res.send(mockUsers)
})

router.get('/pokedex', async (req, res)=> {
  await reqPokedex()
  res.send()
})

export default router
