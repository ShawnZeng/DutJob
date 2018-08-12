
var jobDatalist = require("../index/index");


Page({

  data: {
    jobDetail: [],
  },

  onLoad: function (option) {
    
    var that = this;
    console.log("print data")    
    wx.getStorage({
      key: 'jobDetail',
      success: function (res) {
        that.setData(
          {

            jobDetail: res.data

          })
      }
    })    

  }

})