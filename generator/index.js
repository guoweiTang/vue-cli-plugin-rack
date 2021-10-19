module.exports = (api, { typescript }) => {
  if (typescript) {
    api.render('./template');
    api.extendPackage({
      scripts: {
        'serve:mock': 'vue-cli-service serve --mode mock',
        'build:dev': 'vue-cli-service build --mode development'
      },
      dependencies: {
        'axios': '^0.21.4',
        'axios-auth-refresh': '^3.2.1',
        'axios-retry': '^3.1.9',
        'element-plus': '1.1.0-beta.18',
        'lodash': '^4.17.21',
        '@types/lodash': '^4.14.174',
        "vue-class-component": "^8.0.0-0",
        "vue-router": "^4.0.0-0",
        "vuex": "^4.0.0-0",
        'vuex-persistedstate': '^4.1.0',
        'vue-cli-plugin-mock': '^1.0.3',
      },
      devDependencies: {
        "@typescript-eslint/eslint-plugin": "^4.18.0",
        "@typescript-eslint/parser": "^4.18.0",
        "@vue/cli-plugin-router": "~4.5.0",
        "@vue/cli-plugin-typescript": "~4.5.0",
        "@vue/cli-plugin-vuex": "~4.5.0",
        "@vue/eslint-config-airbnb": "^5.0.2",
        "@vue/eslint-config-typescript": "^7.0.0",
        "eslint-plugin-import": "^2.20.2",
        "sass": "^1.26.5",
        "sass-loader": "^8.0.2",
        "typescript": "~4.1.5",
        "vue-cli-plugin-mock": "^1.0.3",
      },
      eslintConfig: false,
      browserslist: false,
    })
  } else {
    api.render('./template-js');
    api.extendPackage({
      scripts: {
        'serve:mock': 'vue-cli-service serve --mode mock',
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
        'husky': '^7.0.1',
        'prettier': '^2.2.1',
        'sass': '^1.32.11',
        'sass-loader': '^10',
        'vue-cli-plugin-mock': '^1.0.3'
      },
    })
  }
}