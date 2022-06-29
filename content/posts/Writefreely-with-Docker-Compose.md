+++
date = "2022-02-15"
title = "Writefreely with Docker Compose"
categories = ["Notes"]
tags = ["Self-hosting"]
+++

Before you go further, please refer to their websites, there are 2 version of writefreely, write.as and writefreely.
Download the stable release as mentioned on [Writefreely](https://writefreely.org/start) using wget command. <!--more-->

```go
sudo wget https://github.com/writefreely/writefreely/releases/download/v0.13.1/writefreely_0.13.1_linux_amd64.tar.gz
sudo tar -zxvf writefreely_0.13.1_linux_amd64.tar.gz
```

Generate config.ini before generating keys
```go
cd writefreely
sudo ./writefreely --config
```

My current setup is, you can configure as you like <br />
- Server setup
- Production, behind reverse proxy
- Database setup
- SQLite

Generate keys

```go
 sudo ./writefreely --gen-keys
```

Locate keys directory and make it a writeable file
```go
cd keys
sudo chmod 777 *keys.file*
```


Create a docker-compose.yml file according to your writefreely directory:
<br />
```go
writefreely:
    image: writeas/writefreely:latest
    container_name: writefreely
    restart: unless-stopped
    volumes:
      - "./writefreely:/go/src/app"
      - "./writefreely/config.ini:/go/config.ini"
      - "./writefreely/keys:/go/keys"
      - "./writefreely/writefreely.db:/go/writefreely.db"
    //#change ports accordingly
    ports:
      - "8080:8080"
    networks:
      default
```

Start your container

```go
sudo docker-compose up -d
```

You can now navigate to your public url based on your configuration, however you will get into popup message said failed to post, as you can see the log on your container there is an attempt to write a readonly database, go to your .db file directory and you can do like chown command.

```go
cd writefreely
sudo chown 2:2 writefreely.db
```
