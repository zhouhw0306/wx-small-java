// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShowUserName:false,
        userInfo:null
    },

    //获取用户信息
    getUserProfile(){
      wx.getUserProfile({
        desc: '用于提供个人服务', //声明获取用途,会展示在弹框中
        success: (res) => {
            let user = res.userInfo
            wx.setStorageSync('user',user) //保存用户信息到本地缓存
            this.setData({
              isShowUserName : true,
              userInfo : user
            })
            wx.showToast({
              title: '登录成功',
            })
        },
        fail: (res) => {
              console.log("获取用户信息失败",res)
        },
      })
    },

    //退出登陆
    quit(){
        let that = this
        wx.showModal({
            
            title : "退出登录",
            content : "是否退出登录",
            success(res){
                if(res.confirm==true){
                    wx.removeStorageSync('user'),
                    that.setData({
                        isShowUserName:false,
                        userInfo:null
                    })
                    wx.showToast({
                      title: '已退出',
                    })
                }
                

            }

        })
        

    },


    me(){
        wx.navigateTo({
          url: '../aboutme/aboutme',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow(options) {
        this.getUserProfile()
        var user = wx.getStorageSync('user'); //从本地缓存取用户信息
        if (user && user.nickName){  //如果用就显示本地缓存
            this.setData({
              isShowUserName : true,
              userInfo : user
            })
        }

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})