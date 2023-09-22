"use strict";
const common_vendor = require("../../common/vendor.js");
const services_myTest = require("../../services/myTest.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(services_myTest.getTodayDatAPI) && common_vendor.unref(services_myTest.getTodayDatAPI)(...args)
        )
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/myminiprog/my-test-project/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
