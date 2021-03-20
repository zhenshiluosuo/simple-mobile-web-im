
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://qt.gtimg.cn/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    )
;
}
