const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://digiprime-veltha-services.red.extrasys.it',
            pathRewrite: {
                "^/api": "/"
            }
        })
    );
};
