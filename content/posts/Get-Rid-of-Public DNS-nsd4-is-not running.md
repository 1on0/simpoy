+++
date = "2022-05-22"
title = "Get Rid of Public DNS (nsd4) is not running (port 53). on Mail-in-a-Box"
categories = ["Notes"]
tags = ["Self-hosting"]
cover = "gallery/mail-in-a-box.png"
+++


It's really annoying to see cross marks on status checks on Mail-in-a-Box, it's simply because your box doesn't have an IPV6 or it's been disabled. Having said that, we just simply re-enable it.
<!--more-->

```markdown
sudo sysctl -w net.ipv6.conf.all.disable_ipv6=0

sudo sysctl -w net.ipv6.conf.default.disable_ipv6=0

sudo service nsd start
```

