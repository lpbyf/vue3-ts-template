"use strict";
const common_vendor = require("../../common/vendor.js");
const services_myTest = require("../../services/myTest.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Math) {
  MyUchartsDayData();
}
const MyUchartsDayData = () => "../../components/MyUchartsDayData.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const getTodayData = async () => {
      const res = await services_myTest.getTodayDatAPI();
      console.log(res);
    };
    common_vendor.onLoad(() => {
    });
    common_vendor.onMounted(() => {
    });
    const clickTest1 = () => {
      console.log("点击了！");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getTodayData),
        b: common_vendor.o(clickTest1)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myminiprog/my-test-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
