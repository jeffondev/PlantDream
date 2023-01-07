const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "http://10.0.1.7:3000",
      changeOrigin: true, 
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};