#!/bin/bash
INIT="\e[01;33mPopulando as collections do MongoDB\e[00m 👀\n"
FINISH="\e[01;32mFake-database semeado com sucesso!\e[00m 😎"
COLLECTION_FINISH="\e[01;36mCollection populada:\e[00m"

echo -e "\n$INIT"

# Popula Pessoa
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-peoples.js'
echo -e "$COLLECTION_FINISH Pessoa ✅\n"

# Popula Aluno
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-students.js'
echo -e "$COLLECTION_FINISH students ✅\n"

# Popula Pessoa
docker-compose exec mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-tasks.js'
echo -e "$COLLECTION_FINISH tasks ✅\n"

echo -e "$FINISH\n"