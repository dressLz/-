const app = getApp()
const util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [{}, { check: false, download: false, before: false }, { check: false, download: false, before: false },
      { check: false, download: false, before: false }, { check: false, download: false, before: false },
      { check: false, download: false, before: false }, { check: false, download: false, before: false },
      { check: false, download: false, before: false }, { check: false, download: false, before: false },
      { check: false, download: false, before: false }, { check: false, download: false, before: false },
      { check: false, download: false, before: false }, { check: false, download: false, before: false }],
    showmodal:false,
    operating:false,
    edittabber:false,
    tips:false,
    chenum:0,
  },
  /*** 生命周期函数--监听页面加载*/
  onLoad: function (options) {
  },
  //长按
  userPress:function(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      operating:true,
      edittabber:true,
    })
  },
  editcheck:function(e){
   let index=e.currentTarget.dataset.index,
      _this=this.data;
    _this.list[index].check = !_this.list[index].check;
    let result = _this.list.filter(val => val.check == true);
    this.setData({
      list:_this.list,
      chenum:result.length
    })
  },
  // 添加
  addbook:function(){
    wx.navigateTo({
      url: '../look/pages/addbook/addbook',
    })
  },
  //详情
  infobook:function(){
    wx.navigateTo({
      url: '../read/read',
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