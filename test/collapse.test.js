const expect = chai.expect;
import Vue from "vue";
import GCollapse from "../src/lib/GCollapse";
import GCollapseItem from "../src/lib/GCollapseItem";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component("g-collapse", GCollapse);
Vue.component("g-collapse-item", GCollapseItem);

describe("GCollapse", () => {
  it("GCollapse存在.", () => {
    expect(GCollapse).to.be.ok;
  });
  it("GCollapseItem存在.", () => {
    expect(GCollapseItem).to.be.ok;
  });
  describe("测试props", () => {
    it("设置single模式下切换内容", (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
      <g-collapse :selected.sync="cols">
      <g-collapse-item title="第一个" item-key="1" ref='a'>
        <p>这是第一个标签的内容</p>
      </g-collapse-item>
      <g-collapse-item title="第二个" item-key="2"
        >这是第二个标签的内容</g-collapse-item
      >
      <g-collapse-item title="第三个" item-key="3"
        >这是第三个标签的内容</g-collapse-item
      >
    </g-collapse>
            `;
      const vm = new Vue({
        el: div,
        data:{
            cols:"2"
        }
      });
      vm.$nextTick(() => {
        vm.$el.querySelector("div.g-collapse-item-title").click()
        vm.$nextTick(()=>{
            expect(vm.cols).to.eq("1")
            vm.$el.remove()
            vm.$destroy()
            done()
        })
      });
    });
    it("设置mulitple模式下切换内容", (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <g-collapse :selected.sync="cols" mulitple>
        <g-collapse-item title="第一个" item-key="1" ref='a'>
          <p>这是第一个标签的内容</p>
        </g-collapse-item>
        <g-collapse-item title="第二个" item-key="2"
          >这是第二个标签的内容</g-collapse-item
        >
        <g-collapse-item title="第三个" item-key="3"
          >这是第三个标签的内容</g-collapse-item
        >
      </g-collapse>
              `;
        const vm = new Vue({
          el: div,
          data:{
              cols:["2"]
          }
        });
        vm.$nextTick(() => {
          vm.$el.querySelector("div.g-collapse-item-title").click()
          vm.$nextTick(()=>{
              expect(vm.cols).to.deep.equal(["2","1"])
              done()
          })
        });
      });
      it("默认展开节点", (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <g-collapse :selected.sync="cols">
        <g-collapse-item title="第一个" item-key="1" ref='a'>
          <p>这是第一个标签的内容</p>
        </g-collapse-item>
        <g-collapse-item title="第二个" item-key="2"
          >这是第二个标签的内容</g-collapse-item
        >
        <g-collapse-item title="第三个" item-key="3"
          >这是第三个标签的内容</g-collapse-item
        >
      </g-collapse>
              `;
        const vm = new Vue({
          el: div,
          data:{
              cols:"1"
          }
        });
        vm.$nextTick(() => {
            expect(getComputedStyle(vm.$el.querySelector("div.g-collapse-item-title"),null).display).to.eq('block') 
              done()
        });
      });
  });
});
