过程：

1. 安装webpack react react-dom

2. `cnpm install react-router-dom -S`

3.

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


4多文件配置
4-3 导出函数配置 

编写配置文件，还可以接受以下语言，`typescript`,`CoffeeScript` `Babel and JSX`,使用这几种语言，需要先安装对应的依赖。
这并不包含在本项目中。

本项目采用`JavaScript`语言，导出多个配置对象方式。

4. 多文件配置
