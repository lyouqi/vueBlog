module.exports = {
    title: 'Ren Blog',
    description: '任亚楠个人博客',
    head: [
        ['link', {
            rel: 'icon',
            href: `/renblog_favicon.ico`
        }]
    ],
    host: '0.0.0.0',
    port: 8080,
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
                    title: '2018-05博客汇总',
                    collapsable: true,
                    children: [
                        // 每次插入目录要在前面插入
                        ['/blog/2018-05/2018-05-23.md','webpack基本教程'],
                        ['/blog/2018-05/2018-05-02.md','git一些常用的骚操作']
                    ]
                }
            ]
        }
    },



}