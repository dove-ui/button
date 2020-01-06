import Vue from 'vue'
export type ButtonType = 'default' | 'info' | 'primary' | 'warning' | 'danger' | 'success' | 'text'
export type ButtonSize = 'large' | 'medium' | 'samll' | 'mini'
export type ButtonNativeType = 'button' | 'submit'

export declare class ButtonGroup {}

export declare class Button {
  static install (vue: typeof Vue, options?: Object): void
  type: ButtonType
  size?: ButtonSize
  plain: Boolean
  round: Boolean
  loading: Boolean
  disabled: Boolean
  block: Boolean
  nativeType: ButtonNativeType
}

export default Button
