<template>
  <div>
    <vc-button @click="handleClick" :loading="loading">Loading</vc-button>
  </div>
</template>
<script>

export default {
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
