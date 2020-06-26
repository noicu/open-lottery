/* jurisdictions-prod-aem-v1.2.226 */
define("jurisdictions-app", ["require", "exports", "json!jurisdictions-environment.json"], function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.configure = function(t) {
        t.use.standardConfiguration().plugin("aurelia-dialog").plugin("aurelia-event-aggregator").plugin("layout-base", {
            componentConfiguration: i
        }), i.debug && t.use.developmentLogging(), i.testing && t.use.plugin("aurelia-testing"), t.start().then(function() {
            return t.setRoot("jurisdiction-selector/jurisdiction-toggle")
        })
    }
});
var __decorate = this && this.__decorate || function(t, e, i, o) {
        var n, r = arguments.length,
            s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, o);
        else
            for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, i, s) : n(e, i)) || s);
        return r > 3 && s && Object.defineProperty(e, i, s), s
    },
    __metadata = this && this.__metadata || function(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    };
define("jurisdiction-selector/jurisdiction-selection-prompt", ["require", "exports", "aurelia-framework", "aurelia-dialog"], function(t, e, i, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t) {
            this.controller = t, this.selection = {
                jurisdiction: null,
                stateJurisdictionMap: null
            }
        }
        return t.prototype.activate = function(t) {
            this.selection = t
        }, t = __decorate([i.autoinject, i.singleton(!0), __metadata("design:paramtypes", [o.DialogController])], t)
    }();
    e.SelectionPrompt = n
});
var __decorate = this && this.__decorate || function(t, e, i, o) {
        var n, r = arguments.length,
            s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, o);
        else
            for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, i, s) : n(e, i)) || s);
        return r > 3 && s && Object.defineProperty(e, i, s), s
    },
    __metadata = this && this.__metadata || function(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    },
    __awaiter = this && this.__awaiter || function(t, e, i, o) {
        function n(t) {
            return t instanceof i ? t : new i(function(e) {
                e(t)
            })
        }
        return new(i || (i = Promise))(function(i, r) {
            function s(t) {
                try {
                    c(o.next(t))
                } catch (t) {
                    r(t)
                }
            }

            function a(t) {
                try {
                    c(o.throw(t))
                } catch (t) {
                    r(t)
                }
            }

            function c(t) {
                t.done ? i(t.value) : n(t.value).then(s, a)
            }
            c((o = o.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        function i(t) {
            return function(e) {
                return o([t, e])
            }
        }

        function o(i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (n = 1, r && (s = 2 & i[0] ? r.return : i[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, i[1])).done) return s;
                switch (r = 0, s && (i = [2 & i[0], s.value]), i[0]) {
                    case 0:
                    case 1:
                        s = i;
                        break;
                    case 4:
                        return c.label++, {
                            value: i[1],
                            done: !1
                        };
                    case 5:
                        c.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                            c.label = i[1];
                            break
                        }
                        if (6 === i[0] && c.label < s[1]) {
                            c.label = s[1], s = i;
                            break
                        }
                        if (s && c.label < s[2]) {
                            c.label = s[2], c.ops.push(i);
                            break
                        }
                        s[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                i = e.call(t, c)
            } catch (t) {
                i = [6, t], r = 0
            } finally {
                n = s = 0
            }
            if (5 & i[0]) throw i[1];
            return {
                value: i[0] ? i[1] : void 0,
                done: !0
            }
        }
        var n, r, s, a, c = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a
    };
define("jurisdiction-selector/jurisdiction-toggle", ["require", "exports", "aurelia-framework", "aurelia-cookie", "aurelia-dialog", "./jurisdiction-selection-prompt", "services/user-context", "services/aem-util", "services/tatts-event-service", "text!./mobile-selector.html", "./mobile-selector-model", "services/mobile-dialog", "tatts-api/idata/lotteries-location", "tatts-api/idata/lotteries-company", "services/tatts-configuration", "services/cancellable-event-service", "events/jurisdiction-events", "services/reloader"], function(t, e, i, o, n, r, s, a, c, l, d, u, p, g, m, h, f, b) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var v = function() {
        function t() {}
        return t.prototype.reload = function(t) {
            b.Reloader.reload(t)
        }, t
    }();
    e.Reloader = v, e.getStateJurisdictionMap = function() {
        return [{
            location: p.LotteriesLocation.AustralianCapitalTerritory,
            companyLogos: [g.LotteriesCompany.NSWLotteries]
        }, {
            location: p.LotteriesLocation.NewSouthWales,
            companyLogos: [g.LotteriesCompany.NSWLotteries]
        }, {
            location: p.LotteriesLocation.NorthernTerritory,
            companyLogos: [g.LotteriesCompany.Tattersalls, g.LotteriesCompany.GoldenCasket],
            isiLogoOverride: g.LotteriesCompany.GoldenCasket
        }, {
            location: p.LotteriesLocation.Queensland,
            companyLogos: [g.LotteriesCompany.GoldenCasket]
        }, {
            location: p.LotteriesLocation.SouthAustralia,
            companyLogos: [g.LotteriesCompany.SALotteries]
        }, {
            location: p.LotteriesLocation.Tasmania,
            companyLogos: [g.LotteriesCompany.Tattersalls, g.LotteriesCompany.GoldenCasket],
            isiLogoOverride: g.LotteriesCompany.GoldenCasket
        }, {
            location: p.LotteriesLocation.Victoria,
            companyLogos: [g.LotteriesCompany.Tattersalls]
        }, {
            location: "wa",
            companyLogos: ["LotteryWest"]
        }]
    }, e.getDefaultState = function() {
        return "vic"
    };
    var y = function() {
        function t(t, e, i, o, n, r, s, a) {
            var c = this;
            this.dialogService = t, this.userContext = e, this.tattsEvent = i, this.mobileDialog = o, this.aemUtil = n, this.reloader = r, this.config = s, this.cancellableEventService = a, this.ensurePromptDialogIsDismissed = null, this.pageContainsIsiContent = !1, this.SECHomePage = "/instant-scratch-its/whats-new", this.lotteryWestLandingPage = "/lotterywest", this.aem = n, this.pageContainsIsiContent = "true" === s.getAemProperty("isiContent", "false"), this.tattsEvent.subscribe("Login", "Success", function(t) {
                c.processLoginResponse(t)
            }), this.tattsEvent.subscribe("Jurisdiction", "Prompt", function() {
                c.showDialog()
            }), this.localStorageLocaleListener()
        }
        return Object.defineProperty(t.prototype, "isFirstTimeScratcheClubProspectLogin", {
            get: function() {
                return this.userContext.isScratcheClubProspect && this.userContext.pwdExpired
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "loggedIn", {
            get: function() {
                return this.userContext.isLoggedIn
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "jurisdictionIsLocked", {
            get: function() {
                return this.loggedIn || !!this.userContext.jurisdictionLocked
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "logoNameLowerCase", {
            get: function() {
                var t = this,
                    i = e.getStateJurisdictionMap().find(function(e) {
                        return e.location === t.userContext.jurisdictionLocation
                    });
                return i ? this.pageContainsIsiContent && i.isiLogoOverride ? i.isiLogoOverride.toLowerCase() : i.companyLogos[0].toLowerCase() : null
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.localStorageLocaleListener = function() {
            var t = this;
            window.addEventListener("storage", function(e) {
                "tatts-locale" === e.key && t.reload()
            })
        }, t.prototype.processLoginResponse = function(t) {
            var e = p.LotteriesLocation.parseFromLoginResponse(t);
            this.userContext.jurisdictionLocation !== e ? this.userContext.jurisdictionLocation = e : this.ensurePromptDialogIsDismissed && this.ensurePromptDialogIsDismissed()
        }, t.prototype.activate = function() {
            this.stateJurisdictionMap = e.getStateJurisdictionMap();
            var t = !p.LotteriesLocation.Parse(o.AureliaCookie.get("locale")),
                i = !this.userContext.f5Region;
            if (t && i) this.userContext.jurisdictionLocation = p.LotteriesLocation.Parse(e.getDefaultState()), this.submit(!0);
            else if (t) {
                this.userContext.jurisdictionLocation = p.LotteriesLocation.Parse(this.userContext.f5Region), this.userContext.deleteCookie("region"), this.userContext.makeStateBodyClass(this.userContext.jurisdictionLocation);
                var n = document.querySelector("head[state-context-override]"),
                    r = n && n.getAttribute("state-context-override") || "use-browser-locale-cookie";
                "use-browser-locale-cookie" === r ? this.submit() : this.submit(!0)
            } else this.userContext.makeStateBodyClass(this.userContext.jurisdictionLocation), this.showBannerIfAppropriate()
        }, t.prototype.showBannerIfAppropriate = function() {
            "true" === o.AureliaCookie.get("show-jurisdiction-banner") && (this.insertStateBanner(), o.AureliaCookie.set("show-jurisdiction-banner", "", {
                expires: new Date("Thu, 01 Jan 1970 00:00:01 GMT"),
                path: "/"
            }))
        }, t.prototype.setJurisdictionLocation = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return e = new f.JurisdictionChangingEvent, [4, this.cancellableEventService.publishT(e)];
                        case 1:
                            return i.sent(), e.cancelled ? [2] : (this.userContext.jurisdictionLocation = t, this.tattsEvent.publish("Jurisdiction", "Change", {
                                state: t
                            }), this.reload(), [2])
                    }
                })
            })
        }, t.prototype.reload = function() {
            this.isFirstTimeScratcheClubProspectLogin ? window.location.assign(this.SECHomePage) : this.reloader.reload()
        }, t.prototype.insertStateBanner = function() {
            var t = this,
                e = new d.MobileSelectorModel(this.userContext.jurisdictionLocation.toUpperCase());
            e.showDialog = function() {
                return t.showDialog()
            }.bind(this), this.mobileDialog.open(l, e, !0), this.ensurePromptDialogIsDismissed = function() {
                return e.closeDialog()
            }
        }, t.prototype.showDialog = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t = this;
                return __generator(this, function(e) {
                    return !1 === this.jurisdictionIsLocked ? [2, this.dialogService.open({
                        viewModel: r.SelectionPrompt,
                        model: {
                            jurisdiction: this.userContext.jurisdictionLocation,
                            stateJurisdictionMap: this.stateJurisdictionMap
                        },
                        lock: !1,
                        startingZIndex: 1350
                    }).whenClosed(function(e) {
                        return __awaiter(t, void 0, void 0, function() {
                            return __generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e.wasCancelled ? [3, 3] : e.output !== this.userContext.jurisdictionLocation && e.output ? "wa" !== e.output ? [3, 1] : (window.location.pathname !== this.lotteryWestLandingPage && window.location.assign(this.lotteryWestLandingPage), [3, 3]) : [3, 3];
                                    case 1:
                                        return [4, this.setJurisdictionLocation(e.output)];
                                    case 2:
                                        t.sent(), document.body.classList.remove("display-state-prompt"), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    })] : [2]
                })
            })
        }, t.prototype.submit = function(t) {
            !1 === this.jurisdictionIsLocked && this.aem.isNotAuthor() && (t ? this.insertStateBanner() : (o.AureliaCookie.set("show-jurisdiction-banner", "true", {
                path: "/"
            }), this.reload()))
        }, t = __decorate([i.customElement("jurisdiction-toggle"), i.autoinject, __metadata("design:paramtypes", [n.DialogService, s.UserContext, c.TattsEvent, u.MobileDialog, a.AEMUtil, v, m.TattsConfiguration, h.CancellableEventService])], t)
    }();
    e.JurisdictionToggle = y
});
var __extends = this && this.__extends || function() {
        var t = function(e, i) {
            return (t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(e, i)
        };
        return function(e, i) {
            function o() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
        }
    }(),
    __decorate = this && this.__decorate || function(t, e, i, o) {
        var n, r = arguments.length,
            s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, o);
        else
            for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, i, s) : n(e, i)) || s);
        return r > 3 && s && Object.defineProperty(e, i, s), s
    },
    __metadata = this && this.__metadata || function(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
    };
define("jurisdiction-selector/mobile-selector-model", ["require", "exports", "aurelia-framework", "services/mobile-dialog-class"], function(t, e, i, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.jurisdictionForDisplay = e, i.visible = !0, i
        }
        return __extends(e, t), __decorate([i.bindable({
            defaultBindingMode: i.bindingMode.oneWay
        }), __metadata("design:type", Function)], e.prototype, "showDialog", void 0), e
    }(o.MobileDialogClass);
    e.MobileSelectorModel = n
}), define("text!index.html", ["module"], function(t) {
    t.exports = '<div aurelia-app="jurisdictions-app" data-isi-content="${pageProperties.isiContent}" style="width:100%"><sly data-sly-use.clientlib="/apps/the-lott/sightly/clientlib-async/clientlib.html" data-sly-call="${clientLib.js @ categories=\'<%=category%>\', loading=\'async\'}" data-sly-unwrap><script type="text/javascript" src="./js/jurisdictions-app-bundle.js" async data-sly-test="false"><\/script></div>'
}), define("text!environment.css", ["module"], function(t) {
    t.exports = ""
}), define("text!jurisdiction-selector/jurisdiction-selection-prompt.html", ["module"], function(t) {
    t.exports = '<template><div class="jurisdiction-dialog ux-dialog-middle"><ux-dialog><ux-dialog-header><div><div class="header-title">You are currently playing in ${selection.jurisdiction.toUpperCase()}.</div><div class="header-message">Not in ${selection.jurisdiction.toUpperCase()}? Select your region below.</div></div></ux-dialog-header><ux-dialog-body><div repeat.for="map of selection.stateJurisdictionMap" click.trigger="controller.ok(map.location)" class="row xsmall-collapse align-middle jurisdiction-item ${item.last ? \'\' : \'jurisdiction-item-separator\'}"><div class="columns shrink jurisdiction-item-text"><div><b data-test-id="jurisdiction-location">${map.location.toUpperCase()}</b></div></div><div class="columns shrink jurisdiction-item-logo"><img repeat.for="logo of map.companyLogos" src.one-time="\'logo/jurisdiction/\' + logo.toLowerCase() + \'.svg\' | resolveAssetPath:\'baseAssetPath\'"></div><div class="columns text-right jurisdiction-item-selected"><div><img if.bind="selection.jurisdiction === map.location" src.one-time="\'icon/jurisdiction-active.svg\' | resolveAssetPath:\'baseAssetPath\'"></div></div></div></ux-dialog-body></ux-dialog></div></template>'
}), define("text!jurisdiction-selector/jurisdiction-toggle.html", ["module"], function(t) {
    t.exports = '<template><require from="./jurisdictions.css"></require><div class="jurisdiction-selector" click.trigger="showDialog()" data-test-id="jurisdiction-selector"><img src.one-time="\'logo/jurisdiction/by-\' + logoNameLowerCase + \'.svg\' | resolveAssetPath:\'baseAssetPath\'" data-test-id="jurisdiction-logo"> <img src.one-time="\'icon/prompt-down.svg\' | resolveAssetPath:\'baseAssetPath\'" if.bind="jurisdictionIsLocked === false"></div></template>'
}), define("text!jurisdiction-selector/mobile-selector.html", ["module"], function(t) {
    t.exports = '<div class="m-state-prompt"><div class="row m-state-container"><div class="m-state-content"><div class="m-state-header"><div class="m-state-title">You are currently playing in ${jurisdictionForDisplay}</div><div>Not in ${jurisdictionForDisplay}? You can <button click.delegate="showDialog()">change your location</button> below.</div></div><button type="button" class="dialog-select" click.delegate="showDialog()"><span>SELECT REGION</span></button></div></div></div>'
}), define("text!jurisdiction-selector/jurisdictions.css", ["module"], function(t) {
    t.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.display-state-prompt #pagewrapper {\n  margin-top: 0 !important; }\n\n.display-state-prompt .header-wrapper {\n  position: relative !important;\n  min-width: 100%; }\n  .display-state-prompt .header-wrapper .jurisdictions {\n    position: relative; }\n  .display-state-prompt .header-wrapper .jurisdictions::after {\n    content: " ";\n    position: absolute;\n    top: 0;\n    left: 40px;\n    border-width: 10px;\n    border-style: solid;\n    border-color: #118ACB transparent transparent transparent; }\n  .display-state-prompt .header-wrapper .header-topbar {\n    position: relative !important; }\n\n.display-state-prompt .content-wrapper {\n  margin-top: 0 !important; }\n\n.jurisdictions div.jurisdiction-selector {\n  cursor: pointer; }\n\n.jurisdiction-dialog {\n  max-width: 414px;\n  min-width: 222px;\n  width: 100vw;\n  padding: 16px;\n  margin: auto;\n  max-height: 493px; }\n  .jurisdiction-dialog ux-dialog {\n    min-width: 0px;\n    width: 100%;\n    border-radius: 0;\n    -webkit-appearance: none;\n    border: 0px;\n    padding: 0px; }\n  .jurisdiction-dialog .dialog-close {\n    display: none; }\n  .jurisdiction-dialog ux-dialog > ux-dialog-body {\n    padding: 0px;\n    max-width: none !important; }\n  .jurisdiction-dialog ux-dialog-header {\n    background-color: #118ACB;\n    color: white;\n    padding: 12px; }\n  .jurisdiction-dialog .header-title {\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 900; }\n  .jurisdiction-dialog .header-message {\n    font-size: 14px;\n    line-height: 20px;\n    margin-top: 4px; }\n  .jurisdiction-dialog .jurisdiction-item {\n    width: 100%;\n    cursor: pointer;\n    height: 56px; }\n    .jurisdiction-dialog .jurisdiction-item .jurisdiction-item-text {\n      margin-left: 16px;\n      width: 61px; }\n    .jurisdiction-dialog .jurisdiction-item .jurisdiction-item-logo {\n      margin-right: auto; }\n      .jurisdiction-dialog .jurisdiction-item .jurisdiction-item-logo img {\n        margin-right: 1rem; }\n    .jurisdiction-dialog .jurisdiction-item .jurisdiction-item-selected {\n      margin-right: 16px; }\n  .jurisdiction-dialog .jurisdiction-item-separator {\n    border-bottom: 1px solid #E8E8E8;\n    width: 100%; }\n\n.m-state-prompt {\n  background-color: #118ACB;\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px; }\n  .m-state-prompt button:hover {\n    cursor: pointer; }\n  .m-state-prompt button.dialog-close {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    z-index: 1000;\n    margin: 0;\n    color: white;\n    font-size: 1.7rem;\n    width: 34px;\n    height: 34px; }\n  .m-state-prompt .m-state-container {\n    padding-top: 16px; }\n    .m-state-prompt .m-state-container .m-state-content .m-state-header {\n      background: transparent url("/etc/designs/the-lott/components/content/jurisdictions/clientlibs/assets/notificationFaceMessage.svg") no-repeat 0 0/40px 40px;\n      padding-left: 56px;\n      color: white;\n      font-size: 14px;\n      line-height: 20px;\n      margin-bottom: 16px; }\n      .m-state-prompt .m-state-container .m-state-content .m-state-header .m-state-title {\n        font-weight: 900; }\n      .m-state-prompt .m-state-container .m-state-content .m-state-header button {\n        text-decoration: underline;\n        color: white; }\n    .m-state-prompt .m-state-container .m-state-content button.dialog-select {\n      height: 32px;\n      line-height: 32px;\n      border-radius: 100px;\n      background-color: rgba(255, 255, 255, 0.35);\n      text-align: center;\n      width: 100%;\n      margin-bottom: 16px; }\n      .m-state-prompt .m-state-container .m-state-content button.dialog-select span {\n        color: #FFFFFF;\n        font-family: museo-sans;\n        font-size: 14px;\n        font-weight: 900; }\n  @media screen and (min-width: 48em) {\n    .m-state-prompt .m-state-container button.dialog-select {\n      display: none; } }\n  @media screen and (max-width: 47.9375em) {\n    .m-state-prompt .m-state-container {\n      max-width: 343px; } }\n'
}), define("text!jurisdictions-environment.json", ["module"], function(t) {
    t.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/jurisdictions/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});