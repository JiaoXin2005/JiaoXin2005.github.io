(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{564:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装-rust-环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-rust-环境"}},[s._v("#")]),s._v(" 安装 Rust 环境")]),s._v(" "),t("p",[s._v("使用"),t("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rustup"),t("OutboundLink")],1),s._v("在 macOS 上安装 Rust 环境")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --proto "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=https'")]),s._v(" --tlsv1.2 https://sh.rustup.rs -sSf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("选择默认的模式就好，就是这么简单。")]),s._v(" "),t("h2",{attrs:{id:"配置-vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-vscode"}},[s._v("#")]),s._v(" 配置 vscode")]),s._v(" "),t("p",[s._v("安装 Rust 环境下的插件")]),s._v(" "),t("ul",[t("li",[s._v("rust-analyzer：社区驱动的一款代替官方的插件")]),s._v(" "),t("li",[s._v("Better TOML：用于更好的展示.toml 文件")]),s._v(" "),t("li",[s._v("CodeLLDB：debugger 程序")])]),s._v(" "),t("h2",{attrs:{id:"认识-cargo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识-cargo"}},[s._v("#")]),s._v(" 认识 Cargo")]),s._v(" "),t("p",[s._v("JavaScript 有 npm、yarn、pnpm 等包管理工具，而 Rust 则是使用 "),t("code",[s._v("cargo")]),s._v("。在 rustup 时候会默认安装 cargo")]),s._v(" "),t("h3",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("cargo new world_hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建的项目结构")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\n├── .git\n├── .gitignore\n├── Cargo.toml\n└── src\n    └── main.rs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行项目"}},[s._v("#")]),s._v(" 运行项目")]),s._v(" "),t("p",[s._v("有两种方式可以运行项目：")]),s._v(" "),t("p",[t("strong",[s._v("cargo run")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("➜  world_hello git:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ cargo run\n   Compiling world_hello v0.1.0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/user/my-rust/world_hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Finished dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unoptimized + debuginfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".29s\n     Running "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("target/debug/world_hello"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nhello, world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("上述代码，cargo run 首先对项目进行编译，然后再运行，因此它实际上等同于运行了两个指令，如同我们下面将做的")]),s._v(" "),t("p",[t("strong",[s._v("手动编译和运行项目")])]),s._v(" "),t("p",[s._v("编译：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("➜  world_hello git:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ cargo build\n    Finished dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unoptimized + debuginfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("运行：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("➜  world_hello git:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ ./target/release/world_hello\nHello, world"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("默认情况下使用 "),t("code",[s._v("debug")]),s._v(" 模式编译，特点是：代码的编译速度快，但是运行时稍慢。因为：在 debug 模式下，Rust 编译器不会做任何的优化，只为了尽快的编译完成，让你的开发流程更加顺畅。")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("release")]),s._v("模式：")]),s._v(" "),t("ul",[t("li",[s._v("cargo run --release")]),s._v(" "),t("li",[s._v("cargo build --release")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("➜  world_hello git:(master) ✗ cargo run --release\n   Compiling world_hello v0.1.0 (/Users/user/my-rust/world_hello)\n    Finished release [optimized] target(s) in 0.33s\n     Running `target/release/world_hello`\nhello, world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("cargo check")]),s._v("\n项目大了之后，难免编译速度降低，因此使用"),t("code",[s._v("cargo check")]),s._v(" ，它的作用很简单：快速的检查一下代码能否编译通过. 因此该命令速度会非常快，能节省大量的编译时间.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("➜  world_hello git:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ cargo check\n    Finished dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unoptimized + debuginfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"cargo-toml-和-cargo-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cargo-toml-和-cargo-lock"}},[s._v("#")]),s._v(" cargo.toml 和 cargo.lock")]),s._v(" "),t("p",[s._v("cargo.toml 和 cargo.lock 是 cargo 的核心文件，它的所有活动均基于此二者。")]),s._v(" "),t("p",[s._v("类比 JavaScript 中的 "),t("code",[s._v("package.json")]),s._v(" 和 "),t("code",[s._v("package-lock.json")])]),s._v(" "),t("p",[t("strong",[s._v("package 配置段落")]),s._v("\npackage 中记录了项目的描述信息，典型的如下：")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world_hello"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("version")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("edition")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("name：项目名称")]),s._v(" "),t("li",[s._v("version: 当前项目版本")]),s._v(" "),t("li",[s._v("edition：Rust 的大版本（2-3 年发布一次大版本）")])]),s._v(" "),t("p",[t("strong",[s._v("定义项目依赖")]),s._v("\n使用 cargo 工具的最大优势就在于，能够对该项目的各种依赖项进行方便、统一和灵活的管理。在 cargo.toml 中，主要通过各种依赖段落来描述该项目的各种依赖项:")]),s._v(" "),t("ul",[t("li",[s._v("基于 rust 官方仓库 "),t("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("crates.io"),t("OutboundLink")],1),s._v("，通过版本说明来描述")]),s._v(" "),t("li",[s._v("基于项目源代码的 git 仓库地址，通过 URL 来描述")]),s._v(" "),t("li",[s._v("基于本地项目的绝对路径或者相对路径，通过类 Unix 模式的路径来描述")])]),s._v(" "),t("p",[s._v("这三种形式具体写法如下：")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("rand")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("hammer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("version")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.5.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("color")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/bjz/color-rs"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("geometry")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("path")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"crates/geometry"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);