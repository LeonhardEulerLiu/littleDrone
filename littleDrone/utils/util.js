var hostIp = "192.168.137.1"

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/*
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
  return str.replace(/<img src="http:\/\/localhost/ig, "<img src=\"http://"+hostIp)
}
*/

function localTitlePic(str) {
  return str.replace(/http:\/\/localhost/ig, "http://" + hostIp)
}

/*
function transferText(page) {
  let that = page, thatOne = this;
  const myrich = thatOne.localizationImg(escape2Html(that.data.raw_content));
  that.setData({
    content: myrich
  })
}
*/
function afterG(page, res){
  var self = page;
  // console.log("Let's get started!");
  // console.log(res);
  // console.log(res.detail.userInfo.nickName);
  // console.log(res.detail.userInfo.avatarUrl);
  self.setData(
    {
      userName: res.detail.userInfo.nickName,
      userAva: res.detail.userInfo.avatarUrl,
      titleForComm: self.data.title[0].children[0].text
    }
  );
  wx.navigateTo({
    url: '../addComments/addComm?nickName=' + self.data.userName + '&avatar=' + self.data.userAva
      + '&type=' + self.data.type + '&typeId=' + self.data.id + '&title=' + self.data.titleForComm
  })
}

function searchItems(query, page) {
  if (query.detail.value == undefined || query.detail.value === "") {   //判断是否为null, undefined（null==undefined）, 或者空字符串
    wx.showModal({
      title: '提示',
      content: '请输入相应的内容再进行搜索！',
      showCancel: false
    })
  }
  else{
    var self = page;
    console.log(query.detail.value);
    console.log(self.data.searchMode);
    wx.navigateTo({
      url: '../search/search?query=' + query.detail.value
    });
  }
}

module.exports = {
  formatTime: formatTime,
  //辅助函数
  //escape2Html: escape2Html,
  //transferText: transferText,
  afterGettingUser: afterG,
  search: searchItems,
  hostIp: hostIp,
  localPic: localTitlePic
  // askUserInfo: askUserInfo
}

// function askUserInfo() {
//   wx.getUserInfo({
//     withCredentials: false,
//     lang: false,
//     success: this.ifAuthorized,
//     fail: this.ifNotAuthorized
//   })
// }

// function ifAuthorized(){
//   console.log("Success!");
// }

// function ifNotAuthorized(){
//   console.log("Fail!");
// }