import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class ConfirmationToken extends BaseModel
{
    declare id : any
    declare _email_id : any
    declare token : any
    declare type : any
    declare created_at : any
    declare updated_at : any

    static get tableName() {
        return "_confirmation_tokens"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   