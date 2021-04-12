// pages/xftmf/wode/wode.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var inUrl = app.globalData.maifangBase + '/cms/news/detail?id=51019'; 
    this.getwdData(inUrl)
  },
  getwdData(url){
    var that =this 
    wx.request({
      url: url,
      method:'GET',
      header:{
        "content-type":'json'
      },
      success:function(res){
        that.processwdData(res.data)
      },
      fail:function(){

      }
    })
  },
  processwdData(wd){
    var data = wd.data;
    var temp = {
      tags:data.tags,
      wdhd:data.descript,
      wdjp:data.income,
      txt1:data.extInfo.txt1,
      txt2:data.extInfo.txt2,
      txt3:data.extInfo.txt3,
      txt4:data.extInfo.txt4,
      src1:data.extInfo.src1,
      src2:data.extInfo.src2,
      src3:data.extInfo.src3,
      src4:data.extInfo.src4,
      src5:data.extInfo.src5,
      src6:data.extInfo.src6,
      src7:data.extInfo.src7,
    }
    this.setData({
      wd:temp,
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