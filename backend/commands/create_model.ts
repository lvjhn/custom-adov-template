import { BaseCommand, flags } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { args } from '@adonisjs/core/ace'
import { Edge } from "edge.js"
import process from 'process'
import path from 'path'
import fs from "fs"
import app from "@adonisjs/core/services/app"
import string from '@adonisjs/core/helpers/string'
import { db } from '../app/database/aovd.js'
import inflection from "inflection"

export default class CreateModel extends BaseCommand {
  static commandName = 'create:model'
  static description = 'Creates an objection model.'

  static options: CommandOptions = {
    startApp: true
  }

  @args.string({
    argumentName: "model-name",
    description: "Name of the model to make."
  }) 
  declare name: string

  @args.string({
    argumentName: "table-name",
    description: "Name of the table to use.",
    required: false
  }) 
  declare table: string

  @args.string({
    argumentName: "id-column",
    description: "ID column to use.",
    required: false
  }) 
  declare idColumn: string


  @flags.boolean({
    name: "force",
    description: "Whether to overwrite existing models.",
    alias: ["f"]  
  }) 
  declare force: boolean


  @flags.string({
    name: "relations",
    description: "Relations associated with this model"
  }) 
  declare relations: string

  async run() {
    const edge = Edge.create() 
    edge.mount(path.resolve(process.cwd(), "../.aovd"))

    const modelPath = 
      app.modelsPath() + "/" + this.name + ".ts"

    console.log("Creating " + modelPath.replaceAll(process.cwd(), ""))

    if(!this.force && fs.existsSync(modelPath)) {
      console.log("Model already exists. Skipping.")
      process.exit()
    }

    this.table = this.table ?? string.snakeCase(inflection.pluralize(this.name))

    let columns : any = await db(this.table).columnInfo()
    columns = Object.keys(columns) 

    const result = await edge.render("model", {
      modelName : this.name, 
      tableName : this.table,
      idColumn : this.idColumn ?? "id",
      columns : columns
    }) 
    
    fs.writeFileSync(
      modelPath, 
      result
    )

    console.log("Done.")

    process.exit()
  }
}