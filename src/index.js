import Button from './button'
import ButtonGroup from './button-group'
import './button.less'

Button.install = function (Vue, options = {}) {
  Vue.component(options.name || Button.name, Button)
  Vue.component((options.name || Button.name) + 'Group', ButtonGroup)
}

export {
  Button as default,
  Button,
  ButtonGroup
}
