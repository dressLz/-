// pages/read/read.js
const util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: '',
    bottom_show:false,
    leftul_show:false,
    speechrate:false,
    activeIndex:0,
    bookset:[],
    startX: 0,
    moveX: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this.data;
    this.setData({
      imgurl: app.globalData.imgurl
    })
    util.requestFun('GET', '/book/page?bookId=1').then((res)=>{
      console.log(res.data.data)
      this.setData({
        bookset: res.data.data
      })
    }).catch((res)=>{
      console.log(res)
    })
  },
  touchStart:function(e){
    this.data.startX= e.touches[0].pageX
  },
  touchMove: function (e) {
    this.data.moveX = e.touches[0].pageX;
  },
  touchEnd:function(e){
    let _this = this.data;
    if (this.data.moveX - this.data.startX>100){
      this.setData({
        leftul_show:true
      })
    } else if (this.data.moveX - this.data.startX < -100){
      this.setData({
        leftul_show: false
      })
    }
  },
  showControl:function(){
      this.setData({
        bottom_show: !this.data.bottom_show
      })
  },
  maskmouver:function(){
   
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