import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class UserClient extends BaseModel
{
    declare id : any
    declare user_id : any
    declare _client_id : any
    declare access_count : any
    declare user_count : any
    declare first_accessed_at : any
    declare last_accessed_at : any

    static get tableName() {
        return "_user_clients"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   