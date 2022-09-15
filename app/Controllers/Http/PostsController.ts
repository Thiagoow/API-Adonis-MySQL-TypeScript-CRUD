import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()
    /* To get on created order:
     Post.query().orderBy('id') */
    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(PostValidator)
    const post = await Post.create(data)
    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    return post
  }

  public async update({ params, request }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(PostValidator)
    //Replace/merge data on post:
    post.merge(data)
    //Save on database:
    await post.save()
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
  }
}
