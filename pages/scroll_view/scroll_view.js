// pages/scroll_view/scroll_view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrolltop:40
  },
  move:function () {
    this.setData({
      scrolltop:this.data.scrolltop + 30
    })
  }
})