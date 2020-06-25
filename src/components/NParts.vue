<template>
  <div class="parts">
    <template v-for="(n, i) in isDate">
      <div
        v-if="type != 'ks'"
        :key="i"
        :class="{
          ['shape-'+type]:true,
          parts:true,
          isNumber:true,
          ['parts-'+size]:true
        }"
        :style="nstyle(n)"
      >
        <span>{{ Number(n) }}</span>
        <span v-if="i != isDate.length-1" style="opacity: 0;position: absolute;">,</span>
      </div>
      <div
        v-else
        :key="i"
        :style="nstyle(n)"
        :class="{
          parts:true,
          dices:true,
          ['dices-dice-'+n]:true,
          ['parts-'+size]:true
        }"
      >
        <!-- <img :src="dices[n - 1]" :alt="n" style="width: 100%;" /> -->
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: [String, Number, Array],
    type: [String, Number],
    size: {
      type: String,
      default: "normal"
    }
  },
  data: () => ({
    colors: [
      "#e3d42f",
      "#0b7aaf",
      "#3f3f3f",
      "#fa921a",
      "#0aefa3",
      "#1829bf",
      "#8c8d8c",
      "#ee3c44",
      "#9b0100",
      "#028201"
    ]
  }),
  computed: {
    isDate() {
      return this.data;
    }
  },
  methods: {
    nstyle(n) {
      switch (this.type) {
        case "ssc":
          return {
            background: "#ff4081",
            color: "#fff"
          };
        case "pk":
          return {
            background: this.colors[Number(n) - 1]
          };
        case "pc":
          return {
            background: "#ff5252"
          };
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.parts
  display inline-block
.shape-ssc
  border-radius 50%
.shape-pk
  border-radius 10%
  font-weight 800
  text-shadow 0px 0px 5px #000
  border 1px solid rgba(255, 255, 255, 0.3)
.shape-pc
  border-radius 50%
.parts-x-large
  width 52px
  height 52px
  font-size 2rem
  line-height 52px
.parts-large
  width 44px
  height 44px
  font-size 1.5rem
  line-height 44px
.parts-normal
  width 36px
  height 36px
  font-size 1.25rem
  line-height 36px
.parts-small
  width 28px
  height 28px
  font-size 1rem
  line-height 28px
.parts-x-small
  width 20px
  height 20px
  font-size 0.625rem
  line-height 20px
.isNumber
  text-align center
  margin 1px
  color #fff
  vertical-align middle
.dices
  background url('dices.png') no-repeat
  background-size 600% 100%
.dices-dice-1
  background-position 0px 0px
.dices-dice-2
  background-position 20% 0px
.dices-dice-3
  background-position 40% 0px
.dices-dice-4
  background-position 60% 0px
.dices-dice-5
  background-position 80% 0px
.dices-dice-6
  background-position 100% 0px
</style>