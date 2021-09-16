<!--
 * @Description: 商品详情
 * @Author: tangguowei
 * @Date: 2021-05-19 20:15:47
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-09-16 18:09:06
-->
<template>
  <el-dialog v-model="visible" title="商品详情">
    <el-form ref="modalForm" :model="formData">
      <el-form-item label="商店名称">{{ storeName }}</el-form-item>
      <el-form-item label="商品名称">{{ formData.name }}</el-form-item>
      <el-form-item label="商品类型">{{ formData.category }}</el-form-item>
      <el-form-item label="商品规格">{{ formData.spec }}</el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { defineComponent, ref, reactive, computed } from 'vue';
import { getGoodDetail } from '@/views/service';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const visible = ref(false);
    const formData = reactive({});
    const storeName = computed(
      () => store.getters['basic-table/currentStoreName']
    );
    const init = async (goodId) => {
      visible.value = true;
      // 查询详情
      try {
        const { data } = await getGoodDetail(
          {
            storeId: store.state['basic-table'].currentStore.id,
            goodId,
          },
          {
            router,
          }
        );
        for (let [key, value] of Object.entries(data)) {
          formData[key] = value;
        }
      } catch (e) {
        console.log(e);
      }
    };
    return {
      storeName,
      visible,
      formData,
      init,
    };
  },
});
</script>
