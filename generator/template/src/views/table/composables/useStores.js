import { getStores } from '../../service';
import { ref, onMounted } from 'vue';

export default function useStoreRepositories() {
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

  onMounted(getStoreRepositories);

  return {
    storeId,
    storeRepositories,
    getStoreRepositories,
  };
}
