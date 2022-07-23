// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }),
 
    //初始化云环境
    wx.cloud.init({
      env: 'cloud1-9gzdryx18e4b8ab0'
    })

  },
  
  globalData: {
    userInfo: null
  },

})
