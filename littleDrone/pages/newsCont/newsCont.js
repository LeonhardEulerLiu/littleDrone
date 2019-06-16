// pages/content_news1/content_news1.js
var utils = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: 1,    //新闻类型。
    id: 1003,
    
    pubTime: [{
      name: 'div',
      attrs: {
        class: 'news_author'
      },
      children: [{
        type: 'text',
        text: '2019/04/03 17:51:00'
      }]
    }],
    title:[{
      name: 'div',
      attrs: {
        class: 'news_title'
      },
      children:[{
        type: 'text',
        text: '电子竞技员、无人机驾驶员、农业经理人，13个新职业来了'
      }]
    }],
    author:[{
      name: 'div',
      attrs:{
        class: 'news_author'
      },
      children:[{
        type: 'text',
        text: '北京日报客户端'
      }]
    }],
    readCount:[{
      name: 'div',
      attrs:{
        class: 'news_author'
      },
      children:[{
        type: 'text',
        text: '本文阅读量：'
      },
      {
        type: 'text',
        text: '50'
      }]
    }],
    content: '',          //经过raw_content处理后传入此中。处理函数见util.js

    raw_content: '<div><p>&nbsp;&nbsp;&nbsp;&nbsp; 人力资源社会保障部、市场监管总局、统计局正式向社会发布了人工智能工程技术人员、物联网工程技术人员、大数据工程技术人员、云计算工程技术人员、数字化管理师、建筑信息模型技术员、电子竞技运营师、电子竞技员、无人机驾驶员、农业经理人、物联网安装调试员、工业机器人系统操作员、工业机器人系统运维员等13个新职业信息。 </p><p>&nbsp;&nbsp;&nbsp;&nbsp;这是自2015年版国家职业分类大典颁布以来发布的首批新职业。</p><p><img src="/others/images/minecraftDrone.jpg" /></p><p>&nbsp;&nbsp;&nbsp;&nbsp;新职业是在向社会公开征集的基础上，经专家评审、公示征求意见后，按程序遴选确定的。此次共征集到43个建议职业，经专家严格评审，报人力资源社会保障部、市场监管总局、统计局批准，最终发布13个新职业信息。这13个新职业主要集中在高新技术领域，对从业人员知识、技能水平具有较高要求。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;首批新职业主要集中在高新技术领域，具有以下几个特点:</p></div>',    //由数据库的content属性传入

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

    commentItem:[
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
    loadNewsContent(this.data.id, this);
    loadNewsComment(this.data.id, this);
    // this.whatVersion();
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
    reloadNewsComment(this.data.id, this);
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
    loadNewsContent(this.data.id, this);
    reloadNewsComment(this.data.id, this);
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

  afterGettingUser: function(res){
    utils.afterGettingUser(this, res);
  },

})

function loadNewsContent(queryId, page) {
  var self = page;
  var res="";
  console.log("Start requesting content ...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/content/" + queryId,
    method: "GET",
    success: function(res) {
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
        raw_content: result.content
      });
      console.log("Loading content successful!");
      transferText(self, self.data.raw_content);
    },
    fail: function() {
      console.log("Request content failed!");
    }
  })
}

function loadNewsComment(queryId, page) {
  var self = page;
  console.log("Start requesting comments...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/comment/" + queryId,
    method: "GET",
    success: function(res) {
      console.log("Request comments successful!");
      console.log(res.data);
      var resList = res.data, oriList = self.data.commentItem;
      for(var i=0; i<resList.length; i++){
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        commentItem: oriList
      })
    },
    fail: function() {
      console.log("Request comments failed!");
    }
  })
}

function reloadNewsComment(queryId, page) {
  var self = page;
  console.log("Start requesting comments...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/comment/" + queryId,
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
//   id: 1004,
//     nickName: '小张',
//       avatar: '/others/images/userBear.png',
//         commCont: '小女孩：“爸爸。”\n爸爸：“哎”\n小女孩：“太阳出来月亮回家了吗？”\n爸爸：“对啦。”\n小女孩：“星星出来太阳去哪里啦？”\n爸爸：“在天上。”\n小女孩：“我怎么找也找不到它？”\n遗憾的是，蒙语歌词很多人都听不懂。和很多非汉语的经典歌曲一样，直译歌词可能会失去音韵方面的华彩，重新填词又恐怕脱离了歌曲的原意。通过简单、精巧的词句，王宝将这首歌的意境诠释得非常到位，不仅保留了原曲的清新草原风格，唱起来也朗朗上口，一问一答的形式，与原版《吉祥三宝》正好对应，体现了作词人的不俗功力。',
//           commTime: '2019/04/20 07:20:10'
// }