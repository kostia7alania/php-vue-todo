const isDev = process.env.NODE_ENV == "development"

module.exports = {
    transpileDependencies: [],
    publicPath: isDev ? './' : '././dist',
    indexPath: './index.php',
    assetsDir: './',   // "./", //По умолчанию: '' - Каталог (относительно outputDir) для хранения сгенерированных статических ресурсов (js, css, img, fonts).
    outputDir: 'dist',
    devServer: {
      historyApiFallback: true, // noInfo: true,
      overlay: true,//вывод ошибок на экран
      open: false,
      hot: true,
      proxy: {
        '/api/*': {//все запросы))
          target: 'http://localhost:3000/mvc/',// Это скажет серверу разработки проксировать любые неизвестные запросы (запросы, которые не соответствуют статическому файлу) на адрес http://localhost:4000.
          secure: false,
          changeOrigin: true, 
          pathRewrite: { '^/api': '' }
        }
      }
    }
  }
  