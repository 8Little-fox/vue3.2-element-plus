<template>
<div class="goods-list-container">
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in list"
      :key="index"
      :xs="24"
      :sm="8"
      :md="8"
      :lg="8"
      :xl="6"
    >
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <div class="goods-list-card-body">
          <div class="goods-list-tag-group">
            <el-tag v-if="item.isRecommend" hit type="success">推荐</el-tag>
            <el-tag v-if="item.status === 0" hit type="danger">缺货</el-tag>
          </div>
          <div class="goods-list-image-group">
            <img :src="item.image" class="goods-list-image" />
          </div>
          <div class="goods-list-title">{{ item.title }}</div>
          <div class="goods-list-description">{{ item.description }}</div>
          <div class="goods-list-price">
            <span>¥ {{ item.price }} 元</span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { reactive } from 'vue-demi'
export default {
  name: 'GoodsList',
  setup () {
    const list = reactive([
      {
        isRecommend: true,
        status: 0,
        image: 'https://picsum.photos/300/600?random=0',
        title: '@ctitle',
        description: '@csentence',
        link: 'https://www.baidu.com',
        price: '@integer(100, 500)'
      },
        {
        isRecommend: true,
        status: 0,
        image: 'https://picsum.photos/300/600?random=1',
        title: '@ctitle',
        description: '@csentence',
        link: 'https://www.baidu.com',
        price: '@integer(100, 500)'
      },
        {
        isRecommend: true,
        status: 0,
        image: 'https://picsum.photos/300/600?random=2',
        title: '@ctitle',
        description: '@csentence',
        link: 'https://www.baidu.com',
        price: '@integer(100, 500)'
      }
    ])
    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods-list-container {
    margin: 20px;
    .goods-list-card-body {
      position: relative;
      text-align: center;
      cursor: pointer;

      .goods-list-tag-group {
        position: absolute;
        top: 10px;
        right: 5px;
        z-index: 9;
      }

      .goods-list-image-group {
        height: 400px;
        overflow: hidden;

        .goods-list-image {
          width: 100%;
          height: 400px;
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .goods-list-title {
        margin: 8px 0;
        font-size: 16px;
        font-weight: bold;
      }

      .goods-list-description {
        font-size: 14px;
        color: #808695;
      }

      .goods-list-price {
        margin: 8px 0;
        font-size: 14px;
        color: #ff6700;

        s {
          color: #c5c8ce;
        }
      }
    }
  }
</style>
