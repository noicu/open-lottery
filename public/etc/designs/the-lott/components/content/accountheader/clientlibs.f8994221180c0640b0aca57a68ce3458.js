/* accountheader-prod-aem-v1.2.451 */
define("accountheader-app", ["require", "exports", "json!accountheader-environment.json"], function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.configure = function(e) {
        e.use.standardConfiguration().plugin("layout-base", {
            componentConfiguration: t
        }).plugin("service/set-password-service"), t.testing && e.use.plugin("aurelia-testing"), e.start().then(function() {
            return e.setRoot("account-header/account-header-content")
        })
    }
});
var __decorate = this && this.__decorate || function(e, n, t, i) {
        var a, o = arguments.length,
            r = o < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, t) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, n, t, i);
        else
            for (var c = e.length - 1; c >= 0; c--)(a = e[c]) && (r = (o < 3 ? a(r) : o > 3 ? a(n, t, r) : a(n, t)) || r);
        return o > 3 && r && Object.defineProperty(n, t, r), r
    },
    __metadata = this && this.__metadata || function(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, n)
    };
define("cart-count-change", ["require", "exports", "aurelia-framework", "aurelia-animator-css"], function(e, n, t, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, n) {
            this.element = e, this.animator = n, this.currentValue = 0, this.justLoaded = !0, this.element = e, this.animator = n
        }
        return e.prototype.valueChanged = function(e) {
            var n = this;
            0 === this.currentValue && this.element.classList.add("hidden"), e > 0 && this.element.classList.remove("hidden"), this.justLoaded ? (this.justLoaded = !1, e > 0 && this.element.classList.add("cart-visibility-change")) : this.currentValue !== e && (0 === this.currentValue && e > 0 ? this.animator.addClass(this.element, "cart-visibility-change") : this.currentValue > 0 && 0 === e ? this.animator.removeClass(this.element, "cart-visibility-change").then(function() {
                0 === n.currentValue && n.element.classList.add("hidden")
            }) : this.animator.addClass(this.element, "cart-count-change")), this.currentValue = e
        }, e = __decorate([t.customAttribute("cartcountchange"), t.inject(Element, i.CssAnimator), __metadata("design:paramtypes", [Element, i.CssAnimator])], e)
    }();
    n.CartCountChange = a
});
var __decorate = this && this.__decorate || function(e, n, t, i) {
        var a, o = arguments.length,
            r = o < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, t) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, n, t, i);
        else
            for (var c = e.length - 1; c >= 0; c--)(a = e[c]) && (r = (o < 3 ? a(r) : o > 3 ? a(n, t, r) : a(n, t)) || r);
        return o > 3 && r && Object.defineProperty(n, t, r), r
    },
    __metadata = this && this.__metadata || function(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, n)
    },
    __awaiter = this && this.__awaiter || function(e, n, t, i) {
        function a(e) {
            return e instanceof t ? e : new t(function(n) {
                n(e)
            })
        }
        return new(t || (t = Promise))(function(t, o) {
            function r(e) {
                try {
                    s(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    s(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                e.done ? t(e.value) : a(e.value).then(r, c)
            }
            s((i = i.apply(e, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, n) {
        function t(e) {
            return function(n) {
                return i([e, n])
            }
        }

        function i(t) {
            if (a) throw new TypeError("Generator is already executing.");
            for (; s;) try {
                if (a = 1, o && (r = 2 & t[0] ? o.return : t[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, t[1])).done) return r;
                switch (o = 0, r && (t = [2 & t[0], r.value]), t[0]) {
                    case 0:
                    case 1:
                        r = t;
                        break;
                    case 4:
                        return s.label++, {
                            value: t[1],
                            done: !1
                        };
                    case 5:
                        s.label++, o = t[1], t = [0];
                        continue;
                    case 7:
                        t = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (r = s.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === t[0] || 2 === t[0])) {
                            s = 0;
                            continue
                        }
                        if (3 === t[0] && (!r || t[1] > r[0] && t[1] < r[3])) {
                            s.label = t[1];
                            break
                        }
                        if (6 === t[0] && s.label < r[1]) {
                            s.label = r[1], r = t;
                            break
                        }
                        if (r && s.label < r[2]) {
                            s.label = r[2], s.ops.push(t);
                            break
                        }
                        r[2] && s.ops.pop(), s.trys.pop();
                        continue
                }
                t = n.call(e, s)
            } catch (e) {
                t = [6, e], o = 0
            } finally {
                a = r = 0
            }
            if (5 & t[0]) throw t[1];
            return {
                value: t[0] ? t[1] : void 0,
                done: !0
            }
        }
        var a, o, r, c, s = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c
    };
define("account-header/account-header-content", ["require", "exports", "aurelia-binding", "aurelia-framework", "services/user-context", "services/tatts-login", "services/tatts-event-service", "services/shopping-cart/shopping-cart-service", "services/tatts-log", "service/set-password-service", "services/login/session-service", "aurelia-binding", "events/session/session-expired-event", "events/login/login-success-event", "events/password/password-reset-success-event", "events/shopping-cart/shopping-cart-updated-event", "./get-membership-description", "services/messages/messages-service", "services/query-string-handler/query-string-handler", "aurelia-animator-css", "services/relocator", "events/sec-upgrade/sec-upgrade", "services/shopping-cart/cart-data", "events/shopping-cart/shopping-cart-time-alert-event", "services/shopping-cart/cart-item-time-alert-level"], function(e, n, t, i, a, o, r, c, s, u, m, l, d, p, h, g, f, v, b, w, y, x, k, C, _) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var S = function() {
        function e(e, n, t, i, a, o, r, c, s, u, m, l, d) {
            var p = this;
            this.cssAnimator = e, this.userContext = n, this.loginService = t, this.eventService = i, this.logging = a, this.shoppingCartService = o, this.setPasswordService = r, this.sessionService = c, this.messagesService = s, this.queryStringHandler = u, this.bindingEngine = m, this.cartData = l, this.relocator = d, this.eventSubscriptions = [], this.cartPreviewVisible = !1, this.cartAlertLevel = _.CartItemTimeAlertLevel.None, this.messageCount = 0, this.cartCount = this.shoppingCartService.getAllItems().length, this.isTouchDevice = "ontouchstart" in document.documentElement;
            var h = window,
                g = h && h.membership && h.membership[this.userContext.jurisdictionLocation];
            this.freeMembershipDisabled = !g || "true" === g.trim().toLowerCase(), this.queryStringHandler.checkQueryString(), this.setMyAccountMenuItems(), this.handleBodyClick = function(e) {
                p.userContext.isLoggedIn && p.myAccountMenuEl && p.myAccountEl && !p.myAccountMenuEl.contains(e.target) && !p.myAccountEl.contains(e.target) && (p.visible = !1)
            }
        }
        return Object.defineProperty(e.prototype, "showReminderCircleForSub", {
            get: function() {
                return this.userContext.numberOfSFLSubsOfIncorrectStructure > 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "showReminderCircleForFav", {
            get: function() {
                return this.userContext.numberOfSFLFavsOfIncorrectStructure > 0
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.handleShoppingCartTimeAlertEvent = function(e) {
            this.cartAlertLevel = e.some(function(e) {
                return e === _.CartItemTimeAlertLevel.Red
            }) ? _.CartItemTimeAlertLevel.Red : e.some(function(e) {
                return e === _.CartItemTimeAlertLevel.Yellow
            }) ? _.CartItemTimeAlertLevel.Yellow : _.CartItemTimeAlertLevel.None
        }, Object.defineProperty(e.prototype, "detailedHoverCartTargetTest", {
            get: function() {
                return "on" === window.isDetailedHoverCartTargetTestEnabled
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setMyAccountMenuItems = function() {
            var e = 3;
            this.isUserFromAustralia = this.userContext && this.userContext.homeAddress && "Australia" === this.userContext.homeAddress.country;
            var n = new Array;
            for (this.userContext.isScratcheClubProspect ? (this.accountSubHeader = "Second Chance entries this month:", e = 2, n.push(new A("/account/second-chance-entries", "2nd Chance", "account-2ndchance"), new A("/account/settings", "Settings", "account-sec-settings"))) : (this.accountSubHeader = "My Balance", e = 3, n.push(new A("/account/tickets", "Tickets", "account-tickets"), new A("/account/money", "Funds", "account-money"), new A("/play/favourites", "Favourites", "account-favourites"), new A("/account/subscriptions", "Subscriptions", "account-subscriptions")), this.isUserFromAustralia && (this.freeMembershipDisabled && n.push(new A("/account/membership", this.membershipDescription, "account-membership")), n.push(new A("/account/prizes", "Prizes", "account-prizes")), "enabled" === window.secStatus && n.push(new A("/account/second-chance-entries", "2nd Chance", "account-2ndchance"))), n.push(new A("/account/settings", "Settings", "account-settings"), new A("/account/messages", "Messages", "account-messages"))); n.length % e != 0;) n.push(new A("", "Filler", ""));
            this.myAccountMenuOptionGroups = n.reduce(function(n, t) {
                0 === n.length && n.push(new E);
                var i = n[n.length - 1];
                return i.myAccountMenuOptions.length >= e && n.push(new E), i = n[n.length - 1], i.myAccountMenuOptions.push(t), n
            }, new Array)
        }, e.prototype.mouseoverOn = function() {
            "on" === window.isDetailedHoverCartTargetTestEnabled && this.cartData.items.length > 0 && (this.cartPreviewVisible = !0)
        }, e.prototype.mouseoutOff = function() {
            "on" === window.isDetailedHoverCartTargetTestEnabled && this.cartData.items.length > 0 && (this.cartPreviewVisible = !1)
        }, e.prototype.activate = function() {
            this.userContext.makeAuthBodyClass()
        }, Object.defineProperty(e.prototype, "loggedIn", {
            get: function() {
                return this.userContext.isLoggedIn
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return this.subscribeToEvents(), this.handleShoppingCartUpdatedEvent(), this.messagesSubscription = this.bindingEngine.propertyObserver(this.messagesService, "messages").subscribe(this.messagesChanged.bind(this)), this.isTouchDevice ? document.addEventListener("touchstart", this.handleBodyClick) : document.addEventListener("click", this.handleBodyClick), this.checkIfVerified(), [2]
                })
            })
        }, e.prototype.detached = function() {
            this.unsubscribeFromEvents(), this.messagesSubscription.dispose(), this.isTouchDevice ? document.removeEventListener("touchstart", this.handleBodyClick) : document.removeEventListener("click", this.handleBodyClick)
        }, e.prototype.checkIfVerified = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return this.notVerified = !1, e = "/join-up" === window.location.pathname || "/join-up/scratch-eclub" === window.location.pathname, !this.userContext.isLoggedIn || this.userContext.identityVerified || e ? [2] : [4, this.userContext.forceRefreshUserData()];
                        case 1:
                            return n.sent(), this.notVerified = !this.userContext.identityVerified, [2]
                    }
                })
            })
        }, e.prototype.messagesChanged = function() {
            this.messageCount = this.messagesService.messages.filter(function(e) {
                return !e.isRead
            }).length
        }, e.prototype.subscribeToEvents = function() {
            var e = this;
            this.eventSubscriptions.push(this.eventService.subscribeT(g.ShoppingCartUpdatedEvent, function() {
                return e.handleShoppingCartUpdatedEvent()
            })), this.eventSubscriptions.push(this.eventService.subscribeAllT([p.LoginSuccessEvent, h.PasswordResetSuccessEvent], function() {
                return e.handleLoginSuccessEvent()
            })), this.eventSubscriptions.push(this.eventService.subscribeT(d.SessionExpiredEvent, function(n) {
                return e.handleSessionExpiredEvent(n)
            })), this.eventSubscriptions.push(this.eventService.subscribeT(C.ShoppingCartTimeAlertEvent, function(n) {
                return e.handleShoppingCartTimeAlertEvent(n.cartItemTimeAlertLevels)
            }))
        }, e.prototype.handleSessionExpiredEvent = function(e) {
            this.updateModelForLogout(), e.showLogin && this.showLogin(!0)
        }, e.prototype.unsubscribeFromEvents = function() {
            this.eventSubscriptions.forEach(function(e) {
                return e.unsubscribe()
            }), this.eventSubscriptions = []
        }, e.prototype.updateModelForLogout = function() {
            this.visible = !1, this.userContext.makeAuthBodyClass()
        }, e.prototype.handleLoginSuccessEvent = function() {
            this.visible = !1, this.userContext.makeAuthBodyClass(), this.checkIfVerified(), this.setMyAccountMenuItems()
        }, e.prototype.handleShoppingCartUpdatedEvent = function() {
            this.cartCount = this.shoppingCartService.getAllItems().length || 0
        }, e.prototype.showLogin = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var n;
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), [4, this.loginService.showLogin(e)];
                        case 1:
                            return t.sent(), [3, 3];
                        case 2:
                            return n = t.sent(), n.userCancelled || this.logging.error("AccountHeaderContent", "Error attempting to show login: {@error}", {
                                error: n
                            }), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.toggleMyAccount = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return this.visible = !this.visible, this.visible ? (this.notVerified = !this.userContext.identityVerified, this.setMyAccountMenuItems(), [2, this.refreshAccount()]) : [2]
                })
            })
        }, e.prototype.refreshAccount = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return this.userContext.isLoggedIn ? (this.userContext.isScratcheClubProspect ? this.refreshAccountSecEntryCount() : (this.refreshAccountBalance(), this.refreshUnclaimedCardReimbursements()), [2]) : [2]
                })
            })
        }, e.prototype.refreshUnclaimedCardReimbursements = function() {
            this.isUserFromAustralia && !this.freeMembershipDisabled && this.userContext.refreshCardReimbursementUnclaimed()
        }, e.prototype.refreshAccountSecEntryCount = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, n, t = this;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return this.accountBalanceLoading = !0, e = !1, n = !1, setTimeout(function() {
                                e = !0, n && (t.accountBalanceLoading = !1)
                            }, 800), [4, this.userContext.refreshSecEntryCounts()];
                        case 1:
                            return i.sent(), n = !0, e && (this.accountBalanceLoading = !1), [2, Promise.resolve()]
                    }
                })
            })
        }, e.prototype.refreshAccountBalance = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, n, t, i = this;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return this.accountBalanceLoading = !0, e = !1, n = !1, setTimeout(function() {
                                e = !0, n && (i.accountBalanceLoading = !1)
                            }, 800), t = this.userContext.accountBalance, [4, this.userContext.refreshBalance()];
                        case 1:
                            return a.sent(), n = !0, e && (this.accountBalanceLoading = !1), t !== this.userContext.accountBalance ? [2, this.cssAnimator.animate(this.myAccountBalanceEl, "bounceIn")] : [2, Promise.resolve()]
                    }
                })
            })
        }, e.prototype.signOut = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.sessionService.logout()];
                        case 1:
                            return e.sent(), this.updateModelForLogout(), [2]
                    }
                })
            })
        }, e.prototype.secUpgrade = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return this.eventService.publishT(new x.SecUpgradeInitiateEvent), [4, this.relocator.navigate("/join-up?upgrade=true")];
                        case 1:
                            return e.sent(), [2]
                    }
                })
            })
        }, Object.defineProperty(e.prototype, "membershipDescription", {
            get: function() {
                return f.GetMembershipDescription(this.userContext.jurisdictionLocation)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "showCardReimbursementSection", {
            get: function() {
                return !this.freeMembershipDisabled && this.userContext.cardReimbursementUnclaimed
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([i.bindable({
            defaultBindingMode: i.bindingMode.oneTime
        }), __metadata("design:type", Boolean)], e.prototype, "cartPreviewVisible", void 0), __decorate([l.computedFrom("userContext.isLoggedIn"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], e.prototype, "loggedIn", null), __decorate([l.computedFrom("userContext.jurisdictionLocation"), __metadata("design:type", String), __metadata("design:paramtypes", [])], e.prototype, "membershipDescription", null), __decorate([l.computedFrom("userContext.cardReimbursementUnclaimed"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [])], e.prototype, "showCardReimbursementSection", null), e = __decorate([i.autoinject, __metadata("design:paramtypes", [w.CssAnimator, a.UserContext, o.LoginService, r.TattsEvent, s.TattsLog, c.ShoppingCartService, u.SetPasswordService, m.SessionService, v.MessagesService, b.QueryStringHandler, t.BindingEngine, k.CartData, y.Relocator])], e)
    }();
    n.AccountHeaderContent = S;
    var A = function() {
            function e(e, n, t) {
                this.Link = e, this.Description = n, this.Icon = t
            }
            return e
        }(),
        E = function() {
            function e() {
                this.myAccountMenuOptions = new Array
            }
            return e
        }()
}), define("account-header/get-membership-description", ["require", "exports"], function(e, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.GetMembershipDescription = function(e) {
        var n = {
            act: "Players Club",
            nsw: "Players Club",
            nt: "Tatts Card",
            qld: "Winners Circle",
            sa: "Easiplay Club",
            vic: "Tatts Card",
            tas: "Tatts Card",
            default: ""
        };
        return n[e] || n.default
    }
});
var __decorate = this && this.__decorate || function(e, n, t, i) {
        var a, o = arguments.length,
            r = o < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, t) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, n, t, i);
        else
            for (var c = e.length - 1; c >= 0; c--)(a = e[c]) && (r = (o < 3 ? a(r) : o > 3 ? a(n, t, r) : a(n, t)) || r);
        return o > 3 && r && Object.defineProperty(n, t, r), r
    },
    __metadata = this && this.__metadata || function(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, n)
    };
