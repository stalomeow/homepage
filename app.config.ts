export default defineAppConfig({
  profile: {
    name: 'Stalo',
    userId: 'stalomeow',
    avatar: '/img/avatar.jpg',
    links: [
      {
        title: 'GitHub',
        icon: ['fab', 'github'],
        href: 'https://github.com/stalomeow',
      },
      {
        title: 'Bilibili',
        icon: ['fab', 'bilibili'],
        href: 'https://space.bilibili.com/456366858',
      },
      {
        title: 'E-Mail',
        icon: ['fas', 'envelope'],
        href: 'mailto:mail@stalomeow.com',
      },
      {
        title: 'Telegram',
        icon: ['fab', 'telegram'],
        href: 'https://t.me/StaloMeow',
      },
      {
        title: 'Note',
        icon: ['fas', 'note-sticky'],
        href: 'https://note.stalomeow.com',
      }
    ],
    sponsor: {
      icon: ['fas', 'mug-saucer'],
      prompt: 'Buy Me a Coffee',
      thanks: 'Thanks for your support!',
      pays: [
        {
          title: 'WeChat',
          icon: ['fab', 'weixin'],
          qrCodeData: 'wxp://f2f0gtIGJYCZNvXuEOe77OxnC8eSYXrA3qya_SqPzQ3LHgQ',
        },
        {
          title: 'Alipay',
          icon: ['fab', 'alipay'],
          qrCodeData: 'https://qr.alipay.com/fkx11955ixftzijjqytpe78',
        }
      ]
    }
  },
  heads: {
    index: {
      title: 'Home | stalomeow',
      meta: [
        {
          name: 'description',
          content: 'The home page of stalomeow.',
        },
      ]
    },
    sponsors: {
      title: 'Sponsors | stalomeow',
      meta: [
        {
          name: 'description',
          content: 'The sponsors of stalomeow.',
        },
      ]
    },
  },
  sponsorsTitle: 'Sponsors (UTC+8)',
  sponsors: [
    {
      name: 'M*y',
      money: '9.90 CNY',
      time: '2024-11-07',
      msg: '感谢分享',
      src: ''
    },
    {
      name: 'Aoba青葉',
      money: '5.00 CNY',
      time: '2024-09-02',
      msg: '牛比',
      src: 'bilibili charge'
    },
    {
      name: '*不',
      money: '3.00 CNY',
      time: '2024-07-21',
      msg: '快乐水',
      src: ''
    },
    {
      name: 'haochanchan',
      money: '100.00 CNY',
      time: '2024-06-22',
      msg: '谢谢啦',
      src: ''
    },
    {
      name: '廉价动画师',
      money: '45.00 CNY',
      time: '2024-05-22',
      msg: '谢谢你的 shader 分享，受益良多',
      src: 'bilibili charge'
    },
    {
      name: '该帐号已恢复使用',
      money: '6.00 CNY',
      time: '2023-10-13',
      msg: '',
      src: 'bilibili charge'
    },
    {
      name: '该帐号已恢复使用',
      money: '6.00 CNY',
      time: '2023-10-12',
      msg: '',
      src: 'bilibili charge'
    },
    {
      name: 'ANL',
      money: '400.00 CNY',
      time: '2023-09-01',
      msg: '',
      src: ''
    },
    {
      name: 'Senchyi',
      money: '88.00 CNY',
      time: '2023-08-30',
      msg: '',
      src: 'bilibili charge'
    },
    {
      name: '阿海',
      money: '1.00 CNY',
      time: '2022-05-08',
      msg: '高考加油！',
      src: ''
    }
  ]
})