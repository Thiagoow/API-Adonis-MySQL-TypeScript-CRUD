import Route from '@ioc:Adonis/Core/Route'

Route.resource('posts', 'PostsController')
  .apiOnly()
  .middleware({
    //Require auth for these routes:
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
    /* It's an array because we
    can have multiple middleware */
  })
