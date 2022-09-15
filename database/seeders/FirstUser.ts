import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  //To don't run this seed on build:
  public static developmentOnly = true

  /* Run this seed with the command: 
    node ace db:seed

  Probably you gonna need to install this lib
  as well, so that adonis can hash the password:
    yarn add phc-argon2 */
  public async run() {
    await User.create({
      email: 'adminUser@email.com',
      password: 'secretAdminPass:p',
    })
  }
}
