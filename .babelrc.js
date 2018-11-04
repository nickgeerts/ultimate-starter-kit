const config = {
  presets: [
    '@babel/typescript',
    '@babel/react',
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        },
        modules: 'commonjs',
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/syntax-dynamic-import',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          client: './client',
          shared: './shared',
          server: './server'
        }
      }
    ],
    '@loadable/babel-plugin'
  ]
}

if (process.env.BABEL_ENV === 'server') {
  config.plugins.push('babel-plugin-dynamic-import-node')
}

module.exports = config
