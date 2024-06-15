import json 

PACKAGE_JSON = "./backend/package.json"

print("Adding `npm run knex` script command to package.json")
backend_pkgjson = json.load(open(PACKAGE_JSON, "r"))

backend_pkgjson["scripts"]["knex"] = \
    "npx tsx ./node_modules/.bin/knex" 


json.dump(backend_pkgjson, open(PACKAGE_JSON, "w"), indent=4)
