<template>
  <div class="head2">
    <div class="card">
      <div class>
        <div class="card-name">TattsLotto 10</div>
        <div style="margin: 10px;">
          <span>Draw No.</span>
          <span>{{ data.open_phase }}</span>
        </div>
        <div style="margin: 10px;">
          Open Time:
          <span>{{ data.open_time }}</span>
        </div>
        <!-- <div>Winning Numbers</div> -->
        <!-- <div>{{data.open_result}}</div> -->
        <n-parts style="margin: 10px;" type="pk" :data="iN" size="small"></n-parts>
      </div>
      <div class="nn">
        <span>{{ secondToDate(data.second).join(":") }}</span>
      </div>
      <!-- <div>
        <div class="card-name">
          <span>The Next</span>
        </div>
        <div>
          <span>Draw No.</span>
          <span>{{ data.next_phase }}</span>
        </div>
        <div>
          <span>Open Time:</span>
          <span>{{ data.next_time }}</span>
        </div>
        <div class="open-second">
          <span>Countdown：</span>
        </div>
      </div> -->
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
  tin = 0;
  private msg = "hello world";
  private data: info = {
    second: 0
  };
  get iN() {
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
      return [m, s];
    }
    return ["--", "--"];
  }
  ti() {
    if (this.data.second > 0) {
      this.data.second -= 1;
      return;
    }
    window.location.reload();
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
  width 1200px
  margin 0 auto
  margin-top 53px
  color #fff
  // line-height 45px
  // box-shadow 1px 1px 1px 1px #eeeeee
  display flex
  .card-name
    font-size 75px
  .nn
    flex 1
    line-height: 270px;
    font-size 200px
    text-align center
  .open-second
    font-size 30px
</style>
