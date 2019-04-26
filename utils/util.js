const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 网络请求
function requestFun(type,url,data){
  var data=new Promise(function(resolve,reject){
    wx.request({
      url: 'https://api.audiobook.dev.taozhi.cn' + url,
      method: type,
      data: data,
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject("系统异常，请重试！")
      },
      complete: function (res) {
        wx.hideLoading()
      },
    })
  });
  return data;
}
module.exports = {
  formatTime: formatTime,
  requestFun:requestFun,
}
