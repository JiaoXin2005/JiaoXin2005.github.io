(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{559:function(t,e,s){"use strict";s.r(e);var a=s(7),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("在 macOS 上，基于"),s("a",{attrs:{href:"https://www.electron.build/auto-update",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-builder"),s("OutboundLink")],1),t._v("进行打包时，可以不进行代码签名，但是带来的问题是无法进行自动更新。")]),t._v(" "),s("h2",{attrs:{id:"解决步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决步骤"}},[t._v("#")]),t._v(" 解决步骤")]),t._v(" "),s("ol",[s("li",[t._v("申请 Apple 的 Developer ID Installer 这个类型的证书。")]),t._v(" "),s("li",[t._v("配置环境变量，或者直接安装导出的 .p12 证书")])]),t._v(" "),s("h2",{attrs:{id:"证书的选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#证书的选择"}},[t._v("#")]),t._v(" 证书的选择")]),t._v(" "),s("p",[t._v("这里有点坑，经过查看 electron-builder 的"),s("a",{attrs:{href:"https://github.com/electron-userland/electron-builder/blob/master/packages/app-builder-lib/package.json#L61",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("，发现其使用"),s("a",{attrs:{href:"https://github.com/electron/electron-osx-sign",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-osx-sign"),s("OutboundLink")],1),t._v("进行代码签名的。")]),t._v(" "),s("p",[t._v("查看其"),s("a",{attrs:{href:"https://github.com/electron/electron-osx-sign/wiki/1.-Getting-Started#certificates",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1),t._v("的使用文档，由于不上 App Store 进行分发，选择下面这两种证书的类型："),s("strong",[t._v("Developer ID Installer")]),t._v(" 和 "),s("strong",[t._v("Developer ID Application:")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://imgtu.com/i/4kzm6g",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://z3.ax1x.com/2021/09/14/4kzm6g.png",alt:"4kzm6g.png"}}),s("OutboundLink")],1),t._v("\n补充资料："),s("a",{attrs:{href:"https://www.jianshu.com/p/c9c71f2f6eac",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS 开发 证书等配置/打包后导出及上架"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[t._v("#")]),t._v(" 配置环境变量")]),t._v(" "),s("p",[t._v("到了这步，那应该有以下几个文件：application.p12、installer.p12、xxxxx.provisionprofile。\n配置环境变量，修改 ~/.zshrc")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CSC_LINK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("application.p12\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CSC_KEY_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("your_p12_password\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("也可以在 electron-builder 的时候，修改 process.env")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CSC_LINK"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprocess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CSC_KEY_PASSWORD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" your_p12_password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("最后配置 electron-builder：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mac: {\n  provisioningProfile: './xxxxx.provisionprofile'\n}\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);