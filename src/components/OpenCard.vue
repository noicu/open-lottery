<template>
  <div class="card">
    <div class>
      <div class="card-name">澳洲极速10</div>
      <div>
        <span>期号：</span>
        <span>{{data.open_phase}}</span>
      </div>
      <div>
        开奖时间：
        <span>{{data.open_time}}</span>
      </div>
      <!-- <div>{{data.open_result}}</div> -->
      <n-parts type="pk" :data="iN" size="small"></n-parts>
    </div>
    <div class="nn"></div>
    <div>
      <div class="card-name">
        <span>下期开奖</span>
      </div>
      <div>
        <span>下期期号：</span>
        <span>{{data.next_phase}}</span>
      </div>
      <div>
        <span>下期开奖时间：</span>
        <span>{{data.next_time}}</span>
      </div>
      <div class="open-second">
        <span>距离开奖还有：</span>
        <span>{{secondToDate(data.second).join(':')}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { openInfo, info, historyinfo } from "@/api/open";
import NParts from "@/components/NParts.vue";
import { isAnalyzingTrends } from "@/core/trends.ts";
@Component({
  components: {
    NParts
  }
})
export default class App extends Vue {
  // @Prop() private msg!: string;
  private msg = "hello world";
  private data: info = {
    second: 0
  };
  get iN() {
    // console.log(isLh(this.data.open_result?.split(",")));
    // console.log(isBs(this.data.open_result?.split(",")));
    // console.log(isAnalyzingTrends([this.data.open_result?.split(",")], 1));
    return this.data.open_result?.split(",");
  }
  mounted() {
    this.$on("emit-todo", (n: string) => {
      console.log(n);
    });
    this.emitTodo("world");
    this.getOpenInfo();
    this.$timer.add(this.ti);
  }
  beforeDestroy() {
    this.$timer.clear(this.ti);
  }
  secondToDate(seconds: number) {
    if (seconds) {
      const h = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
      const m = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const s = Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");
      return [h, m, s];
    }
    return ["--", "--", "--"];
  }
  ti() {
    if (this.data.second > 0) {
      this.data.second -= 1;
      return;
    }
    this.getOpenInfo();
    console.log("123123555");
  }
  @Emit()
  emitTodo(n: string) {
    console.log("hello" + n);
  }
  getOpenInfo() {
    openInfo({
      code: "azjs10"
    }).then(data => {
      this.data = data as info;
      console.log(data);
    });
    historyinfo({
      pi: 1,
      ps: 10
    }).then(data => {
      console.log(data);
    });
  }
}
</script>

<style lang="stylus" scoped>
.card
  // box-shadow 1px 1px 1px 1px #eeeeee
  display flex
  .card-name
    font-size 42px
  .nn
    flex 1
  .open-second
    font-size 30px
</style>
