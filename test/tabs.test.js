const expect = chai.expect;
import Vue from "vue";
import GTabs from "../src/lib/GTabs";
import GTabItem from "../src/lib/GTabItem";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component("g-tabs", GTabs);
Vue.component("g-tab-item", GTabItem);

describe("GTabs && GTabItem", () => {
  it("GTabs存在.", () => {
    expect(GTabs).to.be.ok;
  });
  it("GTabItem存在.", () => {
    expect(GTabItem).to.be.ok;
  });
  const TabConstructer = Vue.extend(GTabs);
  const ItemConstructer = Vue.extend(GTabItem);
  describe("props", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
            <g-tabs active-key="2">
            <g-tab-item title='一www' item-key='1' disabled>测试1</g-tab-item>
            <g-tab-item title='二的' item-key='2'>测试2</g-tab-item>
            <g-tab-item title='三是是是' item-key='3'>测试3</g-tab-item>
            </g-tabs>
        `;
    const callback = sinon.fake();
    const vm = new Vue({
      el: div,
    });
    it("设置active-key", (done) => {
      vm.$nextTick(() => {
        expect(
          vm.$el
            .querySelector("span:nth-child(2)")
            .classList.contains("selected")
        ).to.be.true;
        done();
      });
    });
    it("设置title", (done) => {
      vm.$nextTick(() => {
        expect(vm.$el.querySelectorAll("span").length).to.be.eq(3);
        done();
      });
    });
    it("设置disabled", (done) => {
      vm.$nextTick(() => {
        expect(vm.$el.querySelector("span").classList.contains("disabled")).to
          .be.true;
        vm.$el.remove();
        vm.$destroy();
        done();
      });
    });
    it("设置itemChange", (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
                <g-tabs active-key="2" :item-change='callback' ref='test'>
                <g-tab-item title='一www' item-key='1' disabled>测试1</g-tab-item>
                <g-tab-item title='二的' item-key='2'>测试2</g-tab-item>
                <g-tab-item title='三是是是' item-key='3'>测试3</g-tab-item>
                </g-tabs>
            `;
      const callback = sinon.fake();
      const vm = new Vue({
        el: div,
        methods: {
          callback,
        },
      });
      vm.$nextTick(() => {
        vm.$el.querySelectorAll("span")[2].click();
        vm.$nextTick(()=>{
             expect(callback).to.have.been.called;
             done();
        })
      });
    });
  });
});
