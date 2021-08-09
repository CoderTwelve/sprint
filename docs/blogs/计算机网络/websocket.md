websocket是一种在单个TCP连接上进行全双工通信的协议。允许浏览器和服务器相互推送消息，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

特点
1. 建立在TCP协议之上，服务端的实现比较容易
2. 和HTTP协议有很好的兼容性，默认端口也是80和443
3. 数据格式比较轻量、性能开销小
4. 没有同源限制

websocket和http2的服务器推送的区别：
1. websocket是基于http1.1协议
2. http2的服务器推送虽然支持服务器推送资源给客户端，但是应用程序是不能感知到的，这个功能主要是让浏览器提前缓存静态资源。
3. websocket有api来让应用程序进行操作


```javascript
const ws = new WebSocket('ws://localhost:8080')

// 属性
switch (ws.readyState) {
  case WebSocket.CONNECTING:
    // 0 表示正在连接
    break;
  case WebSocket.OPEN:
    // 1 表示连接成功，可以进行通信
    break;
  case WebSocket.CLOSING:
    // 2 表示连接正在关闭
    break;
  case WebSocket.CLOSED:
    // 3 表示连接已经关闭或打开连接失败
    break;
  default:
    // this never happens
    break;
}

wx.onopen = function () {} // 指定连接成功后的回调函数
wx.onclose = function () {} 
wx.addEventListener('close', function () {})

wx.onmessage = function () {} // 收到服务器数据后的回调函数

wx.send() // 向服务器发送数据
wx.onerror = function () {}
```