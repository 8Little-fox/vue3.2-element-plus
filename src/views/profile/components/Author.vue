<template>
  <div class="box-container">
    <PanThumb
      image="https://img0.baidu.com/it/u=1473465669,779060233&fm=26&fmt=auto"
      width="90px"
      height="90px"
    >
      <h1 class="box-container-txt">Hello World!</h1>
      <div class="box-container-title">Admin</div>
    </PanThumb>
    <div class="box-right">
      <h1 class="box-right-txt">Sunday</h1>
      <div class="box-right-title">一个前端的开发程序猿</div>
    </div>
  </div>
  <div class="box-container-dec">
    1:人生的路，就是学会忘记，懂得放弃，人生总是从告别中走向明天。轻轻对自己说，人生不易，好好活着，风雨人生，继续追寻。悄悄告诉自己说，没事的，一切皆如此，漫漫人生，淡然对待，从容行走。
  </div>
   <div class="box-container-dec">
    2:绝望掩埋了欢笑，失望掩饰了一切，我该做的就是学会忘记，寂寞与不安之间徘徊，如果不坚强软弱给谁看。
  </div>
  <div class="box-container-dec">
  3: 当你很累很累的时候，你应该闭上眼睛做深呼吸，告诉自己你应该坚持得住，不要这么轻易的否定自己，谁说你没有好的未来，关于明天的事后天才知道，在一切变好之前，我们总要经历一些不开心的日子，不要因为一点瑕疵而放弃一段坚持。
  </div>
</template>

<script setup>
import PanThumb from '@/components/PanThumb'
</script>

<style lang="scss" scoped>
.box-container {
  display: flex;
  &-txt {
    font-size: 5px;
    font-weight: bold;
  }
  &-title {
    font-size: 2px;
    color: #a8a2a2;
  }
  &-dec {
    margin-top: 20px;
    line-height: 25px;
    color: #a8a2a2;
  }
  .box-right {
    text-align: left;
    margin: auto 10px;
    &-txt {
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-title {
      color: #a8a2a2;
      font-size: 13px;
    }
  }
}
</style>
