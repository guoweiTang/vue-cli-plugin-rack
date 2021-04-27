const localeList = require('./lang.js')

module.exports = [
  {
    type: 'list',
    name: 'lang',
    message: 'Choose the locale you want to load, the default locale is English (en)',
    choices: localeList.map(locale => ({
      name: locale,
      value: locale
    })),
    default: 'en'
  },
  {
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you want to overwrite the SCSS variables of Element Plus?',
    default: false,
  },
]
