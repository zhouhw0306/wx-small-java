// pages/dowork/dowork.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        data : {
            qsType : '单选题',
            question : '线性表的顺序存储结构是一种（）的存储结构',
            optionA : '随机存取',
            optionB : '顺序存取',
            optionC : '索引存取',
            optionD : '散列存取',
            result : 'A',
            analysis : '暂无解析'
        },
        youOption : '空',
        flag : '',
        end : false,
        first : true
    },


    submit(e){

        if(this.data.first){
            this.setData({
                youOption : e.target.dataset.option
            })
            
            if(e.target.dataset.option == this.data.data.result){
                this.setData({
                    flag : '1',
                    end :  true
                })
                return
            }
            this.setData({
                flag : '-1',
                end :  true,
                first : false
            })
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