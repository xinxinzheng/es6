//路径相关模块
const path = require('path');

//2.path.basename() 方法返回一个 path 的最后一部分

let filename = path.basename("C:\\Users\\zhengxinxin.INTRA\\Desktop\\bm_web\\public\\statics\\module\\echarts\\echarts.min.js");
console.log(filename);

//1.Windows 与 POSIX  node 运行环境是否为Windows , 不同的环境方法返回值不同
// 1.1 path.win32 属性提供了 path 方法针对 Windows 的实现。
let filename1 = path.win32.basename("C:\\Users\\zhengxinxin.INTRA\\Desktop\\bm_web\\public\\statics\\module\\echarts\\echarts.min.js");
console.log(filename1);
// 1.2 path.posix 属性提供了 path 方法针对 posix 的实现。
let filename2 = path.posix.basename('/tmp/myfile.html');
console.log(filename2);

//3.path.delimiter 提供平台特定的路径分隔符

console.log(path.delimiter);

//4.path.dirname(path) 方法返回一个 path 的目录名，类似于 Unix 中的 dirname 命令

let dirname = path.dirname('/foo/bar/baz/asdf/quux');
console.log(dirname);

//5.path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束

let extname = path.extname('index.html');
console.log(extname);

//6.path.format() 方法会从一个对象返回一个路径字符串
let filepath = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(filepath);

//7.path.isAbsolute() 方法会判定 path 是否为一个绝对路径。
let pathAbsolute = path.isAbsolute("C:\\Users\\zhengxinxin.INTRA\\Desktop\\bm_web\\public\\statics\\module\\echarts\\echarts.min.js");
console.log(pathAbsolute);

//8.path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
let path1 = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(path1);

//9.path.normalize() 方法会规范化给定的 path，并解析 '..' 和 '.' 片段。
let path2 = path.normalize('C:\\temp\\\\foo\\bar\\..\\');
console.log(path2);

//10.path.parse() 方法返回一个对象，对象的属性表示 path 的元素。
let path3 = path.parse('/home/user/dir/file.txt');
console.log(path3);

//11.path.relative(from, to) 方法返回从 from 到 to 的相对路径（基于当前工作目录）。 如果 from 和 to 各自解析到同一路径（调用 path.resolve()），则返回一个长度为零的字符串。
let path4 = path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
console.log(path4);

//12.path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
let path5 = path.resolve('/foo/bar', './baz');
console.log(path5);

//13.path.sep 提供了平台特定的路径片段分隔符：
console.log(path.sep);