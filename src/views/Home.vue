<template>
  <div class="home">
    <open-card></open-card>
    <vxe-table
      border
      show-header-overflow
      show-overflow
      highlight-hover-row
      :align="allAlign"
      :data="tableData"
    >
      <vxe-table-column field="name" title="时间"></vxe-table-column>
      <vxe-table-column field="sex" title="期号"></vxe-table-column>
      <vxe-table-column field="name" title="开奖号"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import OpenCard from "@/components/OpenCard";
export default {
  components: {
    OpenCard
  },
  data: () => ({
    allAlign: null,
    tableData: []
  }),
  created() {
    const list = [];
    for (let index = 0; index < 5; index++) {
      list.push({
        name: "test" + index,
        role: "developer",
        sex: "Man",
        date: "2019-05-01",
        time: 1556677810888 + index * 500,
        region: "ShenZhen",
        address: "address abc" + index
      });
    }
    this.tableData = list;
  }
};
</script>
<style lang="stylus" scoped></style>
