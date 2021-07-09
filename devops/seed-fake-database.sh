#!/bin/bash
INIT="\e[01;33mPopulando as collections do MongoDB\e[00m 👀\n"
FINISH="\e[01;32mFake-database semeado com sucesso!\e[00m 😎"
COLLECTION_FINISH="\e[01;36mCollection populada:\e[00m"

echo -e "\n$INIT"

# Popula Peoples
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-peoples.js'
echo -e "$COLLECTION_FINISH Pessoa ✅\n"

# Popula Studants
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-studants.js'
echo -e "$COLLECTION_FINISH studants ✅\n"

# Popula Tasks
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-tasks.js'
echo -e "$COLLECTION_FINISH tasks ✅\n"

# Popula Users
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-users.js'
echo -e "$COLLECTION_FINISH users ✅\n"

echo -e "$FINISH\n"