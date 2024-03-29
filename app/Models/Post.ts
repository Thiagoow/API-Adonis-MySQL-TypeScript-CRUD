import { DateTime } from 'luxon'
import NameBaseModel from 'App/Models/NameBaseModel'
import { column, belongsTo, BelongsTo, CherryPick } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Post extends NameBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column({ serializeAs: null })
  public authorId: number

  @belongsTo(() => User, { foreignKey: 'authorId' })
  public author: BelongsTo<typeof User>

  @column.dateTime({
    autoCreate: true,
    // Formatting date & time using Luxon (HH to be 24h):
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public updatedAt: DateTime

  public serialize(cherryPick?: CherryPick) {
    return {
      ...this.serializeAttributes(cherryPick?.fields, false),
      ...this.serializeComputed(cherryPick?.fields),
      ...this.serializeRelations(
        {
          author: {
            //Only show these fields on response:
            fields: ['id', 'name', 'email'],
            /* If instead it's better to choose which 
            columns i want to omit from response:
              fields: { omit: ['column'] }, */
          },
        },
        false
      ),
    }
  }
}
