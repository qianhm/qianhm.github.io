import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonComponents } from 'valaxy-addon-components'
import { addonMeting } from 'valaxy-addon-meting'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonGitLog } from 'valaxy-addon-git-log'
import { addonFace } from 'valaxy-addon-face'

const safelist = [
  'i-ri-home-line',
  'i-ri-home-4-line',
  'i-ri-gallery-line',
  'i-ri-sun-line',
  'i-ri-moon-line',
  'i-ri-translate',
  'i-ri-search-line',
]

export default defineValaxyConfig<UserThemeConfig>({
  theme: 'yun',

  addons: [
    addonComponents(),

    addonMeting({
      global: true,
      props: {
        server: 'netease',
        type: 'playlist',
        id: '7453511411',
        fixed: true,
        mini: true,
        autoplay: false,
        'list-folded': true,
        volume: 0.5,
      },
    }),

    addonLive2d({
      global: true,
      widthLimit: 250,
      hideOnScreenSizes: 640,
    }),

    addonVercount(),

    addonGitLog(),

    addonFace(),
  ],

  themeConfig: {
    type: 'nimbo',

    banner: {
      enable: true,
      title: '醋栗的小站',
      cloud: { enable: true },
    },

    bg_image: {
      enable: true,
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
      opacity: 0.12,
    },

    say: {
      enable: true,
      hitokoto: { enable: true },
    },

    fireworks: {
      enable: true,
      colors: ['#66A7DD', '#3B82F6', '#8B5CF6'],
    },

    notice: {
      enable: true,
      content: '🎉 小站刚建成，正在逐步完善中~',
    },

    pages: [
      {
        name: '小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '相册',
        url: '/gallery/',
        icon: 'i-ri-gallery-line',
        color: '#F59E0B',
      },
    ],

    footer: {
      since: 2026,
      cloud: { enable: true },
    },
  },

  vite: {
    base: '/blog/',
  },

  unocss: { safelist },
})
