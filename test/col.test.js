const expect = chai.expect;
import Vue from "vue";
import GRow from "../src/lib/GRow";
import GCol from "../src/lib/GCol";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("GRow", () => {
  it("存在.", () => {
    expect(GRow).to.be.ok;
  });
  let vm;
  const Constructor = Vue.extend(GRow);
  describe("属性测试", () => {
    afterEach(() => {
      vm.$destroy();
    });
    it("是否存在span offset", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
      <g-row gutter="20">
        <g-col span='1' offset='2'>1</g-col>
        <g-col span='22'>2</g-col>  
      </g-row>
      `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children[0];
        expect(coldivs.classList.contains("span_1")).to.equal(true);
        expect(coldivs.classList.contains("offset_2")).to.equal(true);
        done();
      });
    });
    it("是否存在 sm", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
        <g-row gutter="20">
          <g-col span='1' offset='2' :sm='{span:1,offset:2}'>1</g-col>
          <g-col span='22'>2</g-col>  
        </g-row>
        `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children[0];
        expect(coldivs.classList.contains("col_sm_1")).to.equal(true);
        expect(coldivs.classList.contains("col_sm_offset_2")).to.equal(true);
        done();
      });
    });
    it("是否存在 md", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
          <g-row gutter="20">
            <g-col span='1' offset='2' :md='{span:1,offset:2}'>1</g-col>
            <g-col span='22'>2</g-col>  
          </g-row>
          `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children[0];
        expect(coldivs.classList.contains("col_md_1")).to.equal(true);
        expect(coldivs.classList.contains("col_md_offset_2")).to.equal(true);
        done();
      });
    });
    it("是否存在 lg", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
            <g-row gutter="20">
              <g-col span='1' offset='2' :lg='{span:1,offset:2}'>1</g-col>
              <g-col span='22'>2</g-col>  
            </g-row>
            `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children[0];
        expect(coldivs.classList.contains("col_lg_1")).to.equal(true);
        expect(coldivs.classList.contains("col_lg_offset_2")).to.equal(true);
        done();
      });
    });
    it("是否存在 xl", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
              <g-row gutter="20">
                <g-col span='1' offset='2' :xl='{span:1,offset:2}'>1</g-col>
                <g-col span='22'>2</g-col>  
              </g-row>
              `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children[0];
        expect(coldivs.classList.contains("col_xl_1")).to.equal(true);
        expect(coldivs.classList.contains("col_xl_offset_2")).to.equal(true);
        done();
      });
    });
    it("是否存在 xxl", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
                <g-row gutter="20">
                  <g-col span='1' offset='2' :xxl='{span:1,offset:2}'>1</g-col>
                  <g-col span='22'>2</g-col>  
                </g-row>
                `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children[0];
        expect(coldivs.classList.contains("col_xxl_1")).to.equal(true);
        expect(coldivs.classList.contains("col_xxl_offset_2")).to.equal(true);
        done();
      });
    });
  });
});
