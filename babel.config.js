module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 14 }, modules: false }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@vanilla-extract/babel-plugin'],
};
