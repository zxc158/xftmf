// pages/xftmf/shouye.js
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
    var shopUrl = app.globalData.maifangBase + '/shop/goods/category/all'
    var lunboUrl = app.globalData.maifangBase +'/cms/category/info?id=24910'
    this.getmaifangListData(inUrl)
    this.getshopData(shopUrl)
    this.getlunboData(lunboUrl)

    
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
  getshopData:function(url){
    var that =this 
    wx.request({
      url: url,
      method:'GET',
      header:{
        "content-type":'json'
      },
      success:function(res){
        that.processshopData(res.data)
        
      },
      fail:function(){

      }
    })
  },
  getlunboData:function(url){
    var that =this 
    wx.request({
      url: url,
      method:'GET',
      header:{
        "content-type":'json'
      },
      success:function(res){
        that.processlunboData(res.data)
        
      },
      fail:function(){

      }
    })
  },
  processlunboData:function(lunbos){
    var data = lunbos.data;
    var temp = {
      src1:data.extJson.src1,
      src2:data.extJson.src2,
      src3:data.extJson.src3,
    }
    this.setData({
      lunbo:temp,
    })
  },
  processshopData:function(shops){
    var shop = []
    for(var idx in shops.data){
      var data = shops.data[idx];
      var temp={
        icon:data.icon,
        name:data.name,
        id:data.id
      }
      shop.push(temp)
    }
    this.setData({
      shop:shop
    })
  },
  processmaifangData:function(maifang){
    var maifangs = [];
    var hd = [];
    for(var idx in maifang.data){
      var data = maifang.data[idx];
      var title= data.title;
      var id = data.id;
      if(title.length>=12){
        title = title.substring(0,12)+"...";
      }
      var categoryId=data.categoryId;
      if(categoryId===24353){
        var temp={
          title:title,
          author:data.author,
          income:data.income,
          descript:data.descript,
          keywords:data.keywords,
          pic:data.pic,
          tags:data.tags,
          id:id
        }
        maifangs.push(temp);
      }
      if(categoryId===24782){
        var temp={
          pic:data.pic,
          title:title,
          keywords:data.keywords,
          id:id
        }
        hd.push(temp)
      }
    }
    this.setData({
      maifangs:maifangs,
      hd:hd
    })
  },
  onMorehd:function(){
    wx.navigateTo({
      url: 'more-hd/more-hd',
    })
  },
  onMoretj:function(){
    wx.navigateTo({
      url: 'more-tj/more-tj',
    })
  },
  onHddetail:function(event){
    var hdId = event.currentTarget.dataset.hdid;
    wx.navigateTo({
      url: 'hd-detail/hd-detail?id='+hdId,
    })
  },
  onHfdetail:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'loupan/hf-detail/hf-detail?id='+postId,
    })
  },
  onzjxf:function(event){
    var shopId = event.currentTarget.dataset.shopid;
    wx.navigateTo({
      url: 'zjxf/zjxf?id='+shopId,
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