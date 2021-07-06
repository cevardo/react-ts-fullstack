import { Router } from 'express'
import UserService from 'services/user.service'

const routes = Router()

routes.get('/', (req, res) => res.send('Express + TypeScript Server'))

routes.get('/get', async (req, res) => {
  const result = await UserService.findActive()
  res.send(result)
})

routes.get('/getById', async (req, res) => {
  const data = req.body
  console.log('data', data)
  const result = await UserService.findById(data.id)
  res.send(result)
})

routes.put('/put', async (req, res) => {
  const data = req.body
  const result = await UserService.save(data)
  res.send(result)
})

export default routes