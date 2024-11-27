import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { emit, slots }) {
    return () => (
      <>      
        <div>
          111
        </div>
        <div>
          222
        </div>
      </>
    )
  }
})