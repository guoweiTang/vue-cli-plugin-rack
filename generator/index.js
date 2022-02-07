module.exports = (api, { typescript }) => {
  api.render('./template');
  api.extendPackage({
    dependencies: {
      'axios': '^0.23.0',
      'axios-auth-refresh': '^3.2.1',
      'axios-retry': '^3.1.9',
      "vue-router": "^4.0.0-0",
      "vuex": "^4.0.0-0",
      'vuex-persistedstate': '^4.1.0',
      'element-plus': '^2.0.0',
      '@element-plus/icons-vue': '^0.2.6',
    },
    devDependencies: {
      'sass': '^1.32.11',
      'sass-loader': '^10',
      'vue-cli-plugin-mock': '^1.0.3'
    },
  });
  if (typescript) {
    api.render('./template-ts');
    api.render((files) => delete files['src/main.js'])
    api.extendPackage({
      scripts: {
        'serve:mock': 'vue-cli-service serve --mode mock',
      },
      devDependencies: {
        "@typescript-eslint/eslint-plugin": "^4.18.0",
        "@typescript-eslint/parser": "^4.18.0",
        "@vue/cli-plugin-typescript": "~4.5.0",
        "@vue/eslint-config-airbnb": "^5.0.2",
        "@vue/eslint-config-typescript": "^7.0.0",
        "eslint-plugin-import": "^2.20.2",
        "typescript": "~4.1.5",
      },
      eslintConfig: undefined,
    })
  } else {
    api.render('./template-js');
    api.extendPackage({
      scripts: {
        'initPrecommit': 'husky install && npx husky add .husky/pre-commit "npm run lint"',
        'serve:mock': 'vue-cli-service serve --mode mock',
        'lint': 'vue-cli-service lint && npm run lint:prettier',
        'lint:prettier': 'prettier --check "src/**/*" --end-of-line auto',
        'prettier': 'prettier -c --write "src/**/*"'
      },
      devDependencies: {
        'husky': '^7.0.1',
        'prettier': '^2.2.1',
      },
      eslintConfig: {
        'globals': {
          'defineProps': 'readonly',
          'defineEmits': 'readonly',
          'defineExpose': 'readonly'
        },
      },
    })
  }
}