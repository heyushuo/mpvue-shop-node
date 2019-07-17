const _ = require('lodash')
const fs = require('fs')
const path = require('path')
/**
 * 映射 d 文件夹下的文件为模块
 */
const mapDir = d => {
  const tree = {}
  console.log(fs.readdirSync(d)); //[ 'address','brand', 'cart', 'category', 'collect', 'comment', 'feedback', 'goods', 'home', 'index.js', 'login.js', 'message.js', 'order', 'search', 'topic', 'tunnel.js', 'upload.js', 'user.js']
  // 获得当前文件夹下的所有的文件夹和文件 分成两组,文件夹一组,文件一组 [['address','brand', 'cart'],[index.js,login.js]]
  const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())
  // 映射文件夹
  dirs.forEach(dir => {
    tree[dir] = mapDir(path.join(d, dir))
  })
  // 映射文件
  files.forEach(file => {
    //获取后缀名字
    if (path.extname(file) === '.js') {
      tree[path.basename(file, '.js')] = require(path.join(d, file))
    }
  })
  return tree
}
// {
//     address:{
//         index:{
//         }
//     },
//     login:{
//     }
// }
// 默认导出当前文件夹下的映射
module.exports = mapDir(path.join(__dirname))