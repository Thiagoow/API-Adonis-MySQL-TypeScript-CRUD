import Route from '@ioc:Adonis/Core/Route'

Route.resource('posts', 'PostsController')
  .apiOnly()
  .middleware({
    /* Require auth with Access 
    Control Level for these routes: */
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
    /* It's an array because we
    can have multiple middleware */
  })
