<template>
  <button class="vc-button"
    :disabled="disabled"
    :class="[
      type && 'vc-button-type--' + type,
      size && 'vc-button-size--' + size,
      {
        'vc-button--plain': plain,
        'vc-button--round': round,
        'is-loading': loading
      }
    ]"
    :type="nativeType"
    @click="$emit('click')"
    >
      <span class="vc-button-icon" v-if="loading">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="loading-icon loading-wipe">
          <g>
            <circle cx="25" cy="25" r="20" class="loading-icon-bg-path"></circle>
            <circle cx="25" cy="25" r="20" class="loading-icon-active-path"></circle>
          </g>
        </svg>
      </span>
      <span><slot></slot></span>
    </button>
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
    loading: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    } // 原生type button / submit / reset
  }
}
</script>
