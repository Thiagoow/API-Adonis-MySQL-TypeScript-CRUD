import Route from '@ioc:Adonis/Core/Route'

Route.resource('posts', 'PostsController')
  .apiOnly()
  .middleware({
    /* Require auth with Access 
    Control Level for these routes: */
    store: ['acl:admin, normal'],
    update: ['acl:admin, normal'],
    destroy: ['acl:admin, normal'],
    /* It's an array because we
    can have multiple middleware */
  })
