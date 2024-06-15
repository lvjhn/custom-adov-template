import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class User extends BaseModel
{
    declare id : any
    declare email : any
    declare username : any
    declare password : any
    declare failed_logins : any
    declare notified_failed_logins : any
    declare disabled_at : any
    declare email_verified_at : any
    declare created_at : any
    declare updated_at : any

    static get tableName() {
        return "users"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   