import { ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { getStores } from '@/views/service';

export default function useStoreRepositories() {
  const store = useStore();

  const storeId = ref('');
  const storeRepositories = ref([]);
  const getStoreRepositories = async () => {
    let res;
    try {
      res = await getStores();
    } catch (e) {
      console.log(e);
    }
    if (res) {
      storeRepositories.value = res.data.results;
    }
  };

  watch(storeId, (val) => {
    const currentStore = storeRepositories.value.filter((item) => item.id === val)[0];
    store.commit('basic-table/setCurrentStore', currentStore);
  });
  onMounted(getStoreRepositories);

  return {
    storeId,
    storeRepositories,
    getStoreRepositories,
  };
}
