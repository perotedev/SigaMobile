#!/bin/bash
INIT="\e[01;33mPopulando as collections do MongoDB\e[00m 👀\n"
FINISH="\e[01;32mFake-database semeado com sucesso!\e[00m 😎"
COLLECTION_FINISH="\e[01;36mCollection populada:\e[00m"

echo -e "\n$INIT"

# Popula Peoples
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-peoples.js'
echo -e "$COLLECTION_FINISH peoples ✅\n"

# Popula Telefones
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-telefones.js'
echo -e "$COLLECTION_FINISH telefones ✅\n"

# Popula ContasBanco
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-contas-banco.js'
echo -e "$COLLECTION_FINISH contasBanco ✅\n"

# Popula Endereços
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-enderecos.js'
echo -e "$COLLECTION_FINISH enderecos ✅\n"

# Popula Cursos
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-cursos.js'
echo -e "$COLLECTION_FINISH cursos ✅\n"

# Popula Professores
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-professores.js'
echo -e "$COLLECTION_FINISH professores ✅\n"

# Popula Studants
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-studants.js'
echo -e "$COLLECTION_FINISH studants ✅\n"

# Popula StudantTasks
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-studant-tasks.js'
echo -e "$COLLECTION_FINISH studantTasks ✅\n"

# Popula Users
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin ../../database-scripts/fake-users.js'
echo -e "$COLLECTION_FINISH users ✅\n"

echo -e "$FINISH\n"