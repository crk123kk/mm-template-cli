
const fs = require('fs')


// 校验是否有同名文件夹
const checkPath = (path) => {
    return fs.existsSync(path)
}

const download = require('download-git-repo')
const ora = require('ora')


// 根据传入的参数 下载对应的模版
const downloadTemp = (branch, name) => {
    return new Promise((resolve, reject) => {
        // 下载的过程中，显示一个 loading 效果
        const spinner = ora('正在下载模版...')
        // 开始 loading
        spinner.start()
        // 去对应的仓库下载模版
        // direct 代表下载的是一个仓库(后面跟git地址) branch 代表分支  clone 代表是否克隆
        download(`direct:https://github.com/crk123kk/vue-vite-template.git#${branch}`, name, { clone: true }, (err) => {
            if (err) {
                reject(err)
            }
            resolve()
            spinner.succeed('模版下载成功')

        })
    })
}

module.exports = {
    checkPath,
    downloadTemp
}