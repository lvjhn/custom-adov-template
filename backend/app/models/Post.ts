import BaseModel from "#models/_BaseModel_"
import { Model } from "objection"

export default class Post extends BaseModel
{

    static get tableName() {
        return "posts"
    }

    static get idColumn() {
        return "id"
    }

    static get relationMappings() {
        return {
       
        }
    }
}   