define("account-header/cart-preview/cart-preview", ["require", "exports", "aurelia-framework", "services/user-context", "services/tatts-event-service", "services/shopping-cart/shopping-cart-service", "events/shopping-cart/shopping-cart-updated-event"], function(e, n, t, i, a, o, r) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(e, n, t) {
            this.eventService = e, this.userContext = n, this.shoppingCartService = t, this.eventSubscriptions = [], this.visible = !1, this.hideTimeout = null, this.total = 0, this.count = 0, this.icons = [], this.state = null, this.entryText = [], this.entryPrice = [], this.state = this.userContext.jurisdictionLocation, this.updateCartPreview()
        }
        return Object.defineProperty(e.prototype, "detailedHoverCartTargetTest", {
            get: function() {
                return "on" === window.isDetailedHoverCartTargetTestEnabled
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.attached = function() {
            this.subscribeToEvents()
        }, e.prototype.detached = function() {
            this.unsubscribeFromEvents()
        }, e.prototype.subscribeToEvents = function() {
            var e = this;
            this.eventSubscriptions.push(this.eventService.subscribeT(r.ShoppingCartUpdatedEvent, function() {
                return e.handleShoppingCartUpdatedEvent()
            }))
        }, e.prototype.unsubscribeFromEvents = function() {
            this.eventSubscriptions.forEach(function(e) {
                return e.unsubscribe()
            }), this.eventSubscriptions = [], this.clearHideTimeout()
        }, e.prototype.clearHideTimeout = function() {
            this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null)
        }, e.prototype.pin = function() {
            this.clearHideTimeout(), this.visible = !0
        }, e.prototype.unpin = function() {
            this.clearHideTimeout(), this.visible = !1
        }, e.prototype.getIconClass = function(e) {
            return e ? e.toLowerCase() : ""
        }, Object.defineProperty(e.prototype, "getNumberOfMoreTickets", {
            get: function() {
                return this.cartItemExtraInfo.filter(function(e) {
                    return !e.visible
                }).length
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.updateCartPreview = function() {
            var e = this.shoppingCartService.getAllItems(),
                n = e.length > this.count;
            this.count = e.length || 0, this.total = this.shoppingCartService.totalCost;
            var t = function(e, n, t) {
                return t.indexOf(e) === n
            };
            return "on" !== window.isDetailedHoverCartTargetTestEnabled ? this.icons = e.map(function(e) {
                return e.productId
            }).reverse().filter(t).slice(0, 4).reverse() : "on" === window.isDetailedHoverCartTargetTestEnabled && (this.cartItemExtraInfo = e.map(function(e, n) {
                return {
                    productid: e.productId,
                    price: e.customData.price,
                    text: e.customData.entryText,
                    visible: n <= 4
                }
            }).reverse()), n
        }, e.prototype.handleShoppingCartUpdatedEvent = function() {
            var e = this;
            this.updateCartPreview() && (this.visible = !0, this.clearHideTimeout(), this.hideTimeout = setTimeout(function() {
                return e.visible = !1
            }, 3e3))
        }, __decorate([t.bindable({
            defaultBindingMode: t.bindingMode.oneWay
        }), __metadata("design:type", Boolean)], e.prototype, "cartPreviewVisible", void 0), e = __decorate([t.autoinject, __metadata("design:paramtypes", [a.TattsEvent, i.UserContext, o.ShoppingCartService])], e)
    }();
    n.CartPreview = c
}), define("text!index.html", ["module"], function(e) {
    e.exports = '<div class="accountheader-app" aurelia-app="accountheader-app"><script type="text/javascript" src="./js/set-password-service-bundle.js" async data-sly-test="false"><\/script><script type="text/javascript" src="./js/accountheader-app-bundle.js" data-sly-use.clientlib="/apps/the-lott/sightly/clientlib-async/clientlib.html" data-sly-call="${clientLib.js @ categories=\'<%=category%>\'}" data-sly-unwrap><\/script></div>'
}), define("text!environment.css", ["module"], function(e) {
    e.exports = ""
}), define("text!account-header/account-header-content.html", ["module"], function(e) {
    e.exports = '<template><require from="./account-header-content.css"></require><require from="../cart-count-change"></require><require from="attributes/tatts-show"></require><require from="./cart-preview/cart-preview"></require><section class="accountheader"><ul class="menu"><li><a href="/join-up" class="join" if.bind="loggedIn === false"><span>SIGN UP</span></a></li><li><a role="button" class="login" if.bind="loggedIn === false" click.delegate="showLogin() & debounce:200" data-test-id="login-link"><span>Login</span></a></li><li if.bind="loggedIn === true" click.delegate="toggleMyAccount()" element.ref="myAccountEl" data-test-id="my-account-element"><div class="balance-container"><p>My Account</p><a element.ref="myAccountBalanceEl" class="balance-container balance-amount au-animate" data-test-id="account-balance" if.bind="!userContext.isScratcheClubProspect">${userContext.accountTotalBalance | formatCurrency:\'$0,0.00\'} </a><span class="balance-container balance-amount au-animate" if.bind="userContext.isScratcheClubProspect" data-test-id="account-header">Scratch eClub</span></div><a id="myaccountmenubutton" role="button" class="balance-container balance-account" data-test-id="toggle-menu-button"><div class="status">&nbsp;<div tatts-show.bind="messageCount" class="msg message-indicator-show"></div><div class="toggle ${visible ? \'on\' : \'off\'}"></div></div></a></li><span show.bind="!detailedHoverCartTargetTest"><li><a href="/play/checkout" class="cart-container">&nbsp; <span show.bind="cartAlertLevel === 0" class="items draw-time-default" cartcountchange.bind="cartCount" data-test-id="cart-item-count">${cartCount}</span> <span show.bind="cartAlertLevel !== 0" class="items-pulse alert-${cartAlertLevel}m" cartcountchange.bind="cartCount"><span class="clock-icon"></span> <span class="pulse-halo-1"></span> <span class="pulse-halo-2"></span></span></a><cart-preview></cart-preview></li></span><span class="preview-hover-area" if.bind="detailedHoverCartTargetTest" mouseover.delegate="mouseoverOn()" mouseout.delegate="mouseoutOff()"><li><a href="/play/checkout" class="cart-container mouse-over-area">&nbsp; <span show.bind="cartAlertLevel === 0" class="items draw-time-default" cartcountchange.bind="cartCount">${cartCount}</span> <span show.bind="cartAlertLevel !== 0" class="items-pulse alert-${cartAlertLevel}m" cartcountchange.bind="cartCount"><span class="clock-icon"></span> <span class="pulse-halo-1"></span> <span class="pulse-halo-2"></span></span></a><cart-preview cart-preview-visible.bind="cartPreviewVisible"></cart-preview></li></span></ul></section><section id="myaccountmenu" element.ref="myAccountMenuEl" class="myaccount-menu ${visible ? \'on\' : \'off\'}" if.bind="loggedIn === true"><div class="myaccount-menu-slider"><div class="myaccount-menu-header ${userContext.isScratcheClubProspect ? \'isScratcheClubProspect\' : \'\'}"><div class="menu-line"><span class="menu-title">My Account</span><div class="line-right page-refresh-container row collapse" click.delegate="refreshAccount()"><div class="columns align-self-middle page-refresh ${accountBalanceLoading ? \'loading\' : \'\'}"></div></div></div><div class="menu-line"><span class="menu-email" title="${userContext.accountName}" data-test-id="account-user-name">${userContext.accountName} </span><button class="line-right menu-link" click.delegate="signOut()" data-test-id="sign-out-button">Sign Out</button></div><hr><div class="menu-line"><span data-test-id="account-sub-header">${accountSubHeader}</span> <span class="account-balance line-right" if.bind="!userContext.isScratcheClubProspect">${userContext.accountBalance | formatCurrency:\'$0,0.00\'}</span> <span class="account-balance line-right" if.bind="userContext.isScratcheClubProspect" data-test-id="scratcheclub-entries">${userContext.scratcheClubEntries}</span></div><div show.bind="userContext.accountRewards" class="menu-line"><span>My Rewards</span> <span class="account-rewards line-right">${userContext.accountRewards | formatCurrency:\'$0,0.00\'}</span></div><div show.bind="userContext.accountRewards" class="menu-line"><span class="menu-bold">TOTAL</span> <span class="account-total-balance line-right menu-bold">${userContext.accountTotalBalance | formatCurrency:\'$0,0.00\'}</span></div></div><div class="myaccount-menu-notify account-menu-verify" if.bind="notVerified && !userContext.isScratcheClubProspect" data-test-id="not-verified-icon"><a class="button notify-button" href="/account/verify-identity" data-test-id="verify-button">VERIFY</a> <span>Secure your account by verifying your identity.</span></div><div class="myaccount-menu-notify account-menu-claim" if.bind="showCardReimbursementSection" data-test-id="not-claimed-icon"><a class="button notify-button" href="/account/settings?opened-accordion=membership" data-test-id="claim-button">CLAIM</a> <span>You have a membership reimbursement available!</span></div><div class="myaccount-menu-content"><template repeat.for="group of myAccountMenuOptionGroups"><div class="row collapse text-center myaccount-menu-row"><template repeat.for="option of group.myAccountMenuOptions"><a if.bind="option.Description != \'Messages\' && option.Description != \'Filler\'" class="myaccount-menu-option columns" href="${option.Link}"><div class="icon-wrapper"><div class="icon ${option.Icon}" data-test-id="${option.Icon}"><div if.bind="option.Description == \'Subscriptions\' && showReminderCircleForSub" class="reminder-circle"></div><div if.bind="option.Description == \'Favourites\' && showReminderCircleForFav" class="reminder-circle"></div></div><div class="icon-description">${option.Description}</div></div></a><a if.bind="option.Description == \'Messages\'" class="myaccount-menu-option columns" href="/account/messages"><div class="icon-wrapper"><div class="icon account-messages" data-test-id="account-messages"><div if.bind="messageCount" class="new-message ${messageCount ? \'on\' : \'off\'}"><span>${messageCount}</span></div></div><div class="icon-description">Messages</div></div></a><div class="myaccount-menu-option columns" if.bind="option.Description == \'Filler\'"></div></template></div></template></div><div if.bind="userContext.isScratcheClubProspect" class="myaccount-menu-sec-upgrade" data-test-id="account-sec-upgrade-panel"><div class="row"><div class="columns shrink icon"></div><div class="columns message">Play Australia’s favourite lotteries online by upgrading to a Lott account. It takes just 2 minutes.</div></div><div class="row align-center"><div class="columns upgrade-button"><a class="button" click.trigger="secUpgrade()">UPGRADE NOW</a></div></div></div></div></section></template>'
}), define("text!account-header/cart-preview/cart-preview.html", ["module"], function(e) {
    e.exports = '<template><require from="./cart-preview.css"></require><section id="cart-preview-menu" class="cart-preview-menu ${visible ? \'on\' : \'off\'}" if.bind="!detailedHoverCartTargetTest"><div mouseover.delegate="pin()" mouseleave.trigger="unpin()" class="cart-preview-menu-slider"><div class="cart-preview-menu-header text-center"><div class="menu-line"><span class="menu-title">Added to your cart</span></div></div><div class="cart-preview-menu-content"><div class="row collapse cart-preview-menu-row contents"><div class="icon-wrapper"><div repeat.for="icon of icons" class="icon ${getIconClass(icon)} state-${state} brand-circle-logo"><div class="brand-circle-logo"></div></div></div><div class="icon-description"><span>${count} Game${(count === 1) ? \'\' : \'s\'}</span> <strong>${total | formatCurrency}</strong></div></div><div class="row collapse cart-preview-menu-row checkout"><a class="button" href="/play/checkout">Checkout</a></div></div></div></section><section id="cart-preview-menu" class="cart-preview-menu-target-test ${visible === true || cartPreviewVisible === true ? \'on\' : \'off\'}" if.bind="detailedHoverCartTargetTest"><div mouseover.delegate="pin()" mouseleave.trigger="unpin()" class="cart-preview-menu-slider"><div class="cart-preview-menu-content"><div class="cart-preview-menu-row contents"><div class="icon-wrapper"><div repeat.for="icon of cartItemExtraInfo" show.bind="icon.visible" class="${getIconClass(icon.productid)} state-${state} ticket-block"><div class="brand-circle-logo"></div><div class="detail-wrapper"><div class="game-entry">${icon.text}</div><div class="game-cost">${icon.price | formatCurrency}</div></div></div></div><div class="overflow-tickets" if.bind="getNumberOfMoreTickets > 0"><div class="game-entry-overlflow">+ ${getNumberOfMoreTickets} more ticket${(getNumberOfMoreTickets === 1) ? \'\' : \'s\'}</div><div class="game-cost-overflow"><a href="/play/checkout" class="overflow-link">View</a></div></div><div class="icon-description"><div class="game-count">${count} Ticket${(count === 1) ? \'\' : \'s\'} subtotal</div><div class="sub-total">${total | formatCurrency}</div></div></div><div class="cart-preview-menu-row checkout"><a class="button" href="/play/checkout">Checkout</a></div></div></div></section></template>'
}), define("text!account-header/account-header-content.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.accountheader-app {\n  width: 100%;\n  height: 100%; }\n\n.account-header-container {\n  height: 100%; }\n\n.accountheader {\n  line-height: 2rem;\n  height: 100%; }\n  .accountheader div.balance-container {\n    display: inline-block;\n    text-align: right;\n    height: 43px;\n    vertical-align: middle; }\n    .accountheader div.balance-container p {\n      padding-bottom: 0;\n      margin-bottom: 0;\n      font-size: 0.75em;\n      font-weight: normal;\n      color: #444444;\n      line-height: 1rem;\n      padding-top: 0.25rem;\n      cursor: pointer; }\n  .accountheader .menu {\n    height: 100%; }\n  .accountheader .menu a {\n    text-decoration: none;\n    padding-top: 0;\n    padding-bottom: 0;\n    line-height: 2rem;\n    display: inline-block; }\n  .accountheader .join {\n    background-color: #6C4796;\n    border-radius: 2rem;\n    height: 2rem;\n    display: inline-block;\n    line-height: 2rem;\n    padding-left: .75rem;\n    padding-right: .75rem;\n    color: white; }\n    .accountheader .join span {\n      font-weight: bold;\n      text-transform: capitalize; }\n  .accountheader .login {\n    color: #6C4796;\n    margin-left: 1em; }\n  .accountheader .preview-hover-area {\n    padding: 32px 0; }\n    @media screen and (max-width: 47.9375em) {\n      .accountheader .preview-hover-area {\n        padding: 18px 0; } }\n  .accountheader .cart-container {\n    font-weight: 900;\n    height: 2rem;\n    width: 3rem;\n    display: inline-block;\n    position: relative;\n    background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico--cart@2x.png");\n    background-size: 2rem auto;\n    background-repeat: no-repeat;\n    background-position: center left;\n    margin-left: 1rem; }\n    .accountheader .cart-container .items {\n      color: white;\n      background-color: #E74124;\n      position: absolute;\n      top: 0rem;\n      left: 0.95rem;\n      height: 1.2rem;\n      width: 1.2rem;\n      display: inline-block;\n      /* padding: 0.3em; */\n      border-radius: 50%;\n      font-size: 0.6rem;\n      text-align: center;\n      vertical-align: middle;\n      line-height: 1.3rem; }\n      .accountheader .cart-container .items.draw-time-default {\n        background-color: #563878;\n        height: 1.3rem;\n        width: 1.3rem;\n        border: solid 2px white;\n        line-height: 1.1rem; }\n    .accountheader .cart-container .cart-count-change-add {\n      -webkit-animation: pulse 0.5s;\n      animation: pulse 0.5s; }\n    .accountheader .cart-container .cart-count-change-remove {\n      -webkit-animation: pulse 0.5s;\n      animation: pulse 0.5s; }\n    .accountheader .cart-container .hidden {\n      display: none; }\n    .accountheader .cart-container .cart-visibility-change-add {\n      -webkit-animation: expand 0.5s;\n      animation: expand 0.5s; }\n    .accountheader .cart-container .cart-visibility-change-remove {\n      -webkit-animation: shrink 0.5s;\n      animation: shrink 0.5s; }\n  .accountheader .balance-container {\n    font-weight: bold;\n    line-height: 2rem;\n    height: 2rem;\n    color: black;\n    padding-left: 0; }\n    .accountheader .balance-container.balance-amount {\n      cursor: pointer;\n      min-width: 3.75rem;\n      text-align: right;\n      padding-right: 0;\n      line-height: 1rem;\n      height: 1rem;\n      display: block; }\n    .accountheader .balance-container.balance-account {\n      padding-right: 0.5rem; }\n    .accountheader .balance-container .status {\n      display: inline-block;\n      position: relative;\n      background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico--account-avatar@2x.png");\n      background-size: 2rem auto;\n      background-repeat: no-repeat;\n      background-position: center left;\n      margin-left: 0.25em;\n      width: 3rem;\n      height: 2rem;\n      z-index: 1; }\n      .accountheader .balance-container .status .msg {\n        position: absolute;\n        top: 0;\n        left: 21px;\n        width: 8px;\n        height: 8px;\n        border-radius: 4px;\n        background-color: #E74124; }\n        .accountheader .balance-container .status .msg.message-indicator-show.tatts-enter-add {\n          -webkit-animation: expand .5s;\n          animation: expand .5s; }\n      .accountheader .balance-container .status .toggle {\n        position: absolute;\n        top: 1.1em;\n        left: 2.1em;\n        width: 0.4em;\n        height: 0.4em;\n        background-position: top left;\n        background-size: contain;\n        background-repeat: no-repeat; }\n        .accountheader .balance-container .status .toggle.off {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico--prompt-dwn@2x.png"); }\n        .accountheader .balance-container .status .toggle.on {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico--prompt-up@2x.png"); }\n\n.myaccount-menu-notify {\n  color: #fff;\n  min-height: 4rem; }\n  .myaccount-menu-notify > span {\n    padding: .75rem 0 .75rem 4.25rem;\n    background-repeat: no-repeat;\n    background-size: 40px auto;\n    background-position: 1rem center;\n    font-size: .875rem;\n    font-weight: bold;\n    line-height: 1.25rem;\n    display: block; }\n    @media screen and (max-width: 47.9375em) {\n      .myaccount-menu-notify > span {\n        background-image: none !important;\n        padding-left: 1rem; } }\n  .myaccount-menu-notify > a.notify-button {\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.2);\n    width: 6.25rem;\n    margin: .875rem 1rem;\n    text-decoration: none;\n    float: right;\n    padding: 0 1rem;\n    line-height: 2.125rem; }\n\n.myaccount-menu-notify.account-menu-verify {\n  background-color: #E74124; }\n  .myaccount-menu-notify.account-menu-verify > span {\n    background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-verify.svg"); }\n\n.myaccount-menu-notify.account-menu-claim {\n  background-color: #6C4796; }\n  .myaccount-menu-notify.account-menu-claim > span {\n    background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-mbrshp-reimbursement.svg"); }\n\n.myaccount-menu {\n  width: 100vw;\n  max-width: 375px;\n  position: absolute;\n  right: 3.75rem;\n  top: 81px;\n  clip: rect(0, 9999px, 9999px, -9999px);\n  height: 0; }\n  .myaccount-menu .myaccount-menu-slider {\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3); }\n  .myaccount-menu button {\n    outline: none;\n    cursor: pointer; }\n  .myaccount-menu.off .myaccount-menu-slider {\n    transition: transform ease-in-out .3s, opacity ease-out .3s;\n    transform: translateY(-100%);\n    opacity: 0; }\n  .myaccount-menu.on .myaccount-menu-slider {\n    transition: transform ease-in-out .3s, opacity ease-in .3s;\n    transform: translateY(0);\n    opacity: 1; }\n  .myaccount-menu .myaccount-menu-header {\n    background: linear-gradient(135deg, #4A59A2 0%, #406AAE 18%, #3073B5 31%, #3277B6 43%, #4193BC 56%, #60B9AB 100%);\n    padding: 1rem 1rem;\n    color: #FFFFFF; }\n    .myaccount-menu .myaccount-menu-header.isScratcheClubProspect {\n      background: linear-gradient(135deg, #FF0056 0%, #A600BB 48.54%, #009BFF 100%); }\n    .myaccount-menu .myaccount-menu-header hr {\n      border-color: rgba(255, 255, 255, 0.5);\n      margin-top: 0.75rem;\n      margin-bottom: 0.75rem; }\n    .myaccount-menu .myaccount-menu-header .menu-bold {\n      font-weight: 900; }\n    .myaccount-menu .myaccount-menu-header .menu-line {\n      position: relative;\n      font-size: 0.875rem;\n      height: 1.5rem;\n      line-height: 1.5rem; }\n      .myaccount-menu .myaccount-menu-header .menu-line button {\n        line-height: 1.5rem; }\n      .myaccount-menu .myaccount-menu-header .menu-line .page-refresh-container {\n        height: 1.75rem;\n        width: 1.75rem;\n        top: -6px;\n        cursor: pointer; }\n      .myaccount-menu .myaccount-menu-header .menu-line .page-refresh {\n        background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-refresh.svg");\n        height: 1.125rem;\n        width: 1.125rem;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain; }\n        .myaccount-menu .myaccount-menu-header .menu-line .page-refresh.loading {\n          -webkit-animation-name: spin;\n          -webkit-animation-duration: 800ms;\n          -webkit-animation-iteration-count: infinite;\n          -webkit-animation-timing-function: ease-in-out;\n          -ms-animation-name: spin;\n          -ms-animation-duration: 800ms;\n          -ms-animation-iteration-count: infinite;\n          -ms-animation-timing-function: ease-in-out;\n          animation-name: spin;\n          animation-duration: 800ms;\n          animation-iteration-count: infinite;\n          animation-timing-function: ease-in-out; }\n      .myaccount-menu .myaccount-menu-header .menu-line .line-right {\n        position: absolute;\n        right: 0; }\n      .myaccount-menu .myaccount-menu-header .menu-line .menu-title {\n        font-size: 1.125rem;\n        font-weight: 900; }\n      .myaccount-menu .myaccount-menu-header .menu-line .menu-email {\n        font-size: 0.75rem;\n        max-width: 280px;\n        display: inline-block;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n      .myaccount-menu .myaccount-menu-header .menu-line .menu-link {\n        font-size: 0.75rem;\n        font-weight: 900;\n        text-decoration: underline;\n        color: #FFFFFF; }\n  .myaccount-menu .myaccount-menu-content {\n    background-color: #FFFFFF;\n    color: #6C4796; }\n    .myaccount-menu .myaccount-menu-content .menu-line {\n      position: relative;\n      height: 1.5rem;\n      line-height: 1.5rem; }\n      .myaccount-menu .myaccount-menu-content .menu-line button {\n        line-height: 1.5rem; }\n    .myaccount-menu .myaccount-menu-content .myaccount-menu-row {\n      display: flex; }\n      .myaccount-menu .myaccount-menu-content .myaccount-menu-row:nth-child(1), .myaccount-menu .myaccount-menu-content .myaccount-menu-row:nth-child(2) {\n        border-bottom: 1px #E8E8E8 solid; }\n    .myaccount-menu .myaccount-menu-content .myaccount-menu-option {\n      height: 88px;\n      text-decoration: none; }\n      .myaccount-menu .myaccount-menu-content .myaccount-menu-option:nth-child(1), .myaccount-menu .myaccount-menu-content .myaccount-menu-option:nth-child(2) {\n        border-right: 1px #E8E8E8 solid; }\n      .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon-description {\n        font-size: 0.875rem; }\n      .myaccount-menu .myaccount-menu-content .myaccount-menu-option .icon-wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-top: 1rem; }\n      .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon {\n        margin-bottom: 0.25rem;\n        width: 2rem;\n        height: 2rem;\n        background-size: contain;\n        background-repeat: no-repeat;\n        position: relative; }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-tickets {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-tickets.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-money {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-funds.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-prizes {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-prizes.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-subscriptions {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-subs.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-messages {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-msgs.svg");\n          position: relative; }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-favourites {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-faves.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-settings {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-settings.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-sec-settings {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-nav-settings.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-membership {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-membership.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-rewards {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico--accnav-my-rewards.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon.account-2ndchance {\n          background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/img-2ndch-sq.svg"); }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option div.icon .reminder-circle {\n          position: absolute;\n          top: -6px;\n          left: 1.25rem;\n          border-radius: 9px;\n          height: 14px;\n          width: 14px;\n          background-color: #E74124;\n          border: 2px solid white; }\n      .myaccount-menu .myaccount-menu-content .myaccount-menu-option .account-messages .new-message {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        top: 0;\n        left: 1.25rem;\n        width: 1.125rem;\n        height: 1.125rem;\n        border-radius: 9px; }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option .account-messages .new-message.off {\n          background-color: transparent; }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option .account-messages .new-message.on {\n          background-color: #E74124; }\n        .myaccount-menu .myaccount-menu-content .myaccount-menu-option .account-messages .new-message span {\n          font-size: 0.625rem;\n          line-height: 19px;\n          margin: 0 auto;\n          color: #ffffff;\n          font-weight: 900; }\n  .myaccount-menu .myaccount-menu-sec-upgrade {\n    background-color: #FAFAFA;\n    padding: 1rem; }\n    .myaccount-menu .myaccount-menu-sec-upgrade .row {\n      margin-right: 0rem;\n      margin-left: 0rem; }\n    .myaccount-menu .myaccount-menu-sec-upgrade .icon {\n      width: 3rem;\n      height: 3rem;\n      background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-logornd-lott.svg");\n      background-repeat: no-repeat; }\n    .myaccount-menu .myaccount-menu-sec-upgrade .message {\n      padding-right: 0rem;\n      font-size: 0.875rem;\n      line-height: 1.125rem; }\n    .myaccount-menu .myaccount-menu-sec-upgrade .upgrade-button {\n      padding-right: 0rem;\n      padding-left: 0rem; }\n      .myaccount-menu .myaccount-menu-sec-upgrade .upgrade-button .button {\n        width: 100%;\n        margin-bottom: 0.125rem;\n        margin-top: 1rem;\n        font-size: 0.875rem;\n        font-weight: 900;\n        line-height: 1.25rem;\n        padding: 0.375rem 1em; }\n\n@media screen and (max-width: 47.9375em) {\n  .accountheader .cart-container,\n  .accountheader .login {\n    margin-left: 0; }\n  .myaccount-menu {\n    top: 51px; } }\n\n@media screen and (max-width: 30.9375em) {\n  .myaccount-menu {\n    right: 0;\n    max-width: initial; }\n    .myaccount-menu .myaccount-menu-slider {\n      box-shadow: none; }\n    .myaccount-menu .myaccount-menu-row:last-child {\n      border-bottom: 1px #E8E8E8 solid; } }\n\n@keyframes pulse {\n  1% {\n    transform: scale(0); }\n  25% {\n    transform: scale(1.1); }\n  45% {\n    transform: scale(0.9); }\n  63% {\n    transform: scale(1.05); }\n  79% {\n    transform: scale(0.95); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes pulse {\n  1% {\n    transform: scale(0); }\n  25% {\n    transform: scale(1.1); }\n  45% {\n    transform: scale(0.9); }\n  63% {\n    transform: scale(1.05); }\n  79% {\n    transform: scale(0.95); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes shrink {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@-webkit-keyframes shrink {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes expand {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes expand {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn-add {\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn; }\n\n.items-pulse {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  top: -1.5rem; }\n  .items-pulse.alert-5m .pulse-halo-1, .items-pulse.alert-5m .pulse-halo-2 {\n    background-color: #D93D21; }\n  .items-pulse.alert-5m .clock-icon {\n    background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-clock-5m.svg"); }\n  .items-pulse.alert-10m .pulse-halo-1, .items-pulse.alert-10m .pulse-halo-2 {\n    background-color: #F18816; }\n  .items-pulse.alert-10m .clock-icon {\n    background-image: url("/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/ico-clock-10m.svg"); }\n\n.pulse-halo-1, .pulse-halo-2 {\n  border-radius: 100%;\n  animation-name: pulse-repeat;\n  animation-duration: 1.8s;\n  animation-timing-function: ease-out;\n  animation-iteration-count: infinite;\n  animation-fill-mode: none;\n  animation-play-state: running;\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto; }\n\n.pulse-halo-1 {\n  height: 2.5rem;\n  width: 2.5rem;\n  animation-delay: 0; }\n\n.pulse-halo-2 {\n  height: 2.25rem;\n  width: 2.25rem;\n  animation-delay: -0.3s; }\n\n.clock-icon {\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n  height: 1.25rem;\n  width: 1.25rem;\n  position: absolute;\n  z-index: 102;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto; }\n\n@keyframes pulse-repeat {\n  0% {\n    transform: scale(0.5);\n    border-radius: 100%; }\n  30% {\n    transform: scale(1);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 0; } }\n'
}), define("text!account-header/cart-preview/cart-preview.css", ["module"], function(e) {
    e.exports = '/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.cart-preview-menu {\n  position: absolute;\n  right: 0;\n  top: 81px;\n  clip: rect(0, 9999px, 9999px, -9999px);\n  height: 0; }\n  @media screen and (max-width: 47.9375em) {\n    .cart-preview-menu {\n      top: 51px; } }\n  .cart-preview-menu .cart-preview-menu-slider {\n    width: 12.25rem;\n    height: 13.25rem;\n    padding: 1.5rem 1rem;\n    background-color: #F6F4F9;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3); }\n  .cart-preview-menu button {\n    outline: none;\n    cursor: pointer; }\n  .cart-preview-menu.off .cart-preview-menu-slider {\n    transition: transform ease-in-out .3s, opacity ease-out .3s;\n    transform: translateY(-100%);\n    opacity: 0; }\n  .cart-preview-menu.on .cart-preview-menu-slider {\n    transition: transform ease-in-out .3s, opacity ease-in .3s;\n    transform: translateY(0);\n    opacity: 1; }\n  .cart-preview-menu .cart-preview-menu-header {\n    padding: 0 0 1rem; }\n    .cart-preview-menu .cart-preview-menu-header .menu-bold {\n      font-weight: 900; }\n    .cart-preview-menu .cart-preview-menu-header .menu-line {\n      position: relative;\n      font-size: 14px;\n      height: 24px;\n      line-height: 24px; }\n      .cart-preview-menu .cart-preview-menu-header .menu-line button {\n        line-height: 24px; }\n      .cart-preview-menu .cart-preview-menu-header .menu-line .page-refresh-container {\n        height: 28px;\n        width: 28px;\n        top: -6px;\n        cursor: pointer; }\n      .cart-preview-menu .cart-preview-menu-header .menu-line .page-refresh {\n        background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/ico-refresh.svg");\n        height: 18px;\n        width: 18px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain; }\n        .cart-preview-menu .cart-preview-menu-header .menu-line .page-refresh.loading {\n          -webkit-animation-name: spin;\n          -webkit-animation-duration: 800ms;\n          -webkit-animation-iteration-count: infinite;\n          -webkit-animation-timing-function: ease-in-out;\n          -moz-animation-name: spin;\n          -moz-animation-duration: 800ms;\n          -moz-animation-iteration-count: infinite;\n          -moz-animation-timing-function: ease-in-out;\n          -ms-animation-name: spin;\n          -ms-animation-duration: 800ms;\n          -ms-animation-iteration-count: infinite;\n          -ms-animation-timing-function: ease-in-out;\n          -o-transition: rotate(3600deg); }\n\n@-moz-keyframes spin {\n  from {\n    -moz-transform: rotate(0deg); }\n  to {\n    -moz-transform: rotate(360deg); } }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n      .cart-preview-menu .cart-preview-menu-header .menu-line .line-right {\n        position: absolute;\n        right: 0; }\n      .cart-preview-menu .cart-preview-menu-header .menu-line .menu-title {\n        font-size: 16px;\n        line-height: 24px;\n        color: #000000; }\n  .cart-preview-menu .cart-preview-menu-content .menu-line {\n    position: relative;\n    height: 1.5rem;\n    line-height: 1.5rem; }\n    .cart-preview-menu .cart-preview-menu-content .menu-line button {\n      line-height: 1.5rem; }\n  .cart-preview-menu .cart-preview-menu-content .cart-preview-menu-row {\n    display: flex; }\n    .cart-preview-menu .cart-preview-menu-content .cart-preview-menu-row.contents {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      height: 4rem;\n      border-bottom: 1px #DAD1E5 solid;\n      border-top: 1px #DAD1E5 solid; }\n    .cart-preview-menu .cart-preview-menu-content .cart-preview-menu-row.checkout {\n      margin-top: 1.5rem;\n      justify-content: space-around; }\n      .cart-preview-menu .cart-preview-menu-content .cart-preview-menu-row.checkout .button {\n        font-size: 1rem;\n        text-transform: uppercase;\n        font-weight: 900;\n        width: 10.25rem;\n        padding: 0.3125em 1em; }\n  .cart-preview-menu .cart-preview-menu-content .icon-description {\n    font-size: 0.875rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end; }\n  .cart-preview-menu .cart-preview-menu-content .icon-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n    .cart-preview-menu .cart-preview-menu-content .icon-wrapper .brand-circle-logo {\n      width: 40px;\n      height: 40px;\n      background-size: contain;\n      border-radius: 50%;\n      margin-right: -25px; }\n\n.cart-preview-menu-target-test {\n  position: absolute;\n  right: 0;\n  top: 81px;\n  clip: rect(0, 9999px, 9999px, -9999px);\n  height: 0;\n  z-index: 999; }\n  @media screen and (max-width: 47.9375em) {\n    .cart-preview-menu-target-test {\n      top: 51px; } }\n  .cart-preview-menu-target-test .cart-preview-menu-slider {\n    width: 16.25rem;\n    height: auto;\n    padding: 0.5rem 1rem 1rem 1rem;\n    background-color: #F6F4F9;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3); }\n  .cart-preview-menu-target-test button {\n    outline: none;\n    cursor: pointer; }\n  .cart-preview-menu-target-test.off .cart-preview-menu-slider {\n    transition: transform ease-in-out .3s, opacity ease-out .3s;\n    transform: translateY(-100%);\n    opacity: 0; }\n  .cart-preview-menu-target-test.on .cart-preview-menu-slider {\n    transition: transform ease-in-out .3s, opacity ease-in .3s;\n    transform: translateY(0);\n    opacity: 1; }\n  .cart-preview-menu-target-test .cart-preview-menu-header {\n    padding: 0 0 1rem; }\n    .cart-preview-menu-target-test .cart-preview-menu-header .menu-bold {\n      font-weight: 900; }\n    .cart-preview-menu-target-test .cart-preview-menu-header .menu-line {\n      position: relative;\n      font-size: 14px;\n      height: 24px;\n      line-height: 24px; }\n      .cart-preview-menu-target-test .cart-preview-menu-header .menu-line button {\n        line-height: 24px; }\n      .cart-preview-menu-target-test .cart-preview-menu-header .menu-line .page-refresh-container {\n        height: 28px;\n        width: 28px;\n        top: -6px;\n        cursor: pointer; }\n      .cart-preview-menu-target-test .cart-preview-menu-header .menu-line .page-refresh {\n        background-image: url("/etc/designs/the-lott/components/structure/page-template/clientlibs/images/ico-refresh.svg");\n        height: 18px;\n        width: 18px;\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain; }\n        .cart-preview-menu-target-test .cart-preview-menu-header .menu-line .page-refresh.loading {\n          -webkit-animation-name: spin;\n          -webkit-animation-duration: 800ms;\n          -webkit-animation-iteration-count: infinite;\n          -webkit-animation-timing-function: ease-in-out;\n          -moz-animation-name: spin;\n          -moz-animation-duration: 800ms;\n          -moz-animation-iteration-count: infinite;\n          -moz-animation-timing-function: ease-in-out;\n          -ms-animation-name: spin;\n          -ms-animation-duration: 800ms;\n          -ms-animation-iteration-count: infinite;\n          -ms-animation-timing-function: ease-in-out;\n          -o-transition: rotate(3600deg); }\n\n@-moz-keyframes spin {\n  from {\n    -moz-transform: rotate(0deg); }\n  to {\n    -moz-transform: rotate(360deg); } }\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n      .cart-preview-menu-target-test .cart-preview-menu-header .menu-line .line-right {\n        position: absolute;\n        right: 0; }\n      .cart-preview-menu-target-test .cart-preview-menu-header .menu-line .menu-title {\n        font-size: 16px;\n        line-height: 24px;\n        color: #000000; }\n  .cart-preview-menu-target-test .cart-preview-menu-content .menu-line {\n    position: relative;\n    line-height: 1.5rem; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .menu-line button {\n      line-height: 1.5rem; }\n  .cart-preview-menu-target-test .cart-preview-menu-content .cart-preview-menu-row.checkout {\n    margin-top: 1rem;\n    justify-content: space-around; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .cart-preview-menu-row.checkout .button {\n      font-size: 1rem;\n      text-transform: uppercase;\n      font-weight: 900;\n      width: 100%;\n      padding: 0.1em 1em; }\n  .cart-preview-menu-target-test .cart-preview-menu-content .icon-description {\n    font-size: 0.975rem;\n    display: flex;\n    padding: 12px 0;\n    border-top: solid 1px #B2B2B2;\n    border-bottom: solid 1px #B2B2B2; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .icon-description .game-count {\n      line-height: 1.2;\n      flex: 0 0 60%; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .icon-description .sub-total {\n      line-height: 1.2;\n      text-align: right;\n      flex: 0 0 40%;\n      font-weight: bold; }\n  .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .brand-circle-logo {\n    width: 30px;\n    height: 30px;\n    background-size: contain;\n    border-radius: 50%; }\n  .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .ticket-block {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .ticket-block .brand-circle-logo {\n      width: 30px;\n      flex: 0 0 30px;\n      margin-right: 10px; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .ticket-block:last-child .detail-wrapper {\n      border: none; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .ticket-block .detail-wrapper {\n      display: flex;\n      flex-grow: 1;\n      padding: 10px 0;\n      border-bottom: 1px solid #B2B2B2;\n      min-height: 46px; }\n      .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .ticket-block .detail-wrapper .game-entry {\n        font-size: 12px;\n        flex: 0 0 50%;\n        line-height: 1.2;\n        align-self: flex-start; }\n      .cart-preview-menu-target-test .cart-preview-menu-content .icon-wrapper .ticket-block .detail-wrapper .game-cost {\n        font-size: 14px;\n        font-weight: bold;\n        flex: 0 0 50%;\n        line-height: 1.2;\n        min-width: 66px;\n        text-align: right;\n        align-self: flex-start; }\n  .cart-preview-menu-target-test .cart-preview-menu-content .overflow-tickets {\n    display: flex;\n    padding: 12px 0;\n    margin-left: 36px;\n    border-top: solid 1px #B2B2B2; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .overflow-tickets .game-entry-overlflow {\n      font-size: 12px;\n      flex: 1;\n      line-height: 1.2; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .overflow-tickets .game-cost-overflow {\n      font-size: 12px;\n      font-weight: bold;\n      line-height: 1.2;\n      min-width: 66px;\n      text-align: right;\n      align-self: flex-start; }\n    .cart-preview-menu-target-test .cart-preview-menu-content .overflow-tickets .overflow-link {\n      line-height: 1;\n      text-decoration: underline; }\n'
}), define("text!accountheader-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/accountheader/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});