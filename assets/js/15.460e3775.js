(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{586:function(t,a,e){"use strict";e.r(a);var s=e(10),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),e("blockquote",[e("p",[t._v("简单粗暴，如果资源没过期，就取本地的缓存（from disk cache），如果过期了，则请求服务器。")])]),t._v(" "),e("p",[t._v("响应头："),e("code",[t._v("Cache-Control")]),t._v(" 和 "),e("code",[t._v("Expires")]),t._v("(基本淘汰)")]),t._v(" "),e("p",[t._v("Cache-Control 的值的意义：")]),t._v(" "),e("ul",[e("li",[t._v("private：仅浏览器缓存")]),t._v(" "),e("li",[t._v("public：浏览器和代理服务器都可以缓存")]),t._v(" "),e("li",[t._v("max-age=31xxxxx：过期时间（重要）")]),t._v(" "),e("li",[t._v("no-store：不强缓存，也不协商缓存")]),t._v(" "),e("li",[t._v("no-cache：不强缓存")])]),t._v(" "),e("p",[t._v("例子：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s3.ax1x.com/2021/03/03/6EdcE4.jpg",alt:"640.png"}})]),t._v(" "),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),e("p",[t._v("触发条件：")]),t._v(" "),e("ol",[e("li",[t._v("Catch-Control 的值为 no-cache（不走强缓存）")]),t._v(" "),e("li",[t._v("或者 max-age 过期了 (强缓存过期了)")])]),t._v(" "),e("blockquote",[e("p",[t._v("也就是说，不管怎样，都可能最后要进行协商缓存（no-store 除外）")])]),t._v(" "),e("p",[t._v("响应头：")]),t._v(" "),e("ul",[e("li",[t._v("ETag：类似 md5，文件变动了，值也会变")]),t._v(" "),e("li",[t._v("Last-Modified：文件的修改时间")])]),t._v(" "),e("p",[t._v("每次 http 的返回头中有"),e("code",[t._v("ETag")]),t._v("和"),e("code",[t._v("Last-Modified")]),t._v("的时候，下次请求时会把这两个带上（要不然怎么协商呢？？）即：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Response Header -> Request Header\n--\nETag -> If-None-Match\nLast-Modified -> If-Last-Since\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("这个过程是循环往复的，即每次请求成功都会更新规则。")]),t._v(" "),e("p",[t._v("总结：")]),t._v(" "),e("ol",[e("li",[t._v("请求资源时，用户带上资源的 ETag，服务端和最新的资源对比")]),t._v(" "),e("li",[t._v("资源没改，http 返回 304，浏览读取本地的缓存")]),t._v(" "),e("li",[t._v("资源改了，http 返回 200，服务端返回最新的资源")])]),t._v(" "),e("blockquote",[e("p",[t._v("协商缓存，都会向服务端发送请求，（不然怎么叫协商呢？？），只不过，资源没改动时，返回的只是 header 信息，所以 http 的 size 很小；资源改动时，还要返回 body 的信息（就是普通请求啦），所以 size 很大")])]),t._v(" "),e("p",[t._v("例子：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s3.ax1x.com/2021/03/03/6Edf81.jpg",alt:"640 (1).png"}})]),t._v(" "),e("h2",{attrs:{id:"流程图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[t._v("#")]),t._v(" 流程图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://s3.ax1x.com/2021/03/04/6ZRWRK.png",alt:"流程图"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);