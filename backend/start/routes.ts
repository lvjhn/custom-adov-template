/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { db } from '../app/database/aovd.js'

router.get('/', async () => {
    db('users').columnInfo().then((columns) => {
        console.log(columns)
    })
    return "It works"
})
