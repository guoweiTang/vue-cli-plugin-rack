module.exports = (api) => {
  api.render('./template');
  api.extendPackage({
    scripts: {
      'mock': 'vue-cli-service serve --mode mock'
    },
    dependencies: {
      'axios': '^0.21.4',
      'axios-auth-refresh': '^3.2.1',
      'axios-retry': '^3.1.9',
      'element-plus': '^1.1.0-beta.17',
      'lodash': '^4.17.21',
      '@types/lodash': '^4.14.174',
      'vuex-persistedstate': '^4.1.0'
    },
  })
}