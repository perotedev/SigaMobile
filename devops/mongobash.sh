#!/bin/bash

#docker-compose exec mongo /bin/bash
docker-compose exec siga-mongo /bin/bash -c \
    'exec mongo sigadatabase -u root -p example --authenticationDatabase admin'