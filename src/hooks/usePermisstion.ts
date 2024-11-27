import { ref, unref } from "vue";

export interface PropsType {
  name: string
}

export default function usePermission(props: PropsType) {
  const name = ref("")
  const getName = () => {
    return unref(name)
  }
  return {
    name,
    getName
  }
}