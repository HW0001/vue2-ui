const expect = chai.expect;
import Vue from "vue";
import GTabs from "../src/lib/GTabs";
import GTabItem from "../src/lib/GTabItem";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("GTabs && GTabItem", () => {
  it("GTabs存在.", () => {
    expect(GTabs).to.be.ok;
  });
  it("GTabItem存在.", () => {
    expect(GTabItem).to.be.ok;
  });
  describe("props", () => {
  
  });
});
