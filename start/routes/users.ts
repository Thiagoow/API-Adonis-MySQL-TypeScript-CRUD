import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.delete('/users/register', 'Users/Register.destroy').middleware('auth')
