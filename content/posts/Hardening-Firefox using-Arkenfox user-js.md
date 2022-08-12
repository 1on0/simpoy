+++
date = "2022-05-22"
title = "Hardening Firefox using Arkenfox user.js"
categories = ["Notes"]
tags = ["Privacy"]
+++


You can read the Arkenfox official wiki based on your threat model. 
Create the *user-overrides.js* file / download or copy here [user-overrides.js](https://box.simpoy.xyz/cloud/index.php/s/S2pfAAa9MwNbmML). <!--more-->
Download the official release from here or use git clone from https://github.com/arkenfox/user.js, then locate your Mozilla Firefox profile, and open terminal. 

Linux or MacOS:
Copy the prefsCleaner.sh, updater.sh and user.js file from the extracted zip into your Firefox profile, as well as your *user-overrides.js* file.

On your terminal inside your Firefox profile folder. Don't forget to quit your Firefox before you start

```go:arkenfox.go
chown +x prefsCleaner.sh
./prefsCleaner.sh
./updater.sh
```
