// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      winWidth: 0,
      winHeight: 0,
      scrollleft:0,
      currentTab: 0,  
    },

    //跳转详情
    todetail(e){
        //let type = parseInt((e.target.dataset.type),
        wx.navigateTo({
          url: '../detail/detail?type='+e.target.dataset.type
        })
    },    
    
   /** 
   * 滑动切换tab 
   */
  bindChange: function (e) {
    var that = this;
    that.setData({
       currentTab: e.detail.current
        });
 
      this.checkCor();
  },
 
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
 
  checkCor:function(){
    if(this.data.currentTab>4){
      this.setData({
        scrollleft:300
      })
    }else{
      this.setData({
        scrollleft:0
      })
    }
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });  
  },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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