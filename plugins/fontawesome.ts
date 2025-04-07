// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faCircleInfo, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBilibili, faTelegram, faWeixin, faAlipay } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false // This is important, we are going to let Nuxt worry about the CSS
config.autoReplaceSvg = false // https://docs.fontawesome.com/v5/apis/javascript/configuration#autoreplacesvg

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faEnvelope, faCircleInfo, faMugSaucer, faGithub, faBilibili, faTelegram, faWeixin, faAlipay)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
