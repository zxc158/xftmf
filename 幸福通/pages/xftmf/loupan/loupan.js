// pages/xftmf/loupan/loupan.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    containerShow:true,
    searchPanelShow:false,
    options: [{
      city_id: '001',
      city_name: '北京'
    }, {
      city_id: '002',
      city_name: '上海'
    }, {
      city_id: '003',
      city_name: '深圳'
    }],
    selected: {}
  },
  change (e) {
    this.setData({
      selected: { ...e.detail }
    })
    wx.showToast({
      title: `${this.data.selected.id} - ${this.data.selected.name}`,
      icon: 'success',
      duration: 1000
    })
  },
  close () {
    // 关闭select
    this.selectComponent('#select').close()
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
    var maifangs = []
    for(var idx in maifang.data){
      var data = maifang.data[idx];
      var title= data.title;
      var id = data.id;
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
    }
    this.setData({
      maifangs:maifangs
    })
  },
  onHfdetail:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'hf-detail/hf-detail?id='+postId,
    })
  },
  onBindConfirm:function(event){
    var text = event.detail.value;
    var searchUrl = app.globalData.maifangBase + '/cms/news/list?keywordsLike='+text
    this.getmaifangListData(searchUrl);
  },
  onBindFocus:function(event){
    this.setData({
    containerShow:false,
    searchPanelShow:true
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