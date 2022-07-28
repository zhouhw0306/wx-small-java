// pages/add/add.js
const db = wx.cloud.database()
var util =require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: []
    },



    // 上传图片
    upimages(){
        let that = this
        wx.showActionSheet({
          //itemList: ['上传图片','上传视频'],
          itemList: ['上传图片'],
          success(res){
              if(res.tapIndex == 0){  
                  
                  wx.chooseMedia({
                    count: 9,
                    sizeType: ['original'],
                    mediaType :['image'],
                    sourceType:['album','camera'],
                    success(res){
                        wx.showLoading({
                            title: '上传中',
                        })                   
                        let time = Date.now() //时间
                        for (var i = 0; i < res.tempFiles.length; i++) {
                            wx.cloud.uploadFile({
                                cloudPath:"friends.images/"+time+i, //文件名
                                filePath:res.tempFiles[i].tempFilePath, //文件          
                            })
                            .then(res=>{
                                that.setData({
                                    images:that.data.images.concat(res.fileID)
                                })
                                wx.hideLoading()
                                wx.showToast({
                                  title: '上传成功',
                                  icon:'none'
                                })
                            })
                            
                        }
                    }
                  })
              }
          }
        })

    },


    // 查看图片
    lookimages(e){

        wx.previewImage({
          current : e.currentTarget.dataset.src,
          urls : this.data.images
        })

    },

    //分享
    submitform(e){
        let nick = wx.getStorageSync('user')
        let that = this
        if(!wx.getStorageSync('user')){
            wx.showModal({
                title: '发布失败',
                content:"请先登录",
                success(res){
                    if(res.confirm == true){
                        wx.switchTab({
                          url: '/pages/contact/contact',
                        })
                    }
                }

            })


        }
        else{
            if(e.detail.value.contain==""){
                wx.showToast({
                  title: '请输入内容',
                  icon : 'none'
                })
            }
            else{
                wx.showModal({
                    title:"确定发表",
                    content: "发表后对所有人可见",
                    success(res){                       
                        if(res.confirm==true){
                            db.collection("friends").add({
                                data : {
                                    images : that.data.images,
                                    bosstousrc : nick.avatarUrl,
                                    nick : nick.nickName,
                                    content : e.detail.value.contain,
                                    time : util.formatTime(new Date()),
                                    look : 0
                                }
                            })
                            .then(res=>{
                                wx.showToast({
                                  title: '发布成功',
                                  icon: 'none',
                                  success(res){
                                      wx.switchTab({
                                        url: '/pages/friends/friends',
                                      })
                                  }
                                })
                            })
                        }
                    }
                })
            }
        }


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