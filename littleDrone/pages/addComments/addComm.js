// pages/addComments/addComm.js
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '电子竞技员、无人机驾驶员、农业经理人，13个新职业来了',

    addCommTitle:[{
      name: 'div',
      attrs:{
        class: 'commentTitle'
      },
      children:[{
        type: 'text',
        text: 'undefined'  /* 修改 */
      }]
    }],
    addCommInstruction:[{
      name: 'div',
      attrs:{
        class: 'commentInstruction'
      },
      children:[{
        type: 'text',
        text: '您正在为'
      },
      {
        type: 'text',
        text: 'undefined'        /* 修改 */
      },
      {
        type: 'text',
        text: '　"'
      },
      {
        name: 'span',
        attrs:{
          style: "color: red;"
        },
        children:[{
          type: 'text',
          text: 'undefined'    /* 修改 */
        }]
      },
      {
        type: 'text',
        text: '"　'
      },
      {
        type: 'text',
        text: '添加评论。请注意，此评论将会与您的头像、昵称一起展示，发表评论之后您将不能修改或删除此评论。请您务必为自己的言论负责。'
      }]
    }],
    addCommWarning:[{
      name: 'div',
      attrs:{
        class: 'commentWarning'
      },
      children:[{
        type: 'text',
        text: '请知悉：提交后将无法更改、删除您的评论！'
      }]
    }],

    //数据提交信息
    type: -1,              //1:新闻， 2:视频
    typeId: -1,
    nickName: "",
    avatar: "",
    commCont: "",         //需要收集
    commTime: "",          //需要收集

    //类型映射
    typeNum: [
      "新闻",
      "视频"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var time = utils.formatTime(new Date());
    var boldTitle = "addCommTitle[0].children[0].text";
    var instTitle = "addCommInstruction[0].children[3].children[0].text";
    var instType = "addCommInstruction[0].children[1].text";
    console.log(options.title);
    this.setData({
      nickName: options.nickName,
      avatar: options.avatar,
      // commTime: time,
      type: options.type,
      typeId: options.typeId,
      title: options.title,
      [instTitle]: options.title,
      [boldTitle]: options.title,
      [instType]: this.data.typeNum[options.type-1]
    });
    // console.log(this.data.type);
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

  cancelBtn: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  submitBtn: function(res) {
    var cont = res.detail.value.commArea;
    var time = utils.formatTime(new Date());
    this.setData({
      commTime: time,
      commCont: cont
    });
    submitComment(this);    //里面有submitSuccess()
  },

  saveCont: function(res) {
    var self = this;
    self.setData({
      commCont: res.detail.value
    });
    console.log(self.data.commCont);
  }
})

function submitSuccess(){
  wx.showToast({
    title: "提交成功！",
    icon: 'success',
    mask: true,
    success: function () {
      setTimeout(function () {
        wx.navigateBack({
          delta: 1
        });
      }, 1500);
    }
  });
}

function submitComment(page){
  var self = page;
  console.log("Ready to send. The content: " + self.data.commCont + " The time: " + self.data.commTime);
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/comment/submit",      //使用传统的data方案（带有?）
    data: {
      type: self.data.type,
      typeId: self.data.typeId,
      nickName: self.data.nickName,
      avatar: self.data.avatar,
      commTime: self.data.commTime,
      commCont: self.data.commCont
    },
    method: "GET",
    success: function(res) {
      console.log("Waiting for response...");
      console.log(res.data);
      var result = res.data;
      console.log("Submitted. Affected " + result + " rows");
      submitSuccess();
    },
    fail: function() {
      console.log("Submit failed!");
      submitSuccess();
    }
  })
}