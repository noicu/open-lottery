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
        <vxe-input
          v-model="date"
          placeholder="日期类型"
          type="date"
          :disabledMethod="disabledDateMethod"
          transfer
        ></vxe-input>
      </template>
    </vxe-toolbar>
    <vxe-table
      border
      show-header-overflow
      show-overflow
      highlight-hover-row
      :align="allAlign"
      :data="tableData.items"
    >
      <vxe-table-column field="open_time" title="时间"></vxe-table-column>
      <vxe-table-column field="open_phase" title="期号"></vxe-table-column>
      <vxe-table-column title="开奖号">
        <template v-slot="{ row }">
          <div>
            <n-parts type="pk" :data="iN(row)" size="small"></n-parts>
          </div>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import OpenCard from "@/components/OpenCard.vue";
import NParts from "@/components/NParts.vue";
import { dateFormat } from "@/utils/date";
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { listInfo, info, historyinfo } from "@/api/open";

@Component({
  components: {
    OpenCard,
    NParts
  }
})
export default class App extends Vue {
  date = dateFormat("YYYY-mm-dd", new Date());
  @Watch("date", { immediate: true, deep: true })
  onChangeDate(newVal: any, oldVal: any) {
    this.getData();
  }
  disabledDateMethod(d: any) {
    const dd = d.date.getDate();
    return d.date.getTime() > Date.now() - 8.64e6;
  }
  allAlign = null;
  private tableData: listInfo = {};
  created() {
    this.getData();
  }
  iN(data: info) {
    return data.open_result?.split(",");
  }
  howlongago(day: number) {
    let dateTime = new Date();
    const dn = dateTime.setDate(dateTime.getDate() - day);
    dateTime = new Date(dn);

    this.date = dateFormat("YYYY-mm-dd", new Date(dateTime));
  }
  getData() {
    historyinfo({
      pi: 1,
      ps: 500,
      start: this.date + " 00:00:00",
      end: this.date + " 23:59:59"
    }).then(data => {
      this.tableData = data as listInfo;
    });
  }
}
</script>
<style lang="stylus" scoped></style>
