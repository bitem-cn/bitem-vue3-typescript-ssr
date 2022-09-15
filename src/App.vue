<script lang="ts">
/**
 * Author:刘敏
 * Date:2022-09-15
 * Description:应用主页面
 */
import { Options, Vue } from 'vue-property-decorator'
@Options({
  components: {
 
  }
})
export default class App extends Vue {

}
</script>
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
