import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './posts'

/* To check all routes created on this project, run: 
node ace list:routes */

Route.get('/', async () => {
  return { hello: 'world :D' }
})
