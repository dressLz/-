const util=require('../../../../utils/util.js');
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgurl:'',
    addbookM:false,
    bookList:[],  
    seachIndex:0,
    seachList: [{ 'name': '学科', 'isshow': false }, 
                { 'name': '版本', 'isshow': false }, 
                { 'name': '年级', 'isshow': false }, 
                { 'name': '阶段', 'isshow': false}],   //筛选条件
    list: [{}, {}, {}, {}, {}, {}, {}],
    subjectshow:false,
    seachsub: [[{ 'name': '语文', 'check': true }, { 'name': '数学', 'check': false }, { 'name': '英语', 'check': false }],
              [{ 'name': '上册', 'check': true }, { 'name': '下册', 'check': false }, { 'name': '版本一', 'check': false }],
              [{ 'name': '一年级', 'check': false }, { 'name': '二年级', 'check': false }, { 'name': '三年级', 'check': false }],
              [{ 'name': '阶段一', 'check': true }, { 'name': '阶段二', 'check': false }, { 'name': '阶段三', 'check': false }]],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this.data;
    this.setData({
      imgurl: app.globalData.imgurl
    })
    util.requestFun('GET','/book').then((res)=>{
      this.setData({
        bookList: res.data.data
      })
    })
  },
  //添加到个人列表
  addbook:function(e){
    this.setData({
      addbookM:true
    })
  },
  cancelClick:function(){
    this.setData({
      addbookM:false
    })
  },
  addClick: function () {
    this.setData({
      addbookM: false
    })
    wx.showToast({
      title: '添加成功',
      icon:'none',
      duration:1000,
      mask:true
    })
  },
  //筛选
  seachcondition:function(e){
    let _this=this.data;
    _this.seachIndex = e.currentTarget.dataset.index;
    _this.seachList.forEach((val,index)=>{
      if (index != _this.seachIndex){
        val.isshow=false
      }else{
        val.isshow = !val.isshow
      }
    })
    if (_this.seachList[_this.seachIndex].isshow){
      _this.subjectshow=true
    }else{
      _this.subjectshow = false
    }
    this.setData({
      subjectshow:_this.subjectshow,
      seachList: _this.seachList,
      seachIndex: _this.seachIndex
    })
  },
  //选中
  selectedseach:function(e){
    let index = e.currentTarget.dataset.index,
        _this=this.data;
        _this.seachsub[_this.seachIndex][index].check = true;
        _this.seachsub[_this.seachIndex].forEach((val,indexs)=>{
          if(index!=indexs){
             val.check=false
          }
        })
        _this.seachList[_this.seachIndex].isshow=false;
        this.setData({
          seachsub:_this.seachsub,
          seachIndex: _this.seachIndex,
          seachList: _this.seachList
        })
    setTimeout((res)=>{
      this.setData({
        subjectshow:false,
      })
    },300)
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