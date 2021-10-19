<!--
 * @Description: 基础列表
 * @Author: tangguowei
 * @Date: 2021-05-19 16:58:40
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 17:49:18
-->
<template>
  <div class="search-card">
    <el-form :inline="true" :model="{}">
      <el-form-item label="商店名称">
        <el-select v-model="storeId" placeholder="请选择">
          <el-option
            v-for="item in storeRepositories"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="查询词">
        <el-input v-model="searchQuery" placeholder="例：零食"></el-input>
      </el-form-item>
      <Expect v-model:query="searchQuery">
        <template #first>
          <el-form-item class="first-item">
            <el-button type="primary">主要按钮</el-button>
          </el-form-item>
        </template>
        <template #last>
          <el-form-item>
            <el-button class="last-button">最后按钮</el-button>
          </el-form-item>
        </template>
      </Expect>
    </el-form>
  </div>
  <el-table
    :data="goodsRepositories"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
    <el-table-column prop="name" label="商品名称"> </el-table-column>
    <el-table-column prop="category" label="商品类型"> </el-table-column>
    <el-table-column prop="spec" label="商品规格"> </el-table-column>
    <el-table-column prop="sale_date" label="发售日期"> </el-table-column>
    <el-table-column prop="description" label="商品介绍"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="{ row }">
        <el-button
          type="text"
          size="small"
          @click="$refs.previewModal.init(row.id)"
          >详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <PreviewModal ref="previewModal" />
</template>
<script>
import { defineComponent } from 'vue';
import Expect from './components/expect';
import useStores from './composables/useStores';
import useGoods from './composables/useGoods';
import useGoodsSearch from './composables/useGoodsSearch';
import PreviewModal from './components/basic-preview.vue';

export default defineComponent({
  name: 'BasicTable',
  components: {
    Expect,
    PreviewModal,
  },
  setup() {
    const { storeRepositories, storeId } = useStores();
    const { goodsRepositories } = useGoods(storeId);
    const { searchQuery, repositoriesMatchingSearchQuery, setSearchQuery } =
      useGoodsSearch(goodsRepositories);
    return {
      storeRepositories,
      storeId,
      goodsRepositories: repositoriesMatchingSearchQuery,
      searchQuery,
      setSearchQuery,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-card {
  margin-bottom: 16px;
  background: #fff;
  padding: 16px;
  .el-input {
    max-width: 380px;
  }
  span:nth-of-type(n + 2) {
    margin-left: 16px;
  }
}
</style>
