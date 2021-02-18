module.exports = {
  title: "M-UI",
  description: "Just playing around",
  base: "./",
  themeConfig: {
    sidebar: [
      {
        title: "入门", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/install", "/getstart"],
      },
      {
        title: "组件", // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/components/gbutton",
          "/components/ginput",
          "/components/grid",
          "/components/layout",
          "/components/toast",
          "/components/tabs",
          "/components/popover",
          "/components/collapse",
        ],
      },
    ],
  },
};
