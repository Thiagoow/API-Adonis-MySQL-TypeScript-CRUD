import Route from '@ioc:Adonis/Core/Route'
/* To check all routes created on this project, run: 
node ace list:routes */

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('posts', 'PostsController').apiOnly()
