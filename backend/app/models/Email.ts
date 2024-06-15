import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class Email extends BaseModel
{
    declare id : any
    declare email : any

    static get tableName() {
        return "_emails"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   