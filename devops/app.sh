#!/bin/bash
INIT="\e[01;33mIniciando Containers\e[00m 🔖\n"
START="\e[01;33mInciando aplicação em\e[00m"
APP_PORT="\e[01;36m http://localhost:4040\e[00m 💡"
STOP_INIT="\e[01;33mParando Containers\e[00m 🥵\n"
STOP_FINISH="\e[01;36mA aplicação foi encerrada\e[00m 🥱"
COMMAND="\e[01;33m'$1'\e[00m"
COMMAND_START="\e[01;36mstart\e[00m"
COMMAND_STOP="\e[01;36mstop\e[00m"
ERROR="Comando $COMMAND não é válido, tente novamente ❌"
HELP_COMMANDS="Comandos válidos: $COMMAND_START e $COMMAND_STOP ✅"
STATUS=$(curl -s http://localhost:4040)
ALREADY_START="\e[01;33mA aplicação já está em execução\e[00m 🤨"

if [ $1 == "start" ]
then
    # Verifica se a aplicação já está sendo executada
    if [ "$STATUS" == "This server is running in port 4040" ]
    then
        echo -e "\n$ALREADY_START\n"
    else
        # Inicializa os containers
        echo -e "\n$INIT"
        docker-compose start

        # Inicia a aplicação
        echo -e "\n$START $APP_PORT"
        sleep 2
        docker-compose exec -T siga-server /bin/bash -c \ "cd /home/node/app && npm run start:dev"
    fi
else
    if [ $1 == "stop" ]
    then
        # Parando os containers
        echo -e "\n$STOP_INIT"
        docker-compose stop
        echo -e "\n$STOP_FINISH\n"
    else
        echo -e "\n$ERROR\n$HELP_COMMANDS"
    fi
fi


