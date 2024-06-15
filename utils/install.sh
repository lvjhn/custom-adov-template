####################
# INSTALLER SCRIPT #
####################

#
# This script installs the current version of AdonisJS and and VueJS
# on the project directory.
#

set -e 
source  ./helpers/shell.sh 

function main {
    # print program header 
    print_program_header "| CUSTOM-AOVD-TEMPLATE (INSTALLER)" "1.0.0"

    # main program flow 
    elevate_privileges 
    install

    echo 
}

function install {
    install_adonisjs 
    install_vuejs 
    setup_docker
    install_objectionjs
}

function install_adonisjs {
    display_header "| @ Installing AdonisJS"
    echo

    if [ ! -f "./backend/.aovd/installed" ]; then
        rm -rf ./backend
        mkdir ./backend
        npm init adonisjs@latest ./backend
        mkdir ./backend/.aovd
        touch ./backend/.aovd/installed 
        echo "bind 0.0.0.0" > ./backend/.aovd/redis.conf
    else 
        echo -e "\t| Already installed, skipping."
    fi
}

function install_vuejs {
    display_header "| @ Installing VueJS"
    echo

    if [ ! -f "./frontend/.aovd/installed" ]; then
        rm -rf ./frontend
        mkdir ./frontend
        npm init vue@latest ./frontend
        cd ./frontend 
        npm install 
        cd ../
        mkdir ./frontend/.aovd
        touch ./frontend/.aovd/installed 
    else 
        echo -e "\t| Already installed, skipping."
    fi
}

function setup_docker {
    display_header "| @ Setting up Docker" 
    echo 

    if [ ! -f "./aovd/docker-ready" ] ; then 
        echo -e "\t| Setting for backend"
        python3 utils/installer/setup_docker_backend.py > ./backend/Dockerfile 
        if [ ! -d ./backend/utils ]; then
            mkdir ./backend/utils/
        fi
        touch ./backend/utils/start.sh

        echo -e "\t| Setting for frontend"
        python3 utils/installer/setup_docker_frontend.py > ./frontend/Dockerfile
        if [ ! -d ./backend/utils ]; then 
            mkdir ./frontend/utils 
        fi
        touch ./frontend/utils/start.sh 

        echo -e "\t| Setting up docker-compose.yml" 
        python3 utils/installer/setup_docker_compose.py > ./docker-compose.yml
    else 
        echo -e "\t| Docker already set up." 
    fi
}

function install_objectionjs {
    display_header "| @ Installing objection.js" 
    echo

    bash ./utils/install-objection.sh
}

main
