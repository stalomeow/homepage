export default defineAppConfig({
  profile: {
    name: 'Stalo',
    userId: 'stalomeow',
    avatar: '/img/avatar.png',
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
        href: 'mailto:stalowork@163.com',
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
  sponsors: [
    {
      name: 'ANL',
      money: '¥400.00',
      time: '2023-09-01',
      msg: ''
    },
    {
      name: '阿海',
      money: '¥1.00',
      time: '2022-05-08',
      msg: '高考加油！'
    }
  ]
})