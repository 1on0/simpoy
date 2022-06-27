+++
date = "2022-02-15"
title = "Free Up RAM on Debian or Ubuntu"
categories = ["Notes"]
tags = ["Linux"]
+++

```markdown
free -h && sudo sysctl -w vm.drop_caches=3 && sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches && free -h
```
<!--more-->
