<template>
  <div id="app">
    <div class="demo-block">
      <vc-button @click="handleClick" :loading="loading">Default</vc-button>
      <vc-button type="info">Info</vc-button>
      <vc-button type="primary">Primary</vc-button>
      <vc-button type="warning">Warning</vc-button>
      <vc-button type="danger">Danger</vc-button>
      <vc-button type="success">Success</vc-button>
      <vc-button type="text">Text</vc-button>
    </div>

    <div class="demo-block">
      <vc-button size="large">Large</vc-button>
      <vc-button >Default</vc-button>
      <vc-button size="medium">Medium</vc-button>
      <vc-button size="small">Small</vc-button>
      <vc-button size="mini">mini</vc-button>
    </div>

    <div class="demo-block">
      <vc-button plain round>Default</vc-button>
      <vc-button plain round type="info">Info</vc-button>
      <vc-button plain round type="primary">Primary</vc-button>
      <vc-button plain round type="warning">Warning</vc-button>
      <vc-button plain round type="danger">Danger</vc-button>
      <vc-button plain round type="success">Success</vc-button>
    </div>

    <div class="demo-block">
      <vc-button round>Default</vc-button>
      <vc-button round type="info">Info</vc-button>
      <vc-button round type="primary">Primary</vc-button>
      <vc-button round type="warning">Warning</vc-button>
      <vc-button round type="danger">Danger</vc-button>
      <vc-button round type="success">Success</vc-button>
    </div>

    <div class="demo-block">
      <vc-button disabled>Default</vc-button>
      <vc-button disabled type="info">Info</vc-button>
      <vc-button disabled type="primary">Primary</vc-button>
      <vc-button disabled type="warning">Warning</vc-button>
      <vc-button disabled type="danger">Danger</vc-button>
      <vc-button disabled type="success">Success</vc-button>
    </div>
   
  </div>
</template>

<script>
import VcButton from './button'

export default {
  name: 'app',
  components: {
    VcButton
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleClick () {
      this.loading = true
      console.log(arguments)

      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
<style>
  .demo-block {
    padding: 15px;
  }
</style>
