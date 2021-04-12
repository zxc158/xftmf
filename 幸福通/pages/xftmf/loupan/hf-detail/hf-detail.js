// pages/xftmf/loupan/hf-detail/hf-detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var postId = options.id;
    this.data.currentPostId = postId
    var inUrl = app.globalData.maifangBase + '/cms/news/detail?id='+postId;
    this.gethfxqData(inUrl)
    var postsCollected = wx.getStorageSync('posts_collected')
    if(postsCollected){
      var postCollected = postsCollected[postId]
      if(postCollected){
        this.setData({
            collected:postCollected
        })
      }
    }else{
      var postsCollected={}
      postsCollected[postId]=false
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },
  gethfxqData:function(url){
    var that =this 
    wx.request({
      url: url,
      method:'GET',
      header:{
        "content-type":'json'
      },
      success:function(res){
        that.processhfxqData(res.data)
      },
      fail:function(){

      }
    })
  },
  processhfxqData:function(hfxq){

    var data = hfxq.data;
    var temp = {
      src:data.extInfo.src,
      src2:data.extInfo.src2,
      src3:data.extInfo.src3,
      src4:data.extInfo.src4,
      sc:data.extInfo.sc,
      scs:data.extInfo.scs,
      title:data.title,
      income:data.income,
      author:data.author,
      descript:data.descript,
      zdmj:data.extInfo.zdmj,
      kpsj:data.extInfo.kpsj,
      lpdz:data.extInfo.lpdz,
      lpld:data.extInfo.lpld,
      pp:data.extInfo.pp,
      wz:data.extInfo.wz,
      jt:data.extInfo.jt,
      zb:data.extInfo.zb,
    }
    this.setData({
      hf:temp,
    })
  },
  onCollectionTap:function(event){
    var postsCollected=wx.getStorageSync("posts_collected");
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId]=postCollected
    //更新文章是否的缓存值
    wx.setStorageSync('posts_collected', postsCollected)
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected:postCollected
    })

    wx.showToast({
      title: postCollected?'收藏成功':'取消成功',
      duration:1000,
      icon:'success'
    })
  },
  handleSwiper: function(e){
    var that = this
    that.setData({
       current: e.detail.current+1
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