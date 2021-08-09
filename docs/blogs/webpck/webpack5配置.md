webpack5提供了内置的静态资源构建能力，不需要安装额外的loader。在v5之前，我们是使用raw-loader、url-loader和file-loader来完成这些工作。
```javascript
{
  test: /\.(png|jpg|svg|gif)$/,
  type: 'asset/resource',
  generator: {
      // [ext]前面自带"."
      filename: 'assets/[hash:8].[name][ext]',
  },
```
如上例子，所有图片都会放在assets文件夹下。
type的值
1. asset/resource  接替file-loader
2. asset/inline 接替url-loader
3. asset/source 接替raw-loader