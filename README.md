# git-history-cli
search history from any git repository

实现原理
--------
通过git fetch 获得远程仓库的信息， 然后通过git log来获取commit log。

本地安装
--------
in git-history-cli folder, run 'npm install -g'


执行
--------
ghc history git-repo

参数：

-t, --text [text]  Only show commits with a commit message containing the string

-n, --number [number] Show only the last n commits

-b, --branch [branch] Show only the branch commits

-p, --pretty Show pretty commits

-s, --since [since] Limit the commits to those made before the specified date

-u, --until [until] Limit the commits to those made after the specified date

-v, --verbose Show detail log