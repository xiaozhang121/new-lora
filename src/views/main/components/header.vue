<template>
  <div class="header">
    <div class="logo-con">
       <img src="" alt="">
        <span>新世界联合巡检平台</span>
    </div>
    <div class="header-mid">
     <!-- <ul>
         <li>异常信息</li>
         <li>操作平台</li>
         <li>视频监控</li>
     </ul> -->
    </div>
    <div class="header-right">
            <div class="time">
                <span>练塘站</span>
                <span>2019-6-18</span>
                <span>11：00：02</span>
            </div>
            <div class="bell">bell</div>
            <div class="photo"><img src="" alt=""></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
    .header {
        position: relative;
        height: 100%;
        background: linear-gradient(to right,rgb(13, 22, 29),rgb(36, 59, 76));
        .logo-con {
            margin-left: 20px;
            float: left;
            height: 100%;
            color: white;
            line-height: 60px;
            font-weight: 700;
        }
        .header-mid {
            float: left;
            line-height: 60px;
            margin: 0 auto;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        .header-right {
            float: right;
            line-height: 60px;
            color: white;
            .photo {
                float: left;
                margin: 12px 20px 0 0;
                width:30px;
                height: 30px;
                border-radius:50%;
                border:1px solid white;
            }
            .time {
                color: rgb(87, 96, 103);
                float: left;
                margin-right: 30px;
                font-size: 14px;
                span {
                    margin-right: 10px;
                }
            }
            .bell {
                float: left;
                margin-right: 20px;
            }
        }
    }
</style>
