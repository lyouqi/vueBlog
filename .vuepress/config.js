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
    port: 8080,
    dest: '.vuepress/dist',
    ga: 'undefined',
    serviceWorker: false,
    locales: undefined,
    theme: undefined,
    themeConfig: {
        //   导航栏链接
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
            },
            {
                text: '其它',
                items: [
                    { text: '其一', link: '/other/first' },
                    { text: '其二', link: '/other/second' },
                ]
            }
        ],
        search: true,
        searchMaxSuggestions: 5,
    },
    sidebar: [
        ['/page-b', 'Explicit link text']
    ]
}