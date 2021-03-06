<p align="center">
  <a href="https://rxdrag.com/" target="blank"><img src="https://rxdrag.com/img/logo.png" width="200" alt="Nest Logo" /></a>
</p>

 
  <p align="center"><a href="https://rxdrag.com" target="_blank">Entify</a> 是一个低代码后端服务，基于业务模型生成后端，提供通用GraphQL接口，本项目是前端部分</p>
    <p align="center">


演示地址：https://entify-client.vercel.app/

## 安装服务端
```console

git clone https://github.com/rxdrag/entify.git

cd entify

go get

go run main.go
```
显示提示信息：Running a GraphQL API server at http://localhost:8080/graphql，则说明已经成功运行了。

## 安装运行客户端

```console
git clone https://github.com/rxdrag/entify-client.git

cd entify-client

npm install

npm run start
```
命令执行成功后，在浏览器输入：`http://localhost:3000/install`，显示只有两步的安装向导。在第一页输入MySql用到的数据库信息

![第一步](https://rxdrag.com/img/tutorial/install1.jpg)

在第二页输入超级管理员账号账号密码。勾选“安装演示账号”选项，会添加一个用户名密码为demo/demo的演示账号，演示账号只有读权限没有写权限

![第二步](https://rxdrag.com/img/tutorial/install2.jpg)

这步能够成功执行，那么rxModels就安装成功了，安装完成后会自动跳转到登录页面。

安装过程中有任何问题欢迎发issue或者联系作者。

## 文档

[rxModels文档](https://rxdrag.com/docs/rx-models/install)

## Stay in touch

- Author - 悠闲的水
- Website - [https://rxdrag.com](https://rxdrag.com/)

## License

  Entify is MIT licensed