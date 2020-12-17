import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
@Component
export default class ViewAbout extends Vue {
  public render(): VNode {
    return (
      <span>关于</span>
    );
  }
}
