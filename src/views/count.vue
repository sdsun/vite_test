<script lang="ts">
import { h, ref } from "vue";

export default {
  setup() {
    const count = ref<number>(0)
    return () => h('div', count.value)
  }
}
</script>