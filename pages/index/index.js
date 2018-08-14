//index.js
//获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myJobList: [],
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
        //console.info(res.windowHeight);
        wx.createSelectorQuery().select('#VIEW1').boundingClientRect(function (rect) {
          //console.log(rect)
          that.setData({ 
          scrollHeight: res.windowHeight - rect.height - 1
          })
        }).exec();
      }
    });
    this.getdata();          
  },

  /**
   * 从数据库获得数据
   */
  getdata: function () {//定义函数名称
    var that = this;   // 这个地方非常重要，重置data{}里数据时候setData方法的this应为以及函数的this, 如果在下方的sucess直接写this就变成了wx.request()的this了
    wx.request({
      url: 'https://slfuil9z.qcloud.la/weapp/myJob',//请求地址
      header: {//请求头
        "Content-Type": "applciation/json"
      },
      method: "GET",//get为默认方法/POST
      success: function (res) {
        console.log(res.data);//res.data相当于ajax里面的data,为后台返回的数据
        　　　　　　that.setData(       
                          {//如果在sucess直接写this就变成了wx.request()的this了.必须为getdata函数的this,不然无法重置调用函数

                            myJobList: res.data.data

        　　　　　　　　　　})
      },
      fail: function (err) { },//请求失败
      complete: function () { console.log(that.myJobList)}//请求完成后执行的函数
    })
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
    
  },

  click:function(e){
    //console.log('-------------click', e.currentTarget.id);
    var fileStr = e.currentTarget.id + '.wxml';
    

    var len = this.data.myJobList.length;
    for(var x=0;x<len;x++)
    {
      if (this.data.myJobList[x].JOB_ID == e.currentTarget.id)
      {
        console.log(this.data.myJobList[x]);
        wx.setStorage({
          key: 'jobDetail',
          data: this.data.myJobList[x],
        })
        break;
      }
    }

    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    })    
  }

})
