// pages/news.js
var utils=require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面信息
    searchMode: false,                  //用于指定与search页的关系
    query: "",                          //用于向search页传递搜索词

    //必要冗余页面信息
    link: "../newsCont/newsCont",
    icon: "/others/images/news.jpg",
    feature: "阅读量",
    playIcon: "/others/images/play.png",
    isVideo: false,                     //用于与video页区分；如果不拓展，则这样做

    // //追加新闻条目所需信息
    // getHidden: true,
    // fetchStartId: 0,
    // fetchLength: 10,

    newsSwiperData:
    [
      
    ],

    //新闻条目信息：准备在回调函数里设置link，icon和feature
    newsEntryData:
    [
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // loadMore(that, 0, that.data.fetchLength);
    loadNewsSwiper(this);
    loadNewsList(this);
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
    reloadNewsSwiper(this);
    reloadNewsList(this);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // fetchNews();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  searchItems: function(query){
    utils.search(query, this);
  }
})

//不能共享，因为url不同
function loadNewsSwiper(page){
  var self = page;          //OR this.Page ?
  console.log("Start loading swiper...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/swiper",  //No parameters
    method: "GET",
    success: function(res){
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
      })
      console.log("Setting loading swiper successful!");
    },
    fail: function(){
      console.log("Getting loading swiper failed!");
    }
  })
}

//不能共享，因为url不同
function reloadNewsSwiper(page) {
  var self = page;          //OR this.Page ?
  console.log("Start reloading swiper...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/swiper",  //No parameters
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
      })
      console.log("Setting reloading swiper successful!");
    },
    fail: function () {
      console.log("Getting reloading swiper failed!");
    }
  })
}

//不能共享，因为url不同
function loadNewsList(page){
  var self = page;
  console.log("Start loading list...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/list",  //No parameters
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
      })
      console.log("Setting loading list successful!");
    },
    fail: function () {
      console.log("Getting loading list failed!");
    }
  })
}

function reloadNewsList(page) {
  var self = page;
  console.log("Start reloading list...");
  wx.request({
    url: "http://" + utils.hostIp + ":8080/drone/news/list",  //No parameters
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
      })
      console.log("Setting reloading list successful!");
    },
    fail: function () {
      console.log("Getting reloading list failed!");
    }
  })
}

// //负责请求通信的函数
// function loadMore(that, startId, itemLength) {
//   console.log("Start making requests ...");
//   that.setData({
//     getHidden: false
//   })

//   //发送请求，如果成功，那么向newsEntryData列表里追加项目，否则打印错误信息；注意返回的长度不一定等于itemLength
//   //请不要忘记优化：在回调函数里设置link, icon, feature
//   wx.request({
//     url: 'http://localhost:8080/drone/news/item',
//     method: 'GET',
//     data: {
//       start: startId,
//       length: itemLength
//     },
//     success(res) {
//       var resList = res.data, newList = that.newsEntryData;
//       for (var i = 0; i < resList.length; i++) {
//         newList.push(resList[i]);
//       }
//       var newStartId = startId + itemLength;
//       that.setData({
//         newsEntryData: newList,
//         getHidden: true,
//         fetchStartId: newStartId    //Auto Increasement
//       });
//       console.log("Success!");
//     },
//     fail(res) {
//       var newList = that.newsEntryData;
//       console.log("Have a problem to get requests. Stopped.");
//       // that.setData({
//       //   newsEntryData: newList,
//       //   getHidden: true
//       // });
//     }
//   })
// }

// //刷新页面的函数
// function fetchNews() {
//   var that = this;
//   loadMore(that, fetchStartId, fetchLength);
// }

// {
//   id: 1001,
//     title: "习近平即将访问中国",
//       titlePic: "http://localhost:8080/media/newsPic2.jpg",
//         link: "../newsCont/newsCont",
//           playIcon: "/others/images/play.png",
//             isVideo: false
// }

// {
//   id: 1002,
//     title: "读知乎有感",
//       author: "柯南日报",
//         readCount: 50,
//           titlePic: "/others/images/newsPic1.jpg",
//             link: "../newsCont/newsCont",
//               icon: "/others/images/news.jpg",
//                 feature: "阅读量"
// }