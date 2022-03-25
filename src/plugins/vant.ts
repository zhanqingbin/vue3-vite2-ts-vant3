import { Button, Field } from 'vant'
import { App } from 'vue'
export default {
  install (app:App) {
    app.component(Button.name, Button)
    app.component(Field.name, Field)
  }
}
