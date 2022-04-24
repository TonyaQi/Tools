css link @import
link是html的方式， import是css提供的
link会一起下载， 而import等到页面下载完才开始下载
@import 可以把多个样式表导入到一个样式表中,从而在页面里面只需要导入一个样式表即可


Tcp慢启动
一点一点增大通路


defer async
async 异步加载但是加载完马上执行
defer 加载完在script执行问 contentloader之前执行

<!DOCTYPE>声明不是HTML标签；他的作用是告诉浏览器的解析器用什么文档类型规范来解析这个文档。

浏览器内多个标签页之间的通信

postmessage; window.open
localstorage;
SharedWorker


说说你对 AMD 和 Commonjs 的理解
AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。