"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "webView",
  props: {
    src: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: props.src
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/wangjichao/Documents/HBuilderProjects/yunjianyue/pages/webView.vue"]]);
wx.createPage(MiniProgramPage);
