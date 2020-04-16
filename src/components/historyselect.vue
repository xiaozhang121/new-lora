<template>
  <div class="hs">
           <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        <el-date-picker
      class="date"
      v-model="timetotime"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
    </div>
</template>

<script>
export default {
  data () {
    return {
      timetotime: [],
      options: [],
      value: ''
    }
  }
}
</script>
<style lang="less">
  .el-input{
    margin-right: 8px;
  }
</style>
