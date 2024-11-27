import { defineComponent } from "vue";

export default defineComponent({
  name: "gButton",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs, slots }) {
    return () => (
      <>
        <el-button {...attrs}>
          { slots.default?.() }
        </el-button>
      </>
    )
  }
})