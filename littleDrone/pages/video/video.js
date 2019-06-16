// pages/video/video.js
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面信息
    searchMode: false,
    query: "",

    //必要冗余页面信息
    link: "../videoCont/videoCont",
    icon: "/others/images/video.png",
    feature: "收看量",
    playIcon: "/others/images/play.png",
    isVideo: true,

    //追加新闻条目所需信息
    // getHidden: true,
    // fetchStartId: 0,
    // fetchLength: 10,

    newsSwiperData:
      [
        
      ],

    //新闻条目信息
    newsEntryData:
      [
        
      ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    loadVideoSwiper(this);
    loadVideoList(this);
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
    reloadVideoSwiper(this);
    reloadVideoList(this);
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

  searchItems: function (query) {
    utils.search(query, this);
  }
})

//不能共享，因为url不同
function loadVideoSwiper(page) {
  var self = page;
  console.log("Start loading swiper...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/swiper",  //No parameters
    method: "GET",
    success: function (res) {
      console.log("Getting loading swiper successful!");
      console.log(res.data);
      var resList = res.data, oriList = self.data.newsSwiperData;
      for(var i=0; i<resList.length; i++){
      var title = resList[i].title;
      if(title.length > 12){
        resList[i].title = title.substring(0, 11) + "...";
      }
        resList[i].link = self.data.link;             //这一步走不通了，就改成具体值
        resList[i].playIcon = self.data.playIcon;
        resList[i].isVideo = self.data.isVideo;
        resList[i].titlePic = utils.localPic(resList[i].titlePic);
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        newsSwiperData: oriList
      });
      console.log("Setting loading swiper successful!");
    },
    fail: function () {
      console.log("Getting loading swiper failed!");
    }
  })
}

function reloadVideoSwiper(page) {
  var self = page;
  console.log("Start reloading swiper...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/swiper",  //No parameters
    method: "GET",
    success: function (res) {
      console.log("Getting reloading swiper successful!");
      console.log(res.data);
      var resList = res.data, oriList = [];
      for (var i = 0; i < resList.length; i++) {
        var title = resList[i].title;
        if (title.length > 12) {
          resList[i].title = title.substring(0, 11) + "...";
        }
        resList[i].link = self.data.link;             //这一步走不通了，就改成具体值
        resList[i].playIcon = self.data.playIcon;
        resList[i].isVideo = self.data.isVideo;
        resList[i].titlePic = utils.localPic(resList[i].titlePic);
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        newsSwiperData: oriList
      });
      console.log("Setting reloading swiper successful!");
    },
    fail: function () {
      console.log("Getting reloading swiper failed!");
    }
  })
}


//不能共享，因为url不同
function loadVideoList(page) {
  var self = page;
  console.log("Start loading list...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/list",  //No parameters
    method: "GET",
    success: function (res) {
      console.log("Getting loading list successful!");
      console.log(res.data);
      var resList = res.data, oriList = self.data.newsEntryData;
      for (var i = 0; i < resList.length; i++) {
        var title = resList[i].title;
        if (title.length > 12) {
          resList[i].title = title.substring(0, 11) + "...";
        }
        resList[i].link = self.data.link;
        resList[i].icon = self.data.icon;
        resList[i].feature = self.data.feature;
        resList[i].titlePic = utils.localPic(resList[i].titlePic);
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        newsEntryData: oriList
      });
      console.log("Setting loading list successful!");
    },
    fail: function () {
      console.log("Getting loading list failed!");
    }
  })
}

function reloadVideoList(page) {
  var self = page;
  console.log("Start reloading list...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/video/list",  //No parameters
    method: "GET",
    success: function (res) {
      console.log("Getting reloading list successful!");
      console.log(res.data);
      var resList = res.data, oriList = [];
      for (var i = 0; i < resList.length; i++) {
        var title = resList[i].title;
        if (title.length > 12) {
          resList[i].title = title.substring(0, 11) + "...";
        }
        resList[i].link = self.data.link;
        resList[i].icon = self.data.icon;
        resList[i].feature = self.data.feature;
        resList[i].titlePic = utils.localPic(resList[i].titlePic);
        oriList = oriList.concat(resList[i]);
      }
      self.setData({
        newsEntryData: oriList
      });
      console.log("Setting reloading list successful!");
    },
    fail: function () {
      console.log("Getting reloading list failed!");
    }
  })
}

// {
//   id: 1007,
//     title: "习近平即将访问中国",
//       titlePic: "/others/images/newsPic2.jpg",
//         link: "../videoCont/videoCont",
//           playIcon: "/others/images/play.png",
//             isVideo: true
// }


// {
//   id: 1008,
//     link: "../videoCont/videoCont",
//       icon: "/others/images/video.png",
//         title: "怎么才能加上白色字体？",
//           author: "我爱柯南",
//             feature: "收看量",
//               readCount: 1,
//                 titlePic: "/others/images/newsPic1.jpg"
// }