
var jobDatalist = require("../index/index");


Page({

  data: {
  },

  onLoad: function (option) {
    
    var that = this;
        
    wx.getStorage({
      key: 'jobDetail',
      success: function (res) {
        that.setData(
          {

            data: res.data

          })
      }
    })    

  },

    /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('in detail.js onUnload')
  },

})