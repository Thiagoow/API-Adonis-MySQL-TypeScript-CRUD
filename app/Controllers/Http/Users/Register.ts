import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/User/RegisterValidator'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class RegisterController {
  public async store({ request }: HttpContextContract) {
    /* Database.transaction() -> This method is used when
    whenever we try to do some action on dB, and if is not
    successful, that action is undone */
    await Database.transaction(async (trx) => {
      const { name, email, password } = await request.validate(RegisterValidator)
      const user = new User()

      /* Put the user creation as a transaction:
      If anything below this line of code, INSIDE this transaction
      FAILS (such as the confirmation email cannot be sent for 
      example), then everything is undone and don't change the dB: */
      user.useTransaction(trx)

      user.name = name
      user.email = email
      user.password = password
      //Save user to dB:
      await user.save()
    })
  }

  public async destroy({ auth }: HttpContextContract) {
    //Delete user authenticated:
    const user = await auth.authenticate()
    await user.delete()
  }
}
