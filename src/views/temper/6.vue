<template>
    <div class="fat">
        <duno-charts
    :legendOption='legend'
    :isChange="true"
    :isItemEchart="true"
    :titleOption="{}"
    :xAxisOption="xAxis"
    :yAxisOption="yAxis"
    :seriesOption="series"></duno-charts>
    </div>
</template>
<script>
import DunoCharts from '@/components/duno-charts/charts.vue'
export default {
  components: {
    DunoCharts
  },
  data () {
    return {
      xAxis: { // x轴坐标
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
      yAxis: { // y轴坐标
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
        { // echarts数据
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210, 230, 120, 132, 101, 134, 90, 230, 210, 230, 120, 132, 101, 134, 90, 230, 210, 230],
          color: ['rgb(3, 164, 231)']
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210, 230, 120, 132, 101, 134, 90, 230, 210, 230, 120, 132, 101, 134, 90, 230, 210, 230],
          color: ['rgb(169, 156, 47)']
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
    .fat {
        width: 100%;
        height: 30%;
    }
</style>
