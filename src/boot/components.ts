import { boot } from 'quasar/wrappers'
import Connectivity from 'components/station/settings/Connectivity.vue'
import Variables from 'components/station/settings/Variables.vue'
import Security from 'components/station/settings/Security.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.component(<string>Connectivity.name, Connectivity)
  app.component(<string>Variables.name, Variables)
  app.component(<string>Security.name, Security)
})
