import { onMounted, ref } from "vue";

// 下拉数据类型
export interface SelectOption {
  value: string;
  lable: string;
}
// 接口返回
interface ResType {
  data: any,
  code: number
}
// 接口类型
interface FetchSelectProps {
  apiFun: () => Promise<ResType>
}

export function useFetchSelect(props: FetchSelectProps) {
  const { apiFun } = props;
  const options = ref<SelectOption[]>([]);
  const loading = ref(false)

  const loadData = async () => {
    try {  
      loading.value = true    
      const { data, code } = await apiFun()
      if (code != 0) return;
      options.value = data;
    } catch (error) {
      console.log("network error!")
    } finally {
      loading.value = false;
    }

  }
  onMounted(() => {
    loadData()
  })

  return {
    options,
    loading
  }
}