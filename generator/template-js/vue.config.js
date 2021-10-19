module.exports = {
  chainWebpack: config => {
    // 分包
    if (process.env.NODE_ENV !== 'development') {
      config.optimization.splitChunks({
        cacheGroups: {
          element: {
            test: /[\\/]node_modules[\\/](element-plus)[\\/]/,
            name: 'element',
            chunks: 'all',
            priority: 20
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          }
        },
      });
    }
  }
}
