import { defineConfig } from "dumi";
const BASE_URL = "/notes-web/";
export default defineConfig({
  themeConfig: {
    name: "",
    logo: "",
    nav: {
      // mode可选值有：override、append、prepend
      // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
      // - append: 将 value 中的导航追加到约定路由后面
      // - prepend: 将 value 中的导航添加到约定路由前面
      mode: "append",
      value: [{ title: "Github", link: "https://github.com/wl-007/notes-old" }],
    },
    footer: "Copyright ©2024-present scwanglei777@163.com",
  },

  base: BASE_URL,
  publicPath: BASE_URL,
  resolve: {
    codeBlockMode: "passive",
  },
});
