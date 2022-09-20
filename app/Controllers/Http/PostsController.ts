import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { StoreValidator, UpdateValidator } from 'App/Validators/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.query().orderBy('id', 'asc').preload('author')
    /* If I don't want to sort the posts or 
    show the author info, I can just do: 
    const posts = await Post.all() */

    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await auth.authenticate()

    const post = await Post.create({ authorId: user.id, ...data })
    //Same name as the relation on Post model:
    await post.load('author')

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.load('author')
    return post
  }

  public async update({ params, request }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    //Replace/merge data on post:
    post.merge(data)
    //Save on database:
    await post.save()
    //Load author relation:
    await post.load('author')

    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
  }
}
