# mm-cli

    一个简单的自定义脚手架工具，用于快速创建项目

        支持 vite 搭建的 vue-js 、 vue-ts 模版项目

# 使用

    npm i mm-template-cli

    mm-cli -v

    mm-cli create <project-name>

# commonjs

    使用 commonjs 模式

    commonjs 模式和 esm 模式的区别：

        inquire ：

            const inquirer = require('inquirer').default;

            才能直接 inquirer.prompt()

        ora
            ora 从 v6.0.0 开始切换到了 ES 模块（ESM），因此在 v8.1.0 及之后的版本中，ora 不再支持直接通过 CommonJS 的 require() 语法引入。换句话说，ora 8.1.0 及更高版本不再包含 CommonJS 版本。

            解决方法：

                "ora": "^5.4.0"

                const ora = require('ora')
