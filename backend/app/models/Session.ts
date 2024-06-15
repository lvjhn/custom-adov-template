import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class Session extends BaseModel
{

    static get tableName() {
        return "_sessions"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   