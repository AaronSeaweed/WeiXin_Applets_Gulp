"use strict";var app=getApp();Page({data:{addressinfo:[]},onLoad:function(t){},onShow:function(){this.getUserInfo()},getUserInfo:function(){var a=this;wx.request({url:app.globalData.httpHost+"/weixin/getuserinfo",method:"POST",data:{type:"all"},success:function(t){200==t.data.status&&"success"==t.data.message?a.setData({addressinfo:t.data.data}):500==t.data.code&&a.setData({addressinfo:[]})}})},seladdress:function(t){var a=this;t.currentTarget.dataset.info.usestatus=1,wx.setStorageSync("userinfo",t.currentTarget.dataset.info),wx.navigateBack({delta:1,success:function(){a.setUserInfo(t.currentTarget.dataset.info),wx.showLoading({title:"加载中"})}})},setUserInfo:function(t){var a=this;wx.request({url:app.globalData.httpHost+"/weixin/setuserinfo",method:"POST",data:t,success:function(t){200==t.data.status&&"success"==t.data.message?a.getUserInfo():t.data.code}})},addNewAddress:function(){wx.navigateTo({url:"../setaddress/modifyaddress"})},updateaddress:function(t){wx.navigateTo({url:"../setaddress/modifyaddress?op=update&addid="+t.currentTarget.dataset.addid})}});