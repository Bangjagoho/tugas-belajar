const path = require('path');

module.exports = {
  mode: 'development', // Ubah ke 'production' saat siap untuk produksi
  entry: {
    app: './assets/js/main.js', // Entry point untuk aplikasi
  },
  output: {
    filename: 'bundle.js', // Nama file output yang dihasilkan
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Bersihkan output directory sebelum build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Menggunakan babel-loader untuk file .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Menggunakan style-loader dan css-loader untuk file .css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map', // Menyediakan source map untuk debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory untuk menyajikan static files
    },
    compress: true,
    port: 9000, // Port untuk dev server
  },
};
