"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "qiun-error",
  props: {
    errorMessage: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.errorMessage == null ? "请点击重试" : $props.errorMessage)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/myminiprog/my-test-project/src/components/qiun-error/qiun-error.vue"]]);
wx.createComponent(Component);
