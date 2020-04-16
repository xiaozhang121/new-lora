<template>
<div>
<el-dialog  :visible.sync="dialogFormVisible=show" @close="closeDialog">
    <p style="color:rgb(51, 51, 51);font-weight:700;font-size:18px">记录20190716022</p>
    <div style="margin:15px 0 20px 0">lora-开关计数器</div>
    <div class="status">正常</div>
     <div class="table">
         <div class="table-title">4号主变A相控制柜</div>
         <duno-tables-tep
    :border = border
    :columns="cl"
    :data="dl"
    :isShowPage = false
  />
     </div>

     <div class="record" style="margin:90px 0 20px 0;color:rgb(56, 56, 56);font-weight:700;">处理记录</div>
     <div class="none">暂无内容</div>
</el-dialog>
</div>
</template>
<script>
import { DunoTablesTep } from '@/components/duno-tables-tep'
export default {
  components: {
    DunoTablesTep
  },
  props: ['show'],
  data () {
    return {
      dl: [
        { A: 14, B: 15, C: 15 }
      ],
      cl: [
        {
          title: 'A相',
          key: 'A'
        },
        {
          title: 'B相',
          key: 'B'
        },
        {
          title: 'C相',
          key: 'C'
        }
      ],
      table: {
        data: 222
      },
      tableData: [{
        date: '14次',
        name: '15次',
        address: '15次'
      }],
      dialogTableVisible: false,
      formLabelWidth: '120px'
    }
  },
  methods: {
    closeDialog () {
      this.dialogTableVisible = false
      this.$emit('change', this.dialogTableVisible)
    }
  }
}
</script>
<style lang="less">
    .el-dialog {
        background-color: rgb(224, 224, 224)!important;
        border-radius: 5px!important;
        width: 30%!important;
        .el-dialog__header {
            padding: 0;
        }
        .status {
            font-weight: 700;
            font-size: 18px;
            color:rgb(51, 51, 51);
            margin-bottom: 30px;
        }
 .table {
        border: 1px solid rgb(158, 158, 158);
        .table-title {
            color: rgb(102, 102, 102);
            font-size: 18px;
            padding: 15px 0;
            text-align: center;
        }
        .tablesTep .ivu-table th {
            background-color: rgb(224, 224, 224);
            text-align: center;
            color: #333;
            border-top: 1px solid rgb(218, 218, 218);
            border-bottom: 1px solid rgb(218, 218, 218);
            border-right: 1px solid rgb(218, 218, 218);
            padding: 20px 0;
            font-size: 16px;
        }
        .tablesTep .ivu-table th:last-child {
            border-right: 0;
        }
        .tablesTep .ivu-table .ivu-table-row td{
           background-color: rgb(224, 224, 224);
            text-align: center;
            color: #333;
            border-right: 1px solid rgb(218, 218, 218);
            padding: 20px 0;
            font-size: 18px;
            font-weight: 700;
        }
        .tablesTep .ivu-table .ivu-table-row td:last-child {
            border-right: 0;
        }
    }
    .none {
        height: 35px;
        padding: 5px;
        background-color: rgb(199, 199, 199);
        line-height: 25px;
        margin-bottom: 30px;
    }
    }

</style>
