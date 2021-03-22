const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy.createProxyMiddleware('/gtimg', {
            target: 'http://qt.gtimg.cn/',
            changeOrigin: true
        })
    )
}
