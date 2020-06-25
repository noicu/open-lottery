<template>
  <div class="home">
    <open-card></open-card>
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="howlongago(0)">今天</vxe-button>
        <vxe-button @click="howlongago(1)">昨天</vxe-button>
        <vxe-button @click="howlongago(2)">前天</vxe-button>
      </template>
      <template v-slot:tools>
        <!-- <vxe-input
          v-model="date"
          placeholder="日期类型"
          type="date"
          :disabledMethod="disabledDateMethod"
          transfer
        ></vxe-input> -->
      </template>
    </vxe-toolbar>
    <vxe-table
      border
      show-header-overflow
      show-overflow
      highlight-hover-row
      :align="allAlign"
      :data="tableData"
    >
      <vxe-table-column field="open_time" title="时间" width="100">
        <template v-slot="{ row }">
          <div>{{dateF(row.open_time) }}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="期号"></vxe-table-column>
      <vxe-table-column title="开奖号">
        <template v-slot="{ row }">
          <div>
            <n-parts type="pk" :data="iN(row)" size="small"></n-parts>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="一" width="48">
        <template v-slot="{ row }">
          <div :style="getColor(row[1])">{{row[1]}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="二" width="48">
        <template v-slot="{ row }">
          <div :style="getColor(row[2])">{{row[2]}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="三" width="48">
        <template v-slot="{ row }">
          <div :style="getColor(row[3])">{{row[3]}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="四" width="48">
        <template v-slot="{ row }">
          <div :style="getColor(row[4])">{{row[4]}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="五" width="48">
        <template v-slot="{ row }">
          <div :style="getColor(row[5])">{{row[5]}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="和" width="48">
        <template v-slot="{ row }">
          <div :style="getColor(row.sum)">{{row.sum}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="大小" width="70">
        <template v-slot="{ row }">
          <div :style="getColor(row.dx)">{{row.dx}}</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="open_phase" title="单双" width="70">
        <template v-slot="{ row }">
          <div :style="getColor(row.ds)">{{row.ds}}</div>
        </template>
      </vxe-table-column>
    </vxe-table>
    <div class="bbt">
      <button @click="pi+=1">加载更多</button>
    </div>
  </div>
</template>
<script lang="ts">
import OpenCard from "@/components/OpenCard.vue";
import NParts from "@/components/NParts.vue";
import { dateFormat } from "@/utils/date";
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { listInfo, info, historyinfo } from "@/api/open";
import { isAnalyzingTrends, getExtraColor } from "@/core/trends.ts";

@Component({
  components: {
    OpenCard,
    NParts
  }
})
export default class App extends Vue {
  pi = 1;
  ps = 50;
  @Watch("pi", { immediate: true, deep: true })
  onChangePi(newVal: any, oldVal: any) {
    this.getData(true);
  }
  date = dateFormat("YYYY-mm-dd", new Date());
  @Watch("date", { immediate: true, deep: true })
  onChangeDate(newVal: any, oldVal: any) {
    this.getData();
  }
  disabledDateMethod(d: any) {
    const dd = d.date.getDate();
    return d.date.getTime() > Date.now() - 8.64e6;
  }
  allAlign = "center";
  private tableData: Array<any> = [];
  created() {
    // this.getData();
  }
  iN(data: info) {
    return data.open_result?.split(",");
  }
  getColor(i: any) {
    return {
      background: getExtraColor(i),
      color: "#fff",
      textAlign: "center",
      borderRadius: "50%",
      width: "25px",
      height: "25px",
      display: "inline-block"
    };
  }
  howlongago(day: number) {
    let dateTime = new Date();
    const dn = dateTime.setDate(dateTime.getDate() - day);
    dateTime = new Date(dn);

    this.date = dateFormat("YYYY-mm-dd", new Date(dateTime));
  }
  dateF(str: string) {
    return dateFormat("HH:MM:SS", new Date(str));
  }
  async getData(b?: boolean) {
    historyinfo({
      pi: this.pi,
      ps: this.ps,
      start: this.date + " 00:00:00",
      end: this.date + " 23:59:59"
    }).then(data => {
      if (b) {
        this.tableData.push(...isAnalyzingTrends(data.items, 2));
      } else {
        this.tableData = isAnalyzingTrends(data.items, 2);
      }
      // console.log(this.tableData);
    });
  }
}
</script>
<style lang="stylus" scoped>
.bbt
  text-align center
  padding 20px
</style>
