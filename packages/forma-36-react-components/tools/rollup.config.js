import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';
import replace from 'rollup-plugin-replace';
import path from 'path';

const config = {
  input: path.resolve(__dirname, '../dist/index.js'),
  output: [
    {
      file: path.resolve(__dirname, '../dist', 'index.umd.js'),
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      format: 'umd',
      name: 'UIComponentLibrary',
      exports: 'named',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    localResolve(),
    resolve(),
    commonjs(),
  ],
};

export default config;
