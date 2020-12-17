import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import XHello from '@/components/hello'

@Component
export default class ViewHome extends Vue {
  public render(): VNode {
    return (
      <span>
        <span>主页</span>
        <br />
        <XHello />
      </span>
    );
  }
}
