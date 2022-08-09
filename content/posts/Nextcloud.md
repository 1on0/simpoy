+++
date = "2022-06-03"
title = "Deploy Nextcloud with docker, docker-compose"
categories = ["Notes"]
tags = ["Self-hosting"]
+++


I don't really actually use any cloud provider, as the time goes by, I need to easily integrate my fast storage file between one device to another. Actually I've been using it with built in mail-in-a-box Nextcloud, however it's using SQlite, for contact and calendar purposes and some small size might be sufficient. <!--more--> In case I want to deploy Nextcloud to the next level using mysql, which can be asily deployed on my VPS using docker command. Here I'm gonna use ```docker-compose```. Nextcloud is based on PHP, I decided to use redis docker image and make a cron tab without having to add another php package manager to my current server, do not forget to add your database file ```db.env``` 

```yaml
version: '3'
services:
  db:
    image: mariadb
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    restart: always
    volumes:
      - db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=*"yourpassword"*
    env_file:
      - db.env

  redis:
    image: redis
    restart: always

  app:
    build: ./app
    restart: always
    ports:
      - 7772:80
    volumes:
      - nextcloud:/var/www/html
    environment:
      - MYSQL_HOST=db
    env_file:
      - db.env
    depends_on:
      - db
      - redis

  cron:
    build: ./app
    restart: always
    volumes:
      - nextcloud:/var/www/html
    entrypoint: /cron.sh
    depends_on:
      - db
      - redis

volumes:
  db:
  nextcloud:  
```