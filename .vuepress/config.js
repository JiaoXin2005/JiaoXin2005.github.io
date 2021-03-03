module.exports = {
  title: "JiaoXin2005的博客",
  description: "",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: ["flowchart"],
  theme: "reco",
  themeConfig: {
    dateFormat: "YYYY-MM-DD",
    smoothScroll: true,
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      // {
      //   text: "Docs",
      //   icon: "reco-message",
      //   items: [
      //     {
      //       text: "vuepress-reco",
      //       link: "/docs/theme-reco/",
      //     },
      //   ],
      // },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/JiaoXin2005",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [],
    logo: "/avatar.jpeg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "JiaoXin2005",
    authorAvatar: "/avatar.jpeg",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
