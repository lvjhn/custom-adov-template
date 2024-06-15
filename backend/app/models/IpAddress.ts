import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class IpAddress extends BaseModel
{
    declare id : any
    declare ip : any

    static get tableName() {
        return "_ip_addresses"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   