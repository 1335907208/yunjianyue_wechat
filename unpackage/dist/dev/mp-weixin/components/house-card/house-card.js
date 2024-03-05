"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "house-card",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const style = common_vendor.computed(() => `background: ${props.data.linearGradient}, url("${props.data.bg}"); background-size: 100%`);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.data.facility, (item, i, i0) => {
          return {
            a: i,
            b: common_vendor.n(item.icon)
          };
        }),
        b: common_vendor.t(props.data.star),
        c: common_vendor.t(props.data.tip),
        d: common_vendor.t(props.data.title),
        e: common_vendor.s(common_vendor.unref(style))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4727e604"], ["__file", "/Users/wangjichao/Documents/HBuilderProjects/yunjianyue/components/house-card/house-card.vue"]]);
wx.createComponent(Component);
