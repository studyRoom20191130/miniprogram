const log = console.log.bind(console)
const { basicUrl } = require('../../utils/basic.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyList: [],

    onlineUser: ["hello", "风行", "life"],

    start: 233,
    end: 466,
    howLongTime: 222,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStudyList()
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
    
  },

  startTimer() {
    log('start')
  },

  stopTimer() {
    log("end")
  },

  getStudyList() {
    this.__ajaxGetStudyDataList()
  },

  getOnlineUser() {

  },

  __ajaxGetStudyDataList() {
    const that = this
    const today = "2020年03月01日"
    wx.request({
      url: `${basicUrl}/getStudyDataList`,
      method: "post",
      data: {
        today
      },
      success(res) {
        const { data } = res
        that.setData({
          studyList: data
        })
      }
    })
  }
})