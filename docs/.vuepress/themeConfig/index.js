module.exports = {
  nav: [
    {
      text: "首页",
      link: "/",
      icon: "reco-home"
    },
  ],
  type: "blog",
  blogConfig: {
    category: {
      location: 2,
      text: "分类"
    },
    tag: {
      location: 3,
      text: "标签"
    }
  },
  // "logo": "/logo.png",
  sidebar: 'auto',
  search: true,
  searchMaxSuggestions: 10,
  authorAvatar: "/author.jpg",
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'Baiyusoup',
  // 备案号
  record: 'E=MC^2',
  // 项目开始时间
  startYear: '2021'
}