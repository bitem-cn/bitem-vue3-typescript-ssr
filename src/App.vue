<script lang="ts">
import { Options, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  onHelloWorldOkay(){
    console.log("App.vue => onHelloWorldOkay")
  }
}
</script>
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" @okay="onHelloWorldOkay" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
