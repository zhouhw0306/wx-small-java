// pages/challenge/challenge.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    //提交表单,添加进数据库
    btnSub(res){
        var type = parseInt(res.detail.value.type); //转number类型
        var title = res.detail.value.title;
        var context = res.detail.value.context;
        // var {type,title,context} = res.detail.value;
        // var resVlu = res.detail.value;
        wx.showLoading({
          title: '数据提交中',
        })
        db.collection("topicList").add({
            data:{
                type : type,
                title : title,
                context : context
            }
        }).then(res=>{
            console.log(res)
            wx.hideLoading()
        })

        //更新
        // db.collection("topicList").doc('16db756f62dbc4f40bed4a5952cbbbd8').update({
        //     data:{
        //         // type : type,
        //         // title : title,
        //         context : context
        //     }
        // }).then(res=>{
        //     console.log(res)
        //     wx.hideLoading()
        // })

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