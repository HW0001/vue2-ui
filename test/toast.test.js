const expect = chai.expect;
import Vue from "vue";
import GToast from "../src/lib/GToast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("GToast", () => {
  it("存在.", () => {
    expect(GToast).to.be.ok;
  });
  describe("props",(done)=>{
    const Comstructor = Vue.extend(GToast)
    const vm = new Comstructor({
        propsData:{
            autoClose:true,
            autoCloseDelay:2
        }
    })
    vm.$mount()
    setTimeout(()=>{
        expect(vm.$el).to.be.null
        done()
    },3)
  })
});
