---
title: linux
order: 4
group:
  title: javaWeb


---



## 安装Linux

[云文档](https://b11et3un53m.feishu.cn/wiki/FJAnwOhpIihMkLkOKQocdWZ7nUc)

## 常用命令

### 帮助类 

man [命令或配置文件] （功能描述：获得帮助信息）

 [命令或配置文件]  --help

显示说明

```bash
信息 功能
NAME 命令的名称和单行描述
SYNOPSIS 怎样使用命令
DESCRIPTION 命令功能的深入讨论
EXAMPLES 怎样使用命令的例子
SEE ALSO 相关主题（通常是手册页）
```

快捷键

```bash
ctrl + c 停止进程
ctrl+l 清屏，等同于 clear；彻底清屏是：reset
善于用 tab 键 提示(更重要的是可以防止敲错)
上下键 查找执行过的命令
```

## 文件目录类

### pwd 显示当前工作目录的绝对路径

```bash
pwd 显示当前工作目录的绝对路径
```

### ls 列出目录的内容

```bash
选项 功能
-a 全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来(常用) 
-l 长数据串列出，包含文件的属性与权限等等数据；(常用)等价于“ll”
```

每行列出的信息依次是： 文件类型与权限 链接数 文件属主 文件属组文件大小用byte 来表示 建立或最近修改的时间 名字

### cd 切换目录

```bash
参数 功能
cd 绝对路径 切换路径
cd 相对路径 切换路径
cd ~或者 cd 回到自己的家目录
cd - 回到上一次所在目录
cd .. 回到当前目录的上一级目录
cd -P 跳转到实际物理路径，而非快捷方式路径
```

### mkdir 创建一个新的目录

```bash
选项 功能
-p 创建多层目录
mkdir -p a/b/c
```

### rmdir 删除一个空的目录

```bash
-p 创建多层目录
rmdir  -p a/b/c   如果删除 c 之后b是空就删除b，b删完a是空就删a
```

### touch 创建空文件

### cp 复制文件或目录

cp [选项] source dest （功能描述：复制source文件到dest）

强制覆盖不提示的方法：\cp

```bash
选项 功能
-r 递归复制整个文件夹
cp vue.config  ./game/
\cp vue.config  ./game/
```

### rm 删除文件或目录

```bash
选项 功能
-r 递归删除目录中所有内容
-f 强制执行删除操作，而不提示用于进行确认。-v 显示指令的详细执行过程
```

### mv 移动文件与目录或重命名

再当前目录下操作不就是重命名了吗

```bash
（1）mv oldNameFile newNameFile （功能描述：重命名） 
（2）mv /temp/movefile /targetFolder （功能描述：移动文件）
```

### cat 查看文件内容

一般查看比较小的文件，一屏幕能显示全的。

```bash
选项 功能描述
-n 显示所有行的行号，包括空行。
```

### less 分屏显示文件内容

less 指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率。

```bash
操作 功能说明
空白键 向下翻动一页；
[pagedown] 向下翻动一页
[pageup] 向上翻动一页；
/字串 向下搜寻『字串』的功能；n：向下查找；N：向上查找；
?字串 向上搜寻『字串』的功能；n：向上查找；N：向下查找；q 离开 less 这个程序；
f b  下一页/上一页
g /shif +g   跳到开头/结尾
```

#### more

```
作用: 以分页的形式显示文件内容
语法: more fileName

操作说明:
    回车键 	向下滚动一行
    空格键 	向下滚动一屏
    b 		返回上一屏
    q或者Ctrl+C	退出more
	
举例：
	more /etc/profile		以分页方式显示/etc目录下的profile文件内容
```

### echo

echo 输出内容到控制台

-e： 支持反斜线控制的字符转换

```bash
\\ 输出\本身
\n 换行符
\t 制表符，也就是 Tab 键
```

### head 显示文件头部内容

默认前十行

```bash
-n<行数> 指定显示头部内容的行数
head -n2 vue.config 
```

### tail 输出文件尾部内容

###  > 输出重定向和 >> 追加

```bash
（1）ls -l > 文件 （功能描述：列表的内容写入文件 a.txt 中（覆盖写））
（2）ls -al >> 文件 （功能描述：列表的内容追加到文件aa.txt 的末尾）
（3）cat 文件 1 > 文件 2 （功能描述：将文件 1 的内容覆盖到文件2）
（4）echo “内容” >> 文件
```

栗子

```bash
将 ls 查看信息写入到文件中
ls -l>houge.txt

将 ls 查看信息追加到文件中
ls -l>>houge.txt

采用 echo 将 hello 单词追加到文件中
echo hello>>houge.txt
```

### ln 软链接

ln -s [原文件或目录] [软链接名] （功能描述：给原文件创建一个软链接）

删除软链接：` rm -rf 软链接名`，而不是 rm -rf 软链接名/  `!!!`

`如果使用 rm -rf 软链接名/ 删除，会把软链接对应的真实目录下内容删掉`

查询：通过 ll 就可以查看，列表属性第 1 位是 l，尾部会有位置指向。

栗子

```bash
创建软连接
ln -s /home/wanglei/ /root/wanglei

查看
[root@hodoop100 wanglei]# ll /root
总用量 12
lrwxrwxrwx. 1 root root   14 7月  16 22:51 wanglei -> /home/wanglei/

删除
rm wanglei

进入实际物理路径
cd -P wanglei/


```

### history 查看已经执行过历史命令

## 文本编辑命令

文本编辑的命令，主要包含两个: vi 和 vim，两个命令的用法类似。

安装vim命令： yum install vim

### 一般模式

以 vim 打开一个档案就直接进入一般模式了（这是默认的模式）。在这个模式中，你可以使用『上下左右』按键来移动光标，你可以使用『删除字符』或『删除整行』来处理档案内容， 也可以使用『复制、粘贴』来处理你的文件数据。

#### 复制

```bash
yy 			复制游标所在行整行 
2yy/y2y 	  复制 2 行
y^    复制至行首，或y0
y$    复制至行尾
yw    复制一个word
y2w    复制两个word 
yG    复制至文件尾
y1G    复制至文件首

```

#### 剪贴

```bash
dd    剪切游标所在行整行 
d^    剪切至行首，或d0
d$    剪切至行尾 
dw    剪切一个word 
dG    剪切至文件尾  


```

#### 粘贴

```bash
p    粘贴至游标后（下） 
P    粘贴至游标前（上）
要使用 系统粘贴板 的内容，也可以直接在命令模式按 Shift + Inset 进行粘贴。

```

#### 快捷键

```bash
shift+g 移动到页尾
gg 移动到页头
shift+6（^） 移动到行头
shift+4 （$） 移动到行尾
```

#### 进入编辑模式

```bash
o 在当前行的下面另起一行，并变为输入模式
shift+o 在当前行的上面另起一行，并变为输入模式
i 当前光标前
a 当前光标后
```

#### 进入指令模式

```bash
在一般模式当中，输入『 : / ?』3个中的任何一个按钮
```

### 指令模式

#### 常用命令

```bash
:w 保存
:q 退出
:! 强制执行
/要查找的词 n 查找下一个，N 往上查找:noh 取消高亮显示
:set nu 显示行号
:set nonu 关闭行号
:s/old/new 替换内容 替换匹配到的第一个
:s/old/new/g 替换内容 替换光标所在行
:%s/old/new 替换内容 替换匹配到的第一行的第一个
:%s/old/new/g 替换内容 替换匹配到的所有内容
```



## 搜索查找类

### find 查找文件或者目录

find [搜索范围] [选项]

```bash
选项 功能
-name<查询方式> 		按照指定的文件名查找模式查找文件
-user<用户名>			 查找属于指定用户名所有文件
-size<文件大小> 		按照指定的文件大小查找文件,单位为:
                        b —— 块（512 字节）
                        c —— 字节
                        w —— 字（2 字节）
                        k —— 千字节
                        M —— 兆字节
                        G —— 吉字节

```

```bash
根据名称查找 xiyou/目录下的 所有 .txt文件
find xiyou/ -name "*.txt"

查找 opt/ 目录下，用户名称为 wl 的文件
find opt/ -user wl

在/home目录下查找大于20m的文件（+n 大于-n小于n等于）
find /home -size +20M

```

### locate 快速定位文件路径

locate 指令利用事先建立的系统中所有文件名称及路径的 locate 数据库实现快速定位给定的文件。Locate 指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须定期更新 locate 时刻。

由于 locate 指令基于数据库进行查询，所以第一次运行前，必须使用updatedb 指令创建 locate 数据库。

```bash
updatedb
locate wl

```

### grep 过滤查找及“|”管道符

管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理

```bash
选项 功能
-n 显示匹配行及行号。

过滤ls 结果中含有 bo 字符的
ls | grep -n bo


```

### 查询系统进程

```bash
ps -ef| grep tomcat
```

## 压缩和解压

### gzip/gunzip 压缩  `只能压缩单个文件`

gzip 文件 （功能描述：压缩文件，只能将文件压缩为*.gz 文件）

gunzip 文件.gz （功能描述：解压缩文件命令）

（1）只能压缩文件不能压缩目录

（2）`不保留原来的文件` 

（3）同时多个文件会产生多个压缩包

### zip/unzip 压缩

zip [选项] XXX.zip 将要压缩的内容 （功能描述：压缩文件和目录的命令）

unzip [选项] XXX.zip （功能描述：解压缩文件）

```bash
zip 选项 功能
-r 压缩目录

unzip 选项 功能
-d<目录> 指定解压后文件的存放目录

```

zip 压缩命令在windows/linux都通用，可以压缩目录且保留源文件。

```bash
压缩 q.txt q2.txt 为 q.zip /q.rar
zip q.rar q.txt q2.txt

解压 
unzip q.zip

压缩src目录
zip src.zip -r src

```



### tar 打包

tar [选项] XXX.tar.gz 将要打包进去的内容 （功能描述：打包目录，压缩后的文件格式.tar.gz）

```bash
选项 功能
-c 产生.tar 打包文件
-v 显示详细信息
-f 指定压缩后的文件名
-z 打包同时压缩
-x 解包.tar 文件
-C 解压到指定目录

```

```bash
将 1 2 文件打包为 src.tar.gz
tar -zcvf src.tar.gz 1.js 2.js

压缩目录
tar -zcvf xiyou.tar.gz xiyou/

解压到指定目录
tar -zxvf src.tar.gz -C ./src2

```

## 文件权限类

### chmod 改变权限

第一种方式变更权限 chmod [{ugoa}{+-=}{rwx}] 文件或目录 

u:所有者 g:所有组 o:其他人 a:所有人(u、g、o 的总和)

```bash
chmod g+x houge.txt

```

第二种方式变更权限 chmod [mode=421 ] [文件或目录]

r=4 w=2 x=1 rwx=4+2+1=7

```bash
chmod 777 houge.txt

-R 递归操作
chmod -R 777 xiyou/

```

### chown 改变所有者

chown [选项] [最终用户] [文件或目录]

```BASH
选项 功能
-R 递归操作

chown newwl houge.txt

```

### chgrp 改变所属组

chgrp [最终用户组] [文件或目录] （功能描述：改变文件或者目录的所属组）

```bash
  -R     递归的改变目录和它的内容的组所有权 (即使遇到错误也继续.)

```

## 用户管理类

###  useradd 添加新用户

useradd 用户名 （功能描述：添加新用户）

 useradd -g 组名 用户名 （功能描述：添加新用户到某个组）

```bash
//增加
useradd wl

//查看
ll /home/

```

###  passwd 设置用户密码

passwd 用户名 （功能描述：设置用户密码）

### id 查看用户是否存在

```bash
id wl

```

### cat /etc/passwd 查看创建了哪些用户

### su 切换用户

su 用户名称 （功能描述：切换用户，只能获得用户的执行权限，不能获得环境变量）

su - 用户名称 （功能描述：切换到用户并获得该用户的环境变量及执行权限）

echo $PATH 可查看环境变量

### userdel 删除用户

（1）userdel 用户名 （功能描述：删除用户但保存用户主目录）

（2）userdel -r 用户名 （功能描述：用户和用户主目录，都删除）

不使用 -r把目录删了感觉优点麻烦，但实际真的要删除用户吗



### who 查看登录用户信息

（1）whoami （功能描述：显示自身用户名称） 

（2）who am i （功能描述：显示登录用户的用户名以及登陆时间）

### sudo 设置普通用户具有 root 权限 

1）添加 atguigu 用户，并对其设置密码。

```bash
useradd wl
passwd wl@1234

```

2）修改配置文件

```bash
vim /etc/sudoers 修改 /etc/sudoers 

```

文件，找到下面一行(91 行)，在 root 下面添加一行，如下所示：

```bash
## Allow root to run any commands anywhere
root ALL=(ALL) ALL
wl ALL=(ALL) ALL

```

或者配置成采用 sudo 命令时，不需要输入密码 

```bash
## Allow root to run any commands anywhere 
root ALL=(ALL) ALL 
wl ALL=(ALL) NOPASSWD:ALL

```



### usermod 修改用户组

usermod -g 用户组 用户名        //修改用户的初始登录组，给定的组必须存在。默认组id 是1。``

```bash
将wl添加到root
usermod -g root wl

```

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。那么

cat /etc/group    查看创建了哪些组

#### groupadd 新增组

groupadd 组名

```bash
groupadd yyds

```

### groupdel 删除组

groupdel 组名

### groupmod 修改组

groupmod -n 新组名 老组名



## 磁盘类

### du 查看文件和目录占用的磁盘空间

du: disk usage 磁盘占用情况

```bash
选项 功能
-h 以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；-a 不仅查看子目录大小，还要包括文件
-c 显示所有的文件和子目录大小后，显示总和-s 只显示总和
--max-depth=n 指定统计子目录的深度为第 n 层

```



```bash
查看当前用户主目录占用的磁盘空间大小
du -sh

```

### df 查看磁盘空间使用情况

df: disk free 空余磁盘

```bash
选项 功能
-h 以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；

查看磁盘使用情况
df -h

```

### lsblk 查看设备挂载情况

lsblk （功能描述：查看设备挂载情况）

```bash
选项 功能
-f 查看详细的设备挂载情况，显示文件系统信息

```



### mount/umount 挂载/卸载

mount [-t vfstype] [-o options] device dir （功能描述：挂载设备）

umount 设备文件名或挂载点 （功能描述：卸载设备）

-t vfstype 

指定文件系统的类型，通常不必指定。mount 会自动选择正确的类型。常用类型有： 

- 光盘或光盘镜像：iso9660 
- DOS fat16 文件系统：msdos 
- Windows 9x fat32 文件系统：vfat
- Windows NT ntfs 文件系统：ntfs 
- Mount Windows 文件网络共享：smbfs 
- UNIX(LINUX) 文件网络共享：nfs

-o options

主要用来描述设备或档案的挂接方式。常用的参数有：

- loop：用来把一个文件当成硬盘分区挂接上系统ro：采用只读方式挂接设备 

- rw：采用读写方式挂接设备 iocharset：指定访问文件系统所用字符集

device 要挂接(mount)的设备 

dir 设备在系统上的挂接点(mount point)

```bash
首先创建/mnt/cdrom 目录

挂载到 /mnt/cdrom
mount /dev/cdrom /mnt/cdrom

卸载
umount /dev/cdrom

```



### fdisk 分区

fdisk -l （功能描述：查看磁盘分区详情） 

fdisk 硬盘设备名 （功能描述：对新增硬盘进行分区操作）

[B站linux](https://www.bilibili.com/video/BV1WY4y1H7d3?p=54&vd_source=5979680b2334b6f2c8e7b1f27e2363ae)



## 进程管理

### ps 查看当前系统进程状态

ps:process status 进程状态

```bash
选项 功能
a 列出带有终端的所有用户的进程
x 列出当前用户的所有进程，包括没有终端的进程u 面向用户友好的显示风格
-e 列出所有进程
-u 列出某个用户关联的所有进程
-f 显示完整格式的进程列表

```

如果想查看进程的 CPU 占用率和内存占用率，可以使用 aux; 

如果想查看进程的父进程 ID 可以使用 ef;

```bash
ps aux | grep xxx （功能描述：查看系统中所有进程）
ps -ef | grep xxx （功能描述：可以查看子父进程之间的关系）

```



### kill 终止进程

kill [选项] 进程号 （功能描述：通过进程号杀死进程） 

killall 进程名称 （功能描述：通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用）

```bash
选项 功能
-9 表示强迫进程立即停止

```

### pstree 查看进程树

```bash
选项 功能
-p 显示进程的 PID
-u 显示进程的所属用户

```

### top 实时监控系统进程状态

```bash
选项 功能
-d 秒数 指定 top 命令每隔几秒更新。默认是 3 秒在 top 命令的交互模式当中可以执行的命令：
-i 使 top 不显示任何闲置或者僵死进程。
-p 通过指定监控进程 ID 来仅仅监控某个进程的状态。

操作 功能
P 以 CPU 使用率排序，默认就是此项
M 以内存的使用率排序
N 以 PID 排序
q 退出 top

```

###  netstat 显示网络状态和端口占用信息

```BASH
选项 功能
-a 显示所有正在监听（listen）和未监听的套接字（socket）
-n 拒绝显示别名，能显示数字的全部转化成数字
-l 仅列出在监听的服务状态
-p 表示显示哪个进程在调用

netstat -anp | grep 进程号 （功能描述：查看该进程网络信息）netstat –nlp | grep 端口号 （功能描述：查看网络端口号占用情况）

```



## 定时任务

### crontab 服务管理

```bash
重新启动 crond 服务
systemctl restart crond

```



### crontab 定时任务设置

crontab [选项]

```bash
选项 功能
-e 编辑 crontab 定时任务
-l 查询 crontab 任务
-r 删除当前用户所有的 crontab 任务

```



```bash
项目 含义 范围
第一个“*” 一小时当中的第几分钟 0-59
第二个“*” 一天当中的第几小时 0-23
第三个“*” 一个月当中的第几天 1-31
第四个“*” 一年当中的第几月 1-12
第五个“*” 一周当中的星期几 0-7 （0 和7 都代表星期日）

```



```bash
特殊符号 含义
* 代表任何时间。比如第一个“*”就代表一小时中每分钟都执行一次的意思。

， 代表不连续的时间。比如“0 8,12,16 * * * 命令”，就代表在每天的 8 点 0 分，12 点 0 分，16 点0 分都执行一次命令

- 代表连续的时间范围。比如“0 5 * * 1-6 命令”，代表在周一到周六的凌晨 5 点 0 分执行命令

*/n 代表每隔多久执行一次。比如“*/10 * * * * 命令”，代表每隔 10 分钟就执行一遍命令

```

栗子

```bash
时间 含义
45 22 * * * 命令 每天 22 点 45 分执行命令

0 17 * * 1 命令 每周 1 的 17 点 0 分执行命令

0 5 1,15 * * 命令 每月 1 号和 15 号的凌晨 5 点 0 分执行命令

40 4 * * 1-5 命令 每周一到周五的凌晨 4 点 40 分执行命令

*/10 4 * * * 命令 每天的凌晨 4 点，每隔 10 分钟执行一次命令

0 0 1,15 * 1 命令 每月 1 号和 15 号，每周 1 的 0 点 0 分都会执行命令。注意：星期几和几号最好不要同时出现，因为他们定义的都是天。非常容易让管理员混乱。

```

| 时间              | 含义                                                         |
| ----------------- | ------------------------------------------------------------ |
| 45 22 * * * 命令  | 每天 22 点 45 分执行命令                                     |
| 0 17 * * 1 命令   | 每周 1 的 17 点 0 分执行命令                                 |
| 0 5 1,15 * * 命令 | 每月 1 号和 15 号的凌晨 5 点 0 分执行命令                    |
| 40 4 * * 1-5 命令 | 每周一到周五的凌晨 4 点 40 分执行命令                        |
| */10 4 * * * 命令 | 每天的凌晨 4 点，每隔 10 分钟执行一次命令                    |
| 0 0 1,15 * 1 命令 | 每月 1 号和 15 号，每周 1 的 0 点 0 分都会执行命令。注意：星期几和几号最好不要同时出现，因为他们定义的都是天。非常容易让管理员混乱。 |

```bash
每隔 1 分钟，向/root/bailongma.txt 文件中添加一个 11 的数字

*/1 * * * * /bin/echo ”11” >> /root/bailongma.txt

```





## 防火墙

| 操作                         | 指令                                                         | 备注                 |
| ---------------------------- | ------------------------------------------------------------ | -------------------- |
| 查看防火墙状态               | systemctl status firewalld / firewall-cmd --state            |                      |
| 暂时关闭防火墙               | systemctl stop firewalld                                     |                      |
| 永久关闭防火墙(禁用开机自启) | systemctl disable firewalld                                  | ==下次启动,才生效==  |
| 暂时开启防火墙               | systemctl start firewalld                                    |                      |
| 永久开启防火墙(启用开机自启) | systemctl enable firewalld                                   | ==下次启动,才生效==  |
| 开放指定端口                 | firewall-cmd --zone=public --add-port=8080/tcp --permanent   | ==需要重新加载生效== |
| 关闭指定端口                 | firewall-cmd --zone=public --remove-port=8080/tcp --permanent | ==需要重新加载生效== |
| 立即生效(重新加载)           | firewall-cmd --reload                                        |                      |
| 查看开放端口                 | firewall-cmd --zone=public --list-ports                      |                      |

> 注意：
>
> ​	A. systemctl是管理Linux中服务的命令，可以对服务进行启动、停止、重启、查看状态等操作
>
> ​	B. firewall-cmd是Linux中专门用于控制防火墙的命令
>
> ​	C. 为了保证系统安全，服务器的防火墙不建议关闭







## 软件管理

### YUM 

YUM（全称为 Yellow dog Updater, Modified）是一个在 Fedora 和RedHat 以及CentOS中的 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装，

#### YUM 的常用命令

yum [选项] [参数]

| 选项 | 功能                  |
| ---- | --------------------- |
| -y   | 对所有提问都回答“yes” |



| 参数         | 功能                            |
| ------------ | ------------------------------- |
| install      | 安装 rpm 软件包                 |
| update       | 更新 rpm 软件包                 |
| check-update | 检查是否有可用的更新 rpm 软件包 |
| remove       | 删除指定的 rpm 软件包           |
| list         | 显示软件包信息                  |
| clean        | 清理 yum 过期的缓存             |
| deplist      | 显示 yum 软件包的所有依赖关系   |

```bash
采用 yum 方式安装 firefox
yum -y install firefox
```



#### 修改网络 YUM 源

默认的系统 YUM 源，需要连接国外 apache 网站，网速比较慢，可以修改关联的网络YUM 源为国内镜像的网站，比如网易 163,aliyun 等

```bash
1）安装 wget, wget 用来从指定的 URL 下载文件
yum install wget

2）在/etc/yum.repos.d/目录下，备份默认的 repos 文件,

cd /etc/yum.repos.d/
pwd
3) 下载网易 163 或者是 aliyun 的 repos 文件,任选其一，
//阿里云
wget http://mirrors.aliyun.com/repo/Centos-7.repo 

///网易 163
wget http://mirrors.163.com/.help/CentOS7-Base-163.repo

4）使用下载好的 repos 文件替换默认的 repos 文件
用 CentOS7-Base-163.repo 替换 CentOS-Base.repo
mv CentOS7-Base-163.repo CentOS-Base.repo

5）清理旧缓存数据，缓存新数据
[root@hodoop100 yum.repos.d]# yum clean all
[root@hadoop101 yum.repos.d]# yum makecache  //把服务器的包信息下载到本地电脑缓存起来

6）测试
yum list | grep firefox
yum -y install firefox
```

#### 不验证证书进行https请求

```bash
  $ wget 'https://x.x.x.x/get_ips' --no-check-certificate
```



### RPM

RPM（RedHat Package Manager），RedHat软件包管理工具，类似windows里面的setup.exe 是Linux这系列操作系统里面的打包安装工具，它虽然是RedHat的标志，但理念是通用的。

RPM包的名称格式 Apache-1.3.23-11.i386.rpm - “apache” 软件名称 - “1.3.23-11”软件的版本号，主版本和此版本 - “i386”是软件所运行的硬件平台，Intel 32位处理器的统称 - “rpm”文件扩展名，代表RPM包

#### RPM 查询命令（rpm -qa）

rpm -qa （功能描述：查询所安装的所有 rpm 软件包）

由于软件包比较多，一般都会采取过滤。rpm -qa | grep rpm软件包

```bash
查询firefox软件安装情况
rpm -qa |grep firefox
```

#### RPM 卸载命令（rpm -e）

（1）rpm -e RPM软件包 

```bash
选项 功能
-e 卸载软件包
--nodeps 卸载软件时，不检查依赖。这样的话，那些使用该软件包的软件在此之后可能就不能正常工作了。
rpm -e --nodeps 软件包
```

#### RPM 安装命令（rpm -ivh）

rpm -ivh RPM 包全名

| 选项    | 功能                    |
| ------- | ----------------------- |
| -i      | install，安装           |
| -v      | --verbose，显示详细信息 |
| -h      | --hash，进度条          |
| -nodeps | 安装前不检查依赖        |

# 

## 系统管理

### systemctl   服务管理

- 基本语法

 systemctl  start | stop | restart | status  服务名

查看服务方法  ： ls /usr/lib/systemd/system

- 案例实操 

或者是  firewalld.service 都一样

```bash
（1）查看防火墙服务的状态 
 systemctl status firewalld 
 （2）停止防火墙服务
 systemctl stop firewalld 
 （3）启动防火墙服务
 systemctl start firewalld 
 （4）重启防火墙服务
  systemctl restart firewalld
```

### systemctl 设置后台服务的自启配置

- 基本语法 

systemctl list-unit-files （功能描述：查看服务开机启动状态）

systemctl disable service_name （功能描述：关掉指定服务的自动启动）

systemctl enable service_name （功能描述：开启指定服务的自动启动）

- 案例实操 

```BASH
（1）开启/关闭 iptables(防火墙)服务的自动启动
systemctl enable firewalld.service 
systemctl disable firewalld.service
```



### 关机重启命令

基本语法 

`使用 sync 指令可以立即将缓冲区的数据写入磁盘。`

（1）sync （功能描述：将数据由内存同步到硬盘中）

（2）halt （功能描述：停机，关闭系统，但不断电）

（3）poweroff （功能描述：关机，断电） 

（3）reboot （功能描述：就是重启，等同于 shutdown -r now）

（4）shutdown [选项] 时间 

| 选项 | 功能               |
| ---- | ------------------ |
| -H   | 相当于--halt，停机 |
| -r   | -r=reboot 重启     |

| 参数  | 功能                               |
| ----- | ---------------------------------- |
| now   | 立刻关机                           |
| 时间  | 等待多久后关机（时间单位是分钟）。 |
| 12:20 | 12:20 的时候关机                   |



## 网络配置

### 修改 IP 地址

查看 IP 配置文件

```bash
ifconfig
```

修改配置

```bash
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```

```bash
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="static"   #改为静态 记得删除这个注释
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="53694c99-5377-44e6-adac-eadb115e8e18"
DEVICE="ens33"
ONBOOT="yes"
#改为静态IP 记得删除这个注释
IPADDR=192.168.64.100
#网关
GATEWAY=192.168.64.2
#域名解析器
DNS1=192.168.64.2

```

重启网络

```bash
 service network restart
```

### 配置主机名

方法1

（1）查看当前服务器主机名称

 hostname 

（2）如果感觉此主机名不合适，我们可以进行修改。

通过编辑/etc/hostname 文件

 vi /etc/hostname 修改完成后重启生效。

方法2

直接使用命令修改 

hostnamectl set-hostname node3

### 修改 hosts 映射文件

```bash
vim /etc/hosts
```



## nvm环境变量

```bash
echo "source ~/nvm/nvm.sh" >> ~/.bashrc //注意nvm是个隐藏文件夹需要通过ls -a 查看 nvm路径
source ~/.bashrc
```









