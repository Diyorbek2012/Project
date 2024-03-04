"use strict";
(self["webpackChunkmars_lms"] = self["webpackChunkmars_lms"] || []).push([[764], {
    79764: function(e, l, o) {
        o.r(l),
        o.d(l, {
            default: function() {
                return f
            }
        });
        var a = o(73396)
          , n = o(87139)
          , s = o(49242)
          , i = o(4084);
        const t = {
            class: "login"
        }
          , C = {
            class: "container login-wrapper"
        }
          , r = {
            class: "left-side"
        }
          , d = (0,
        a._)("div", {
            class: "mars-logo"
        }, [(0,
        a._)("img", {
            src: i,
            alt: "mars-logo"
        })], -1)
          , g = (0,
        a._)("span", null, [(0,
        a._)("i", null, [(0,
        a._)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, [(0,
        a._)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M24.9168 13C24.9168 6.41865 19.5816 1.08337 13.0002 1.08337C6.41877 1.08337 1.0835 6.41865 1.0835 13C1.0835 19.5814 6.41877 24.9167 13.0002 24.9167C19.5816 24.9167 24.9168 19.5814 24.9168 13ZM22.0543 9.37577C21.0648 6.90607 19.0941 4.93538 16.6244 3.94589C17.2039 5.06448 17.6584 6.45913 17.9648 8.03541C19.5411 8.34177 20.9357 8.79632 22.0543 9.37577ZM8.03553 8.03541C8.34189 6.45913 8.79644 5.06448 9.37589 3.94589C6.90619 4.93538 4.9355 6.90607 3.94601 9.37577C5.0646 8.79632 6.45925 8.34177 8.03553 8.03541ZM3.25016 13C3.25016 12.0259 5.01457 10.9688 7.70752 10.3331C7.6258 11.1918 7.5835 12.0846 7.5835 13C7.5835 13.9155 7.6258 14.8083 7.70752 15.667C5.01457 15.0313 3.25016 13.9742 3.25016 13ZM3.94601 16.6243C5.0646 17.2038 6.45925 17.6583 8.03553 17.9647C8.34189 19.5409 8.79644 20.9356 9.37589 22.0542C6.90619 21.0647 4.9355 19.094 3.94601 16.6243ZM17.9648 17.9647C17.6584 19.5409 17.2039 20.9356 16.6244 22.0542C19.0941 21.0647 21.0648 19.094 22.0543 16.6243C20.9357 17.2038 19.5411 17.6583 17.9648 17.9647ZM18.4168 13C18.4168 13.9155 18.3745 14.8083 18.2928 15.667C20.9858 15.0313 22.7502 13.9742 22.7502 13C22.7502 12.0259 20.9858 10.9688 18.2928 10.3331C18.3745 11.1918 18.4168 12.0846 18.4168 13ZM9.75016 13C9.75016 11.9273 9.81745 10.8981 9.93717 9.93705C10.8982 9.81732 11.9274 9.75004 13.0002 9.75004C14.0729 9.75004 15.1021 9.81732 16.0632 9.93705C16.1829 10.8981 16.2502 11.9273 16.2502 13C16.2502 14.0728 16.1829 15.102 16.0632 16.063C15.1021 16.1828 14.0729 16.25 13.0002 16.25C11.9274 16.25 10.8982 16.1828 9.93717 16.063C9.81744 15.102 9.75016 14.0728 9.75016 13ZM10.3332 18.2927C10.9689 20.9856 12.026 22.75 13.0002 22.75C13.9743 22.75 15.0314 20.9856 15.6671 18.2927C14.8084 18.3744 13.9156 18.4167 13.0002 18.4167C12.0848 18.4167 11.1919 18.3744 10.3332 18.2927ZM13.0002 3.25004C12.026 3.25004 10.9689 5.01445 10.3332 7.7074C11.1919 7.62567 12.0848 7.58337 13.0002 7.58337C13.9156 7.58337 14.8084 7.62567 15.6671 7.7074C15.0314 5.01445 13.9743 3.25004 13.0002 3.25004Z",
            fill: "#0E0D5D"
        })])])], -1)
          , u = {
            class: "right-side"
        };
        function c(e, l, o, i, c, w) {
            const h = (0,
            a.up)("log-in-tabs")
              , p = (0,
            a.up)("qr-code")
              , m = (0,
            a.up)("video-widget")
              , v = (0,
            a.up)("change-lang")
              , _ = (0,
            a.up)("el-dialog");
            return (0,
            a.wg)(),
            (0,
            a.iD)(a.HY, null, [(0,
            a._)("main", t, [(0,
            a._)("div", C, [(0,
            a._)("div", r, [d, i.showQr ? (0,
            a.kq)("", !0) : ((0,
            a.wg)(),
            (0,
            a.j4)(h, {
                key: 0
            })), i.showQr ? ((0,
            a.wg)(),
            (0,
            a.j4)(p, {
                key: 1,
                userType: e.activeName
            }, null, 8, ["userType"])) : (0,
            a.kq)("", !0), (0,
            a._)("p", {
                class: "toggleQr",
                onClick: l[0] || (l[0] = e=>i.showQr = !i.showQr)
            }, (0,
            n.zw)(i.showQr ? e.$t("login.enterwithid") : e.$t("login.qrcode")), 1), (0,
            a._)("p", {
                class: "toogleVideo",
                onClick: l[1] || (l[1] = e=>i.showVideo = !i.showVideo)
            }, (0,
            n.zw)(e.$t("login.video-btn")), 1), (0,
            a._)("div", {
                class: "lang",
                onClick: l[2] || (l[2] = e=>i.langModale = !0)
            }, [g, (0,
            a._)("p", null, (0,
            n.zw)("ru" === i.lang ? "Русский" : "O'zbekcha"), 1)])]), (0,
            a.wy)((0,
            a._)("div", u, [(0,
            a.Wm)(m)], 512), [[s.F8, i.showVideo]])])]), (0,
            a.Wm)(_, {
                modelValue: i.langModale,
                "onUpdate:modelValue": l[3] || (l[3] = e=>i.langModale = e),
                "align-center": ""
            }, {
                default: (0,
                a.w5)((()=>[(0,
                a.Wm)(v)])),
                _: 1
            }, 8, ["modelValue"])], 64)
        }
        o(57658);
        var w = o(73559)
          , h = o(29470)
          , p = o(44870)
          , m = o(22483)
          , v = o(5658)
          , _ = {
            components: {
                LogInTabs: w.fq,
                ChangeLang: h.gJ,
                VideoWidget: w.ao,
                QrCode: w.UH
            },
            setup() {
                const e = (0,
                p.iH)(!1)
                  , l = (0,
                p.iH)(!1)
                  , o = (0,
                p.iH)(!1)
                  , n = (0,
                p.iH)("student")
                  , s = (0,
                m.tv)()
                  , {locale: i} = (0,
                v.QT)()
                  , t = localStorage.getItem("lang") || i.value;
                return (0,
                a.wF)((()=>{
                    n.value = localStorage.getItem("roleInSpace") || "student",
                    window.innerWidth >= 1030 ? l.value = !0 : l.value = !1,
                    localStorage.getItem("access_token") && s.push({
                        name: `${n.value}-main`
                    })
                }
                )),
                {
                    showQr: e,
                    showVideo: l,
                    langModale: o,
                    lang: t
                }
            }
        }
          , M = o(40089);
        const k = (0,
        M.Z)(_, [["render", c]]);
        var f = k
    }
}]);
//# sourceMappingURL=764.1d7959ee.js.map
