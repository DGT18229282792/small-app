
# classweb
node+vue全栈项目

# small-app
一个简易的、前后端分离的基于vue+webpack+node.js+mongodb的后台管理系统和客户端
采用前后端分离模式进行开发；前端采用vue全家桶，服务器端用的是node的express框架，数据库采用了当下比较流行的mongoDB;
#server
服务器端
#vueclient
客户端
#运行方式
1：先启动本地mongodb服务(自行安装MongoDB)，进入到MongoDB安装路径bin目录，在终端运行sudo ./mongod；为了方便进行数据库操作，可自行安装mongodb客户端
2：再启动server服务器：新开一个终端，进入到项目目录下的server目录，运行npm start
3:最后启动客户端：新开一个终端，进入到项目目录下的vueclient目录，首次运行时需要加载相应的依赖，运行如下代码cnpm install;再运行cnpm run dev;
#打开浏览器输入localhost：8080即可打开项目
