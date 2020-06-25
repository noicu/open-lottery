<template>
  <div class="home">
    <open-card></open-card>
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
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { listInfo,info, historyinfo } from "@/api/open";

@Component({
  components: {
    OpenCard,
    NParts
  }
})
export default class App extends Vue {
  allAlign = null;
  private tableData: listInfo = {};
  created() {
    this.getData();
  }
  iN(data:info) {
    return data.open_result?.split(",");
  }
  getData() {
    historyinfo({
      pi: 1,
      ps: 10
    }).then(data => {
      this.tableData = data as listInfo;
      console.log(data);
    });
  }
}
</script>
<style lang="stylus" scoped></style>
