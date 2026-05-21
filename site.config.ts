import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://qianhm.github.io/blog/',
  lang: 'zh-CN',
  languages: ['zh-CN', 'en'],
  title: '醋栗的博客',
  subtitle: 'Nice to meet you!',
  author: {
    name: '醋栗',
    avatar: '/blog/avatar.jpg',
  },
  description: '欲将轻骑逐，大雪满弓刀。',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/qianhm',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'RSS',
      link: '/blog/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
  ],

  search: {
    enable: true,
  },

  comment: {
    enable: true,
  },

  sponsor: {
    enable: true,
    title: '赞赏',
    description: '如果觉得有帮助，可以请我喝杯咖啡~',
    methods: [
      {
        name: '微信',
        url: '/wechat-qr.png',
        color: '#07C160',
        icon: 'i-ri-wechat-pay-line',
      },
      {
        name: '支付宝',
        url: '/alipay-qr.png',
        color: '#1677FF',
        icon: 'i-ri-alipay-line',
      },
    ],
  },
})
