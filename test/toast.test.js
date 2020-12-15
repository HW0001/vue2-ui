const expect = chai.expect;
import Vue from "vue";
import GToast from "../src/lib/GToast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("GToast", () => {
  it("存在.", () => {
    expect(GToast).to.be.ok;
  });
  describe("props", () => {
    const Comstructor = Vue.extend(GToast);
    it("autoClose 和 autoCloseDelay", (done) => {
      const vm = new Comstructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 0.5,
        },
      });
      const div =  document.createElement("div")
      document.body.append(div)
      vm.$mount(div);
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false); 
        done();
      }, 1800);
    });

    it("showClose", () => {
        const vm = new Comstructor({
          propsData: {
            showClose: true,
          },
        });
        const div =  document.createElement("div")
        document.body.append(div)
        vm.$mount(div);
        expect(vm.$el.querySelector("use").getAttribute("xlink:href")).to.eq("#i-close")
      });

      it("使用html", () => {
        const vm = new Comstructor({
          propsData: {
            useHtml: true,
          },
        });
        vm.$slots.default=["<a>a标签</a>"]
        const div =  document.createElement("div")
        document.body.append(div)
        vm.$mount(div);
        expect(vm.$el.querySelector("a")).to.be.ok
      });

      it("position", () => {
        const vm = new Comstructor({
          propsData: {
            position: "top",
          },
        }); 
        const div =  document.createElement("div")
        document.body.append(div)
        vm.$mount(div);
        expect(vm.$el.classList.contains("g-toast-position-top")).to.eq(true)
      });

      it("position", () => {
        const vm = new Comstructor({
          propsData: {
            position: "middle",
          },
        }); 
        const div =  document.createElement("div")
        document.body.append(div)
        vm.$mount(div);
        expect(vm.$el.classList.contains("g-toast-position-middle")).to.eq(true)
      });

      it("position", () => {
        const vm = new Comstructor({
          propsData: {
            position: "bottom",
          },
        }); 
        const div =  document.createElement("div")
        document.body.append(div)
        vm.$mount(div);
        expect(vm.$el.classList.contains("g-toast-position-bottom")).to.eq(true)
      });
  });
});
