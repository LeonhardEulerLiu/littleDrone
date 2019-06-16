// pages/videoCont/videoCont.js
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 2,  //视频类型。
    id: 1009,

    pubTime: [{
      name: 'div',
      attrs: {
        class: 'news_author'
      },
      children: [{
        type: 'text',
        text: '2019/04/03 17:51:28'
      }]
    }],
    title: [{
      name: 'div',
      attrs: {
        class: 'news_title'
      },
      children: [{
        type: 'text',
        text: '拥有这样的一款“航拍无人机”，能让你拍摄出来不一样的短视频'
      }]
    }],
    author: [{
      name: 'div',
      attrs: {
        class: 'news_author'
      },
      children: [{
        type: 'text',
        text: '乐天趣闻科普号'
      }]
    }],
    readCount: [{
      name: 'div',
      attrs: {
        class: 'news_author'
      },
      children: [{
        type: 'text',
        text: '本视频观看量：'
      },
      {
        type: 'text',
        text: '50'
      }]
    }],

    videoSrc: 'http://localhost:8080/media/teenager.mp4',

    content: '',  //处理之后的

    raw_content: '<div><p>&nbsp;&nbsp;&nbsp;&nbsp; 本视频展示了航拍无人机在短视频里的应用。</p></div>', //处理之前的

    comment_title: [{
      name: 'div',
      attrs: {
        class: 'comment_title'
      },
      children: [{
        type: 'text',
        text: '　评论'    //固定，不改动
      }]
    }],

    commentItem: [
      
    ],

    //欲添加评论者的用户信息
    userName: "",
    userAva: "",
    titleForComm: ""        //冗余信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    console.log("The id to refer to:" + options.id);
    console.log("IN DATA: type:" + this.data.type + ", id:" + this.data.id);
    loadVideoContent(this.data.id, this);
    loadVideoComment(this.data.id, this);
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
    reloadVideoComment(this.data.id, this);
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
    loadVideoContent(this.data.id, this);
    reloadVideoComment(this.data.id, this);
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

  afterGettingUser: function (res) {
    utils.afterGettingUser(this, res);
  }
})

function loadVideoContent(queryId, page) {
  var self = page;
  console.log("Start requesting content ...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/content/" + queryId,
    method: "GET",
    success: function (res) {
      console.log("Request content successful!");
      console.log(res.data);
      //直接修改内容，不append
      var result = res.data;
      var pubTimeStr = "pubTime[0].children[0].text",
      titleStr = "title[0].children[0].text",
      authorStr = "author[0].children[0].text",
      readCountStr = "readCount[0].children[1].text";
      self.setData({
        [pubTimeStr]: result.pubTime,
        [titleStr]: result.title,
        [authorStr]: result.author,
        [readCountStr]: result.readCount + "",
        raw_content: result.content,
        videoSrc: utils.localPic(result.videoSrc)
      });
      var cont = self.data.raw_content;
      console.log("Loading content successful!");
      transferText(self, cont);
    },
    fail: function () {
      console.log("Request content failed!");
    }
  })
}

function loadVideoComment(queryId, page) {
  var self = page;
  console.log("Start requesting comments...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/comment/" + queryId,
    method: "GET",
    success: function (res) {
      console.log("Request comments successful!");
      console.log(res.data);
      var resList = res.data, oriList = self.data.commentItem;
      for (var i = 0; i < resList.length; i++) {
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        commentItem: oriList
      })
    },
    fail: function () {
      console.log("Request comments failed!");
    }
  })
}

function reloadVideoComment(queryId, page) {
  var self = page;
  console.log("Start requesting comments...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/comment/" + queryId,
    method: "GET",
    success: function (res) {
      console.log("Request comments successful!");
      console.log(res.data);
      var resList = res.data, oriList = [];
      for (var i = 0; i < resList.length; i++) {
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        commentItem: oriList
      })
    },
    fail: function () {
      console.log("Request comments failed!");
    }
  })
}

function escape2Html(str) {
  var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': '　', 'amp': '&', 'quot': '"' };
  return str.replace(/(&nbsp;){2}/ig, "&nbsp;")
    .replace(/&(lt|gt|nbsp|amp|quot);/ig,
      function (all, t) { return arrEntities[t]; })
    .replace(/<section/ig, '<div')
    .replace(/<img/ig, '<img style="max-width:100%;height:auto" ')
    .replace(/<div/ig, '<div style="font-size:10pt"')
    .replace(/<p/ig, '<p style="padding: 10px 0px 0px 0px"')
}

function localizationImg(str) {
  return str.replace(/src="http:\/\/localhost/ig, "src=\"http://" + utils.hostIp)
    .replace(/src='http:\/\/localhost/ig, "src='http://" + utils.hostIp)
}

function transferText(page, str) {
  let that = page;
  const myrich = localizationImg(escape2Html(str));
  console.log(myrich);

  that.setData({
    content: myrich
  })
}

// {
//   id: 1010,
//     nickName: '小张',
//       avatar: '/others/images/userBear.png',
//         commCont: '太NB啦！',
//           commTime: '2019/04/20 07:20:10'
// },
// {
//   id: 1011,
//     nickName: '小张',
//       avatar: '/others/images/userBear.png',
//         commCont: '太NB啦！',
//           commTime: '2019/04/20 07:20:20'
// }