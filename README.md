## 项目导航
1. **后端仓库地址**: [Server](https://github.com/Yuanyi362102/Server/tree/main)
2. **项目相关的文章**: [CSDN博客地址](https://blog.csdn.net/2302_79169315?spm=1000.2115.3001.5343)
3. **项目参考资料**: [黑马程序员Node.js课程](https://www.bilibili.com/video/BV1a34y167AZ/?spm_id_from=333.337.search-card.all.click)、[黑马程序员Vue课程](https://www.bilibili.com/video/BV12J411m7MG/?spm_id_from=333.337.search-card.all.click
)、[菜鸟教程Bootstrap5文档](https://www.runoob.com/bootstrap5/bootstrap5-tutorial.html)

## 项目介绍
  本项目是一个以“奥运”为主题的新闻宣传网站，网站取名为“时事聚焦”。该网站属于一个前后端分离项目，前端采用“Bootstrap5和Vue3”框架进行网页设计，后端采用Node.js主流框架——“Express”对前端请求进行响应，同时使用了Mysql数据库对网站的主要信息进行存储。网站的设计灵感有很大一部分来自于“今日头条”新闻网站，同时也综合考量了“新华网”，“人民网”，“环球网”等主流新闻网站。项目历时20余天开发完成，采用主流开源编辑器“Visual Studio Code”进行开发，并利用编辑器自带的Git版本控制系统进行详细的开发日志记录。项目具备一个新闻网站的基本功能，包括但不限于“注册”，“登录”，
“新闻检索”,“新闻详情页浏览”,“新闻热榜”,“天气查询”等

**启动项目**

`下载项目源代码`

```
git clone git@github.com:Yuanyi362102/Web.git
```

```
git clone git@github.com:Yuanyi362102/Server.git
```
下载本仓库的Web源码和后端仓库[Server](https://github.com/Yuanyi362102/Server/tree/main)里的源代码，并启用两个Vscode窗口分别打开这两个文件夹。

**简易方式（推荐）：使用docker容器部署**

`准备工作`：

安装docker（网上可查）

进入项目的/Web/docker路径，选中docker-compose.yml文件，用终端打开,输入以下命令即可完成相应操作：

`启动项目`
```
docker-compose up -d
```
`关闭项目`

```
docker-compose down
```
⚠️：如果报错`Error response from daemon: Head “https://registry-1.docker.io/v2/library/wordpress/manifests/latest”: unauthorized: incorrect username or password`
需要输入`docker login`登录，如果没有账号需先注册docker账号

**困难方式：在本地电脑部署**

- 环境:node版本 v20.15.0，包管理工具npm(国内淘宝镜像源)


`配置后端`

1. 先全局安装nodemon
```
npm install -g nodemon

```
2. 安装依赖
用Vscode打开Server文件夹，打开集成终端，输入以下命令安装依赖
```
npm i
```
3. 用Vscode(或其他开发工具)打开Server文件夹，在集成终端中输入以下命令:
```
nodemon app.js

```
至此，后端服务器启动成功

`配置数据库`

用数据库管理工具，比如Navicat，导入csv文件，csv文件位于项目的/web/docker路径下。
具体操作可看我写的这篇博客：[导入教程](https://editor.csdn.net/md/?articleId=142145391)

表的结构：
“comment”，“feedback”，“HotNews”，“searchNews”，“user”共五个数据表

各数据表的设计如下：

**comment表**

<img width="820" alt="图片" src="https://github.com/user-attachments/assets/783b4095-2c14-4560-a045-7baa0ebd8a52">

<img width="820" alt="图片" src="https://github.com/user-attachments/assets/495ad9c1-a429-425a-b95d-cb534ec6f043">

**feedback表**

<img width="820" alt="图片" src="https://github.com/user-attachments/assets/2a7e693f-3050-4e3b-9def-8d18de7c9047" style="margin:auto;">

<img width="820" alt="图片" src="https://github.com/user-attachments/assets/5965aa9a-e455-4ffd-90ce-540b96c6ec1e" style="margin:auto;">
 
 **HotNews表**
 
 <img width="820" alt="图片" src="https://github.com/user-attachments/assets/499c8dce-6de3-49be-84a6-897349ca7dd6" style="margin:auto;">
 
 <img width="820" alt="图片" src="https://github.com/user-attachments/assets/858847a8-36c2-4737-8b74-a9bc0baa7f6f" style="margin:auto;">

 **searchNews表**
 
<img width="820" alt="图片" src="https://github.com/user-attachments/assets/6c843989-7183-4c19-962c-2ac7502b6d5a" style="margin:auto;">

<img width="820" alt="图片" src="https://github.com/user-attachments/assets/8e93635d-61b8-4962-910c-add34420fdd7" style="margin:auto;">

 **user表**
 
<img width="820" alt="图片" src="https://github.com/user-attachments/assets/98e64c99-3827-4365-bdbb-c535827bd3b9" style="margin:auto;">

<img width="820" alt="图片" src="https://github.com/user-attachments/assets/4b5ca86c-1f02-4d46-b1f3-9fcd3527d7bc" style="margin:auto;">

 
这些表如果没有正常配置，主要会影响网站的以下功能：
- 热榜
- 搜索
- 登录/注册
- 反馈
- 评论

`配置前端`

其实也不能说是配置吧，主要是有几个点需要提醒一下
1. 由于网站“首页”的导航栏下的“视频”模块的视频体积太大，上传到github比较困难（lfs使用麻烦，且有限额），因此没有上传视频源，读者可在Web文件夹下的video.html文件中自行找到以下相关代码修改封面图片和视频源
2. 网站详情页实际上只做了10个，因此搜索时有些详情页可能打不开。首页点击热榜新闻之后，通过“事件详情”跳转到到详情页也会遇到这个问题，读者可自行查看News-details下面有哪些新闻是做了详情页的。
3. 网站”评论“功能不能发送表情包，不要尝试，真的会崩的哦！
4. 在Vscode中安装“Live Server”插件，找到首页“index.html”,点击右键，如图，选择“open with Live Server”
<img width="744" alt="图片" src="https://github.com/user-attachments/assets/ef1ad613-3097-4c72-a915-7c901d3843cf">



<img width="898" alt="图片" src="https://github.com/user-attachments/assets/0814d874-5a4d-4b8a-aa55-f94de7334288">


<img width="914" alt="图片" src="https://github.com/user-attachments/assets/90bc1bb0-3f84-4433-b3b3-aa39c4ad56b9">



## 结尾
有任何问题，请到我的[博客](https://blog.csdn.net/2302_79169315/article/details/141960542)下面评论留言，我会尽力为大家解答。
由于作者水平有限，因此项目难免会出现一些bug，如果遇到bug导致网站崩溃，请重启项目。敬请谅解，不胜感激！


2024年9月11日补：突然发现一些小问题，在这里记录一下，有时间会优化一下。
1. 使用docker启动这个项目，偶尔遇到系统可能会误判用户已经登录，可能是因为浏览器缓存问题。
2. 使用docker启动项目之后有些数据还没有显示，这时候多刷新几遍，等待数据库初始化完成即可。
3. 热榜图片用到了网络链接，之前失效过一次，用户可以自行在`Hotnews`表里面修改。

