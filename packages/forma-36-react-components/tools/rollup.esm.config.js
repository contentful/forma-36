import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';

export default {
  input: path.resolve(__dirname, '../esm/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist', 'esm', 'index.js'),
    format: 'es',
  },
  external: ['react', 'react-dom'],
  plugins: [resolve(), commonjs()],
};
