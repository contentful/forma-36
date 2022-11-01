module.exports = [
  {
    ignore: ['react', 'react-dom'],
    limit: '3.2 s',
    name: 'CommonJS',
    path: './packages/forma-36-react-components/dist/index.js',
  },
  {
    ignore: ['react', 'react-dom'],
    import: '*',
    limit: '3.2 s',
    name: 'Module',
    path: './packages/forma-36-react-components/dist/index.module.js',
  },
];
