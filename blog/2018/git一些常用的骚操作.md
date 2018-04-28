### 前沿

来到58的第二天，主要是熟悉一些基本流程以及操作，但是之前自己对于git来说也就是会一些简单的上传提交等，然后这次主要用到了一些分支合并以及一些快捷办法，所以就写了这片git一些常用骚操作，忘了一些命令的时候可以返回来查一下，希望能够给到大家一点帮助。

### ssh密匙操作

##### 查看密钥

默认存储在～/.ssh目录下

```bash
$ cd ~/.ssh
$ cat id_rsa.pub
```

##### 生成密钥

默认安装git

```bash
$ ssh-keygen
```

一路回车即可，生成的目录就在默认目录~/.ssh下

### 基本上传下载操作

##### 克隆远端

从git远端克隆到本地

```git
$ git clone 远端地址
```

##### 初始化以及提交

```git
$ git init
$ git add 文件名
$ git commit -m '信息'
$ git push origin master
```

命令合并，直接提交已修改文件

git commit -a -m '提交信息'

### 分支命令

```git
$ git branch 列出所有本地分支
$ git branch -r 所有远端分支
$ git branch -a 所有分支
$ git branch [branch-name] 新建分支但停留在当前分支
$ git checkout -b [branch-name] 新建分支并切换到该分支
$ git checkout [branch-name] 切换到指定分支
$ git merge [branch-name] 合并分支到当前分支，例如合并分支到master务必切换当前分支到master下
$ git branch -d [branch-name] 删除分支
```

### 同步命令

```git
$ git status 查看当前状态
$ git fetch [remote] 下载远程仓库所有变动
$ git push [remote] [branch] 上传本地指定分支到远程仓库
git push [remote] --all 推送所有分支到远端
```