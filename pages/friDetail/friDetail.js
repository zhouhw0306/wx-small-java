// pages/friDetail/friDetail.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list : []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this
        db.collection("friends").doc(options._id).get()
        .then(res=>{
            that.setData({
                list : res.data
            })
        })
    },

    //预览图片
    previewSqs(event){
            
        // 拿到图片的地址url
        let currentUrl = event.currentTarget.dataset.src;
        var imgList = []; //定义一个放图片的数组
        // 循环模拟数据的数组取其中的图片字段，将其添加到imgList数组中
        for (let i = 0; i < this.data.list.images.length; i++) {
            imgList.push(this.data.list.images[i]);
        }
        // 调用微信小程序预览图片的方法
        wx.previewImage({
            current: currentUrl, // 当前显示图片的http链接
            urls: imgList // 需要预览的图片http链接列表
        })

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