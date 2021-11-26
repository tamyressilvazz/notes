import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import Vue from 'vue'
import { VueI18n } from 'vue-i18n'


var lang = localStorage.getItem('lang');
lang = lang ? lang : 'pt-BR';


const i18n = createI18n({
    locale: 'pt-BR',
    fallbackLocale: 'pt-BR',
    messages
})

export default boot(({ app }) => {
    // Set i18n instance on app
    app.use(i18n)
})

export { i18n }