<script lang="tsx">
import { defineComponent, h, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs, slots, emit }) {
    // 自定义渲染头部
    const renderHeader = () => h("div", {}, "custom render header");

    const list = ref([{ title: "黑猫警长" }]);

    // 返回一个jsx的组件树
    return () => (
      <>
        <ul>
          {
            list.value.map((item) => (
               <li>{item.title}</li>
            ))
          }
        </ul>
        <div>{renderHeader()}</div>
        <div>{slots.default?.()}</div>
      </>
    );
  },
});

</script>

