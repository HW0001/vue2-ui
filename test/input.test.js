const expect = chai.expect;
import Vue from "vue";
import GInput from "../src/lib/GInput";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("GInput", () => {
  it("存在.", () => {
    expect(GInput).to.be.ok;
  });
  let vm;
  const Constructor = Vue.extend(GInput);
  describe("属性测试", () => {
    afterEach(() => {
      vm.$destroy();
    });
    it("是否存在value", () => {
      vm = new Constructor({
        propsData: {
          value: "hi",
        },
      }).$mount();
      const input = vm.$el.querySelector("input");
      expect(input.value).to.equal("hi");
    });
    it("是否存在disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      const input = vm.$el.querySelector("input");
      expect(input.disabled).to.equal(true);
    });
    it("是否存在readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount();
      const input = vm.$el.querySelector("input");
      expect(input.readOnly).to.equal(true);
    });
  });

  describe("事件测试", () => {
    it("input/change/focus/blur事件测试", () => {
      const events = ["input", "change", "focus", "blur"];
      events.forEach((eventName) => {
        vm = new Constructor({ value: "hi" }).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        const event = new Event(eventName);
        Object.defineProperty(event, "target", {
          value: { value: "hi" },
          enumerable: true,
        });
        const inputElement = vm.$el.querySelector("input");
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith("hi");
      });
    });
  });
});
