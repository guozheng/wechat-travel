const app = getApp()

Page({
  data: {
    name: "阿呆",
    showSearchView: true,
    showNewsView: false,
    showAboutView: false
  },

  onLoad: function () {
    console.log("index page loaded!")
  },

  onTabChange: function(event) {
    const activeKey = event.detail.activeKey
    console.log("Tab changed to " + activeKey)
    if (activeKey == "search") {
      this.setData({
        showSearchView: true,
        showNewsView: false,
        showAboutView: false
      })
    } else if (activeKey == "news") {
      this.setData({
        showSearchView: false,
        showNewsView: true,
        showAboutView: false
      })
    } else if (activeKey == "about") {
      this.setData({
        showSearchView: false,
        showNewsView: false,
        showAboutView: true
      })
    }
  }
})
