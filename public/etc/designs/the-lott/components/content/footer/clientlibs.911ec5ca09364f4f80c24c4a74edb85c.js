/* footer-prod-aem-v1.2.276 */
define("footer-app", ["require", "exports", "json!footer-environment.json"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = function(e) {
        e.use.standardConfiguration().plugin("layout-base", {
            componentConfiguration: n
        }), n.testing && e.use.plugin("aurelia-testing"), e.start().then(function() {
            return e.setRoot("footer/footer-content")
        })
    }
});
var __decorate = this && this.__decorate || function(e, t, n, o) {
        var i, s = arguments.length,
            a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
        else
            for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("footer/footer-content", ["require", "exports", "services/tatts-configuration", "aurelia-framework", "tatts-api/idata/lotteries-company", "services/user-context", "tatts-api/idata/lotteries-location"], function(e, t, n, o, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this.userContext = e, this.config = t, this.pageContainsIsiContent = "true" === this.config.getAemProperty("isiContent", "false")
        }
        return Object.defineProperty(e.prototype, "currentEffectiveCompany", {
            get: function() {
                if (this.userContext && this.userContext.jurisdictionLocation) {
                    var e = this.userContext.jurisdictionLocation;
                    if (e === a.LotteriesLocation.Queensland) return i.LotteriesCompany.GoldenCasket;
                    if (e === a.LotteriesLocation.SouthAustralia) return i.LotteriesCompany.SALotteries;
                    if (e === a.LotteriesLocation.AustralianCapitalTerritory || e === a.LotteriesLocation.NewSouthWales) return i.LotteriesCompany.NSWLotteries;
                    if (e === a.LotteriesLocation.NorthernTerritory) return this.pageContainsIsiContent ? i.LotteriesCompany.GoldenCasket : i.LotteriesCompany.NTLotteries;
                    if (e === a.LotteriesLocation.Tasmania) return this.pageContainsIsiContent ? i.LotteriesCompany.GoldenCasket : i.LotteriesCompany.Tattersalls
                }
                return i.LotteriesCompany.Tattersalls
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([o.computedFrom("userContext", "userContext.jurisdictionLocation"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "currentEffectiveCompany", null), e = __decorate([o.customElement("footer-content"), __metadata("design:paramtypes", [s.default, n.TattsConfiguration])], e)
    }();
    t.FooterContent = r
});
var __decorate = this && this.__decorate || function(e, t, n, o) {
        var i, s = arguments.length,
            a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
        else
            for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("footer/games-section/games-section", ["require", "exports", "aurelia-framework", "services/user-context", "tatts-api/idata/lotteries-company", "tatts-api/idata/lotteries-location"], function(e, t, n, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e) {
            this.userContext = e
        }
        return Object.defineProperty(e.prototype, "getStrikeOrSuper66", {
            get: function() {
                return this.userContext.jurisdictionCompany === i.LotteriesCompany.NSWLotteries ? "strike" : "super66"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "getStrikeOrSuper66Link", {
            get: function() {
                return this.userContext.jurisdictionCompany === i.LotteriesCompany.NSWLotteries ? "/lotto-strike/how-to-play" : "/super-66/how-to-play"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "productsImageJurisdiction", {
            get: function() {
                return this.userContext && this.userContext.jurisdictionLocation ? this.currentEffectiveCompany === i.LotteriesCompany.GoldenCasket ? "qld" : this.userContext.jurisdictionLocation.toString() : "default"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "showKenoForSA", {
            get: function() {
                return !(!this.userContext || !this.userContext.jurisdictionLocation) && this.userContext.jurisdictionLocation === s.LotteriesLocation.SouthAustralia
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "getSatLottoLink", {
            get: function() {
                if (this.userContext && this.userContext.jurisdictionLocation) {
                    var e = this.userContext.jurisdictionLocation;
                    if (e === s.LotteriesLocation.Queensland) return "/saturday-gold-lotto/how-to-play";
                    if (e === s.LotteriesLocation.NewSouthWales || e === s.LotteriesLocation.AustralianCapitalTerritory) return "/saturday-lotto/how-to-play";
                    if (e === s.LotteriesLocation.SouthAustralia) return "/saturday-x-lotto/how-to-play"
                }
                return "/tattslotto/how-to-play"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "getMonWenLottoLink", {
            get: function() {
                if (this.userContext && this.userContext.jurisdictionLocation) {
                    var e = this.userContext.jurisdictionLocation;
                    if (e === s.LotteriesLocation.Queensland) return "/mon-wed-gold-lotto/how-to-play";
                    if (e === s.LotteriesLocation.SouthAustralia) return "/mon-wed-x-lotto/how-to-play"
                }
                return "/mon-wed-lotto/how-to-play"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "showTattsLottoRowStructure", {
            get: function() {
                return this.currentEffectiveCompany === i.LotteriesCompany.Tattersalls || this.currentEffectiveCompany === i.LotteriesCompany.NTLotteries
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([n.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", String)], e.prototype, "currentEffectiveCompany", void 0), __decorate([n.computedFrom("userContext", "userContext.jurisdictionCompany"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "getStrikeOrSuper66", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionCompany"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "getStrikeOrSuper66Link", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionLocation", "currentEffectiveCompany"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "productsImageJurisdiction", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionLocation"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], e.prototype, "showKenoForSA", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionLocation"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "getSatLottoLink", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionLocation"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "getMonWenLottoLink", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionLocation", "currentEffectiveCompany"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], e.prototype, "showTattsLottoRowStructure", null), e = __decorate([n.customElement("games-section"), __metadata("design:paramtypes", [o.UserContext])], e)
    }();
    t.GamesSection = a
});
var __decorate = this && this.__decorate || function(e, t, n, o) {
        var i, s = arguments.length,
            a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
        else
            for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("footer/general-info/general-info", ["require", "exports", "aurelia-framework", "tatts-api/idata/lotteries-company"], function(e, t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {
            this.privacyStatementUrl = window.privacyStatementUrl, this.termsOfUseUrl = window.termsOfUseUrl
        }
        return Object.defineProperty(e.prototype, "companyTrademark", {
            get: function() {
                var e = this.currentEffectiveCompany;
                return e === o.LotteriesCompany.GoldenCasket ? "Golden Casket Lottery Corporation Limited" : e === o.LotteriesCompany.NTLotteries ? "Tatts NT Lotteries Pty Ltd" : e === o.LotteriesCompany.SALotteries ? "Tatts Lotteries SA Pty Ltd" : e === o.LotteriesCompany.NSWLotteries ? "NSW Lotteries Corporation Pty Ltd" : "Tattersall's Sweeps Pty Ltd"
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([n.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", String)], e.prototype, "currentEffectiveCompany", void 0), __decorate([n.computedFrom("currentEffectiveCompany"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "companyTrademark", null), e = __decorate([n.customElement("general-info"), __metadata("design:paramtypes", [])], e)
    }();
    t.GeneralInfo = i
});
var __decorate = this && this.__decorate || function(e, t, n, o) {
        var i, s = arguments.length,
            a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
        else
            for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("footer/links-section/links-section", ["require", "exports", "aurelia-framework", "aurelia-templating", "services/tatts-configuration"], function(e, t, n, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e) {
            this.config = e, this.firstSectionFirstColumn = [], this.firstSectionSecondColumn = [], this.secondSectionFirstColumn = [], this.secondSectionSecondColumn = [], this.firstSectionTitleMutableString = ["q", "u", "i", "c", "k", " ", "l", "i", "n", "k", "s"], this.secondSectionTitleMutableString = ["i", " ", "w", "a", "n", "t", " ", "t", "o", ".", ".", "."], this.firstSectionVisibilityClass = "", this.secondSectionVisibilityClass = "", this.isFooterAuthorable = !1, this.maxNumberOfLinkPerColumn = 6, this.sectionsMap = {
                firstSection: {
                    title: this.firstSectionTitleMutableString,
                    col1: this.firstSectionFirstColumn,
                    col2: this.firstSectionSecondColumn
                },
                secondSection: {
                    title: this.secondSectionTitleMutableString,
                    col1: this.secondSectionFirstColumn,
                    col2: this.secondSectionSecondColumn
                }
            }, this.defaultLinkListMap = {
                firstSection: [{
                    text: "Play Games",
                    url: "/play"
                }, {
                    text: "Latest Draw Results",
                    url: "/results"
                }, {
                    text: "Winners News",
                    url: "/real-winners"
                }, {
                    text: "Ways 2 Play",
                    url: "/play/subscriptions"
                }, {
                    text: "Community",
                    url: "/about/community"
                }, {
                    text: "About Us",
                    url: "/about"
                }, {
                    text: "Game Rules",
                    url: "/about/game-rules"
                }, {
                    text: "Responsible Play",
                    url: "/about/responsible-play"
                }, {
                    text: "Media Centre",
                    url: "https://mediacentre.thelott.com/",
                    newTab: !0
                }, {
                    text: "Become a Retailer",
                    url: "/about/become-a-retailer"
                }, {
                    text: "Help Centre",
                    url: "https://help.thelott.com",
                    newTab: !0
                }, {
                    text: "Contact Us",
                    url: "/about/contact-us"
                }],
                secondSection: [{
                    text: "Check my lottery ticket",
                    url: "/results/check-my-ticket"
                }, {
                    text: "View my ticket history",
                    url: "/account/tickets"
                }, {
                    text: "Set myself a weekly spend limit",
                    url: "/account/settings"
                }, {
                    text: "Manage my subscriptions",
                    url: "/account/subscriptions"
                }, {
                    text: "Update my address details",
                    url: "/account/settings"
                }, {
                    text: "Download the Lott App",
                    url: "/play/app"
                }]
            }
        }
        return e.prototype.attached = function() {
            this.isFooterAuthorable = "enabled" === window.footerAuthorable;
            for (var e = 0, t = Object.keys(this.sectionsMap); e < t.length; e++) {
                var n = t[e],
                    o = this.sectionsMap[n];
                this.initialiseTitle(n, o), this.initialiseSectionColumns(n, o)
            }
            this.initialiseSectionsVisibility()
        }, e.prototype.initialiseTitle = function(e, t) {
            var n;
            if (this.isFooterAuthorable) {
                var o = this.config.getAemProperty(e + "Title", ""),
                    i = o.split("");
                t.title.length = 0, (n = t.title).push.apply(n, i)
            }
        }, e.prototype.initialiseSectionColumns = function(e, t) {
            var n = this.isFooterAuthorable ? this.getAemLinkList(e) : this.getHardCodedLinkList(e);
            this.fillColumn(t.col1, n, 0, this.maxNumberOfLinkPerColumn), this.fillColumn(t.col2, n, this.maxNumberOfLinkPerColumn, 2 * this.maxNumberOfLinkPerColumn)
        }, e.prototype.fillColumn = function(e, t, n, o) {
            e.length = 0;
            var i = t.slice(n, o);
            e.push.apply(e, i)
        }, e.prototype.initialiseSectionsVisibility = function() {
            var e = this.firstSectionFirstColumn.length + this.firstSectionSecondColumn.length < this.secondSectionFirstColumn.length + this.secondSectionSecondColumn.length;
            this.firstSectionVisibilityClass = e ? "invisible-for-smaller" : "visible-for-smaller", this.secondSectionVisibilityClass = e ? "visible-for-smaller" : "invisible-for-smaller"
        }, e.prototype.getHardCodedLinkList = function(e) {
            return this.defaultLinkListMap[e]
        }, e.prototype.getAemLinkList = function(e) {
            return this.config.getAemMultiFieldProperty(e + "Fields", [])
        }, __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", Array)], e.prototype, "firstSectionFirstColumn", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", Array)], e.prototype, "firstSectionSecondColumn", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", Array)], e.prototype, "secondSectionFirstColumn", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", Array)], e.prototype, "secondSectionSecondColumn", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.twoWay
        }), __metadata("design:type", Array)], e.prototype, "firstSectionTitleMutableString", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.twoWay
        }), __metadata("design:type", Array)], e.prototype, "secondSectionTitleMutableString", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", String)], e.prototype, "firstSectionVisibilityClass", void 0), __decorate([o.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", String)], e.prototype, "secondSectionVisibilityClass", void 0), e = __decorate([n.customElement("links-section"), __metadata("design:paramtypes", [i.TattsConfiguration])], e)
    }();
    t.LinksSection = s
});
var __decorate = this && this.__decorate || function(e, t, n, o) {
        var i, s = arguments.length,
            a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
        else
            for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
        return s > 3 && a && Object.defineProperty(t, n, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("footer/mobile-related-section/mobile-related-section", ["require", "exports", "aurelia-framework", "services/user-context", "tatts-api/idata/lotteries-location", "moment"], function(e, t, n, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.KNOW_WHEN_TO_STOP = {
        line1: "Know when to stop.",
        line2: "Don't go over the top.",
        line3: "Gamble responsibly."
    }, t.THINK_OF_THE_PEOPLE = {
        line1: "Think of the people",
        line2: "who need your support.",
        line3: "Gamble responsibly."
    }, t.DONT_CHASE_LOSSES = {
        line1: "Don't chase your losses.",
        line2: "Walk away.",
        line3: "Gamble responsibly."
    }, t.DONT_LET_GAME = {
        line1: "Don't let the game play you.",
        line2: "Stay in control.",
        line3: "Gamble responsibly."
    }, t.STAY_IN_CONTROL = {
        line1: "Stay in control.",
        line2: "Leave before you lose it.",
        line3: "Gamble responsibly."
    }, t.YOU_KNOW_THE_SCORE = {
        line1: "You know the score.",
        line2: "Stay in control.",
        line3: "Gamble responsibly."
    };
    var a = function() {
        function e(e) {
            this.userContext = e, this.displaySaGorvenagePolicy = !0, this.customMessage = {}, this.nonSaMessages = {
                nsw: {
                    line1: "Think! About your choices. Call ",
                    line2: "Gambling Help on 1800 858 858.",
                    line3: "www.gamblinghelp.nsw.gov.au",
                    isLine3Link: !0
                },
                act: {
                    line1: "Think! About your choices. Call ",
                    line2: "Gambling Help on 1800 858 858.",
                    line3: "www.gamblinghelp.nsw.gov.au",
                    isLine3Link: !0
                },
                tas: {
                    line1: "Gamblers Help",
                    line2: "1800 858 858"
                }
            }, this.saResponsibleGamblingMessageStartDate = new Date("January 1, 2020"), this.saResponsibleGamblingRotatingMessages = [{
                messages: [t.KNOW_WHEN_TO_STOP, t.THINK_OF_THE_PEOPLE]
            }, {
                messages: [t.DONT_CHASE_LOSSES, t.DONT_LET_GAME]
            }, {
                messages: [t.STAY_IN_CONTROL, t.YOU_KNOW_THE_SCORE]
            }]
        }
        return e.prototype.attached = function() {
            this.setGovernancePolicy(), this.initialiseCustomMessage()
        }, e.prototype.setGovernancePolicy = function() {
            this.displaySaGorvenagePolicy = this.userContext.jurisdictionLocation === i.LotteriesLocation.SouthAustralia
        }, e.prototype.setSaCustomMessage = function() {
            var e = s(this.saResponsibleGamblingMessageStartDate),
                t = new Date,
                n = s(t).diff(e, "years") % 3,
                o = this.saResponsibleGamblingRotatingMessages[n].messages,
                i = s(t).year(),
                a = t >= new Date("January 1, " + i) && t < new Date("July 1, " + i) ? 0 : 1;
            this.customMessage = o[a]
        }, e.prototype.initialiseCustomMessage = function() {
            var e = this.userContext.jurisdictionLocation;
            return e && e !== i.LotteriesLocation.NorthernTerritory && e !== i.LotteriesLocation.Victoria && e !== i.LotteriesLocation.Queensland ? e === i.LotteriesLocation.SouthAustralia ? void this.setSaCustomMessage() : void(this.customMessage = this.nonSaMessages[e]) : void(this.customMessage = {})
        }, Object.defineProperty(e.prototype, "customMessageIsEmpty", {
            get: function() {
                for (var e in this.customMessage)
                    if (this.customMessage.hasOwnProperty(e)) return !1;
                return !0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "customMessageForMobileView", {
            get: function() {
                var e = "";
                return this.customMessage && this.customMessage.line1 && this.customMessage.line2 && (e += this.customMessage.line1 + " ", e += "" + this.customMessage.line2, this.customMessage.line3 && (this.customMessage.isLine3Link ? e += ' <a href="http://' + this.customMessage.line3 + '" target="_blank">' + this.customMessage.line3 + "</a>" : e += " " + this.customMessage.line3)), e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isTasJurisdiction", {
            get: function() {
                return this.userContext.jurisdictionLocation === i.LotteriesLocation.Tasmania
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([n.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", Object)], e.prototype, "displaySaGorvenagePolicy", void 0), __decorate([n.bindable({
            defaultBindingMode: n.bindingMode.oneWay
        }), __metadata("design:type", Object)], e.prototype, "customMessage", void 0), __decorate([n.computedFrom("customMessage"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], e.prototype, "customMessageIsEmpty", null), __decorate([n.computedFrom("customMessage"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "customMessageForMobileView", null), __decorate([n.computedFrom("userContext", "userContext.jurisdictionLocation"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], e.prototype, "isTasJurisdiction", null), e = __decorate([n.customElement("mobile-related-section"), __metadata("design:paramtypes", [o.UserContext])], e)
    }();
    t.MobileRelatedSection = a
}), define("text!index.html", ["module"], function(e) {
    e.exports = '<div aurelia-app="footer-app" class="footer-app" data-isi-content="${pageProperties.isiContent}"><sly data-sly-use.clientlib="/apps/the-lott/sightly/clientlib-async/clientlib.html" data-sly-call="${clientLib.js @ categories=\'<%=category%>\', loading=\'async\'}" data-sly-unwrap><script type="text/javascript" src="./js/footer-app-bundle.js" async data-sly-test="false"><\/script></div>'
}), define("text!environment.css", ["module"], function(e) {
    e.exports = ""
}), define("text!footer/footer-content.html", ["module"], function(e) {
    e.exports = '<template><require from="./footer-content.css"></require><require from="./games-section/games-section"></require><require from="./links-section/links-section"></require><require from="./mobile-related-section/mobile-related-section"></require><require from="./general-info/general-info"></require><section class="footer"><div class="site-navigation-section footer-side-margin"><games-section current-effective-company.bind="currentEffectiveCompany" class="games-section footer-section bottom-separator" data-test-id="games"></games-section><links-section class="middle-section footer-section bottom-separator" data-test-id="links"></links-section><mobile-related-section class="mobile-related-section footer-section" data-test-id="mobile"></mobile-related-section></div><div class="site-general-info-section footer-side-margin"><general-info current-effective-company.bind="currentEffectiveCompany" class="general-info footer-section-lighter" data-test-id="general-info"></general-info></div></section></template>'
}), define("text!footer/games-section/games-section.html", ["module"], function(e) {
    e.exports = '<template><require from="./games-section.css"></require><section><div class="section-title">games</div><div class="game-logos"><div if.bind="showTattsLottoRowStructure" class="product-list"><div class="product"><a href="${getSatLottoLink}"><div class="sat-lotto-${productsImageJurisdiction}"></div></a></div><div class="product"><a href="${getMonWenLottoLink}"><div class="mw-lotto-${productsImageJurisdiction}"></div></a></div><div class="product last"><a href="/oz-lotto/how-to-play"><div class="oz-lotto"></div></a></div></div><div if.bind="showTattsLottoRowStructure" class="product-list"><div class="product"><a href="/powerball/how-to-play"><div class="last pb"></div></a></div><div class="product"><a href="/set-for-life/how-to-play"><div class="sfl"></div></a></div><div class="product"><a href="/lucky-lotteries-super/how-to-play"><div class="lucky-lotteries-super"></div></a></div><div class="product"><a href="/lucky-lotteries-mega/how-to-play"><div class="lucky-lotteries-mega"></div></a></div><div class="product last"><a href="${getStrikeOrSuper66Link}"><div class="${getStrikeOrSuper66}-${productsImageJurisdiction}"></div></a></div></div><div if.bind="showTattsLottoRowStructure" class="product-list"><div class="product last"><a href="/instant-scratch-its/ticket-range"><div class="isi"></div></a></div></div><div if.bind="!showTattsLottoRowStructure" class="product-list"><div class="product"><a href="${getSatLottoLink}"><div class="sat-lotto-${productsImageJurisdiction}"></div></a></div><div class="product"><a href="${getMonWenLottoLink}"><div class="mw-lotto-${productsImageJurisdiction}"></div></a></div><div class="product"><a href="/oz-lotto/how-to-play"><div class="oz-lotto"></div></a></div><div class="product last"><a href="/powerball/how-to-play"><div class="last pb"></div></a></div></div><div if.bind="!showTattsLottoRowStructure" class="product-list"><div class="product"><a href="/set-for-life/how-to-play"><div class="sfl"></div></a></div><div class="product"><a href="/lucky-lotteries-super/how-to-play"><div class="lucky-lotteries-super"></div></a></div><div class="product"><a href="/lucky-lotteries-mega/how-to-play"><div class="lucky-lotteries-mega"></div></a></div><div class="product"><a href="${getStrikeOrSuper66Link}"><div class="${getStrikeOrSuper66}-${productsImageJurisdiction}"></div></a></div><div class="product last"><a href="/instant-scratch-its/ticket-range"><div class="isi"></div></a></div></div><div if.bind="showKenoForSA" class="product-list"><div class="product last keno"><a href="/keno/how-to-play"><div class="keno-${productsImageJurisdiction}"></div></a></div></div></div></section></template>'
}), define("text!footer/general-info/general-info.html", ["module"], function(e) {
    e.exports = '<template><require from="./general-info.css"></require><section><div class="terms-and-conditions"><div class="tnc-links"><div><a href="${privacyStatementUrl}" class="tnc-item first" target="_blank">Privacy</a></div><div><a href="${termsOfUseUrl}" class="tnc-item" target="_blank">Terms of Use</a></div><div><a href="/about/terms-and-conditions" class="tnc-item last">Terms &amp; Conditions</a></div></div><div class="logos"><div class="by-${currentEffectiveCompany}-logo"></div></div><div class="company-trademark">© ${companyTrademark}</div></div><div class="footer-buttons"><div class="contact-us button"><a href="/about/contact-us"><div>contact us</div></a></div><div class="social-media-btns"><div class="social-media-btn"><a href="https://www.facebook.com/theLott.com.au" target="_blank"><div class="facebook-btn"></div></a></div><div class="social-media-btn"><a href="https://twitter.com/theLott" target="_blank"><div class="twitter-btn"></div></a></div><div class="social-media-btn"><a href="https://www.instagram.com/thelott/" target="_blank"><div class="intagram-btn"></div></a></div><div class="social-media-btn last"><a href="https://www.youtube.com/c/ThelottOfficialLotteries" target="_blank"><div class="youtube-btn"></div></a></div></div></div></section></template>'
}), define("text!footer/links-section/links-section.html", ["module"], function(e) {
    e.exports = '<template><require from="./links-section.css"></require><section><div class="links-area"><div class="first-link-section ${firstSectionVisibilityClass}"><div class="section-title">${firstSectionTitleMutableString.join(\'\')}</div><div class="links-columns"><div class="link-column" if.bind="firstSectionFirstColumn.length > 0"><ul><li repeat.for="link of firstSectionFirstColumn"><a href="${link.url}" target="${link.newTab ? \'_blank\' : \'_self\'}">${link.text}</a></li></ul></div><div class="link-column last" if.bind="firstSectionSecondColumn.length > 0"><ul><li repeat.for="link of firstSectionSecondColumn"><a href="${link.url}" target="${link.newTab ? \'_blank\' : \'_self\'}">${link.text}</a></li></ul></div></div></div><div class="second-link-section ${secondSectionVisibilityClass}"><div class="section-title">${secondSectionTitleMutableString.join(\'\')}</div><div class="links-columns"><div class="link-column" if.bind="secondSectionFirstColumn.length > 0"><ul><li repeat.for="link of secondSectionFirstColumn"><a href="${link.url}" target="${link.newTab ? \'_blank\' : \'_self\'}">${link.text}</a></li></ul></div><div class="link-column last" if.bind="secondSectionSecondColumn.length > 0"><ul><li repeat.for="link of secondSectionSecondColumn"><a href="${link.url}" target="${link.newTab ? \'_blank\' : \'_self\'}">${link.text}</a></li></ul></div></div></div></div><div class="certified-badge" data-test-id="certified-badge"><a href="/about"><div class="wla-cert"></div></a><div class="footer-security"><div><span class="icon-security" aria-hidden="true"></span></div><div class="text-security"><strong>Safe and Secure</strong><br>All transactions 128bit SSL encrypted.</div></div></div></section></template>'
}), define("text!footer/mobile-related-section/mobile-related-section.html", ["module"], function(e) {
    e.exports = '<template><require from="./mobile-related-section.css"></require><section><div class="mobile-dl ${customMessageIsEmpty ? \'no-responsible-gambling-msg\' : \'has-responsible-gambling-msg\'}"><div class="app-links"><a href="https://itunes.apple.com/au/app/lott-australias-official-lotteries/id465032804?ls=1&mt=8" target="_blank"><div class="app-link"><i class="fa fa-apple link-icon apple-icon" aria-hidden="true"></i><div class="text apple-text"><div>Available on the</div><div class="app-store">App Store</div></div></div></a><a href="/play/app" target="_blank" class="android-app-link"><div class="app-link"><i class="fa fa-android link-icon" aria-hidden="true"></i><div class="text android-text"><div>Available for</div><div>Android</div></div></div></a></div><div class="trademark-acknowledgment ${customMessageIsEmpty ? \'no-res-custom-message\' : \'\'}"><div>Apple, the Apple logo, iPhone, and iPad are trademarks</div><div>of Apple Inc., registered in the U.S. and other countries</div><div>and regions. Android is a trademark of Google LLC.</div></div></div><div class="play-responsibly-disclaimer" data-test-id="play-responsibly-disclaimer"><div class="image-n-text ${isTasJurisdiction ? \'tas\' : \'\'}"><a href="/about/responsible-play"><span class="responsible-gambling-image"></span></a><div if.bind="customMessage && customMessageForMobileView.length > 0" class="responsible-custom-msg"><div class="custom-message-medium-up"><div>${customMessage.line1}</div><div x-ms-format-detection="none">${customMessage.line2}</div><div if.bind="customMessage && customMessage.line3 && customMessage.line3.length > 0"><a if.bind="customMessage.isLine3Link" href="http://${customMessage.line3}" target="_blank">${customMessage.line3}</a> <span if.bind="!customMessage.isLine3Link">${customMessage.line3}</span></div></div><div class="custom-message-small" innerhtml.bind="customMessageForMobileView"></div></div></div><div if.bind="displaySaGorvenagePolicy" class="sa-governance-disclaimer">SA Lotteries is governed by a Code of Practice.</div></div></section></template>'
}), define("text!footer/footer-content.css", ["module"], function(e) {
    e.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.footer-app {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n  .footer-app a {\n    cursor: pointer; }\n  .footer-app .footer {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n    .footer-app .footer .site-navigation-section,\n    .footer-app .footer .footer-section-lighter {\n      display: flex;\n      flex-direction: column; }\n    .footer-app .footer .bottom-separator > section {\n      border-bottom: 1px solid #E8E8E8; }\n    .footer-app .footer .footer-side-margin > .footer-section,\n    .footer-app .footer .footer-side-margin > .footer-section-lighter {\n      margin-left: 0;\n      margin-right: 0;\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      max-width: 75rem;\n      margin: auto; }\n      .footer-app .footer .footer-side-margin > .footer-section section,\n      .footer-app .footer .footer-side-margin > .footer-section-lighter section {\n        width: 100%;\n        margin-left: 2rem;\n        margin-right: 2rem; }\n        @media screen and (max-width: 47.9375em) {\n          .footer-app .footer .footer-side-margin > .footer-section section,\n          .footer-app .footer .footer-side-margin > .footer-section-lighter section {\n            margin-left: 1rem;\n            margin-right: 1rem; } }\n    .footer-app .footer .section-title {\n      font-weight: 900;\n      font-size: 1.125rem;\n      text-transform: uppercase;\n      color: black; }\n      @media screen and (max-width: 47.9375em) {\n        .footer-app .footer .section-title {\n          font-size: 0.875rem; } }\n      @media screen and (max-width: 39.9375em) {\n        .footer-app .footer .section-title {\n          display: none; } }\n    .footer-app .footer .site-general-info-section {\n      background-color: white; }\n    .footer-app .footer .site-navigation-section {\n      background-color: #fafafa; }\n      .footer-app .footer .site-navigation-section .footer-section section {\n        padding-bottom: 2rem; }\n    .footer-app .footer .footer-section-lighter {\n      background-color: white; }\n      .footer-app .footer .footer-section-lighter section {\n        padding-top: 1.5rem;\n        padding-bottom: 1.5rem; }\n"
}), define("text!footer/games-section/games-section.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\ngames-section section {\n  display: flex;\n  flex-direction: column;\n  padding-top: 2rem; }\n  @media screen and (max-width: 39.9375em) {\n    games-section section {\n      padding-top: 0.5rem; } }\n  games-section section .game-logos {\n    display: flex;\n    flex-direction: row; }\n    @media screen and (max-width: 47.9375em) {\n      games-section section .game-logos {\n        flex-direction: row; } }\n    @media screen and (max-width: 39.9375em) {\n      games-section section .game-logos {\n        flex-direction: column; } }\n    games-section section .game-logos .product-list {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start; }\n      @media screen and (max-width: 47.9375em) {\n        games-section section .game-logos .product-list {\n          justify-content: center; } }\n      games-section section .game-logos .product-list .product {\n        margin-right: 1.5rem;\n        margin-top: 1.5rem; }\n        games-section section .game-logos .product-list .product.keno {\n          margin-right: 0; }\n        games-section section .game-logos .product-list .product a div {\n          height: 32px; }\n          games-section section .game-logos .product-list .product a div.sat-lotto-sa {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/sat--sal@3x.png") center/contain no-repeat;\n            width: 46px; }\n          games-section section .game-logos .product-list .product a div.mw-lotto-sa {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/mw--sal@3x.png") center/contain no-repeat;\n            width: 40px; }\n          games-section section .game-logos .product-list .product a div.oz-lotto {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/ozl--gc@3x.png") center/contain no-repeat;\n            width: 41px; }\n          games-section section .game-logos .product-list .product a div.pb {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/pb--gc@3x.png") center/contain no-repeat;\n            width: 65px; }\n          games-section section .game-logos .product-list .product a div.sfl {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/sfl--gc@3x.png") center/contain no-repeat;\n            width: 39px; }\n          games-section section .game-logos .product-list .product a div.lucky-lotteries {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/lky--gc@3x.png") center/contain no-repeat;\n            width: 31px; }\n          games-section section .game-logos .product-list .product a div.lucky-lotteries-super {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/img-lkysplit-lkysup@2x.png") center/contain no-repeat;\n            width: 60px;\n            background-size: 60px; }\n          games-section section .game-logos .product-list .product a div.lucky-lotteries-mega {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/img-lkysplit-lkymeg@2x.png") center/contain no-repeat;\n            width: 60px;\n            background-size: 60px; }\n          games-section section .game-logos .product-list .product a div.super66-sa {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/sal66--sal@3x.png") center/contain no-repeat;\n            width: 35px; }\n          games-section section .game-logos .product-list .product a div.isi {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/isi--gc@3x.png") center/contain no-repeat;\n            width: 52px; }\n          games-section section .game-logos .product-list .product a div.keno-sa {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/ken--sal@3x.png") center/contain no-repeat;\n            width: 64px; }\n          games-section section .game-logos .product-list .product a div.sat-lotto-nt, games-section section .game-logos .product-list .product a div.sat-lotto-tas, games-section section .game-logos .product-list .product a div.sat-lotto-vic {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/sat--tts@3x.png") center/contain no-repeat;\n            width: 90px; }\n          games-section section .game-logos .product-list .product a div.mw-lotto-nt, games-section section .game-logos .product-list .product a div.mw-lotto-tas, games-section section .game-logos .product-list .product a div.mw-lotto-vic {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/mw--tts@3x.png") center/contain no-repeat;\n            width: 50px; }\n          games-section section .game-logos .product-list .product a div.super66-nt, games-section section .game-logos .product-list .product a div.super66-tas, games-section section .game-logos .product-list .product a div.super66-vic, games-section section .game-logos .product-list .product a div.super66-qld {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/s66--gc@3x.png") center/contain no-repeat;\n            width: 37px; }\n          games-section section .game-logos .product-list .product a div.sat-lotto-nsw, games-section section .game-logos .product-list .product a div.sat-lotto-act {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/sat--nswl@3x.png") center/contain no-repeat;\n            width: 59px; }\n          games-section section .game-logos .product-list .product a div.mw-lotto-nsw, games-section section .game-logos .product-list .product a div.mw-lotto-act {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/mw--nswl@3x.png") center/contain no-repeat;\n            width: 51px; }\n          games-section section .game-logos .product-list .product a div.strike-nsw, games-section section .game-logos .product-list .product a div.strike-act {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/strk--nswl@3x.png") center/contain no-repeat;\n            width: 55px; }\n          games-section section .game-logos .product-list .product a div.sat-lotto-qld {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/sat--gc@3x.png") center/contain no-repeat;\n            width: 56px; }\n          games-section section .game-logos .product-list .product a div.mw-lotto-qld {\n            background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/game-logos/mw--gc@3x.png") center/contain no-repeat;\n            width: 53px; }\n        @media screen and (max-width: 39.9375em) {\n          games-section section .game-logos .product-list .product.last {\n            margin-right: 0; } }\n'
}), define("text!footer/general-info/general-info.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\ngeneral-info section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n  @media screen and (max-width: 63.9375em) {\n    general-info section {\n      flex-direction: column-reverse;\n      align-items: center; } }\n  general-info section .terms-and-conditions {\n    display: flex;\n    flex-direction: column;\n    justify-items: flex-start; }\n    @media screen and (max-width: 63.9375em) {\n      general-info section .terms-and-conditions {\n        justify-items: center; } }\n    general-info section .terms-and-conditions .tnc-links {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      flex-wrap: nowrap; }\n      @media screen and (max-width: 39.9375em) {\n        general-info section .terms-and-conditions .tnc-links {\n          justify-content: center;\n          padding-top: 2rem; } }\n      general-info section .terms-and-conditions .tnc-links .tnc-item {\n        border-right: 1px solid #6C4796;\n        text-decoration: none;\n        padding: 0 9px 0 8px;\n        font-size: 1rem;\n        line-height: 1.5rem; }\n        @media screen and (max-width: 39.9375em) {\n          general-info section .terms-and-conditions .tnc-links .tnc-item {\n            font-size: 0.875rem;\n            line-height: 1.25rem; } }\n        @media (max-width: 325px) {\n          general-info section .terms-and-conditions .tnc-links .tnc-item {\n            padding: 0 5px 0 4px; } }\n        general-info section .terms-and-conditions .tnc-links .tnc-item.first {\n          padding-left: 0; }\n        general-info section .terms-and-conditions .tnc-links .tnc-item.last {\n          padding-right: 0;\n          border-right: none; }\n    general-info section .terms-and-conditions .logos {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      margin-top: 1rem;\n      margin-bottom: 0.5rem; }\n      @media screen and (max-width: 63.9375em) {\n        general-info section .terms-and-conditions .logos {\n          justify-content: center; } }\n      general-info section .terms-and-conditions .logos .by-NSWLotteries-logo {\n        background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/company-logos/lottbynswl.svg") no-repeat; }\n      general-info section .terms-and-conditions .logos .by-GoldenCasket-logo {\n        background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/company-logos/lottbygc.svg") no-repeat; }\n      general-info section .terms-and-conditions .logos .by-SALotteries-logo {\n        background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/company-logos/lottbysal.svg") no-repeat; }\n      general-info section .terms-and-conditions .logos .by-NTLotteries-logo, general-info section .terms-and-conditions .logos .by-Tattersalls-logo {\n        background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/company-logos/lottbytts.svg") no-repeat; }\n      general-info section .terms-and-conditions .logos .by-NSWLotteries-logo, general-info section .terms-and-conditions .logos .by-GoldenCasket-logo, general-info section .terms-and-conditions .logos .by-SALotteries-logo,\n      general-info section .terms-and-conditions .logos .by-NTLotteries-logo, general-info section .terms-and-conditions .logos .by-Tattersalls-logo {\n        width: 100%;\n        height: 24px; }\n        @media screen and (max-width: 63.9375em) {\n          general-info section .terms-and-conditions .logos .by-NSWLotteries-logo, general-info section .terms-and-conditions .logos .by-GoldenCasket-logo, general-info section .terms-and-conditions .logos .by-SALotteries-logo,\n          general-info section .terms-and-conditions .logos .by-NTLotteries-logo, general-info section .terms-and-conditions .logos .by-Tattersalls-logo {\n            background-position: center; } }\n    general-info section .terms-and-conditions .company-trademark {\n      font-size: 0.75rem;\n      line-height: 0.875rem; }\n      @media screen and (max-width: 63.9375em) {\n        general-info section .terms-and-conditions .company-trademark {\n          align-self: center; } }\n  general-info section .footer-buttons {\n    display: flex;\n    flex-direction: row; }\n    @media screen and (max-width: 39.9375em) {\n      general-info section .footer-buttons {\n        flex-direction: column;\n        align-items: center; } }\n    general-info section .footer-buttons .contact-us {\n      margin-right: 1.5rem;\n      width: 12.5rem;\n      height: 2.75rem;\n      text-transform: uppercase;\n      font-size: 1rem;\n      font-weight: 900; }\n      general-info section .footer-buttons .contact-us a {\n        text-decoration: none; }\n      @media screen and (max-width: 39.9375em) {\n        general-info section .footer-buttons .contact-us {\n          margin-right: 0; } }\n    general-info section .footer-buttons .social-media-btns {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap; }\n      general-info section .footer-buttons .social-media-btns .social-media-btn {\n        margin-right: 0.5rem; }\n        general-info section .footer-buttons .social-media-btns .social-media-btn .facebook-btn, general-info section .footer-buttons .social-media-btns .social-media-btn .twitter-btn, general-info section .footer-buttons .social-media-btns .social-media-btn .intagram-btn, general-info section .footer-buttons .social-media-btns .social-media-btn .youtube-btn {\n          width: 2.75rem;\n          height: 2.75rem; }\n        general-info section .footer-buttons .social-media-btns .social-media-btn .facebook-btn {\n          background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/social/ico--fbcircle.svg") no-repeat; }\n        general-info section .footer-buttons .social-media-btns .social-media-btn .twitter-btn {\n          background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/social/ico--twtcircle.svg") no-repeat; }\n        general-info section .footer-buttons .social-media-btns .social-media-btn .intagram-btn {\n          background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/social/ico--inscircle.svg") no-repeat; }\n        general-info section .footer-buttons .social-media-btns .social-media-btn .youtube-btn {\n          background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/social/ico--youcircle.svg") no-repeat; }\n        general-info section .footer-buttons .social-media-btns .social-media-btn.last {\n          margin-right: 0; }\n'
}), define("text!footer/links-section/links-section.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\nlinks-section section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 2rem; }\n  @media screen and (max-width: 39.9375em) {\n    links-section section {\n      flex-direction: column;\n      align-items: center; } }\n  links-section section .links-area {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n    @media screen and (max-width: 39.9375em) {\n      links-section section .links-area {\n        justify-content: center; } }\n    links-section section .links-area .first-link-section,\n    links-section section .links-area .second-link-section {\n      display: flex;\n      flex-direction: column; }\n    @media screen and (max-width: 63.9375em) {\n      links-section section .links-area .invisible-for-smaller {\n        display: none; } }\n    links-section section .links-area .link-column {\n      display: flex;\n      flex-direction: column;\n      color: #444444;\n      margin-right: 2rem;\n      min-width: 10rem; }\n      @media screen and (max-width: 39.9375em) {\n        links-section section .links-area .link-column {\n          min-width: 8.75rem;\n          margin-right: 1rem; }\n          links-section section .links-area .link-column.last {\n            margin-right: 0; } }\n      links-section section .links-area .link-column ul {\n        margin-bottom: 0;\n        margin-left: 1rem; }\n        links-section section .links-area .link-column ul li a {\n          line-height: 2rem;\n          font-size: 1rem;\n          line-height: 2rem; }\n          @media screen and (max-width: 47.9375em) {\n            links-section section .links-area .link-column ul li a {\n              font-size: 0.875rem;\n              position: relative;\n              left: -5px;\n              line-height: 1.75rem;\n              padding-left: .2rem; } }\n    links-section section .links-area .first-link-section .links-columns, links-section section .links-area .second-link-section .links-columns {\n      display: flex;\n      flex-direction: row; }\n    links-section section .links-area .section-title {\n      margin-bottom: 1.5rem; }\n  links-section section .certified-badge {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start; }\n    @media screen and (max-width: 39.9375em) {\n      links-section section .certified-badge {\n        align-items: center;\n        justify-content: center;\n        padding-top: 2rem; } }\n    links-section section .certified-badge .wla-cert {\n      background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/badges/img-2019ftr-wla@2x.png") no-repeat;\n      background-size: contain;\n      width: 11.1875rem;\n      height: 2.5rem;\n      margin-bottom: 2rem; }\n    links-section section .certified-badge .footer-security {\n      display: flex;\n      flex-direction: row; }\n      links-section section .certified-badge .footer-security .icon-security {\n        float: left;\n        height: 3rem;\n        width: 3rem;\n        margin-right: 0.6875rem;\n        background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/badges/ico--security.svg") no-repeat top left; }\n      links-section section .certified-badge .footer-security .text-security {\n        max-width: 10rem;\n        font-size: 0.75rem; }\n        links-section section .certified-badge .footer-security .text-security strong {\n          font-size: 0.875rem;\n          color: #000000; }\n        @media screen and (max-width: 39.9375em) {\n          links-section section .certified-badge .footer-security .text-security {\n            max-width: 100%; } }\n'
}), define("text!footer/mobile-related-section/mobile-related-section.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\nmobile-related-section section {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 2rem; }\n  @media screen and (max-width: 39.9375em) {\n    mobile-related-section section {\n      flex-direction: column-reverse;\n      align-items: center; } }\n  mobile-related-section section .mobile-dl {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n    mobile-related-section section .mobile-dl .trademark-acknowledgment {\n      font-size: 0.625rem;\n      line-height: 0.875rem;\n      padding-top: 5px;\n      padding-left: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start; }\n    @media screen and (max-width: 63.9375em) {\n      mobile-related-section section .mobile-dl.has-responsible-gambling-msg {\n        flex-direction: column;\n        align-items: flex-start; } }\n    @media screen and (max-width: 63.9375em) {\n      mobile-related-section section .mobile-dl.has-responsible-gambling-msg .trademark-acknowledgment.no-res-custom-message {\n        padding-top: 0rem;\n        padding-left: 1rem;\n        text-align: left; } }\n  @media screen and (max-width: 63.9375em) and (max-width: 730px) {\n    mobile-related-section section .mobile-dl.has-responsible-gambling-msg .trademark-acknowledgment.no-res-custom-message {\n      flex-direction: column; } }\n    @media screen and (max-width: 63.9375em) {\n      mobile-related-section section .mobile-dl.has-responsible-gambling-msg .trademark-acknowledgment {\n        align-self: center;\n        padding-top: 1rem;\n        padding-left: 0;\n        text-align: center; } }\n    @media screen and (max-width: 39.9375em) {\n      mobile-related-section section .mobile-dl.has-responsible-gambling-msg .trademark-acknowledgment {\n        align-items: center;\n        justify-content: center; } }\n    @media screen and (max-width: 47.9375em) {\n      mobile-related-section section .mobile-dl.no-responsible-gambling-msg {\n        flex-direction: column;\n        align-items: center; } }\n    mobile-related-section section .mobile-dl.no-responsible-gambling-msg .trademark-acknowledgment {\n      text-align: left; }\n      @media screen and (max-width: 47.9375em) {\n        mobile-related-section section .mobile-dl.no-responsible-gambling-msg .trademark-acknowledgment {\n          padding-left: 0;\n          padding-top: 1rem;\n          text-align: center; } }\n    @media screen and (max-width: 39.9375em) {\n      mobile-related-section section .mobile-dl {\n        flex-direction: column;\n        align-items: center; } }\n    mobile-related-section section .mobile-dl .app-links {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      width: 290px; }\n      @media screen and (max-width: 39.9375em) {\n        mobile-related-section section .mobile-dl .app-links .android-app-link {\n          margin-right: 0; } }\n      mobile-related-section section .mobile-dl .app-links a {\n        color: white;\n        text-decoration: none;\n        margin-right: 1rem; }\n      mobile-related-section section .mobile-dl .app-links .app-link {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        border-radius: 5px;\n        background: #000000;\n        font-size: 0.875rem;\n        height: 49px;\n        line-height: 1;\n        text-align: left;\n        width: 8.5rem; }\n        mobile-related-section section .mobile-dl .app-links .app-link .text {\n          display: flex;\n          flex-direction: column;\n          justify-items: center;\n          justify-content: center; }\n        mobile-related-section section .mobile-dl .app-links .app-link .apple-text {\n          font-size: 0.625rem;\n          margin-top: 3px; }\n        mobile-related-section section .mobile-dl .app-links .app-link .app-store {\n          font-size: 1.125rem;\n          font-weight: 500; }\n        mobile-related-section section .mobile-dl .app-links .app-link .link-icon {\n          font-size: 35px;\n          margin: 0 5px 0 0.5rem;\n          text-align: center; }\n  mobile-related-section section .play-responsibly-disclaimer {\n    font-size: 0.75rem;\n    line-height: 0.875rem; }\n    @media screen and (max-width: 39.9375em) {\n      mobile-related-section section .play-responsibly-disclaimer {\n        padding-bottom: 2rem; } }\n    mobile-related-section section .play-responsibly-disclaimer .image-n-text {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n      @media screen and (max-width: 63.9375em) {\n        mobile-related-section section .play-responsibly-disclaimer .image-n-text {\n          align-items: normal; } }\n      @media screen and (max-width: 47.9375em) {\n        mobile-related-section section .play-responsibly-disclaimer .image-n-text {\n          flex-direction: column; } }\n      mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-gambling-image {\n        display: block;\n        background: url("/etc/designs/the-lott/components/content/footer/clientlibs/assets/badges/ico--hfpr.svg") no-repeat;\n        width: 7.5rem;\n        height: 2.75rem;\n        align-self: center; }\n      mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg {\n        display: flex;\n        flex-direction: column;\n        justify-items: flex-start;\n        font-size: 0.75rem;\n        line-height: 0.875rem;\n        padding-left: 0.8rem; }\n        @media screen and (max-width: 47.9375em) {\n          mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg .custom-message-medium-up {\n            display: none; } }\n        mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg .custom-message-small {\n          display: none; }\n          @media screen and (max-width: 47.9375em) {\n            mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg .custom-message-small {\n              display: block;\n              text-align: center;\n              max-width: 18rem;\n              padding-top: 1rem; } }\n          @media screen and (max-width: 39.9375em) {\n            mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg .custom-message-small {\n              padding-top: 0; } }\n        mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg a {\n          color: #444444; }\n        @media screen and (max-width: 39.9375em) {\n          mobile-related-section section .play-responsibly-disclaimer .image-n-text .responsible-custom-msg {\n            flex-direction: row;\n            justify-content: center;\n            flex-wrap: wrap;\n            max-width: 18rem;\n            padding-top: 1rem;\n            padding-left: 0; } }\n      @media screen and (max-width: 63.9375em) {\n        mobile-related-section section .play-responsibly-disclaimer .image-n-text.tas {\n          flex-direction: column;\n          align-items: center; }\n          mobile-related-section section .play-responsibly-disclaimer .image-n-text.tas .responsible-custom-msg {\n            padding-left: 0;\n            margin-top: 1rem; } }\n  @media screen and (max-width: 63.9375em) and (max-width: 39.9375em) {\n    mobile-related-section section .play-responsibly-disclaimer .image-n-text.tas {\n      padding-top: 0;\n      flex-direction: row; }\n      mobile-related-section section .play-responsibly-disclaimer .image-n-text.tas .responsible-custom-msg {\n        padding-left: 1rem;\n        margin-top: 0;\n        padding-top: 0;\n        max-width: 7rem; } }\n    mobile-related-section section .play-responsibly-disclaimer .sa-governance-disclaimer {\n      padding-top: 1rem; }\n      @media screen and (max-width: 47.9375em) {\n        mobile-related-section section .play-responsibly-disclaimer .sa-governance-disclaimer {\n          display: flex;\n          flex-direction: row;\n          justify-content: center; } }\n'
}), define("text!footer-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/footer/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});