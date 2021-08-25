module.exports = (api, opts) => {
  api.render('./template');
  if (opts.customTheme) {
    api.render({
      './src/element-variables.scss': './element-variables.scss'
    })
  }
  api.extendPackage({
    scripts: {
      'prepare': 'husky install && npx husky add .husky/pre-commit "npm run lint"',
      'mock': 'vue-cli-service serve --mode mock',
      'lint': 'vue-cli-service lint && npm run lint:prettier',
      'lint:prettier': 'prettier --check "src/**/*" --end-of-line auto',
      'prettier': 'prettier -c --write "src/**/*"'
    },
    dependencies: {
      'axios': '^0.21.1',
      'axios-auth-refresh': '^3.1.0',
      'axios-retry': '^3.1.9',
      'element-plus': '^1.0.2-beta.35',
      'vue-router': '^4.0.5',
      'vuex': '^4.0.0',
      'vuex-persistedstate': '^4.0.0'
  },
    devDependencies: {
      'cross-env': '^7.0.3',
      'husky': '^7.0.1',
      'prettier': '^2.2.1',
      'sass': '^1.32.11',
      'sass-loader': '^10',
      'vue-cli-plugin-mock': '^1.0.3'
    },
  })
}