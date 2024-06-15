import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class Profile extends BaseModel
{
    declare id : any
    declare user_id : any
    declare first_name : any
    declare middle_name : any
    declare last_name : any
    declare country_id : any
    declare birthdate : any
    declare gender : any

    static get tableName() {
        return "profiles"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   