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
    it("是否存在gutter", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
      <g-row gutter="20">
        <g-col>1</g-col>
        <g-col>2</g-col>
        <g-col>3</g-col>
      </g-row>
      `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        const coldivs = rowdiv.children;
        expect(getComputedStyle(rowdiv).marginLeft).to.equal("-10px");
        expect(getComputedStyle(rowdiv).marginRight).to.equal("-10px");
        expect(getComputedStyle(coldivs[0]).paddingLeft).to.equal("10px");
        expect(getComputedStyle(coldivs[0]).paddingRight).to.equal("10px");
        done();
      });
    });
    it("align = left", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
        <g-row gutter="20" align='left'>
          <g-col>1</g-col>
          <g-col>2</g-col>
          <g-col>3</g-col>
        </g-row>
        `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        expect(getComputedStyle(rowdiv).justifyContent).to.equal("flex-start");
        done();
      });
    });
    it("align = center", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
          <g-row gutter="20">
            <g-col>1</g-col>
            <g-col>2</g-col>
            <g-col>3</g-col>
          </g-row>
          `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        expect(getComputedStyle(rowdiv).justifyContent).to.equal("center");
        done();
      });
    });
    it("align = right", (done) => {
      Vue.component("g-row", GRow);
      Vue.component("g-col", GCol);
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
          <g-row gutter="20" align='right'>
            <g-col>1</g-col>
            <g-col>2</g-col>
            <g-col>3</g-col>
          </g-row>
          `;
      vm = new Vue({
        el: div,
      });
      setTimeout(() => {
        const rowdiv = vm.$el.children[0];
        expect(getComputedStyle(rowdiv).justifyContent).to.equal("flex-end");
        done();
      });
    });
  });
});
