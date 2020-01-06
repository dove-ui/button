<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="doc-container">
      <doc-component :docs="docs" value="readme" />
    </div>
  </div>
</template>

<script>
import ReadmeDoc from '../README.md'
import DocIndex from './docs/index'
import DocComponent from './components/doc-component'

export default {
  name: 'app',
  components: {
    DocComponent
  },
  data () {
    return {
      tab: 'readme',
      docs: [
        { name: 'readme', label: 'README', component: ReadmeDoc },
        { name: 'doc', label: 'Document', component: DocIndex }
      ]
    }
  }
}
</script>
