// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchMode: true,
    query: "",

    //新闻条目信息
    newsEntryData:
      [
        
      ],

    searchInstruction: [{
      name: 'div',
      attrs: {
        class: 'searchInstruction'
      },
      children: [{
        type: 'text',
        text: '下面是　"'
      },
      {
        name: 'span',
        attrs: {
          style: "color: red;"
        },
        children: [{
          type: 'text',
          text: '读知乎有感'    /* 修改 */
        }]
      },
      {
        type: 'text',
        text: '"　的搜索结果：'
      }],
    }],

    //必要的冗余信息
    icon: "/others/images/searchRes.png",
    feature: "浏览量",
    link: [
      "../newsCont/newsCont",
      "../videoCont/videoCont"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Query is: "+options.query);
    var instQuery = "searchInstruction[0].children[1].children[0].text";
    this.setData({
      query: options.query,
      [instQuery]: options.query
    });
    loadSearchList(options.query, this);
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
    reloadSearchList(this.data.query, this);
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

  researchItems: function (query) {
    if (query.detail.value == undefined || query.detail.value === "") {   //判断是否为null, undefined（null==undefined）, 或者空字符串
      wx.showModal({
        title: '提示',
        content: '请输入相应的内容再进行搜索！',
        showCancel: false
      })
    }
    else {
      var self = this;
      console.log(query.detail.value);
      console.log(self.data.searchMode);
      wx.redirectTo({
        url: '../search/search?query=' + query.detail.value
      });
    }
  }
})

function loadSearchList(queryStr, page){
  var self = page;
  console.log("Start loading list...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/search/list/" + queryStr, //关于中文乱码问题，我们建议你在后台加以解码，因为不同浏览器的行为不同，在url中最好不要出现中文
    method: "GET",
    success: function(res) {
      console.log("Getting loading list successful!");
      console.log(res.data);
      var resList = res.data, oriList = self.data.newsEntryData;
      for(var i=0; i<resList.length; i++){
        var title = resList[i].title;
        if (title.length > 12) {
          resList[i].title = title.substring(0, 11) + "...";
        }
        var type = resList[i].link;
        resList[i].link = self.data.link[type-1];
        resList[i].icon = self.data.icon;
        resList[i].feature = self.data.feature;
        resList[i].titlePic = utils.localPic(resList[i].titlePic);
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        newsEntryData: oriList
      });
      console.log("Getting loading list successful!");
    }
  })
}

function reloadSearchList(queryStr, page) {
  var self = page;
  console.log("Start loading list...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/search/list/" + queryStr, //关于中文乱码问题，我们建议你在后台加以解码，因为不同浏览器的行为不同，在url中最好不要出现中文
    method: "GET",
    success: function (res) {
      console.log("Getting loading list successful!");
      console.log(res.data);
      var resList = res.data, oriList = [];
      for (var i = 0; i < resList.length; i++) {
        var title = resList[i].title;
        if (title.length > 12) {
          resList[i].title = title.substring(0, 11) + "...";
        }
        var type = resList[i].link;
        resList[i].link = self.data.link[type - 1];
        resList[i].icon = self.data.icon;
        resList[i].feature = self.data.feature;
        resList[i].titlePic = utils.localPic(resList[i].titlePic);
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        newsEntryData: oriList
      });
      console.log("Getting loading list successful!");
    }
  })
}

// {
//   id: 1005,
//     title: "读知乎有感",
//       author: "柯南日报",
//         readCount: 50,
//           titlePic: "/others/images/newsPic1.jpg",
//             link: "../newsCont/newsCont",           //比普通页面多了一项；注意这一项原先存放的是TYPE
//               icon: "/others/images/searchRes.png",
//                 feature: "浏览量"
// },
// {
//   id: 1006,
//     link: "../videoCont/videoCont",
//       icon: "/others/images/video.png",
//         title: "怎么才能加上白色字体？",
//           author: "我爱柯南",
//             feature: "收看量",
//               readCount: 1,
//                 titlePic: "/others/images/newsPic1.jpg"
// }