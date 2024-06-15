import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class Client extends BaseModel
{
    declare id : any
    declare _user_agent_id : any
    declare access_count : any
    declare user_count : any

    static get tableName() {
        return "_clients"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   