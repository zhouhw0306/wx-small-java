// pages/friends/friends.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {

        list:[],
        openid : "oB0bP5CYzznfkmIy81JAVmZEvkBw"
    },

    //跳转详情
    godetail(e){
        let _id = e.currentTarget.dataset.item._id
        let look = e.currentTarget.dataset.item.look
        
        let that = this;      
        that.upLook(_id,look)

        wx.navigateTo({
          url: '../friDetail/friDetail?_id='+_id,
        })
    },

    //更新浏览数
    upLook(a,b){
        
        db.collection("friends").doc(a).update({
            data:{
                look : b+1
            }
        })

    },


    //add提问
    add(){
        wx.navigateTo({
            url : '/pages/add/add'
        })
    },

    //预览图片
    previewSqs(event){
        
        // 拿到图片的地址url
        let currentUrl = event.currentTarget.dataset.src;
        let index = event.currentTarget.dataset.index;
 
        var imgList = []; //定义一个放图片的数组
        // 循环模拟数据的数组取其中的图片字段，将其添加到imgList数组中
        for (let i = 0; i < this.data.list[index].images.length; i++) {
            imgList.push(this.data.list[index].images[i]);
        }
        // 调用微信小程序预览图片的方法
        wx.previewImage({
            current: currentUrl, // 当前显示图片的http链接
            urls: imgList // 需要预览的图片http链接列表
        })

    },

    //删除
    delete(e){
        let id = e.target.dataset._id
        wx.showModal({
          title : "删除动态",
          content : "确定删除,删除后不可恢复",
          success(res){
              if(res.confirm == true){
                  db.collection("friends").doc(id).remove()
                  .then(res=>{
                      wx.showToast({
                        title: '删除成功',
                        icon :"none"
                      })
                      wx.switchTab({
                        url: '/pages/friends/friends',
                      })
                  })
              }
          }

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
    onShow() {
        var that = this
        db.collection("friends").orderBy('time','desc').get()
        .then(res=>{
            that.setData({
                list : res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
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