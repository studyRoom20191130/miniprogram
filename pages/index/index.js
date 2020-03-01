const log = console.log.bind(console)
const {basicUrl} = require('../../utils/basic.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    password: "",
    invite: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.__autoLogin()
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

  inputUserName(e) {
    const v = e.detail.value
    // log('value', v)
    this.setData({
      username: v
    })
  },

  inputPassword(e) {
    const v = e.detail.value
    // log('value', v)
    this.setData({
      password: v
    })
  },

  inputInvite(e) {
    const v = e.detail.value
    // log('value', v)
    this.setData({
      invite: v
    })
  },

  onLogin() {
    const { username, password } = this.data
    if (this.data.invite != "坚持记录下去！") {
      wx.showToast({
        title: "请输入邀请码!",
        icon: "none"
      })
      return
    }
    if (!username || !password) {
      log('不对')
    } else {
      this.__ajaxLogin(username, password)
    }
  },

  __autoLogin() {
    const { username, password } = this.__getStorage()
    if (!username || !password) {
      log('不对')
    } else {
      this.__ajaxLogin(username, password)
    }
  },

  // 登录
  __ajaxLogin(username, password) {
    const that = this
    wx.request({
      url: `${basicUrl}/login`,
      method: "post",
      data: {
        username,
        password,
      },
      success(res) {
        const { data } = res
        // 存入缓存
        that.__saveToStorage(data)
        // 跳转页面
        wx.navigateTo({
          url: '/pages/logs/logs',
        })
      }
    })
  },

  // 存入缓存
  __saveToStorage(data) {
    // log('save', data)
    const arr = data.split('-')
    const username = arr[0]
    const password = arr[1]
    wx.setStorageSync('username', username)
    wx.setStorageSync('password', password)
  },

  // 读取缓存
  __getStorage() {
    const username = wx.getStorageSync('username') || ''
    const password = wx.getStorageSync('password') || ''
    // log(username, password)
    return {
      username, 
      password,
    }
  }
})