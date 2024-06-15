import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class UserAgent extends BaseModel
{
    declare id : any
    declare name : any

    static get tableName() {
        return "_user_agents"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   