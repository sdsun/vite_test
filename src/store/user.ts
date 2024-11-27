import { defineStore } from "pinia";
import { ref } from "vue";

// 全局状态-USER
export const useUserStore = defineStore('user', () => {
  const name = ref<string>("张三")
  const changeName = (v:string) => {
    name.value = v
  }

  return {
    name,
    changeName
  }
})