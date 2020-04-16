<template>
    <div>
       <div class="crumbs">
   <el-breadcrumb separator="-">
       <el-breadcrumb-item :to="{path:'/main'}">操作中台</el-breadcrumb-item>
       <el-breadcrumb-item>Lora监测</el-breadcrumb-item>
       <el-breadcrumb-item>温湿度传感器</el-breadcrumb-item>
   </el-breadcrumb>
    </div>
    <p class="title">温湿度传感器</p>
    <div class="history">
        <div class="his-text">历史数据</div>
        <div class="his-select">
            <history-select></history-select>
        </div>
    </div>

    <div class="ech-intro">
      <p>4号主变A相汇控柜 2020年4月10日 - 11日温湿度变化</p>
      <div class="echarts">
    <div class="echartsone">
    <duno-charts
    :legendOption='legend'
    :isChange="true/false"
    :isItemEchart="true/false"
    :titleOption="{}"
    :xAxisOption="xAxis"
    :yAxisOption="yAxis"
    :seriesOption="series"></duno-charts>
    </div>
    <div class="echartstwo">
    <duno-charts
    :legendOption='legend'
    :isChange="true/false"
    :isItemEchart="true/false"
    :titleOption="{}"
    :xAxisOption="xAxis"
    :yAxisOption="yAxis"
    :seriesOption="series"></duno-charts>
    </div>
    </div>
    </div>

    <div class="history">
        <div class="his-text">历史信息记录</div>
        <div class="his-select">
            <history-record></history-record>
        </div>
    </div>
  <duno-tables-tep
    :border = border
    :columns="columns"
    :data="dataList"
    :totalNum="totalNum"
    :pageSize="pageRows"
    :current="pageIndex"
    :showSizer="true"
    @on-selection-change="dataListSelectionChangeHandle"
    @clickPage="pageCurrentChangeHandle"
    @on-page-size-change="pageSizeChangeHandle"
  />
    <!-- 表格点击弹框 -->
    <ele-modal :show='showdia' @change = 'childvalue'></ele-modal>
    </div>
</template>
<script>
import DunoCharts from '@/components/duno-charts/charts.vue'
import EleModal from '@/components/element-modal/index.vue'
import HistorySelect from '@/components/historyselect'
import HistoryRecord from '@/components/historyrecord'
import { DunoTablesTep } from '@/components/duno-tables-tep'
export default {
  components: {
    HistorySelect,
    DunoCharts,
    HistoryRecord,
    DunoTablesTep,
    EleModal
  },
  methods: {
    childvalue (val) { // 关闭弹窗 父接收子组件传过来的值
      this.showdia = val
    }
  },
  data () {
    return {
      showdia: false,
      legend: {
        data: ['油位'],
        textStyle: {
          color: 'rgb(226, 230, 232)'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        axisLine: {
          lineStyle: {
            color: 'rgb(141, 150, 155)'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        name: '(℃)',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgb(141, 150, 155)'
          }
        }
      },
      series: [
        {
          name: '油位',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210, 500, 120, 132, 101, 134, 90, 230, 210, 230, 120, 132, 101, 134, 90, 400, 210, 230],
          color: ['rgb(7, 177, 184)'],
          markLine: {
            symbol: 'none', // 去掉警戒线最后面的箭头
            label: {
              position: 'end', // 将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
              formatter: '',
              color: 'red'
            },
            data: [{
              silent: false, // 鼠标悬停事件  true没有，false有
              lineStyle: { // 警戒线的样式  ，虚实  颜色
                type: 'dashed',
                color: 'red'
              },
              name: '',
              yAxis: 400
            }]
          }
        }
      ],
      dataList: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ],
      columns: [
        { // 表头内容
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: ' ',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.showdia = true
                  }
                }
              }, '详情')
            ])
          }
        }
      ]
    }
  }
}
</script>
<style lang="less" >
   .el-main {
     color: rgb(208, 210, 211);
      .ech-intro{
        background-color: rgb(23, 52, 70);
        padding-top: 20px;
        font-size: 18px;
        p {
          color: rgb(226, 230, 232);
          text-align: center;
          margin-bottom:  20px;
        }
        .echarts {
         width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: rgb(23, 52, 70);
        .echartsone,.echartstwo{
            flex: 1;
        }
    }
      }
    .title {
        margin: 20px 0;
    }
    .history {
        margin: 10px 0;
        overflow: hidden;
        position: relative;
        .his-text {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .el-select-dropdown__empty {
      background-color: rgb(25, 47, 65);
    }
    .el-input__inner {
      background-color: rgb(25, 47, 65);
      border-radius: 0;
      border: 0;
    }

    .his-select {
        float: right;
          .el-range-editor {
          width: 260px;
          height: 35px;
          position: relative;
          top: 4px;
        }
    }
    .el-select {
      .el-input__inner{
        width: 150px;
        height: 35px;
        line-height: 35px;
      }
    }
    .el-input__icon{
      line-height: 35px;
    }
    .el-range-editor .el-range-input {
      background-color: rgb(25, 47, 65);
    }
    }
    .tablesTep{
      // theatd{
      //   background-color: rgb(50, 94, 130);
      // }
    }
   }
</style>
