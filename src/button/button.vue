<template>
  <button class="vc-button"
    :disabled="disabled"
    :class="[
      type && 'vc-button-type--' + type,
      size && 'vc-button-size--' + size,
      {
        'vc-button--plain': plain,
        'vc-button--round': round
      }
    ]"
    :type="nativeType"
    @click="$emit('click')"
    ><span><slot></slot></span></button>
</template>

<script>
export default {
  name: 'VcButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }, // default，info，primary，warning，danger，success, text
    size: String, // max, large, 默认，medium，samll, mini
    plain: Boolean,
    round: Boolean,
    disabled: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    } // 原生type button / submit / reset
  }
}
</script>
