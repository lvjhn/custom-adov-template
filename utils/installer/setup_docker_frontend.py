import json 
import re

project = json.load(open("./project.json"))
dockerfile = open("./.aovd/Dockerfile.frontend").read()
output = dockerfile

frontend = project["backend"]

for variable in frontend: 
    value = frontend[variable] 
    output = re.sub("#" + variable + "#", value, output)

print(output)

