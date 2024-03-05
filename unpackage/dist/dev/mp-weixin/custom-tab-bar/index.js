Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
        {
            "pagePath": "/pages/index/index",
            "icon": "Explore.png",
        }, 
        {
            "pagePath": "/pages/map/index",
            "icon": "Map.png",
        }, 
        {
            "pagePath": "/pages/hotel/index",
            "center": true,
            "icon": "AR.png",
        }, 
        {
            "pagePath": "/pages/message/index",
            "icon": "Notifications.png",
        }, 
        {
            "pagePath": "/pages/mine/index",
            "icon": "Profile.png",
        }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected: data.index
      })
      wx.switchTab({url})
    }
  }
})