//index.js
//获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myJobList: ['test1','test2','test3','test4','test5','test6','test7','test8','test9','test10','test11','test12','test13','哈哈哈','啦啦啦','哒哒哒'],
    scrollHeight:0,
  },

  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },

  //弹出框蒙层截断touchmove事件

  onTouchMove: function onPreventTouchMove(e) {
    console.log(e)
    //阻止弹出层滑动事件，空函数，不做任何处理

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        wx.createSelectorQuery().select('#VIEW1').boundingClientRect(function (rect) {
          console.log(rect)
          that.setData({ 
          scrollHeight: res.windowHeight - rect.height - 1
          })
        }).exec();
      }
    });      

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})

