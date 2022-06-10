module.exports = {
  pages: {
    index: {
      //的入口
      entry: 'src/main.js',
    
  }
  },

  lintOnSave:false,   //关闭语法检查

 /*  devServer: {
      //开启代理服务器（方式一）
       
        // 缺点：
        //   1.不能配置多个代理
        //   2.不能灵活的控制走还是不走代理（如当请求的资源8080本身就有，代理服务器就不会把请求转发给5000）
      
      proxy: 'http://localhost:5000'

  } */

//开启代理服务器（方式二）
devServer: {
    proxy: {
      '/zhang': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/zhang':''},
        ws: true, // 用于支持websocket
        changeOrigin: true    //用于控制请求头中的host值

      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true, // 用于支持websocket
        changeOrigin: true    //用于控制请求头中的host值
        
      },
    }
  }
}