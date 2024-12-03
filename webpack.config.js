import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './src/script.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'script.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile ES6
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
        patterns: [
          { from: 'src/*.html', to: '[name][ext]' }, // Copy all .html files
          { from: 'src/*.md', to: '[name][ext]' },   // Copy all .md files
        ],
      }),
  ],
  mode: 'development', // Set the mode to development or production
};