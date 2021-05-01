module.exports = {
  title: 'Zack',
  description: '持续集成',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Zack921/moocUI' },
    ],
    sidebar: [
      '/',
      {
        title: '我的履历',
        children: [ '/pages/intro/in-school', '/pages/intro/in-tencent' ],
      }, {
        title: '一些作品',
        children: [ '/pages/visual/2d', '/pages/visual/3d-webgl', '/pages/visual/3d-threejs' ],
      },
      '/pages/article',
    ]
  }
}