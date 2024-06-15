import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class User extends BaseModel
{
    declare id : any
    declare username : any
    declare password : any
    declare email : any
    declare created_at : any
    declare updated_at : any

    static get tableName() {
        return "user"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   