<template>
  <div>
    <vc-button @click="handleClick" :loading="loading">Loading</vc-button>
    <vc-button @click="handleClick2" :loading="loading2" :disabled="loading2">Loading</vc-button>
  </div>
</template>
<script>

export default {
  data () {
    return {
      loading: false,
      loading2: false
    }
  },
  methods: {
    handleClick () {
      this.loading = true
      console.log(arguments)

      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    handleClick2 () {
      this.loading2 = true
      console.log(arguments)

      setTimeout(() => {
        this.loading2 = false
      }, 2000)
    }
  }
}
</script>
