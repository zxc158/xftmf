// pages/xftmf/more-hd/more-hd.js
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
    var inUrl = app.globalData.maifangBase + '/cms/news/list';
    this.getmaifangListData(inUrl)
    
  },
  getmaifangListData:function(url){
    var that =this 
    wx.request({
      url: url,
      method:'GET',
      header:{
        "content-type":'json'
      },
      success:function(res){
        that.processmaifangData(res.data)
      },
      fail:function(){

      }
    })
  },
  processmaifangData:function(maifang){
    var hd = []
    for(var idx in maifang.data){
      var data = maifang.data[idx];
      var title= data.title;
      var categoryId=data.categoryId;
      if(categoryId===24782){
        var temp={
          title:title,
          keywords:data.keywords,
          pic:data.pic,
        }
        hd.push(temp);
      }
    }
    this.setData({
      hd:hd
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