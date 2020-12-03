import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import path from 'path';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];

function getConfig(environment) {
  return {
    input: path.resolve(__dirname, '../dist/index.js'),
    output: [
      {
        file: path.resolve(
          __dirname,
          '../dist',
          'umd',
          `forma-36-react-components.${environment}.min.js`,
        ),
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        format: 'umd',
        name: 'Forma36',
        exports: 'named',
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      environment === 'production'
        ? babel({
            babelrc: false,
            plugins: [
              require.resolve('babel-plugin-transform-react-remove-prop-types'),
            ],
          })
        : null,
      replace({
        'process.env.NODE_ENV': JSON.stringify(environment),
      }),
      localResolve(),
      resolve({
        extensions,
      }),
      commonjs(),
      terser(),
    ].filter((_) => _),
  };
}

const config = [getConfig('development'), getConfig('production')];

export default config;
