/*
 * @Description: 筛选商品（前端筛选）
 * @Author: tangguowei
 * @Date: 2021-12-07 16:20:15
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-08 15:52:08
 */
import { ref, computed } from 'vue';

export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('');
  const repositoriesMatchingSearchQuery = computed(() =>
    repositories.value.filter((item) => {
      let res = false;
      for (const val of Object.values(item)) {
        if (val.includes(searchQuery.value)) {
          res = true;
          break;
        }
      }
      return res;
    })
  );
  const setSearchQuery = (val) => {
    searchQuery.value = val;
  };

  return {
    searchQuery,
    repositoriesMatchingSearchQuery,
    setSearchQuery,
  };
}
