<template>
  <div>
    <ul class="stem">
      <li>
        <div class="stem-bg"></div>
      </li>
      <li class="stem-title">
        <ColorPicker :defaultColor="color" @choiceColor="(e) => handlerColorPicker(e)" />
      </li>
    </ul>
    <div class="box">
      <img class="img-bg" src="https://diaoyan-files.automark.cc/survey/1647001507692/img1.jpg" />
      <div class="box-content">
        <img
          class="box-header"
          src="https://diaoyan-files.automark.cc/survey/1646049910638/head_image2.png"
          alt
        />
        <div class="q-con">
          <text class selectable="false" space="false" decode="false">中间题型</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorPicker from '@/components/ColorPicker'

const color = ref('#D9EAE8')

const handlerColorPicker = (e) => {
  color.value = e.hex
  console.log(color.value)
}

</script>

<style lang="scss" scoped>
.box {
  width: 1200px;
  // height: 500px;
  border: 1px solid black;
  .img-bg {
    width: 1200px;
    height: 700px;
    background-size: "100% 100%";
    opacity: 0.5;
    background-repeat: no-repeat;
  }

  .box-content {
    position: absolute;
    width: 1200px;
    top: 0px;
    bottom: 100px;
    overflow: auto;
    border: 1px solid red;
    .q-con {
      border: 1px solid red;
      height: 700px;
    }
  }
}
.stem-bg {
  width: 200px;
  height: 200px;
  background-color: v-bind(color);
}
.stem {
  float: right;
  list-style: none;
  padding: 32px 20px 10px 20px;
  .stem-title {
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #434343;
    margin-bottom: 10px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #434343;
  }
}
</style>
