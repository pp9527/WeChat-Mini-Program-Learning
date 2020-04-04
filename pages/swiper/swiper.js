// pages/swiper/swiper.js
Page({
  data: {
    imgUrls: [
    'https://picjumbo.com/wp-content/uploads/honey-bee-working-on-a-lavender-flower-2210x1473.jpg',
    'https://picjumbo.com/wp-content/uploads/grossglockner-road-in-austria-2210x1473.jpg',
    'https://picjumbo.com/wp-content/uploads/HNCK4913-2210x1473.jpg',
    'https://picjumbo.com/wp-content/uploads/red-roses-background-2210x1474.jpg',
    'https://picjumbo.com/wp-content/uploads/man-enjoying-a-moody-view-to-the-norwegian-landscape-2210x1243.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})