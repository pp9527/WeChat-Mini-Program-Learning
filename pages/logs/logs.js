//logs.js
const app = getApp()

Page({
  gotoscroll_view: function () {
    wx.navigateTo({
      url: '../scroll_view/scroll_view'
    })
  },
  gotoswiper: function () {
    wx.navigateTo({
      url: '../swiper/swiper'
    })
  },
  gotoicon: function () {
    wx.navigateTo({
      url: '../icon/icon'
    })
  },
  gotoprogress: function () {
    wx.navigateTo({
      url: '../progress/progress'
    })
  },
  gototext: function () {
    wx.navigateTo({
      url: '../text/text'
    })
  }
})