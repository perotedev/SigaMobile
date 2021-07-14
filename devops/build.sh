#!/bin/bash
INIT="\e[01;33mIniciando Containers\e[00m 🔖\n"
START="\e[01;33mInciando aplicação em\e[00m"
APP_PORT="\e[01;36m http://localhost:4040\e[00m 💡"

# Inicializa os containers
echo -e "\n$INIT"
docker-compose up --remove-orphans --force-recreate --renew-anon-volumes -d
echo -e "\n"

# Esperar o MongoDB estar pronto
while ! docker-compose logs siga-mongo | grep -m1 '"ctx":"listener","msg":"Listening on"'; do
    echo -e "👀 Waiting for Mongo database to be ready for connections... "
    sleep 10
done

# Semeia fake-database
./devops/seed-fake-database.sh

# Inicia a aplicação
echo -e "\n$START $APP_PORT"
sleep 2
docker-compose exec -T siga-server /bin/bash -c "cd /home/node/app/.docker && ./entrypoint.sh"