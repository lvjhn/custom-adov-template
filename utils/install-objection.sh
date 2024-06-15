cd ./backend
echo "Installing dependencies."
npm install sqlite3 mysql knex objection inflection

echo "Initializing knex (knexfile.ts)"
cd ../
cp .aovd/knexfile.ts ./backend/knexfile.ts

python3 ./utils/installer/install_objection.py

echo "Creating base model."
if [ ! -d ./backend/app/models ] ; then 
    mkdir ./backend/app/models/
fi
cp .aovd/base-model.ts ./backend/app/models/_BaseModel_.ts


echo "Copying necessary files."
if [ ! -d ./backend/app/database ] ; then 
    mkdir ./backend/app/database/
fi
cp .aovd/aovd.config.ts ./backend/config/aovd.ts
cp .aovd/aovd.main.ts ./backend/app/database/aovd.ts

echo "Done."