(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{225:function(_,v,e){"use strict";e.r(v);var o=e(0),c=Object(o.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"配置文件说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件说明"}},[_._v("#")]),_._v(" 配置文件说明")]),_._v(" "),e("p",[e("code",[_._v("host")]),_._v(" 服务绑定的地址，默认值"),e("code",[_._v("0.0.0.0")])]),_._v(" "),e("p",[e("code",[_._v("port")]),_._v(" 服务绑定的地址，默认值 "),e("code",[_._v("9222")])]),_._v(" "),e("p",[e("code",[_._v("public_on")]),_._v(" 开启 web 模式，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("public_addr")]),_._v(" web 模式可以被访问的地址（如 nginx 代理后的地址），如"),e("code",[_._v("https://192.168.3.13:9222/yobot/")]),_._v("，默认自动检测")]),_._v(" "),e("p",[e("code",[_._v("public_basepath")]),_._v(" web 模式使用的目录（防止与其他应用冲突），如 "),e("code",[_._v("/yobot/")]),_._v("，默认值"),e("code",[_._v("/")])]),_._v(" "),e("p",[e("code",[_._v("access_token")]),_._v(" 与 httpapi 通信的 token，默认值 "),e("code",[_._v("null")])]),_._v(" "),e("p",[e("code",[_._v("super-admin")]),_._v(" 管理员 user_id 列表")]),_._v(" "),e("p",[e("code",[_._v("black-list")]),_._v(" 黑名单 user_id 列表")]),_._v(" "),e("p",[e("code",[_._v("setting-restrict")]),_._v(" 权限控制，"),e("code",[_._v("0")]),_._v("仅主人，"),e("code",[_._v("1")]),_._v("群主，"),e("code",[_._v("2")]),_._v("管理员，"),e("code",[_._v("3")]),_._v("所有人，默认值 3")]),_._v(" "),e("p",[e("code",[_._v("auto_update")]),_._v(" 自动更新，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("update-time")]),_._v(" 自动更新时间，默认值 "),e("code",[_._v("03:30")])]),_._v(" "),e("p",[e("code",[_._v("show_jjc_solution")]),_._v(" jjc查询结果显示方式，可选"),e("code",[_._v("text")]),_._v(" "),e("code",[_._v("url")]),_._v("，默认值 "),e("code",[_._v("url")])]),_._v(" "),e("p",[e("code",[_._v("jjc_auth_key")]),_._v(" jjc查询授权码，默认值 "),e("code",[_._v("null")])]),_._v(" "),e("p",[e("code",[_._v("gacha_on")]),_._v(" 开启群聊抽卡功能，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("gacha_private_on")]),_._v(" 开启私聊抽卡功能，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_jp_official")]),_._v(" 开启日服官网新闻推送，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_jp_twitter")]),_._v(" 开启日服推特新闻推送，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_tw_official")]),_._v(" 开启台服官网新闻推送，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_tw_facebook")]),_._v(" 开启台服 FaceBook 新闻推送，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_cn_official")]),_._v(" 开启国服官网新闻推送，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_cn_bilibili")]),_._v(" 开启国服 Bilibili 动态新闻推送，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("news_interval_minutes")]),_._v(" 新闻推送检测间隔分钟，默认值 30")]),_._v(" "),e("p",[e("code",[_._v("calender_region")]),_._v(" 日程表地区，可选"),e("code",[_._v("jp")]),_._v(" "),e("code",[_._v("tw")]),_._v(" "),e("code",[_._v("cn")])]),_._v(" "),e("p",[e("code",[_._v("calender_on")]),_._v(" 每日提醒日程，默认值 "),e("code",[_._v("true")])]),_._v(" "),e("p",[e("code",[_._v("calender_time")]),_._v(" 每日提醒日程时间，默认值 "),e("code",[_._v("08:00")])]),_._v(" "),e("p",[e("code",[_._v("notify_groups")]),_._v(" 每日提醒与新闻推送群组")]),_._v(" "),e("p",[e("code",[_._v("notify_privates")]),_._v(" 每日提醒与新闻推送私聊")]),_._v(" "),e("p",[e("code",[_._v("preffix_on")]),_._v(" 指令前缀开关（提高性能，防止误触发），默认值 "),e("code",[_._v("false")])]),_._v(" "),e("p",[e("code",[_._v("preffix_string")]),_._v(" 指令前缀字符串")]),_._v(" "),e("p",[e("code",[_._v("zht_in")]),_._v(" 接受繁中输入（降低性能），默认值 "),e("code",[_._v("false")])]),_._v(" "),e("p",[e("code",[_._v("zht_out")]),_._v(" 输出转化为繁中，默认值 "),e("code",[_._v("false")])]),_._v(" "),e("p",[e("code",[_._v("zht_out_style")]),_._v(" 输出转化为繁中风格，可选"),e("code",[_._v("s2t")]),_._v(" "),e("code",[_._v("s2tw")]),_._v(" "),e("code",[_._v("s2hk")]),_._v(" "),e("code",[_._v("s2twp")]),_._v("，默认值 "),e("code",[_._v("s2t")])])])}),[],!1,null,null,null);v.default=c.exports}}]);