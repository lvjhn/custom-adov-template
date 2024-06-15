import json 
import re

project = json.load(open("./project.json"))
dockerfile = open("./.aovd/Dockerfile.backend").read()
output = dockerfile

backend = project["backend"]

for variable in backend: 
    value = backend[variable] 
    output = re.sub("#" + variable + "#", value, output)

print(output)

