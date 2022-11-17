'use strict';

module.exports = {
  plugins: ['gatsby-plugin-mdx'],
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by Joey',
  subtitle: '兴趣领域: 架构师, DevOps, 动画软件, 声音音效, 3D技术.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-00000000-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Joey',
    photo: '/photo.jpg',
    bio: '兴趣领域: 架构师, DevOps, 动画软件, 声音音效, 3D技术.',
    contacts: {
      email: '',
      facebook: '#',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  }
};
