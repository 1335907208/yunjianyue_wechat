"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_house_list = require("../../mock/house/list.js");
require("../../mock/house/mixing.js");
require("../../mock/house/zuyu.js");
require("../../mock/house/lanyue.js");
if (!Array) {
  const _easycom_house_card2 = common_vendor.resolveComponent("house-card");
  _easycom_house_card2();
}
const _easycom_house_card = () => "../../components/house-card/house-card.js";
if (!Math) {
  _easycom_house_card();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onShow((e) => {
      const that = common_vendor.getCurrentInstance().ctx;
      if (typeof that.$scope.getTabBar === "function" && that.$scope.getTabBar()) {
        that.$scope.getTabBar().setData({
          selected: 0
        });
      }
    });
    common_vendor.index.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: ""
    });
    let res = common_vendor.index.getSystemInfoSync();
    let statusHeight = res.statusBarHeight;
    const pageChange = (url) => {
      common_vendor.index.navigateTo({ url });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s("height: " + common_vendor.unref(statusHeight) + "px;"),
        b: common_vendor.f(common_vendor.unref(mock_house_list.houseList), (item, i, i0) => {
          return {
            a: "1cf27b2a-0-" + i0,
            b: common_vendor.p({
              data: item
            }),
            c: i
          };
        }),
        c: common_vendor.o(($event) => pageChange("/pages/webView?src=https://mp.weixin.qq.com/s/hxRSIx-lkhdwqCccrL9V1A"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/wangjichao/Documents/HBuilderProjects/yunjianyue/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
