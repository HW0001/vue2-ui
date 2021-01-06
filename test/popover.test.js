const expect = chai.expect;
import Vue from "vue";
import GPopover from "../src/lib/GPopover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component("g-popover", GPopover);

describe("GPopover", () => {
  it("GPopover存在.", () => {
    expect(GPopover).to.be.ok;
  });
  describe("测试props", () => {
    it("设置position-top", (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
        <g-popover position='top' >
            <template v-slot:content="{close}">
                <p  ref='test'>也是测试的</p>
                <g-button @click='close'>关闭</g-button>
            </template>
            <button id='btn'>上面</button>
        </g-popover>
            `;
      const vm = new Vue({
        el: div,
      });
      vm.$nextTick(() => {
        vm.$el.querySelector("#btn").click();
        vm.$nextTick(() => {
          expect(vm.$refs.test.parentElement.classList.contains("position-top")).to.be.true;
          done();
        });
      });
    });
    it("设置position-right", (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
          <g-popover position='right' >
              <template v-slot:content="{close}">
                  <p  ref='test'>也是测试的</p>
                  <g-button @click='close'>关闭</g-button>
              </template>
              <button id='btn'>上面</button>
          </g-popover>
              `;
        const vm = new Vue({
          el: div,
        });
        vm.$nextTick(() => {
          vm.$el.querySelector("#btn").click();
          vm.$nextTick(() => {
            expect(vm.$refs.test.parentElement.classList.contains("position-right")).to.be.true;
            done();
          });
        });
      });
      it("设置position-bottom", (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
          <g-popover position='bottom' >
              <template v-slot:content="{close}">
                  <p  ref='test'>也是测试的</p>
                  <g-button @click='close'>关闭</g-button>
              </template>
              <button id='btn'>上面</button>
          </g-popover>
              `;
        const vm = new Vue({
          el: div,
        });
        vm.$nextTick(() => {
          vm.$el.querySelector("#btn").click();
          vm.$nextTick(() => {
            expect(vm.$refs.test.parentElement.classList.contains("position-bottom")).to.be.true;
            done();
          });
        });
      });
      it("设置position-left", (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
          <g-popover position='left' >
              <template v-slot:content="{close}">
                  <p  ref='test'>也是测试的</p>
                  <g-button @click='close'>关闭</g-button>
              </template>
              <button id='btn'>上面</button>
          </g-popover>
              `;
        const vm = new Vue({
          el: div,
        });
        vm.$nextTick(() => {
          vm.$el.querySelector("#btn").click();
          vm.$nextTick(() => {
            expect(vm.$refs.test.parentElement.classList.contains("position-left")).to.be.true;
            done();
          });
        });
      });
      xit("设置trigger", (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
          <g-popover trigger='hover' >
              <template v-slot:content="{close}">
                  <p  ref='test'>也是测试的</p>
                  <g-button @click='close'>关闭</g-button>
              </template>
              <button id='btn'>上面</button>
          </g-popover>
              `;
        const vm = new Vue({
          el: div,
        });
        vm.$nextTick(() => {
          vm.$el.querySelector("#btn").dispatchEvent(new Event("mouseenter"));
          vm.$nextTick(() => {
              console.log(vm.$refs.test);
            expect(vm.$refs.test.parentElement.classList.contains("position-top")).to.be.true;
            done();
          });
        });
      });
  });
});
