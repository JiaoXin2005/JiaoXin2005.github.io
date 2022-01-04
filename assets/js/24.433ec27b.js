(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{562:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("想根据 git 每次提交的 commit，做 changlog 的自动生成，大多数开源库都是这个思路做的。比较流行的工具是："),s("a",{attrs:{href:"https://www.npmjs.com/package/standard-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("standard-version"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://www.npmjs.com/package/release-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("release-it"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"standard-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standard-version"}},[t._v("#")]),t._v(" standard-version")]),t._v(" "),s("p",[t._v("最基本的使用方法安装文档来就行。前提是 commit 的规范需要按照"),s("a",{attrs:{href:"https://www.conventionalcommits.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conventional Commits"),s("OutboundLink")],1),t._v("。一般来说使用了"),s("code",[t._v("git cz")]),t._v("管理规范就可以了。")]),t._v(" "),s("h2",{attrs:{id:"git-cz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-cz"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("git cz"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("推荐开发使用，可以很好并且直观的看到 git 的 commit 信息。")]),t._v(" "),s("p",[t._v("安装方式：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('npm install -g commitizen cz-conventional-changelog\n\necho \'{ "path": "cz-conventional-changelog" }\' > ~/.czrc\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("使用方式：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git cz\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("当然 commit 的格式可以按照需求定制。一般使用"),s("a",{attrs:{href:"https://www.npmjs.com/package/cz-customizable",target:"_blank",rel:"noopener noreferrer"}},[t._v("cz-customizable"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"当-cz-customizable-碰到-standard-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当-cz-customizable-碰到-standard-version"}},[t._v("#")]),t._v(" 当 cz-customizable 碰到 standard-version")]),t._v(" "),s("p",[t._v("如果定制了 commit，又需要定制 "),s("code",[t._v("changelog.md")]),t._v(" 的输出格式。就需要稍微花点时间看 standard-version 的源码。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("最简单的定制")]),t._v(" "),s("p",[t._v("查看源码 "),s("a",{attrs:{href:"https://github.com/conventional-changelog/standard-version/blob/master/defaults.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认可以定制的配置"),s("OutboundLink")],1),t._v(" 不然发现。只需要在"),s("code",[t._v("package.json")]),t._v("下加入以下字段")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"standard-version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bump"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"### 更新日志\\n\\n"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("就可以定制 changelog 的 header，或者跳过 commit 阶段。")])]),t._v(" "),s("li",[s("p",[t._v("定制 changelog 的格式")]),t._v(" "),s("p",[t._v("如果需要定制 changlog 的格式，比如去掉 commit 的 hash，修改匹配 commit 的正则等需求。这个时候，就需要定制 "),s("code",[t._v("conventional-changelog")]),t._v(" 的 "),s("code",[t._v("preset")]),t._v("。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.dev/conventional-changelog/standard-version/blob/master/lib/lifecycles/changelog.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("中可以发现，standard-version 底层使用了 "),s("code",[t._v("conventional-changelog")]),t._v(" 去处理 commit 的。"),s("a",{attrs:{href:"https://github.com/conventional-changelog/standard-version/blob/master/lib/preset-loader.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认的情况"),s("OutboundLink")],1),t._v("下使用了"),s("code",[t._v("conventional-changelog-conventionalcommits")]),t._v("去处理 commit。")]),t._v(" "),s("p",[t._v("这个时候。我们只需按照"),s("code",[t._v("conventional-changelog-conventionalcommits")]),t._v("的规范，去自定义我们想要的模板功能就好了。")]),t._v(" "),s("ul",[s("li",[t._v("项目根目录下添加"),s("code",[t._v(".versionrc.js")]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  preset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./my-conventionalcommits"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[t._v("copy 一份"),s("code",[t._v("conventional-changelog-conventionalcommits")]),t._v(" 修改"),s("code",[t._v("templates/commit.hbs")]),t._v("。这个模板控制着 changelog 里的 commit 的格式，按照需求更改即可。")]),t._v(" "),s("li",[t._v("修改"),s("code",[t._v("writer-opts.js")]),t._v("。这里控制着 commit 的匹配类型")]),t._v(" "),s("li",[t._v("修改"),s("code",[t._v("parser-opts.js")]),t._v("。这里控制着 commit 的匹配正则")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);