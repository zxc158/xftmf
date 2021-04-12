// pages/xftmf/hd-detail/hd-detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hdId = options.id;
    console.log(hdId);
    var inUrl = app.globalData.maifangBase + '/cms/news/detail?id='+hdId;
    this.gethdxqData(inUrl)
  },
  gethdxqData:function(url){
    var that =this 
    wx.request({
      url: url,
      method:'GET',
      header:{
        "content-type":'json'
      },
      success:function(res){
        that.processhdxqData(res.data)
      },
      fail:function(){

      }
    })
  },
  processhdxqData:function(hdxq){

    var data = hdxq.data;
    var temp = {
      pic:data.pic,
      title:data.title,
      hdsj:data.keywords,
      hddd:data.tags,
      hdjj:data.descript
    }
    this.setData({
      hd:temp,
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

  }
})