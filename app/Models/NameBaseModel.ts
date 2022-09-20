import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy'

export default class NameBaseModel extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()
}
