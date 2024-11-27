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

    const list = ref([
      { title: "11" },
    ]);

    const handleClick = (index) => {
      console.log("click=============", index)
    }

    // 返回一个jsx的组件树
    return () => (
      <>
        <ul>
          {
            list.value.map((item, index) => (
               <li onClick={() => handleClick(index)}>{item.title}</li>
            ))
          }
        </ul>
        <div>{renderHeader()}</div>
        <el-button { ...attrs }>el-button</el-button>
        <div>{slots.default?.()}</div>
      </>
    );
  },
});
