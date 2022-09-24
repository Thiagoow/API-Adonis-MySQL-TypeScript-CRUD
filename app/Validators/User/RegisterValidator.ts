import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'name' })]),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [rules.confirmed('passwordConfirmation')]) /* <- 
    "passwordConfirmation" param was passed because we are using camelCase 
    naming strategy instead of the snake_case which is the default one. */,
  })

  public messages: CustomMessages = {}
}
