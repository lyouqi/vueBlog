module.exports = {
    title: 'Ren Blog',
    description: '任亚楠个人博客',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.png`
        }]
    ],
    host: '0.0.0.0',
    port: 80,
    dest: '.vuepress/dist',
    ga: 'undefined',
    serviceWorker: false,
    locales: undefined,
    theme: undefined,
    themeConfig: {
        //   导航栏链接以及配置
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '博客',
                link: '/blog/'
            },
            {
                text: '相册',
                link: '/photo/'
            },
            {
                text: '留言',
                link: '/message/'
            },
            {
                text: '关于',
                link: '/about/'
            }
        ],
        // 搜索栏配置
        search: true,
        searchMaxSuggestions: 5,
        // 侧边栏配置
        sidebar: {
            '/blog/': [
                ['', '博客记录首页'],
                {
                    title: '2018博客汇总',
                    collapsable: false,
                    children: [
                        // 每次插入目录要在前面插入
                        ['/blog/2018/git一些常用的骚操作.md','git一些常用的骚操作'],
                        ['/blog/2018/来到58到家一周感受.md','来到58到家一周感受']
                    ]
                }
            ]
        }
    },



}