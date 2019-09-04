Page({

  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567610113333&di=a318eb54c4077c9ca16c31dab3438c5c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190821%2F5ac4d19abed74a029143843ba40160fb.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567610136495&di=0f99acf8e546c57705f5bff4725fa6e8&imgtype=0&src=http%3A%2F%2Fimg.haokecheng.com%2Fupimages%2F01%2FE2%2F0E%2F46%2F3C1ADDF8.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567610102863&di=1179e2496a9615ee0a742dd688dbab2c&imgtype=0&src=http%3A%2F%2Fimg.haokecheng.com%2Fupimages%2FC1%2F45%2F80%2F1E%2FA6DDA692.jpg'
    ],

    // tab切换  

    currentTab: 0,

    one: [{
      id: 1,
      images: 'https://upload-images.jianshu.io/upload_images/15721919-96553148cc3e6dea.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/782/format/webp',
      two: [{
        'id': 11,
        title: '微积分是最适合中国大多数学生顺利学出来的一门理科课。',
        txt: '更新 一周前',
      }]

    },

    {
      id: 2,
      images: 'http://ask.qcloudimg.com/http-save/yehe-1669339/mrttv45xje.jpeg',
      two: [{
        'id': 12,
        title: '微积分(Calculus)是高等数学中研究函数的微分、积分以及有关概念和应用的数学分支。',
        txt: '更新 两周前',
      }]
    },

    {
      id: 3,
      images: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4037085886,4011589942&fm=26&gp=0.jpg',
      two: [{
        'id': 13,
        title: 'AP考试的成绩使用5分制，考生可以获得1，2，3，4或者5分,一般三分或三分以上的成绩可以在大学换取学分.',
        txt: '更新 三周前',
      }]
    },

    {
      id: 4,
      images: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4071605530,339009200&fm=11&gp=0.jpg',
      two: [{
        'id': 14,
        title: 'AP微积分是由美国大学理事会（The College Board）提供的在高中授课的大学课程。',
        txt: '更新 四周前',
      }],
    }],

    apti: [{
      id: 5,
      images: 'http://img95.699pic.com/photo/50040/6494.jpg_wh300.jpg',
      two: [{
        'id': 15,
        title: '微积分分为四个部分,考试时间相对比较充裕，考生只要认真备考，就可以完成题目',
        txt: '更新 一周前',
      }]
    },
    {
      id: 6,
      images: 'https://f10.baidu.com/it/u=2202493337,3369188385&fm=72',
      two: [{
        'id': 16,
        title: '留学应该提前规划好，是充分准备后的行动，同学们应该早一点预估自己想去怎样的学校。',
        txt: '更新 两周前',
      }]
    },
    {
      id: 7,
      images: 'http://5b0988e595225.cdn.sohucs.com/images/20181009/d2c854a7ad1a46d2952885e222c24644.jpg',
      two: [{
        'id': 17,
        title: '3月中旬开始练习真题，熟练出题形式和加深对细节知识点的掌握深度。',
        txt: '更新 三周前',
      }]
    },
    {
      id: 8,
      images: 'http://img95.699pic.com/photo/50021/0579.jpg_wh300.jpg',
      two: [{
        'id': 18,
        title: '理解微积分的“基本思想”——“极限”至关重要，也是直接通往微分积分世界的“九阴真经”。',
        txt: '更新 四周前',
      }]
    }]

  },

  swichNav: function (e) {

    console.log(e);

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {

      return false;

    } else {

      that.setData({

        currentTab: e.target.dataset.current,

      })

    }

  },

  swiperChange: function (e) {

    console.log(e);

    this.setData({

      currentTab: e.detail.current,

    })



  },

  onLoad: function (options) {

    // 生命周期函数--监听页面加载

  },

  onReady: function () {

    // 生命周期函数--监听页面初次渲染完成

  },

  onShow: function () {

    // 生命周期函数--监听页面显示

  },

  onHide: function () {

    // 生命周期函数--监听页面隐藏

  },

  onUnload: function () {

    // 生命周期函数--监听页面卸载

  },

  onPullDownRefresh: function () {

    // 页面相关事件处理函数--监听用户下拉动作

  },

  onReachBottom: function () {

    // 页面上拉触底事件的处理函数

  },

  onShareAppMessage: function () {

    // 用户点击右上角分享

    return {

      title: 'title', // 分享标题

      desc: 'desc', // 分享描述

      path: 'path' // 分享路径

    }

  }

})