(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{609:function(e,t,r){"use strict";r.r(t);var o=r(10),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("End of the year update on Compat 2021—an effort to eliminate browser compatibility problems in five key focus areas: CSS Flexbox, CSS Grid, position: sticky, aspect-ratio, and CSS transforms.\n"),e._v(" "),e._v("\nThe end of the year is near, and it's time for a final update on Compat 2021—an effort to eliminate browser compatibility problems in five key focus areas.")]),e._v(" "),r("blockquote",[r("p",[e._v("This effort is also known as Interop 2021, matching the name of Interop 2022, which is the continuation of this effort.")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220207213026.png",alt:""}})]),e._v(" "),r("p",[e._v("Since our "),r("a",{attrs:{href:"https://web.dev/compat2021-midyear/",target:"_blank",rel:"noopener noreferrer"}},[e._v("last update"),r("OutboundLink")],1),e._v(", we’ve continued to see improvements in all browsers. All browsers started with much lower test scores at the beginning of the year, but now all browsers have surpassed 90%! This means the web platform has significantly improved interoperability of the five focus areas.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://web-dev.imgix.net/image/Wd2sVnt4VLho4jgp7UtIyWFceE02/Kaz3ye7gFfow8ia7lWYW.png?auto=format&w=1600",alt:""}})]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"title"},[e._v("Caution")]),r("p",[e._v("The graph does not correctly show the improvements in Safari Technology Preview between May and November, as the version tested was stuck at an older version. This is now resolved but the data between May and November remains incorrect.")])]),r("p",[e._v("Contributions to browser engines are made not only by browser vendors, but also others in the web community. For this project, we particularly want to thank Igalia for "),r("a",{attrs:{href:"https://www.igalia.com/2021/11/12/New-Interoperability-Milestones.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("their involvement"),r("OutboundLink")],1),e._v(" and continued work to improve the scores. Igalia has contributed to improving all five focus areas of Compat 2021.")]),e._v(" "),r("p",[e._v("On "),r("a",{attrs:{href:"https://wpt.fyi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("wpt.fyi"),r("OutboundLink")],1),e._v(", the test results dashboard, there’s now a "),r("a",{attrs:{href:"https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2021",target:"_blank",rel:"noopener noreferrer"}},[e._v("filtered test results view"),r("OutboundLink")],1),e._v(" showing all of the tests included in Compat 2021, and also views for Chrome, Firefox, and Safari comparing the results to our last update in July.")]),e._v(" "),r("p",[e._v("Let’s take a look at the improvements in each area!")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"title"}),r("p",[e._v("This post uses browser engine names when referencing specific improvements or bug fixes. "),r("strong",[e._v("Chromium")]),e._v(" is the engine used by Chrome and Edge, "),r("strong",[e._v("Gecko")]),e._v(" is used by Firefox, and "),r("strong",[e._v("WebKit")]),e._v(" is used by Safari.")])]),r("h2",{attrs:{id:"css-flexbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-flexbox"}},[e._v("#")]),e._v(" CSS flexbox")]),e._v(" "),r("p",[r("code",[e._v("flex-basis")]),e._v(": content is now on its way to all browsers, with implementations landing in Chromium and WebKit. (The "),r("code",[e._v("content")]),e._v(" value was already supported by Gecko.)")]),e._v(" "),r("p",[e._v("In Chromium, an "),r("a",{attrs:{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=961902",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue with flexbox sizing"),r("OutboundLink")],1),e._v(" is fixed, matching the spec and Gecko’s behavior. And in Gecko, several "),r("a",{attrs:{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1700745",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues affecting Compat 2021"),r("OutboundLink")],1),e._v(" are fixed, including an "),r("a",{attrs:{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1611303",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue with percentage height on flex items"),r("OutboundLink")],1),e._v(". Finally, in WebKit, support for more alignment property values (left, right, self-start, self-end, start, end) is now added, and a lot of improvements were made for "),r("a",{attrs:{href:"https://trac.webkit.org/changeset/281995/webkit",target:"_blank",rel:"noopener noreferrer"}},[e._v("absolute positioning"),r("OutboundLink")],1),e._v(", also improving the flexbox test results in Compat 2021.")]),e._v(" "),r("h2",{attrs:{id:"css-grid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-grid"}},[e._v("#")]),e._v(" CSS Grid")]),e._v(" "),r("p",[e._v("The use of CSS Grid on the web continues to grow, as can be seen in both the "),r("a",{attrs:{href:"https://almanac.httparchive.org/en/2021/css#flexbox-and-grid-adoption",target:"_blank",rel:"noopener noreferrer"}},[e._v("2021 Web Almanac"),r("OutboundLink")],1),e._v(" and Chrome’s "),r("a",{attrs:{href:"https://www.chromestatus.com/metrics/feature/timeline/popularity/1693",target:"_blank",rel:"noopener noreferrer"}},[e._v("usage metrics"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://blogs.windows.com/msedgedev/2021/08/10/compat2021-css-grid-gridng/",target:"_blank",rel:"noopener noreferrer"}},[e._v("launch of GridNG"),r("OutboundLink")],1),e._v(" in Chrome and Edge 93 resolved many long standing issues with Grid, closing an impressive 38 issues in Chromium’s bug tracker. Together with many smaller improvements that followed, the Compat 2021 score for Grid in Chromium improved by 3% to 97%. This work was led by the Edge team at Microsoft.")]),e._v(" "),r("p",[e._v("An "),r("a",{attrs:{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=1707643",target:"_blank",rel:"noopener noreferrer"}},[e._v("absolute positioning bug"),r("OutboundLink")],1),e._v(" affecting Grid was fixed in Gecko, and "),r("a",{attrs:{href:"https://bugs.webkit.org/buglist.cgi?bug_status=RESOLVED&chfield=resolution&chfieldfrom=2021-01-01&chfieldto=2021-12-31&component=Accessibility&component=CSS&component=Layout%20and%20Rendering&component=New%20Bugs&f1=short_desc&f2=short_desc&f3=short_desc&list_id=7744283&o1=notsubstring&o2=notsubstring&o3=substring&query_format=advanced&resolution=FIXED&v1=Web%20Inspector&v2=%5BLFC%5D&v3=grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("many fixes"),r("OutboundLink")],1),e._v(" have landed in WebKit, leading to a 1% improvement for Firefox and 3% improvement for Safari on the Grid tests.")]),e._v(" "),r("h2",{attrs:{id:"css-position-sticky"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-position-sticky"}},[e._v("#")]),e._v(" CSS position: sticky")]),e._v(" "),r("p",[e._v("In our last update, we noted that "),r("code",[e._v("position: sticky")]),e._v(" was the first area where any browser (in this case Chrome and Edge) reached 100% passing tests. Now, following a "),r("a",{attrs:{href:"https://bugs.webkit.org/buglist.cgi?bug_status=RESOLVED&chfield=resolution&chfieldfrom=2021-01-01&chfieldto=2021-12-31&f1=short_desc&f2=short_desc&f3=short_desc&list_id=7744291&o1=notsubstring&o2=notsubstring&o3=substring&query_format=advanced&resolution=FIXED&v1=Web%20Inspector&v2=%5BLFC%5D&v3=sticky",target:"_blank",rel:"noopener noreferrer"}},[e._v("number of fixes"),r("OutboundLink")],1),e._v(" in WebKit’s implementation, Safari also scores 100% for these tests. Most of these improvements were included in Safari 15.")]),e._v(" "),r("h2",{attrs:{id:"css-aspect-ratio-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-aspect-ratio-property"}},[e._v("#")]),e._v(" CSS aspect-ratio property")]),e._v(" "),r("p",[e._v("Cross-browser support for defining the aspect ratio (width-to-height ratio) of elements has continued to improve, with Compat 2021 scores reaching 99%, 97% and 95% for Chrome/Edge, Firefox and Safari respectively. Most of the improvements are not with the "),r("code",[e._v("aspect-ratio")]),e._v(" property itself, but rather with how "),r("code",[e._v("width")]),e._v(" and "),r("code",[e._v("height")]),e._v(" attributes are "),r("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/Media/images/aspect_ratio_mapping",target:"_blank",rel:"noopener noreferrer"}},[e._v("mapped to a default "),r("code",[e._v("aspect-ratio")]),e._v(" value"),r("OutboundLink")],1),e._v(" for elements. This was implemented for multiple elements in WebKit, and "),r("code",[e._v("<canvas>")]),e._v(" for Chromium.")]),e._v(" "),r("h2",{attrs:{id:"css-transforms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-transforms"}},[e._v("#")]),e._v(" CSS transforms")]),e._v(" "),r("p",[e._v("Support for "),r("code",[e._v("transform: perspective(none)")]),e._v(" is now supported in Chromium, Gecko and WebKit. This will make it easier to animate between a perspective and no perspective.")]),e._v(" "),r("p",[e._v("In Chromium, "),r("code",[e._v("transform-style: preserve-3d")]),e._v(" (which allows child elements to participate in the same 3D scene) and the perspective property (which applies a "),r("code",[e._v("perspective")]),e._v(" transform to child elements) are now "),r("a",{attrs:{href:"https://chromestatus.com/feature/5640541339385856",target:"_blank",rel:"noopener noreferrer"}},[e._v("aligned with the spec"),r("OutboundLink")],1),e._v(" by making them apply only to child elements.")]),e._v(" "),r("p",[e._v("The big increase in the "),r("a",{attrs:{href:"https://wpt.fyi/compat2021?feature=css-transforms",target:"_blank",rel:"noopener noreferrer"}},[e._v("scores"),r("OutboundLink")],1),e._v(" for CSS transforms for all browsers is mainly due to improvements to the test suite, where incorrect tests have been fixed or removed. This makes it easier to understand the remaining interoperability problems and avoid regressions in the future.")]),e._v(" "),r("h2",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("We are grateful for the work that everyone has put in to end the year with many improvements to the score as well as better testing infrastructure. "),r("code",[e._v("aspect-ratio")]),e._v(" was a long requested feature from web developers and it is now supported in all browsers. Use of flexbox, grid and "),r("code",[e._v("position: sticky")]),e._v(" are all growing, and these features are now better supported across browsers thanks to many improvements made during 2021.")]),e._v(" "),r("p",[e._v("What's next? We are excited to continue collaborating with other browser vendors and the wider community in the next iteration of this effort. We have started to research and discuss the focus areas for 2022. Please look out for an announcement coming soon.")]),e._v(" "),r("hr"),e._v(" "),r("blockquote",[r("ul",[r("li",[e._v("译文出自："),r("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("weekly-tracker"),r("OutboundLink")],1),e._v(" 项目，期待你的加入！")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://web.dev/compat2021-holiday-update/?utm_source=CSS-Weekly&utm_campaign=Issue-486&utm_medium=web",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看原文"),r("OutboundLink")],1),e._v("对比阅读")]),e._v(" "),r("li",[e._v("发现错误？"),r("a",{attrs:{href:"https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/css_weekly/486/compat_2021_holiday_update.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("提交 PR"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("译者：")]),e._v(" "),r("li",[e._v("校对者：")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);