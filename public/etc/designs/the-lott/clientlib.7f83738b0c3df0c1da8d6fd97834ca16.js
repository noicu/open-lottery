define("text!why-join-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/why-join/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("underconstruction", ["exports"], function(e) {
    "use strict";

    function t(e) {
        function t() {
            setTimeout(function() {
                $("#signup-form").addClass("hide"), $("#signup-thanks").removeClass("hide"), $("#undercontruction-signup").addClass("full-width")
            }, 700)
        }

        function n(e) {
            return !(!/^[A-Za-z -']{1,30}/g.test(e) || e.length > 30 || e.length < 1) || ($("#name-help").removeClass("hide"), !1)
        }

        function s(e) {
            return !(!/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/im.test(e) || e.length < 6 || e.length > 80) || ($("#email-help").removeClass("hide"), !1)
        }
        $(function() {
            $("#subForm").submit(function(e) {
                $("#fieldouduyy").val(document.title), e.preventDefault();
                var a = $("#fieldName").val(),
                    i = $("#fieldEmail").val(),
                    o = n(a),
                    r = s(i);
                o && r && $.getJSON(this.action + "?callback=?", $(this).serialize(), function(e) {
                    400 === e.Status ? alert("Error: " + e.Message) : t()
                })
            })
        }), $(function() {
            $("#fieldName").keypress(function(e) {
                var t = new RegExp(/^[a-zA-Z-' \r\n\t\b]+$/),
                    n = String.fromCharCode(e.charCode ? e.charCode : e.which);
                if (!t.test(n)) return e.preventDefault(), !1
            })
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.bootstrap = t
}), define("text!underconstruction-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/underconstruction/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("text!real-winners-home-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/real-winners-home/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("product-navigation", ["exports", "aurelia-dependency-injection", "services/user-context"], function(e, t, n) {
    "use strict";

    function o(e) {
        var o = new t.Container,
            i = o.get(n.UserContext),
            a = "state-" + i.jurisdictionLocation.toLowerCase();
        e.className += " " + a, document.querySelector("#" + e.id + " select").onchange = s
    }

    function s(e) {
        document.location.href = e.target.value
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.bootstrap = o
}), define("text!product-navigation-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/product-navigation/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("NAVI", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.NAVI = function() {
        function e(e) {
            var t = document.getElementsByClassName("menu-content-membership")[0].getElementsByClassName("menu-header")[0];
            e && ("act" !== e && "nsw" !== e || (t.innerText = "PLAYERS CLUB"), "qld" === e && (t.innerText = "WINNERS CIRCLE"), "sa" === e && (t.innerText = "EASIPLAY CLUB"))
        }

        function t() {
            window.scrollTo(0, 0)
        }

        function n() {
            window.removeEventListener("scroll", u.monitorMenuScroll), u.currentSubMenu = u.currentMenu.querySelector(".submenu-content"), u.isTouchDevice ? window.addEventListener("touchend", o) : window.addEventListener("mouseup", o)
        }

        function o() {
            setTimeout(function() {
                d(u.currentSubMenu, 98) && (u.isTouchDevice ? window.removeEventListener("touchend", o) : window.removeEventListener("mouseup", o), u.collapseActiveMenu(!0))
            }, 200)
        }

        function i() {
            window.removeEventListener("scroll", u.monitorMenuScroll), u.isTouchDevice ? window.addEventListener("touchend", s) : window.addEventListener("mouseup", s)
        }

        function s() {
            u.isTouchDevice ? window.removeEventListener("touchend", s) : window.removeEventListener("mouseup", s), setTimeout(function() {
                c()
            }, 100)
        }

        function c() {
            var e = document.documentElement.scrollTop || document.body.scrollTop,
                t = document.getElementById("menubar").getBoundingClientRect();
            t.bottom < 50 && (l.classList.add("drop-hide"), window.scrollTo(0, e - t.height)), setTimeout(function() {
                u.currentPosition = document.documentElement.scrollTop || document.body.scrollTop, u.currentPosition < 5 && (l.classList.remove("drop-hide"), l.classList.add("drop-show")), window.addEventListener("scroll", u.monitorMenuScroll)
            }, 100)
        }

        function r() {
            return (document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight) + 800 >= (document.documentElement.scrollHeight || document.body.scrollHeight)
        }

        function d(e, t) {
            return e.getBoundingClientRect().bottom < t
        }
        var u = {};
        u.currentPosition = document.documentElement.scrollTop || document.body.scrollTop, u.direction = 0, u.isTouchDevice = "ontouchstart" in document.documentElement;
        var l = document.getElementById("pagewrapper");
        return u.changeState = function() {
            window.document.__aureliaGlobal.TattsEvent.publish("Jurisdiction", "Prompt")
        }, u.currentLocale = function(e) {
            for (var t = e + "=", n = decodeURIComponent(document.cookie), o = n.split(";"), i = 0; i < o.length; i++) {
                for (var s = o[i];
                    " " == s.charAt(0);) s = s.substring(1);
                if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
            }
            return ""
        }("locale").toLowerCase(), u.currentLocale || (u.currentLocale = "vic"), u.getMenuArray = function(e, t) {
            var n = document.getElementById(e);
            n.className += " " + u.currentLocale;
            var o = new XMLHttpRequest,
                i = "/content/the-lott/primary-menu." + u.currentLocale + "." + t + ".html";
            o.onreadystatechange = function() {
                4 == this.readyState && 200 == this.status && (n.innerHTML = this.responseText)
            }, o.open("GET", i, !0), o.send()
        }, u.setupMenuItem = function(o, i) {
            if (this.currentLocale && "sa" === this.currentLocale.toLowerCase()) {
                var s = i.querySelectorAll(".sa-hide-for-medium");
                if (s && s.length > 0)
                    for (var c = 0; c < s.length; c++) s[c].classList.add("hide-for-medium")
            }
            o.addEventListener("click", function(e) {
                if (o.classList.contains("is-active-menu-item") ? (o.classList.remove("is-active-menu-item"), o.childNodes[1].classList.add("fa-caret-down"), o.childNodes[1].classList.remove("fa-caret-up"), i.classList.toggle("is-visible")) : (o.classList.add("is-active-menu-item"), o.childNodes[1].classList.add("fa-caret-up"), o.childNodes[1].classList.remove("fa-caret-down"), i.classList.toggle("is-visible")), u.isTouchDevice && !document.body.classList.contains("display-state-prompt")) try {
                    l.classList.remove("drop-hide"), l.classList.remove("drop-show"), l.classList.add("bar-fixed"), t(), u.currentMenu = i, u.currentTabMenu = o, n()
                } catch (e) {}
                e.preventDefault()
            }, !1), document.addEventListener("click", function(e) {
                i.parentNode.contains(e.target) || o.parentNode.contains(e.target) || (o.classList.remove("is-active-menu-item"), i.classList.remove("is-visible"), o.childNodes[1].classList.remove("fa-caret-up"), o.childNodes[1].classList.add("fa-caret-down"))
            }), -1 !== o.innerText.indexOf("More") && e(this.currentLocale)
        }, u.monitorMenuScroll = function() {
            var e = u.currentPosition;
            u.currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
            var t = Math.abs(e - u.currentPosition);
            e > u.currentPosition ? u.direction = 1 : e < u.currentPosition ? u.direction = -1 : u.direction = 0, l.classList.contains("drop-hide") || l.classList.contains("drop-show") ? u.currentPosition < 5 ? (l.classList.remove("drop-hide"), l.classList.add("drop-show")) : t > 5 && (r() || 1 !== u.direction ? (l.classList.remove("drop-show"), l.classList.add("drop-hide")) : (l.classList.remove("drop-hide"), l.classList.add("drop-show"))) : i()
        }, u.monitorPrompt = function() {
            document.body.classList.contains("display-state-prompt") || (window.removeEventListener("scroll", u.monitorPrompt), window.addEventListener("scroll", u.monitorMenuScroll))
        }, u.monitorForTouch = function() {
            u.isTouchDevice && (document.body.classList.contains("display-state-prompt") ? window.addEventListener("scroll", u.monitorPrompt) : window.addEventListener("scroll", u.monitorMenuScroll))
        }, u.collapseActiveMenu = function() {
            var e = document.documentElement.scrollTop || document.body.scrollTop,
                t = 0;
            if (u.currentMenu) {
                t = u.currentMenu.getBoundingClientRect().height, u.currentSubMenu.classList.add("no-transition"), u.currentMenu.classList.remove("is-visible"), window.scrollTo(0, e - t)
            }
            var n = document.querySelector("#resultsmenu.is-active-menu-item,#playmenu.is-active-menu-item,#moremenu.is-active-menu-item");
            n && (n.childNodes[1].classList.remove("fa-caret-up"), n.childNodes[1].classList.add("fa-caret-down"), setTimeout(function() {
                n.classList.remove("is-active-menu-item")
            }, 500));
            document.documentElement.scrollTop || document.body.scrollTop;
            l.classList.add("drop-hide"), l.classList.remove("bar-fixed"), setTimeout(function() {
                u.currentPosition = document.documentElement.scrollTop || document.body.scrollTop, window.addEventListener("scroll", u.monitorMenuScroll)
            }, 100)
        }, window.NAVI = u, u
    }()
}), define("navigation", ["exports", "./NAVI", "aurelia-dependency-injection"], function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        (new n.Container).get(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Navigation = void 0, e.bootstrap = i;
    var s = e.Navigation = function e() {
        o(this, e), t.NAVI.setupMenuItem(window.playmenu, window.playmenucontainer), t.NAVI.setupMenuItem(window.resultsmenu, window.resultsmenucontainer), t.NAVI.setupMenuItem(window.moremenu, window.moremenucontainer), setTimeout(function() {
            t.NAVI.monitorForTouch()
        }, 5e3)
    }
}), define("text!navigation-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/navigation/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("text!lotterywest-app-banner-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/lotterywest-app-banner/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
/* heading-prod-aem-v1.2.185 */
define("text!index.html", ["module"], function(e) {
    e.exports = '<section class="heading" id="${properties.jcr:uuid}"><div class="row ${properties.jcr:HeadingStyle} ${properties.jcr:HeadingAlignment == \'align-left\' ? \'align-justify\' : properties.jcr:HeadingAlignment}"><h1 data-sly-element="${properties.jcr:HeadingType}" data-sly-text="${!properties.jcr:HeadingText ? pageProperties.jcr:title : properties.jcr:HeadingText}">Heading</h1><div class="navigation-link"><a href="${properties.jcr:LinkUrl}" data-sly-test="${properties.jcr:LinkUrl}"><span class="link-text-large">${properties.jcr:LargeDeviceLinkText @ context=\'html\'}</span> <span class="link-text-small">${properties.jcr:SmallDeviceLinkText @ context=\'html\'}</span> <span class="link-text-super-small">${properties.jcr:TinyDeviceLinkText @ context=\'html\'}</span></a></div></div></section>'
}), define("text!heading-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/cart/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("text!callout-environment.json", ["module"], function(t) {
    t.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/callout/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("text!app-splash-banner-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/app-splash-banner/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("app-reviews", ["exports", "json!app-reviews-environment.json", "other"], function(e, t, o) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e) {
        for (var t = new i(e), o = e.querySelectorAll(".carousel-controls > .radio-select"), n = 0; n < o.length; n++) o[n].onclick = function(e) {
            t.carouselSelect(e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AppReviews = void 0, e.bootstrap = s;
    var i = (function(e) {
        e && e.__esModule
    }(t), e.AppReviews = function() {
        function e(t) {
            n(this, e), this.currentSelection = 0, this.rootElement = t, this.carouselContainer = this.rootElement.querySelector(".app-review-carousel"), this.sections = this.rootElement.querySelectorAll(".app-review-carousel > .carousel-container > .carousel-content"), this.carouselContainer.style.minHeight = this.sections[0].scrollHeight + "px"
        }
        return e.prototype.setContentHeight = function() {
            this.carouselContainer.style.minHeight = this.sections[this.currentSelection].scrollHeight + "px"
        }, e.prototype.slideTo = function() {
            var e = 100 * this.currentSelection;
            this.setContentHeight(), this.rootElement.querySelector(".app-review-carousel > .carousel-container").style.transform = "translateX(-" + e + "%)";
            var t = window.innerWidth < 768 ? 50 : 80;
            window.scroll(0, this.findPos(this.rootElement)[0] - t)
        }, e.prototype.setSection = function(e) {
            e !== this.currentSelection && (this.currentSelection = e)
        }, e.prototype.carouselSelect = function(e) {
            this.setSection(e.target.attributes.index.nodeValue), this.slideTo()
        }, e.prototype.findPos = function(e) {
            var t = 0;
            if (e.offsetParent) {
                do {
                    t += e.offsetTop, e = e.offsetParent
                } while (e);
                return [t]
            }
        }, e
    }())
}), define("other", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Test = 3
}), define("text!app-reviews-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/app-reviews/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("text!app-features-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/app-features/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("app-display", [], function() {
    "use strict"
}), define("text!app-display-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/app-display/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("app-android-install", ["exports"], function(n) {
    "use strict";

    function e(n) {
        "iOS" === t() ? console.warn("Note: App android install information hidden due to ios being detected") : n.style.display = "block"
    }

    function t() {
        var n = navigator.userAgent || navigator.vendor || window.opera;
        return /windows phone/i.test(n) ? "Windows Phone" : /android/i.test(n) ? "Android" : /iPad|iPhone|iPod/.test(n) && !window.MSStream ? "iOS" : "unknown"
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.bootstrap = e
}), define("text!app-android-install-environment.json", ["module"], function(n) {
    n.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/app-android-install/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});
define("accordion-container", ["exports", "json!accordion-container-environment.json", "aurelia-dependency-injection", "services/aem-util", "./accordion-section", "./services/user-context", "services/query-string-rewriter", "elements/accordion/accordion-container"], function(e, t, i, n, s, o, c, r) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function h(e) {
        u.default;
        var t = new i.Container,
            n = t.get(p),
            s = document.querySelectorAll(".accordion-section");
        n.setup(s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AccordionContainer = void 0, e.bootstrap = h;
    var l, d, u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(t),
        p = e.AccordionContainer = (l = (0, i.inject)(n.AEMUtil, c.QueryStringRewriter, r.AccordionContainer, o.UserContext))(d = function() {
            function e(t, i, n, s) {
                a(this, e), this.sectionElements = [], this.sections = [], this.aemUtil = t, this.queryStringRewriter = i, this.accordionContainerFromLayout = n, this.userContext = s, this.openedSections = this.accordionContainerFromLayout.getOpenedSections()
            }
            return e.prototype.setSectionElements = function(e) {
                this.sectionElements = e
            }, e.prototype.setup = function(e) {
                this.setSectionElements(e);
                for (var t = 0; t < this.sectionElements.length; t++)
                    if (this.sectionElements[t].className.match(/(?:^|\s)hide-for-sec(?!\S)/) && this.userContext.isScratcheClubProspect) this.sectionElements[t].parentNode.removeChild(this.sectionElements[t]);
                    else if (this.sectionElements[t].className.match(/(?:^|\s)hide-for-international(?!\S)/) && this.userContext.homeAddress && "Australia" !== this.userContext.homeAddress.country) this.sectionElements[t].parentNode.removeChild(this.sectionElements[t]);
                else if (this.sectionElements[t].className.match(/(?:^|\s)paypal-accordion(?!\S)/) && this.userContext.homeAddress) {
                    var i = this.userContext.homeAddress.country;
                    if ("Australia" !== i && "New Zealand" !== i) {
                        this.sectionElements[t].parentNode.removeChild(this.sectionElements[t]);
                        continue
                    }
                }
                for (var n = 0; n < this.sectionElements.length; n++) this.sections.push(new s.AccordionSection(this.sectionElements[n], this.openedSections)), this.aemUtil.isAuthor() ? this.sections[n].authoringSetup() : this.sections[n].setup();
                this.queryStringRewriter.setParam("opened-accordion", null)
            }, e
        }()) || d
}), define("accordion-section", ["exports", "elements/accordion/accordion-state-keeper"], function(e, t) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AccordionSection = void 0;
    e.AccordionSection = function() {
        function e(n, s) {
            i(this, e), this.currentHeight = 0, this.hasBeenCleared = !1, this.delayForIE = 0, this.element = n, this.openedSections = s, this.body = n.querySelector(".accordion-body"), this.title = n.querySelector(".title-wrapper"), this.toggle = n.querySelector(".section-toggle"), this.heading = n.querySelector(".title").innerText, this.accordionStateKeeper = new t.AccordionStateKeeper, this.accordionStateKeeper.hasOpenedSection(this.openedSections, this.heading) && (this.body.classList.add("active"), this.toggle.classList.toggle("flip"))
        }
        return e.prototype.isActive = function() {
            return this.body.classList.contains("active")
        }, e.prototype.setup = function() {
            var e = this;
            this.isActive() && this.setWatcher(), this.title.onclick = function() {
                e.toggleSection()
            }
        }, e.prototype.setWatcher = function() {
            var e = this;
            this.hasBeenCleared = !1, this.watcher = setInterval(function() {
                var t = !e.setBodyHeight();
                e.delayForIE++, t && e.delayForIE > 15 && !e.body.classList.contains("expanded") && e.body.classList.add("expanded")
            }, 50)
        }, e.prototype.authoringSetup = function() {
            var e = this;
            this.title.onclick = function() {
                e.toggleSection()
            }, this.body.style.maxHeight = "100%", this.body.classList.add("active"), this.body.classList.add("expanded")
        }, e.prototype.setBodyHeight = function() {
            var e = this.body.scrollHeight;
            this.body.style.maxHeight = e + "px";
            var t = this.currentHeight < e;
            return this.currentHeight = e, t
        }, e.prototype.toggleSection = function() {
            this.body.classList.toggle("active"), this.toggle.classList.toggle("flip"), this.isActive() ? this.setWatcher() : (this.clearWatcher(), this.body.style.maxHeight = null, this.currentHeight = 0, this.body.classList.remove("expanded"))
        }, e.prototype.clearWatcher = function() {
            this.hasBeenCleared || (clearInterval(this.watcher), this.hasBeenCleared = !0, this.delayForIE = 0)
        }, e
    }()
}), define("text!accordion-container-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/accordion-container/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});