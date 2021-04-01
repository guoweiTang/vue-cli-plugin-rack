module.exports = api => {
  api.render('./template');
  api.extendPackage({
    scripts: {
      'dev': 'cross-env VUE_APP_MOCK=true vue-cli-service serve',
      'prettier': 'prettier -c --write "src/**/*"'
    },
    dependencies: {
      'axios': '^0.21.1',
      'axios-auth-refresh': '^3.1.0',
      'element-plus': '^1.0.2-beta.35',
      'vue-router': '^4.0.5',
      'vuex': '^4.0.0'
    },
    devDependencies: {
      'cross-env': '^7.0.3',
      'eslint-plugin-vue': '^7.0.0-0',
      'prettier': '^2.2.1',
      'husky': '^6.0.0',
      'vue-cli-plugin-mock': '^1.0.3'
    },
    'husky': {
      'hooks': {
        'pre-commit': 'npm run lint'
      }
    },
  })
}