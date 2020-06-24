<template>
  <div id="app">
    <div class="head">
      <div class="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Prop() private msg2!: string;
  private msg = "hello world";
}
</script>

<style lang="stylus" scoped>
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  // color #2c3e50
  // margin-top 60px
</style>

<style lang="stylus">
@import 'style/index.styl'
</style>
