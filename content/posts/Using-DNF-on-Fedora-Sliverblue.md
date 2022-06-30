+++
date = "2022-05-20"
title = "Using DNF on Fedora Sliverblue"
categories = ["Notes"]
tags = ["Linux"]
+++


Steps to use DNF command like a regular Fedora on Silverblue using aliases


```go
cat >> ~/.bashrc << EOF
alias sudo="sudo "
alias dnf="bash -c '#skip_sudo'; toolbox -y create 2>/dev/null; toolbox run sudo dnf"
EOF
```

<!--more-->