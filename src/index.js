#!/usr/bin/env node
// 当在控制台执行 cm-cli 的时候，控制系统会用node执行下方的命令（切换 node环境）
console.log('crk cli 启动成功！');

// 拿到用户输入的参数 并设置版本号
const { program } = require('commander');
const fs = require('fs')

const path = require('path')

const json = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')
const pkg = JSON.parse(json)

// 配置版本号
program.version(pkg.version, '-v, --version')


const inquirer = require('inquirer').default

const { checkPath, downloadTemp } = require('./utils.js')
// 配置命令
program.command('create <projectName>')
    // 别名
    .alias('c')
    // 描述
    .description('创建一个项目')
    // 回调函数，拿到用户输入的参数之后执行的函数
    .action((proName) => {
        inquirer.prompt([{
            type: 'input',// 输入框  其它输入：confirm 确认框 list 选择框 checkbox 多选框
            name: 'name',// 返回值的 key
            message: '请输入项目名称',// 描述
            default: proName,// 默认值
        },
        {
            type: 'confirm',
            name: 'isTs', // 返回值的key
            message: '是否使用TypeScript',
            default: false
        },
        ]).then(res => {
            // res { name: 'crk', isTs: true }
            if (checkPath(res.name)) {
                console.log('项目已存在');
                return
            }
            if (res.isTs) {
                downloadTemp('TS', res.name)
            } else {
                downloadTemp('JS', res.name)
            }
            console.log('res :>> ', res);
        })
    })


program.parse(process.argv)