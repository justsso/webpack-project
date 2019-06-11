过程：

1. 安装webpack react react-dom

2. `cnpm install react-router-dom -S`

3. `cnpm install @babel/preset-react -D`


@babel/core-babel核心模块    
@babel/preset-env-编译ES6等
@babel/core-babel核心模块    
@babel/preset-env-编译ES6等 @babel/preset-react-转换JSX

4. `webpack`是需要传入一个配置对象，那`webpack`的配置方法有以下几种：

    1. 单文件配置，导出单个配置对象
    2. 导出为函数， 
    ```
    module.exports = function(env, argv) {
        return {
        }
    }
    ```
    该函数在调用时，可传入两个参数：
    
    环境对象(environment)作为第一个参数。有关语法示例，请查看CLI 文档的环境选项。 
    一个选项 map 对象（argv）作为第二个参数。这个对象描述了传递给 webpack 的选项，并且具有 output-filename 和 optimize-minimize 等 key。
    3. 多文件配置

配置文件，还可以接受以下语言，`typescript`,`CoffeeScript` `Babel and JSX`,使用这几种语言，需要先安装对应的依赖。

本项目采用`JavaScript`语言，导出多个配置对象方式。

5. `clean-webpack-plugin` 用来清除/build 文件夹下面上次生成的文件
6. `html-webpack-plugin`  将打包后的js、css 文件自动插入到html中，并且可以指定html文件的模版

7. 开发和生产环境的构建配置差异

开发环境使用的配置：
`webpack-dev-server`
在 webpack 的配置中，可以通过 devServer 字段来配置 webpack-dev-server，如端口设置、启动 gzip 压缩等，这里简单讲解几个常用的配置。
webpack-dev-server 的 proxy 功能是使用 http-proxy-middleware 来实现的，如果需要更详细的 proxy 配置，可以参考官方文档 http-proxy-middleware。

