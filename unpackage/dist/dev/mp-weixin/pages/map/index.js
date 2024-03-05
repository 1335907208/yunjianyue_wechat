"use strict";
const common_vendor = require("../../common/vendor.js");
const mock_house_mixing = require("../../mock/house/mixing.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onShow((e) => {
      const that = common_vendor.getCurrentInstance().ctx;
      if (typeof that.$scope.getTabBar === "function" && that.$scope.getTabBar()) {
        that.$scope.getTabBar().setData({
          selected: 1
        });
      }
    });
    const scale = common_vendor.ref(17);
    const longitude = common_vendor.ref("117.9894198697375");
    const latitude = common_vendor.ref("30.002691814212554");
    let statusHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    const covers = common_vendor.ref([
      {
        id: 1,
        latitude: 30.002982147610968,
        longitude: 117.99075213624224,
        // iconPath: '/static/icon/map/destination.png',
        alpha: 0,
        width: 0,
        height: 0,
        customCallout: {
          display: "ALWAYS",
          anchorY: 15,
          anchorX: "-50%"
        }
      }
    ]);
    const activeTypeIndex = common_vendor.ref(0);
    const types = [
      "yjy-icon-shoucang",
      "yjy-icon-jingdian",
      "yjy-icon-meishi",
      "yjy-icon-yinpin"
    ];
    const mapTap = (e) => {
      console.log(e, "mapTap");
    };
    const setLocation = () => {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (r) => {
          common_vendor.index.showToast({
            icon: "none",
            title: r
          });
          console.log(r, "rrr");
        }
      });
    };
    common_vendor.onMounted(() => {
      setLocation();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s("top: " + (common_vendor.unref(statusHeight) + 50) + "px;"),
        b: common_vendor.unref(mock_house_mixing.mixing).bg,
        c: scale.value,
        d: latitude.value,
        e: longitude.value,
        f: covers.value,
        g: common_vendor.o(mapTap),
        h: common_vendor.f(types, (icon, i, i0) => {
          return {
            a: common_vendor.n(icon),
            b: activeTypeIndex.value == i ? 1 : "",
            c: i,
            d: common_vendor.o(($event) => activeTypeIndex.value = i, i)
          };
        }),
        i: common_vendor.s("top: " + (activeTypeIndex.value * 50 + 10) + "px")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a3704cdf"], ["__file", "/Users/wangjichao/Documents/HBuilderProjects/yunjianyue/pages/map/index.vue"]]);
wx.createPage(MiniProgramPage);
