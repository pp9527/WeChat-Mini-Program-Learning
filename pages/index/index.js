//index.js
//获取应用实例
const app = getApp()

Page({
  gotomypage: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})
