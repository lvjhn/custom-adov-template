import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class Country extends BaseModel
{
    declare id : any
    declare name : any

    static get tableName() {
        return "countries"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   