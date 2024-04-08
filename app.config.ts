export default defineAppConfig({
  profile: {
    name: 'Stalo',
    userId: 'stalomeow',
    avatar: '/img/avatar.png',
    links: [
      {
        title: 'GitHub',
        icon: 'fa-brands fa-github',
        href: 'https://github.com/stalomeow',
      },
      {
        title: 'Bilibili',
        icon: 'fa-brands fa-bilibili',
        href: 'https://space.bilibili.com/456366858',
      },
      {
        title: 'E-Mail',
        icon: 'fa-solid fa-envelope',
        href: 'mailto:stalowork@163.com',
      },
      {
        title: 'Telegram',
        icon: 'fa-brands fa-telegram',
        href: 'https://t.me/StaloMeow',
      },
      {
        title: 'Blog',
        icon: 'fa-solid fa-blog',
        href: 'https://note.stalomeow.com',
      }
    ],
    sponsor: {
      icon: 'fa-solid fa-mug-saucer',
      prompt: 'Buy Me a Coffee',
      thanks: 'Thanks for your support!',
      pays: [
        {
          title: 'WeChat',
          icon: 'fa-brands fa-weixin',
          qrCodeData: 'wxp://f2f0gtIGJYCZNvXuEOe77OxnC8eSYXrA3qya_SqPzQ3LHgQ',
        },
        {
          title: 'Alipay',
          icon: 'fa-brands fa-alipay',
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