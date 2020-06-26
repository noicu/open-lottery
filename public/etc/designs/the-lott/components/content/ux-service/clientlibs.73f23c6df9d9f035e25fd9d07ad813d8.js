/* ux-service-prod-aem-v1.2.339 */
define("service/ux/event-to-ux-event-map", ["require", "exports", "events/ticket-cancelled", "events/favourites", "events/subscriptions/delete-subscription-event", "events/subscriptions/pause-subscription-event", "events/subscriptions/reactivate-subscription-event", "events/user-details-updated-events", "events/login/index", "events/shopping-cart/index", "events/membership/index", "events/my-prizes/index"], function(e, t, n, r, i, a, c, s, o, u, d, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EventToUxEventMap = [{
        event: n.TicketCancelled,
        uxEventName: "TicketCancelled"
    }, {
        event: r.FavouriteDeleted,
        uxEventName: "FavouriteDeleted"
    }, {
        event: r.FavouriteUpdated,
        uxEventName: "FavouriteUpdated"
    }, {
        event: i.DeleteSubscriptionEvent,
        uxEventName: "SubscriptionDelete"
    }, {
        event: a.PauseSubscriptionEvent,
        uxEventName: "SubscriptionPause"
    }, {
        event: c.ReactivateSubscriptionEvent,
        uxEventName: "SubscriptionReactivate"
    }, {
        event: s.UsernameUpdatedEvent,
        uxEventName: "UsernameUpdate"
    }, {
        event: s.PasswordUpdatedEvent,
        uxEventName: "PasswordUpdate"
    }, {
        event: s.SelfExclusionInitiatedEvent,
        uxEventName: "InitiateSelfExclusion"
    }, {
        event: s.SelfExcludedEvent,
        uxEventName: "SelfExclusion"
    }, {
        event: s.AddressUpdatedEvent,
        uxEventName: "AddressUpdate"
    }, {
        event: s.ContactDetailsUpdatedEvent,
        uxEventName: "ContactDetailsUpdate"
    }, {
        event: o.ForgotUsernameInitiatedEvent,
        uxEventName: "ForgotUsername"
    }, {
        event: o.ForgotPasswordInitiatedEvent,
        uxEventName: "ForgotPassword"
    }, {
        event: o.ResetPasswordInitiatedEvent,
        uxEventName: "ResetPassword"
    }, {
        event: u.ShoppingCartEmptiedEvent,
        uxEventName: "EmptyCart"
    }, {
        event: u.ShoppingCartLoadedEvent,
        uxEventName: "InitiateCart"
    }, {
        event: d.MembershipCardActivatedEvent,
        uxEventName: "ActivateCardMembership"
    }, {
        event: d.MembershipCardRenewedEvent,
        uxEventName: "RenewCardMembership"
    }, {
        event: d.MembershipCardCancelledEvent,
        uxEventName: "CancelCardMembership"
    }, {
        event: d.MembershipCardReplacementOrderedEvent,
        uxEventName: "OrderReplacementMembershipCard"
    }, {
        event: d.MembershipCardLinkExistingEvent,
        uxEventName: "LinkCardMembership"
    }, {
        event: l.MyPrizesPaymentMethodUpdatedEvent,
        uxEventName: "RetailPrizePaymentUpdate"
    }]
}), define("service/ux/user-experience-script", ["require", "exports", "aurelia-dependency-injection", "services/aurelia-lifecycle-service", "./user-experience-service"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = new n.Container;
    a.get(i.UserExperienceService).initialize(), a.get(r.AureliaLifecycleService).startWatchingLifecycle()
});
var __assign = this && this.__assign || function() {
        return __assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, __assign.apply(this, arguments)
    },
    __decorate = this && this.__decorate || function(e, t, n, r) {
        var i, a = arguments.length,
            c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(t, n, c) : i(t, n)) || c);
        return a > 3 && c && Object.defineProperty(t, n, c), c
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/ux/user-experience-service-account", ["require", "exports", "aurelia-dependency-injection", "./user-experience-tracking", "services/tatts-event-service", "./user-experience-service-credit-cards", "./user-experience-service-money-withdrawal", "events/user-details-updated-events", "./data/user-experience-data-event", "./data/user-experience-data-account-spend-limit"], function(e, t, n, r, i, a, c, s, o, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = function() {
        function e(e, t, n) {
            this.eventService = e, this.creditCardEvents = t, this.withdrawalEvents = n
        }
        return e.prototype.subscribeToTrackableAccountEvents = function() {
            var e = this;
            this.creditCardEvents.subscribeToTrackableCreditCardEvents(), this.withdrawalEvents.subscribeToTrackableMoneyWithdrawalEvents(), this.eventService.subscribeT(s.WeeklySpendLimitUpdatedEvent, function(t) {
                return e.updateSpendLimit(t)
            })
        }, e.prototype.updateSpendLimit = function(e) {
            var t = e.spendLimitChange.toFixed(2);
            return window.digitalData.account = __assign(__assign({}, window.digitalData.account || {}), {
                spendLimit: new u.UXDataAccountSpendLimit(e.spendLimitIncrease, parseFloat(t))
            }), r.UXTracking.track(new o.UXDataEvent("LottoSpendLimitUpdate"))
        }, e = __decorate([n.autoinject(), __metadata("design:paramtypes", [i.default, a.UXServiceCreditCards, c.UXServiceMoneyWithdrawal])], e)
    }();
    t.UXServiceAccount = d
}), define("service/ux/user-experience-service-cart", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event", "./data/user-experience-data-cart"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e() {}
        return e.addItem = function(t, i) {
            return e.updateCartSummary(i), window.digitalData.product = t, n.UXTracking.track(new r.UXDataEvent("AddtoCart")).then(function() {
                window.digitalData.product = null
            })
        }, e.failedToAddItem = function(t, i) {
            return e.updateCartSummary(i), window.digitalData.product = t, n.UXTracking.track(new r.UXDataEvent("AddtoCart", !1)).then(function() {
                window.digitalData.product = null
            })
        }, e.removeItem = function(t, i) {
            return e.updateCartSummary(i), window.digitalData.product = t, n.UXTracking.track(new r.UXDataEvent("RemovefromCart")).then(function() {
                window.digitalData.product = null
            })
        }, e.updateItem = function(t, i) {
            return e.updateCartSummary(i), window.digitalData.product = t, n.UXTracking.track(new r.UXDataEvent("UpdateCart")).then(function() {
                window.digitalData.product = null
            })
        }, e.updateCartSummary = function(e) {
            window.digitalData.cart = new i.UXDataCart(e.quantity, e.cost, e.commission)
        }, e
    }();
    t.UXServiceCart = a
});
var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        function i(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            })
        }
        return new(n || (n = Promise))(function(n, a) {
            function c(e) {
                try {
                    o(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    o(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                e.done ? n(e.value) : i(e.value).then(c, s)
            }
            o((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return r([e, t])
            }
        }

        function r(n) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; o;) try {
                if (i = 1, a && (c = 2 & n[0] ? a.return : n[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, n[1])).done) return c;
                switch (a = 0, c && (n = [2 & n[0], c.value]), n[0]) {
                    case 0:
                    case 1:
                        c = n;
                        break;
                    case 4:
                        return o.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        o.label++, a = n[1], n = [0];
                        continue;
                    case 7:
                        n = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (c = o.trys, !(c = c.length > 0 && c[c.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            o = 0;
                            continue
                        }
                        if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            o.label = n[1];
                            break
                        }
                        if (6 === n[0] && o.label < c[1]) {
                            o.label = c[1], c = n;
                            break
                        }
                        if (c && o.label < c[2]) {
                            o.label = c[2], o.ops.push(n);
                            break
                        }
                        c[2] && o.ops.pop(), o.trys.pop();
                        continue
                }
                n = t.call(e, o)
            } catch (e) {
                n = [6, e], a = 0
            } finally {
                i = c = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var i, a, c, s, o = {
            label: 0,
            sent: function() {
                if (1 & c[0]) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/ux/user-experience-service-check-my-ticket", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.success = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, 3, 4]), window.digitalData.checkTicket = {}, t && (window.digitalData.checkTicket.ticketEntered = t.scannedTicket ? e.SCAN_ENTRY_METHOD : e.MANUAL_ENTRY_METHOD, window.digitalData.checkTicket.hasUserMediaApi = t.hasUserMediaApi, window.digitalData.checkTicket.syndicate = t.syndicate, window.digitalData.checkTicket.productId = t.productId, window.digitalData.checkTicket.drawNumber = t.drawNumber), [4, n.UXTracking.track(new r.UXDataEvent("CheckMyTicket", !0))];
                        case 1:
                            return a.sent(), [3, 4];
                        case 2:
                            return i = a.sent(), console.error("Tracking Error: ", i), [3, 4];
                        case 3:
                            return window.digitalData.checkTicket = null, [7];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.serverError = function(t, i) {
            return __awaiter(this, void 0, void 0, function() {
                var a;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return c.trys.push([0, 2, 3, 4]), window.digitalData.checkTicket = {}, i && (window.digitalData.checkTicket.ticketEntered = i.scannedTicket ? e.SCAN_ENTRY_METHOD : e.MANUAL_ENTRY_METHOD, window.digitalData.checkTicket.hasUserMediaApi = i.hasUserMediaApi), [4, n.UXTracking.track(new r.UXDataEvent("CheckMyTicket", !1, t))];
                        case 1:
                            return c.sent(), [3, 4];
                        case 2:
                            return a = c.sent(), console.error("Tracking Error: ", a), [3, 4];
                        case 3:
                            return window.digitalData.checkTicket = null, [7];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.ticketNotFound = function(t) {
            return __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, 3, 4]), window.digitalData.checkTicket = {}, t && (window.digitalData.checkTicket.ticketEntered = t.scannedTicket ? e.SCAN_ENTRY_METHOD : e.MANUAL_ENTRY_METHOD, window.digitalData.checkTicket.hasUserMediaApi = t.hasUserMediaApi), [4, n.UXTracking.track(new r.UXDataEvent("CheckMyTicket", !1, "TicketNotFound"))];
                        case 1:
                            return a.sent(), [3, 4];
                        case 2:
                            return i = a.sent(), console.error("Tracking Error: ", i), [3, 4];
                        case 3:
                            return window.digitalData.checkTicket = null, [7];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.SCAN_ENTRY_METHOD = "Scan", e.MANUAL_ENTRY_METHOD = "Manual", e
    }();
    t.UXServiceCheckMyTicket = i
});
var __assign = this && this.__assign || function() {
        return __assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, __assign.apply(this, arguments)
    },
    __decorate = this && this.__decorate || function(e, t, n, r) {
        var i, a = arguments.length,
            c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(t, n, c) : i(t, n)) || c);
        return a > 3 && c && Object.defineProperty(t, n, c), c
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/ux/user-experience-service-credit-cards", ["require", "exports", "aurelia-dependency-injection", "events/credit-cards", "./data/user-experience-data-account-deposit", "services/tatts-event-service", "./user-experience-tracking", "./data/user-experience-data-event", "services/user-context"], function(e, t, n, r, i, a, c, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            this.eventService = e, this.userContext = t
        }
        return e.prototype.subscribeToTrackableCreditCardEvents = function() {
            var e = this;
            this.eventService.subscribeT(r.CreditCardOpenAddEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("InitiateAddCard"))
            }), this.eventService.subscribeT(r.CreditCardAddSuccessEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("AddCard"))
            }), this.eventService.subscribeT(r.CreditCardAddFailureEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("AddCardFailure"))
            }), this.eventService.subscribeT(r.CreditCardOpenEditEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("InitiateEditCard"))
            }), this.eventService.subscribeT(r.CreditCardEditSuccessEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("EditCard"))
            }), this.eventService.subscribeT(r.CreditCardEditFailureEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("EditCardFailure"))
            }), this.eventService.subscribeT(r.CreditCardRemoveSuccessEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("RemoveCard"))
            }), this.eventService.subscribeT(r.CreditCardRemoveFailureEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("RemoveCardFailure"))
            }), this.eventService.subscribeT(r.CreditCardOpenConfirmEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("InitiateConfirmation"))
            }), this.eventService.subscribeT(r.CreditCardSubmitConfirmationSuccessEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("SubmitConfirmation"))
            }), this.eventService.subscribeT(r.CreditCardSubmitConfirmationFailureEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("SubmitConfirmationFailure"))
            }), this.eventService.subscribeT(r.CreditCardCompleteConfirmationSuccessEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("CompleteConfirmation"))
            }), this.eventService.subscribeT(r.CreditCardCompleteConfirmationFailureEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("CompleteConfirmationFailure"))
            }), this.eventService.subscribeT(r.CreditCardConfirmationLockedOutEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("ConfirmationLockedOut"))
            }), this.eventService.subscribeT(r.CreditCardDepositSuccessEvent, function(t) {
                return e.addDepositSuccess(t)
            }), this.eventService.subscribeT(r.CreditCardDepositFailureEvent, function() {
                return c.UXTracking.track(new s.UXDataEvent("DepositFundsFailure"))
            })
        }, e.prototype.addDepositSuccess = function(e) {
            return this.userContext && (window.digitalData.customer = __assign(__assign({}, window.digitalData.customer || {}), {
                paypalConnectStatus: this.userContext.getBoolean("paypal-connect-status")
            })), window.digitalData.account = __assign(__assign({}, window.digitalData.account || {}), {
                deposit: new i.UXDataAccountDeposit(e.data.depositAmount, e.data.balanceAfter, e.data.balanceBefore, e.data.cardType, e.data.depositLocation)
            }), c.UXTracking.track(new s.UXDataEvent("DepositFunds"))
        }, e = __decorate([n.autoinject(), __metadata("design:paramtypes", [a.TattsEvent, o.UserContext])], e)
    }();
    t.UXServiceCreditCards = u
}), define("service/ux/user-experience-service-customer", ["require", "exports", "./data/user-experience-data-customer", "./data/user-experience-data-registration", "./data/user-experience-data", "./user-experience-tracking", "./data/user-experience-data-event", "moment", "services/tatts-date-utils", "./data/user-experience-data-login"], function(e, t, n, r, i, a, c, s, o, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = function() {
        function e() {}
        return e.login = function(e, t, r, i, s, o, d, l, p, v, f) {
            var h = window.digitalData.customer = new n.UXDataCustomer;
            return h.customerid = e, h.loggedIn = !0, h.verified = t, h.playerCardNumber = r, h.permitEmail = i, h.permitSMS = s, h.permitMail = o, h.accountBalance = d, h.accountRewards = l, h.accountTotalBalance = p, h.homeState = v, h.customerType = f, (window.digitalData.login = new u.UXDataLogin).method = "Online", a.UXTracking.track(new c.UXDataEvent("AccountLogin"))
        }, e.loginFailed = function(e) {
            return void 0 === e && (e = null), a.UXTracking.track(new c.UXDataEvent("AccountLogin", !1, e))
        }, e.retailLogin = function(e, t) {
            return (window.digitalData.customer = new n.UXDataCustomer).playerCardNumber = e, (window.digitalData.login = new u.UXDataLogin).method = "Retail", a.UXTracking.track(new c.UXDataEvent("RetailLogin"))
        }, e.retailLoginFailed = function(e) {
            return void 0 === e && (e = null), a.UXTracking.track(new c.UXDataEvent("RetailLogin", !1, e))
        }, e.updateBalance = function(e, t, n) {
            window.digitalData.customer.accountBalance = e, window.digitalData.customer.accountRewards = t, window.digitalData.customer.accountTotalBalance = n
        }, e.logout = function() {
            return a.UXTracking.track(new c.UXDataEvent("AccountLogout")).then(function() {
                window.digitalData.customer = new n.UXDataCustomer, window.digitalData.login = new u.UXDataLogin, i.UserExperienceData.persist()
            })
        }, e.joinUpSuccess = function(t) {
            e.joinUp(t, !0)
        }, e.joinUpFailed = function(t) {
            e.joinUp(t, !1, t.errorCode)
        }, e.joinUp = function(e, t, n) {
            void 0 === n && (n = null);
            var i = o.TattsDateUtils.getSafeMomentDate(e.eventedAt, s.ISO_8601, !0),
                u = i.format("DD/MM/YYYY"),
                d = i.format("HH:mmA"),
                l = e.state + " " + e.country;
            window.digitalData.registration = new r.UXDataRegistration(u, d, e.secUpgrade, e.wagUpgrade, l, e.triggerOrigin, e.linkedCard, e.spendLimit, e.linkedCardNumber, e.linkedCardJurisdiction, e.spendLimitAmount), !t && e.wagUpgrade ? (window.digitalData.errors = {
                component: e.triggerOrigin,
                errorMessage: "WA" === e.state ? "Western Australia Wagering Account attempt to join lotteries" : "Unsupported Country Wagering Account attempted to join lotteries"
            }, a.UXTracking.track(new c.UXDataEvent("errorEvent"))) : a.UXTracking.track(new c.UXDataEvent("AccountRegistration", t, n))
        }, e
    }();
    t.UXServiceCustomer = d
});
var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        function i(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            })
        }
        return new(n || (n = Promise))(function(n, a) {
            function c(e) {
                try {
                    o(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    o(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                e.done ? n(e.value) : i(e.value).then(c, s)
            }
            o((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return r([e, t])
            }
        }

        function r(n) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; o;) try {
                if (i = 1, a && (c = 2 & n[0] ? a.return : n[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, n[1])).done) return c;
                switch (a = 0, c && (n = [2 & n[0], c.value]), n[0]) {
                    case 0:
                    case 1:
                        c = n;
                        break;
                    case 4:
                        return o.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        o.label++, a = n[1], n = [0];
                        continue;
                    case 7:
                        n = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (c = o.trys, !(c = c.length > 0 && c[c.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            o = 0;
                            continue
                        }
                        if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            o.label = n[1];
                            break
                        }
                        if (6 === n[0] && o.label < c[1]) {
                            o.label = c[1], c = n;
                            break
                        }
                        if (c && o.label < c[2]) {
                            o.label = c[2], o.ops.push(n);
                            break
                        }
                        c[2] && o.ops.pop(), o.trys.pop();
                        continue
                }
                n = t.call(e, o)
            } catch (e) {
                n = [6, e], a = 0
            } finally {
                i = c = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var i, a, c, s, o = {
            label: 0,
            sent: function() {
                if (1 & c[0]) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/ux/user-experience-service-global", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.genericError = function(e) {
            return window.digitalData.errors = {
                component: e.component,
                errorMessage: e.errorMessage
            }, n.UXTracking.track(new r.UXDataEvent("errorEvent"))
        }, e.genericDigitalInteraction = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return window.digitalData.page = {
                                interactionType: e.interactionType
                            }, [4, n.UXTracking.track(new r.UXDataEvent("DigitalInteraction"))];
                        case 1:
                            return t.sent(), window.digitalData.page.interactionType = null, [2]
                    }
                })
            })
        }, e
    }();
    t.UXServiceGlobal = i
}), define("service/ux/user-experience-service-membership-card", ["require", "exports", "./data/user-experience-data-membership-card"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.showBarcode = function(e) {
            window.digitalData.account = Object.assign(window.digitalData.account || {}, {
                membershipCard: new n.UXDataMembershipCard(e)
            })
        }, e
    }();
    t.UXServiceMembershipCard = r
});
var __assign = this && this.__assign || function() {
        return __assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, __assign.apply(this, arguments)
    },
    __decorate = this && this.__decorate || function(e, t, n, r) {
        var i, a = arguments.length,
            c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(t, n, c) : i(t, n)) || c);
        return a > 3 && c && Object.defineProperty(t, n, c), c
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/ux/user-experience-service-money-withdrawal", ["require", "exports", "aurelia-dependency-injection", "./user-experience-tracking", "./data/user-experience-data-event", "./data/user-experience-data-account-withdrawal", "events/withdraw-funds/withdraw-funds-server-error-event", "events/withdraw-funds/withdraw-funds-success-event", "services/user-context", "services/tatts-event-service"], function(e, t, n, r, i, a, c, s, o, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = function() {
        function e(e, t) {
            this.eventService = e, this.userContext = t
        }
        return e.prototype.subscribeToTrackableMoneyWithdrawalEvents = function() {
            var e = this;
            this.eventService.subscribeT(c.WithdrawFundsServerErrorEvent, function(t) {
                return e.serverError(t)
            }), this.eventService.subscribeT(s.WithdrawFundsSuccessEvent, function(t) {
                return e.success(t)
            })
        }, e.prototype.success = function(e) {
            return this.userContext && (window.digitalData.customer = __assign(__assign({}, window.digitalData.customer || {}), {
                paypalConnectStatus: this.userContext.getBoolean("paypal-connect-status")
            })), window.digitalData.account = __assign(__assign({}, window.digitalData.account || {}), {
                withdrawal: new a.UXDataAccountWithdrawal(e.amount, e.balanceAfter, e.balanceBefore, e.referenceNo, e.cardType)
            }), r.UXTracking.track(new i.UXDataEvent("WithdrawFunds"))
        }, e.prototype.serverError = function(e) {
            r.UXTracking.track(new i.UXDataEvent("WithdrawFunds", !1, e.supportErrorReference))
        }, e = __decorate([n.autoinject(), __metadata("design:paramtypes", [u.default, o.UserContext])], e)
    }();
    t.UXServiceMoneyWithdrawal = d
}), define("service/ux/user-experience-service-page", ["require", "exports", "./user-experience-tracking", "aurelia-cookie", "./data/user-experience-data-event"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e() {}
        return e.pageView = function() {
            var e = r.AureliaCookie.get("locale"),
                t = window.digitalData.page;
            t.pageName = document.title, t.pageTitle = document.title, t.pathName = window.location.pathname, void 0 !== window.UX && window.UX && (t.server = window.UX.server, t.version = window.UX.version, t.salesChannel = window.UX.salesChannel), t.jurisdiction = e && "" !== e ? e.toLowerCase() : null;
            var a = window.location.pathname.split("/");
            t.pageFolder = a.length > 2 ? a[1] : "", t.pageSubFolder = a.length > 3 ? a[2] : "", n.UXTracking.track(new i.UXDataEvent("PageView"))
        }, e
    }();
    t.UXServicePage = a
});
var __assign = this && this.__assign || function() {
        return __assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, __assign.apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, n, r) {
        function i(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            })
        }
        return new(n || (n = Promise))(function(n, a) {
            function c(e) {
                try {
                    o(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    o(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                e.done ? n(e.value) : i(e.value).then(c, s)
            }
            o((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return r([e, t])
            }
        }

        function r(n) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; o;) try {
                if (i = 1, a && (c = 2 & n[0] ? a.return : n[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, n[1])).done) return c;
                switch (a = 0, c && (n = [2 & n[0], c.value]), n[0]) {
                    case 0:
                    case 1:
                        c = n;
                        break;
                    case 4:
                        return o.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        o.label++, a = n[1], n = [0];
                        continue;
                    case 7:
                        n = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (c = o.trys, !(c = c.length > 0 && c[c.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            o = 0;
                            continue
                        }
                        if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            o.label = n[1];
                            break
                        }
                        if (6 === n[0] && o.label < c[1]) {
                            o.label = c[1], c = n;
                            break
                        }
                        if (c && o.label < c[2]) {
                            o.label = c[2], o.ops.push(n);
                            break
                        }
                        c[2] && o.ops.pop(), o.trys.pop();
                        continue
                }
                n = t.call(e, o)
            } catch (e) {
                n = [6, e], a = 0
            } finally {
                i = c = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var i, a, c, s, o = {
            label: 0,
            sent: function() {
                if (1 & c[0]) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/ux/user-experience-service-paypal", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.PaypalPreSignupClick = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return n.UXTracking.track(new r.UXDataEvent("PaypalPreSignupClick")), [2]
                })
            })
        }, e.PaypalPreSignupClickFailed = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return window.digitalData.customer.paypalError = e.error, n.UXTracking.track(new r.UXDataEvent("PaypalPreSignupClickFailed")), [2]
                })
            })
        }, e.PaypalConnect = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(i) {
                    return window.digitalData.customer.paypalConnectStep = e.location, t && (window.digitalData.customer.paypalConnectStatus = t.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("PaypalConnect")), [2]
                })
            })
        }, e.PaypalConnectFailed = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(i) {
                    return window.digitalData.customer.paypalError = e.error, t && (window.digitalData.customer.paypalConnectStatus = t.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("PaypalConnectFailed")), [2]
                })
            })
        }, e.PaypalDisconnect = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return window.digitalData.customer.paypalConnectStep = "MyFundsSettings", e && (window.digitalData.customer.paypalConnectStatus = e.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("PaypalDisconnect")), [2]
                })
            })
        }, e.PaypalDisconnectFailed = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(i) {
                    return window.digitalData.customer.paypalError = e.error, t && (window.digitalData.customer.paypalConnectStatus = t.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("PaypalDisconnectFailed")), [2]
                })
            })
        }, e.SubscriptionPaymentMethodUpdated = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(a) {
                    return i = window.digitalData.page.pathName, window.digitalData.account = __assign(__assign({}, window.digitalData.account || {}), {
                        subscriptionBackup: {
                            cardType: e.cardType,
                            location: i
                        }
                    }), t && (window.digitalData.customer.paypalConnectStatus = t.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("SubscriptionPaymentMethodUpdated")), [2]
                })
            })
        }, e.SubscriptionPaymentMethodUpdatedFailed = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                var i;
                return __generator(this, function(a) {
                    return i = window.digitalData.page.pathName, window.digitalData.customer.paypalError = e.error, window.digitalData.account = __assign(__assign({}, window.digitalData.account || {}), {
                        subscriptionBackup: {
                            cardType: e.cardType,
                            location: i
                        }
                    }), t && (window.digitalData.customer.paypalConnectStatus = t.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("SubscriptionPaymentMethodUpdatedFailed")), [2]
                })
            })
        }, e.PaypalDepositFailure = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(i) {
                    return window.digitalData.customer.paypalError = e.error, t && (window.digitalData.customer.paypalConnectStatus = t.getBoolean("paypal-connect-status")), n.UXTracking.track(new r.UXDataEvent("PaypalDepositFailure")), [2]
                })
            })
        }, e
    }();
    t.UXServicePaypal = i
}), define("service/ux/user-experience-service-purchase", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.loaded = function(e, t) {
            e ? n.UXTracking.track(new r.UXDataEvent("Purchase Loaded All Games")) : n.UXTracking.track(new r.UXDataEvent("Purchase Loaded " + t))
        }, e.productChanged = function(e) {
            n.UXTracking.track(new r.UXDataEvent("Purchase Product Changed " + e))
        }, e.fastFillAll = function() {
            n.UXTracking.track(new r.UXDataEvent("Purchase Marked Entries Fast Fill All"))
        }, e.fastFillSingle = function() {
            n.UXTracking.track(new r.UXDataEvent("Purchase Marked Entries Fast Fill Single"))
        }, e.clearAll = function() {
            n.UXTracking.track(new r.UXDataEvent("Purchase Marked Entries Clear All"))
        }, e.clearSingle = function() {
            n.UXTracking.track(new r.UXDataEvent("Purchase Marked Entries Clear Single"))
        }, e
    }();
    t.UXServicePurchase = i
}), define("service/ux/user-experience-service-results", ["require", "exports", "./data/user-experience-data-event", "./user-experience-tracking"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.resultsRegistration = function() {
            r.UXTracking.track(new n.UXDataEvent("ResultsRegistration"))
        }, e.checkMyTicket = function() {
            r.UXTracking.track(new n.UXDataEvent("CheckMyTicket"))
        }, e
    }();
    t.UXServiceResults = i
}), define("service/ux/user-experience-service-sec", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.secSecondChanceContinue = function(e) {
            window.digitalData.scratcheClub = {
                gameTicket: e
            }, n.UXTracking.track(new r.UXDataEvent("SECSecondChanceDrawContinue")).then(function() {
                window.digitalData.scratcheClub = null
            })
        }, e.secSecondChanceSysSubmit = function(e) {
            window.digitalData.scratcheClub = {
                gameTicket: e
            }, n.UXTracking.track(new r.UXDataEvent("SECSecondChanceDrawSysSubmit")).then(function() {
                window.digitalData.scratcheClub = null
            })
        }, e.secSecondChanceTransaction = function(e) {
            window.digitalData.scratcheClub = {
                secondChanceDrawTransaction: e
            }, n.UXTracking.track(new r.UXDataEvent("SECSecondChanceDrawTransaction")).then(function() {
                window.digitalData.scratcheClub = null
            })
        }, e.secSecondChanceErrors = function(e, t) {
            window.digitalData.errors = {
                component: e.componentName,
                errorMessage: e.errorMessage
            }, window.digitalData.scratcheClub = {
                gameTicket: t
            }, n.UXTracking.track(new r.UXDataEvent("errorEvent"))
        }, e.secSecondChanceEntryDelete = function(e) {
            window.digitalData.scratcheClub = {
                gameTicket: e
            }, n.UXTracking.track(new r.UXDataEvent("SECSecondChanceEntriesDelete"))
        }, e.secUpgradeInitiate = function() {
            n.UXTracking.track(new r.UXDataEvent("SECLokiUpgradeInit"))
        }, e.secUpgradeCanceled = function() {
            n.UXTracking.track(new r.UXDataEvent("SECLokiCancel"))
        }, e
    }();
    t.UXServiceSec = i
}), define("service/ux/user-experience-service-syndicates", ["require", "exports", "./data/user-experience-data-event", "./user-experience-tracking", "./data/user-experience-data"], function(e, t, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e() {}
        return e.syndicateCreated = function() {
            r.UXTracking.track(new n.UXDataEvent("CreateSyndicate"))
        }, e.syndicateCreateFailed = function() {
            r.UXTracking.track(new n.UXDataEvent("CreateSyndicateFail", !1))
        }, e.syndicateConfirmationLoaded = function(e) {
            var t = e.get(i.UserExperienceData.StorageKey);
            if (t) {
                var n = JSON.parse(t);
                n.syndicates && (window.digitalData.syndicates = n.syndicates)
            }
        }, e.updateSyndicatesData = function(e) {
            return window.digitalData.syndicates = e
        }, e
    }();
    t.UXServiceSyndicates = a
});
var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        function i(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            })
        }
        return new(n || (n = Promise))(function(n, a) {
            function c(e) {
                try {
                    o(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    o(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                e.done ? n(e.value) : i(e.value).then(c, s)
            }
            o((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return r([e, t])
            }
        }

        function r(n) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; o;) try {
                if (i = 1, a && (c = 2 & n[0] ? a.return : n[0] ? a.throw || ((c = a.return) && c.call(a), 0) : a.next) && !(c = c.call(a, n[1])).done) return c;
                switch (a = 0, c && (n = [2 & n[0], c.value]), n[0]) {
                    case 0:
                    case 1:
                        c = n;
                        break;
                    case 4:
                        return o.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        o.label++, a = n[1], n = [0];
                        continue;
                    case 7:
                        n = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (c = o.trys, !(c = c.length > 0 && c[c.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            o = 0;
                            continue
                        }
                        if (3 === n[0] && (!c || n[1] > c[0] && n[1] < c[3])) {
                            o.label = n[1];
                            break
                        }
                        if (6 === n[0] && o.label < c[1]) {
                            o.label = c[1], c = n;
                            break
                        }
                        if (c && o.label < c[2]) {
                            o.label = c[2], o.ops.push(n);
                            break
                        }
                        c[2] && o.ops.pop(), o.trys.pop();
                        continue
                }
                n = t.call(e, o)
            } catch (e) {
                n = [6, e], a = 0
            } finally {
                i = c = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var i, a, c, s, o = {
            label: 0,
            sent: function() {
                if (1 & c[0]) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/ux/user-experience-service-transaction", ["require", "exports", "./user-experience-tracking", "./data/user-experience-data-event", "./user-experience-service-global", "events/error-events"], function(e, t, n, r, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function() {
        function e() {}
        return e.success = function(e, t, i, a, c) {
            window.digitalData.product = e, window.digitalData.transaction = t;
            var s = [new r.UXDataEvent("TicketSold")];
            return !0 === i && s.push(new r.UXDataEvent("FavouriteCreated")), !0 === e.productInfo.subscription && (!0 === a ? s.push(new r.UXDataEvent("SubscriptionCreated", !1, c && c.errorInfo ? c.errorInfo.SupportErrorReference : null)) : s.push(new r.UXDataEvent("SubscriptionCreated"))), n.UXTracking.track.apply(n.UXTracking, s).then(function() {
                window.digitalData.product = null
            })
        }, e.failed = function(e, t, n, r) {
            return __awaiter(this, void 0, void 0, function() {
                var c, s;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), window.digitalData.product = e, window.digitalData.transaction = t, [4, i.UXServiceGlobal.genericError(new a.ErrorEvent(n, r))];
                        case 1:
                            return c = o.sent(), window.digitalData.product = null, [2, c];
                        case 2:
                            return s = o.sent(), console.error("Failed to record error event"), [3, 3];
                        case 3:
                            return [2, null]
                    }
                })
            })
        }, e.summary = function(e) {
            return window.digitalData.transaction = e, n.UXTracking.track(new r.UXDataEvent("SalesTransaction"))
        }, e
    }();
    t.UXServiceTransaction = c
});
var __decorate = this && this.__decorate || function(e, t, n, r) {
        var i, a = arguments.length,
            c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (c = (a < 3 ? i(c) : a > 3 ? i(t, n, c) : i(t, n)) || c);
        return a > 3 && c && Object.defineProperty(t, n, c), c
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/ux/user-experience-service", ["require", "exports", "aurelia-dependency-injection", "services/tatts-event-service", "services/tatts-log", "services/user-context", "services/storage/tatts-storage", "./data/user-experience-data", "./data/user-experience-data-component", "./user-experience-service-page", "./user-experience-service-cart", "./data/user-experience-data-cart-item", "./user-experience-service-transaction", "./data/user-experience-data-transaction-item", "./data/user-experience-data-transaction", "./user-experience-service-customer", "./user-experience-service-check-my-ticket", "./user-experience-service-membership-card", "events/membership/index", "./user-experience-tracking", "./data/user-experience-data-event", "./event-to-ux-event-map", "events/user-details-updated-events", "./user-experience-user-details", "events/joinup-events", "events/ddl", "events/syndicates-events", "events/syndicates-events", "./user-experience-service-syndicates", "./user-experience-service-account", "events/sec-second-chance-draw/sec-second-chance-draw", "./user-experience-service-sec", "events/sec-second-chance-entries/sec-second-chance-entries", "events/sec-upgrade/sec-upgrade", "events/error-events", "./user-experience-service-global", "events/shopping-cart/purchase-events", "events/digital-interaction-events", "./user-experience-service-paypal", "events/paypal/index", "events/subscriptions/subscription-payment-method-updated-event"], function(e, t, n, r, i, a, c, s, o, u, d, l, p, v, f, h, g, w, b, m, y, S, U, C, k, E, T, D, _, x, X, P, M, O, j, L, A, F, I, N, R) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var q = function() {
        function e(e, t, n, r, i) {
            this.eventService = e, this.tattsStorage = t, this.userContext = n, this.tattsLog = r, this.accountServiceEvent = i
        }
        return e.prototype.initialize = function() {
            var e = this;
            window.digitalData = s.UserExperienceData.initialize(), this.accountServiceEvent.subscribeToTrackableAccountEvents(), this.subscribeToAureliaAllComposed(), this.subscribeToRemoteLocalStorageChanges(), this.subscribeToTrackableCustomerEvents(), this.subscribeToTrackableCartEvents(), this.subscribeToTrackablePurchaseEvents(), this.subscribeToTrackableCheckMyTicketEvents(), this.subscribeToTrackableUserDetailsEvents(), this.subscribeToTackableMembershipCardEvents(), this.subscribeToSyndicateEvents(), this.subscribeToSecEvents(), this.subscribeToGeneralEvents(), this.subscribeToPaypalEvents(), S.EventToUxEventMap.forEach(function(t) {
                e.eventService.subscribeT(t.event, function() {
                    return m.UXTracking.track(new y.UXDataEvent(t.uxEventName))
                })
            }), this.eventService.subscribeT(E.DigitalDataLayerEvent, function(e) {
                return m.UXTracking.track(new y.UXDataEvent(e.ddlEventName))
            })
        }, e.prototype.subscribeToAureliaAllComposed = function() {
            this.eventService.subscribe("AureliaAllComposed", "Success", function() {
                if (document.aureliaComponentRegistry)
                    for (var e = 0, t = document.aureliaComponentRegistry; e < t.length; e++) {
                        var n = t[e];
                        window.digitalData.component.push(new o.UXDataComponent(n, n))
                    }
                u.UXServicePage.pageView()
            })
        }, e.prototype.subscribeToRemoteLocalStorageChanges = function() {
            var e = this;
            this.eventService.subscribe("TattsStorageChanged", "Remote", function() {
                s.UserExperienceData.updateFromTransientInstance(e.tattsStorage)
            })
        }, e.prototype.subscribeToTrackableCartEvents = function() {
            var e = this;
            this.eventService.subscribe("CartItem", "Added", function(t) {
                !0 === t.item.isValid ? (d.UXServiceCart.updateCartSummary(t.summary), !0 === t.manuallyTriggered && d.UXServiceCart.addItem(new l.UXDataCartItem(t.item), t.summary)) : e.tattsLog.warn("UserExperienceService", "Cart Item Added could not be tracked")
            }), this.eventService.subscribe("CartItem", "FailedToAdd", function(t) {
                !0 === t.item.isValid ? (d.UXServiceCart.updateCartSummary(t.summary), !0 === t.manuallyTriggered && d.UXServiceCart.failedToAddItem(new l.UXDataCartItem(t.item), t.summary)) : e.tattsLog.warn("UserExperienceService", "Cart Item FailedToAdd could not be tracked")
            }), this.eventService.subscribe("CartItem", "Removed", function(t) {
                !0 === t.item.isValid ? (d.UXServiceCart.updateCartSummary(t.summary), !0 === t.manuallyTriggered && d.UXServiceCart.removeItem(new l.UXDataCartItem(t.item), t.summary)) : e.tattsLog.warn("UserExperienceService", "Cart Item Removed could not be tracked")
            }), this.eventService.subscribe("CartItem", "Updated", function(t) {
                !0 === t.item.isValid ? (d.UXServiceCart.updateCartSummary(t.summary), !0 === t.manuallyTriggered && d.UXServiceCart.updateItem(new l.UXDataCartItem(t.item), t.summary)) : e.tattsLog.warn("UserExperienceService", "Cart Item Updated could not be tracked")
            })
        }, e.prototype.subscribeToTrackablePurchaseEvents = function() {
            var e = this;
            this.eventService.subscribeT(A.CartPurchaseItemEvent, function(t) {
                var n = t.ddlEventData;
                !0 === n.item.isValid ? p.UXServiceTransaction.success(new v.UXDataTransactionItem(n.item, n.transactionId), new f.UXDataTransaction(n.summary, n.transactionId), n.isNewFavourite, n.item.subscriptionFailed, n.item.subscriptionError) : e.tattsLog.warn("UserExperienceService", "Purchase success could not be tracked")
            }), this.eventService.subscribeT(A.CartPurchaseFailedErrorEvent, function(t) {
                var n = t.ddlEventData;
                !0 === n.item.isValid ? p.UXServiceTransaction.failed(new v.UXDataTransactionItem(n.item, n.transactionId), new f.UXDataTransaction(n.summary, n.transactionId), t.component, t.errorMessage) : e.tattsLog.warn("UserExperienceService", "Purchase fail could not be tracked")
            }), this.eventService.subscribeT(A.CartPurchaseTransactionCompletedEvent, function(e) {
                var t = e.ddlEventData;
                d.UXServiceCart.updateCartSummary(t.cartSummary), p.UXServiceTransaction.summary(new f.UXDataTransaction(t.summary, t.transactionId, t.purchasedItems))
            })
        }, e.prototype.getCustomerType = function(e) {
            return e.Lotteries.IsLoggedIn ? "Lotteries" : e.ScratcheClub && e.ScratcheClub.IsLoggedIn ? "ScratcheClub" : ""
        }, e.prototype.subscribeToTrackableCustomerEvents = function() {
            var e = this;
            this.eventService.subscribe("Login", "Success", function(t) {
                var n = t.Lotteries.IsLoggedIn ? t.Lotteries.LoginDetails.PlayerCardNumber : null,
                    r = (100 * t.Balance.LotteriesSpendableBalance - 100 * t.Balance.LotteriesVoucherBalance) / 100,
                    i = t.Lotteries.IsLoggedIn ? t.Lotteries.LoginDetails.Jurisdiction : t.Jurisdiction,
                    a = e.getCustomerType(t);
                h.UXServiceCustomer.login(t.CustomerReference, t.IdentityVerified, n, !1, !1, !1, r, t.Balance.LotteriesVoucherBalance, t.Balance.LotteriesSpendableBalance, i, a)
            }), this.eventService.subscribe("Login", "Failure", function(e) {
                var t = (e.ErrorInfo || e.Lotteries.LoginDetails.ErrorInfo).ErrorNo;
                h.UXServiceCustomer.loginFailed(t)
            }), this.eventService.subscribe("Balance", "Updated", function(e) {
                h.UXServiceCustomer.updateBalance(e.accountBalance, e.accountRewards, e.accountTotalBalance)
            }), this.eventService.subscribe("Session", "Logout", function() {
                h.UXServiceCustomer.logout()
            }), this.eventService.subscribeT(k.JoinupEvent, function(e) {
                h.UXServiceCustomer.joinUpSuccess(e)
            }), this.eventService.subscribeT(k.JoinupFailedEvent, function(e) {
                h.UXServiceCustomer.joinUpFailed(e)
            })
        }, e.prototype.subscribeToTrackableCheckMyTicketEvents = function() {
            this.eventService.subscribe("CheckMyTicket", "TicketNotFound", function(e) {
                g.UXServiceCheckMyTicket.ticketNotFound(e)
            }), this.eventService.subscribe("CheckMyTicket", "ServerError", function(e) {
                var t = e ? e.checkTicketData : null;
                g.UXServiceCheckMyTicket.serverError(e.supportErrorReference, t)
            }), this.eventService.subscribe("CheckMyTicket", "Success", function(e) {
                g.UXServiceCheckMyTicket.success(e)
            })
        }, e.prototype.subscribeToTrackableUserDetailsEvents = function() {
            this.eventService.subscribeT(U.CommunicationPreferencesUpdatedEvent, function(e) {
                C.UXUserDetails.updateCommPreferences(e)
            })
        }, e.prototype.subscribeToTackableMembershipCardEvents = function() {
            this.eventService.subscribeT(b.MembershipCardBarcodeShowEvent, function(e) {
                w.UXServiceMembershipCard.showBarcode(e.cardNumber)
            })
        }, e.prototype.subscribeToSyndicateEvents = function() {
            var e = this;
            this.eventService.subscribeT(T.SyndicateDDLInfoChangedEvent, function(e) {
                _.UXServiceSyndicates.updateSyndicatesData(e.data)
            }), this.eventService.subscribeT(D.SyndicateCreatedEvent, function(e) {
                _.UXServiceSyndicates.syndicateCreated()
            }), this.eventService.subscribeT(T.SyndicateConfirmationLoadedEvent, function(t) {
                _.UXServiceSyndicates.syndicateConfirmationLoaded(e.tattsStorage)
            })
        }, e.prototype.subscribeToSecEvents = function() {
            this.eventService.subscribeT(X.SECSecondChanceDrawContinue, function(e) {
                P.UXServiceSec.secSecondChanceContinue(e.data)
            }), this.eventService.subscribeT(X.SECSecondChanceDrawSysSubmit, function(e) {
                P.UXServiceSec.secSecondChanceSysSubmit(e.data)
            }), this.eventService.subscribeT(X.SECSecondChanceDrawTransaction, function(e) {
                P.UXServiceSec.secSecondChanceTransaction(e.data)
            }), this.eventService.subscribeT(X.SECSecondChanceDrawError, function(e) {
                P.UXServiceSec.secSecondChanceErrors(e.errorData, e.sysCodeData)
            }), this.eventService.subscribeT(M.SECSecondChanceEntriesDelete, function(e) {
                P.UXServiceSec.secSecondChanceEntryDelete(e.data)
            }), this.eventService.subscribeT(O.SecUpgradeInitiateEvent, function(e) {
                P.UXServiceSec.secUpgradeInitiate()
            }), this.eventService.subscribeT(O.SecUpgradeCancelEvent, function(e) {
                P.UXServiceSec.secUpgradeCanceled()
            })
        }, e.prototype.subscribeToPaypalEvents = function() {
            var e = this;
            this.eventService.subscribeT(N.PaypalPreSignupClickEvent, function(e) {
                I.UXServicePaypal.PaypalPreSignupClick()
            }), this.eventService.subscribeT(N.PaypalPreSignupClickFailedEvent, function(e) {
                I.UXServicePaypal.PaypalPreSignupClickFailed(e)
            }), this.eventService.subscribeT(N.PaypalConnectEvent, function(t) {
                I.UXServicePaypal.PaypalConnect(t, e.userContext)
            }), this.eventService.subscribeT(N.PaypalConnectFailedEvent, function(t) {
                I.UXServicePaypal.PaypalConnectFailed(t, e.userContext)
            }), this.eventService.subscribeT(N.PaypalDisconnectEvent, function(t) {
                I.UXServicePaypal.PaypalDisconnect(e.userContext)
            }), this.eventService.subscribeT(N.PaypalDisconnectFailedEvent, function(t) {
                I.UXServicePaypal.PaypalDisconnectFailed(t, e.userContext)
            }), this.eventService.subscribeT(R.SubscriptionPaymentMethodUpdatedEvent, function(t) {
                I.UXServicePaypal.SubscriptionPaymentMethodUpdated(t, e.userContext)
            }), this.eventService.subscribeT(R.SubscriptionPaymentMethodUpdatedFailedEvent, function(t) {
                I.UXServicePaypal.SubscriptionPaymentMethodUpdatedFailed(t, e.userContext)
            }), this.eventService.subscribeT(N.PaypalDepositFailureEvent, function(t) {
                I.UXServicePaypal.PaypalDepositFailure(t, e.userContext)
            })
        }, e.prototype.subscribeToGeneralEvents = function() {
            this.eventService.subscribeT(j.ErrorEvent, function(e) {
                L.UXServiceGlobal.genericError(e)
            }), this.eventService.subscribeT(F.DigitalInteractionEvent, function(e) {
                L.UXServiceGlobal.genericDigitalInteraction(e)
            })
        }, e = __decorate([n.autoinject, __metadata("design:paramtypes", [r.TattsEvent, c.TattsStorage, a.UserContext, i.TattsLog, x.UXServiceAccount])], e)
    }();
    t.UserExperienceService = q
}), define("service/ux/user-experience-tracking", ["require", "exports", "./data/user-experience-data"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.track = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new Promise(function(t, r) {
                try {
                    e.forEach(function(e) {
                        window.digitalData && (window.digitalData.event = [e], n.UserExperienceData.persist());
                        var t = !1 === e.eventSuccess ? e.eventName + "Fail" : e.eventName;
                        if (console.debug("----- SATELLITE TRACKING :: " + t + " -----"), Object.assign) {
                            var r = Object.assign({}, window.digitalData);
                            console.debug(r), window.digitalDataLastTracked = r
                        }
                        void 0 !== window._satellite && (window._satellite.track(t), console.debug("----- SATELLITE TRACKED  :: " + t + " -----"))
                    }), t(e)
                } catch (e) {
                    r(e)
                }
            })
        }, e
    }();
    t.UXTracking = r
});
var __assign = this && this.__assign || function() {
    return __assign = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }, __assign.apply(this, arguments)
};
define("service/ux/user-experience-user-details", ["require", "exports", "./data/user-experience-data-event", "./user-experience-tracking"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.updateCommPreferences = function(e) {
            window.digitalData.customer = __assign(__assign({}, window.digitalData.customer || {}), {
                permitEmail: e.permitEmail,
                permitSMS: e.permitSMS,
                permitMail: e.permitMail
            }), r.UXTracking.track(new n.UXDataEvent("CommsPreferencesUpdate"))
        }, e
    }();
    t.UXUserDetails = i
}), define("service/ux/data/quantity", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("service/ux/data/user-experience-data-account-deposit", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, n, r, i) {
            this.depositAmount = e, this.balanceAfter = t, this.balanceBefore = n, this.cardType = r, this.depositLocation = i
        }
        return e
    }();
    t.UXDataAccountDeposit = n
}), define("service/ux/data/user-experience-data-account-spend-limit", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this.spendLimitIncrease = e, this.spendLimitChange = t
        }
        return e
    }();
    t.UXDataAccountSpendLimit = n
}), define("service/ux/data/user-experience-data-account-withdrawal", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, n, r, i) {
            this.withdrawlAmount = e, this.balanceafter = t, this.balancebefore = n, this.referenceNo = r, this.cardType = i
        }
        return e
    }();
    t.UXDataAccountWithdrawal = n
}), define("service/ux/data/user-experience-data-account", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e
    }();
    t.UXDataAccount = n
}), define("service/ux/data/user-experience-data-cart-item", ["require", "exports", "./user-experience-data-ticket-price"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.productInfo = {
                jurisdiction: e.jurisdiction,
                gameBrand: e.gameBrand,
                entryType: e.entryType,
                gameCount: e.gameCount,
                drawCount: e.drawCount,
                systemNumber: e.systemNumber,
                drawNo: e.drawNo,
                drawDate: e.drawDate,
                jackpotOffer: e.jackpotOffer,
                subscription: e.subscription,
                subscriptionType: e.subscriptionType,
                subscriptionSelection: e.subscriptionSelection,
                favourite: e.favourite,
                powerHit: e.isPowerHit,
                popularQuickPick: e.isPopularQuickPick
            }, this.price = new n.UXDataTicketPrice(e.ticketPrice, e.ticketCommission)
        }
        return e
    }();
    t.UXDataCartItem = r
}), define("service/ux/data/user-experience-data-cart", ["require", "exports", "./user-experience-data-price"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, r) {
            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = 0), this.price = new n.UXDataPrice(t, r), this.quantity = {
                totalItems: e
            }
        }
        return e
    }();
    t.UXDataCart = r
}), define("service/ux/data/user-experience-data-check-my-ticket", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("service/ux/data/user-experience-data-component", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this.componentID = e, this.componentName = t
        }
        return e
    }();
    t.UXDataComponent = n
}), define("service/ux/data/user-experience-data-customer", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            this.customerid = 0, this.loggedIn = !1, this.verified = !1, this.playerCardNumber = "", this.permitEmail = !1, this.permitSMS = !1, this.permitMail = !1, this.accountBalance = 0, this.accountRewards = 0, this.accountTotalBalance = 0, this.homeState = "", this.customerType = "", this.paypalConnectStep = "", this.paypalConnectStatus = !1
        }
        return e
    }();
    t.UXDataCustomer = n
}), define("service/ux/data/user-experience-data-event", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = null), this.eventName = e, this.eventSuccess = t, this.eventErrorID = n, this.eventResponse = this.eventSuccess ? "Success" : "Fail"
        }
        return e
    }();
    t.UXDataEvent = n
}), define("service/ux/data/user-experience-data-login", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            this.method = "NotLoggedIn"
        }
        return e
    }();
    t.UXDataLogin = n
}), define("service/ux/data/user-experience-data-membership-card", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e) {
            this.cardNumber = e
        }
        return e
    }();
    t.UXDataMembershipCard = n
}), define("service/ux/data/user-experience-data-page", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e
    }();
    t.UXDataPage = n
}), define("service/ux/data/user-experience-data-paypal", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e) {
            this.location = e
        }
        return e
    }();
    t.UXDataPaypalConnect = n;
    var r = function() {
        function e(e) {
            this.error = e
        }
        return e
    }();
    t.UXDataPaypalFailedEvent = r;
    var i = function() {
        function e(e) {
            this.cardType = e
        }
        return e
    }();
    t.UXDataSubscriptionChangedEvent = i;
    var a = function() {
        function e(e, t) {
            this.cardType = e, this.error = t
        }
        return e
    }();
    t.UXDataSubscriptionChangedFailedEvent = a
}), define("service/ux/data/user-experience-data-price", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            void 0 === e && (e = 0), void 0 === t && (t = 0), this.totalPrice = e, this.totalCommission = t
        }
        return e
    }();
    t.UXDataPrice = n
}), define("service/ux/data/user-experience-data-registration", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, n, r, i, a, c, s, o, u, d) {
            this.date = e, this.time = t, this.secUpgrade = n, this.wagUpgrade = r, this.location = i, this.triggerOrigin = a, this.linkedCard = c, this.spendLimit = s, this.linkedCardNumber = o, this.linkedCardJurisdiction = u, this.spendLimitAmt = d
        }
        return e
    }();
    t.UXDataRegistration = n
}), define("service/ux/data/user-experience-data-ticket-price", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this.ticketPrice = e, this.ticketCommission = t
        }
        return e
    }();
    t.UXDataTicketPrice = n
}), define("service/ux/data/user-experience-data-transaction-item", ["require", "exports", "./user-experience-data-ticket-price"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this.productInfo = {
                jurisdiction: e.jurisdiction,
                gameBrand: e.gameBrand,
                entryType: e.entryType,
                gameCount: e.gameCount,
                drawCount: e.drawCount,
                systemNumber: e.systemNumber,
                drawNo: e.drawNo,
                drawDate: e.drawDate,
                jackpotOffer: e.jackpotOffer,
                subscription: e.subscription,
                subscriptionType: e.subscriptionType,
                subscriptionSelection: e.subscriptionSelection,
                serialNumber: e.serialNumber,
                bonusTicket: e.bonusTicket,
                favourite: e.favourite,
                powerHit: e.isPowerHit,
                popularQuickPick: e.isPopularQuickPick
            }, this.price = new n.UXDataTicketPrice(e.ticketPrice, e.ticketCommission), this.transactionId = t
        }
        return e
    }();
    t.UXDataTransactionItem = r
}), define("service/ux/data/user-experience-data-transaction", ["require", "exports", "./user-experience-data-price"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, r) {
            this.price = new n.UXDataPrice(e.totalPrice, e.totalCommission), this.transactionId = t, this.failedTickets = e.failed, this.bonusTickets = e.bonuses, r && (this.quantity = {
                totalItems: e.purchased + e.failed,
                uniqueProductCount: this.getUniqueProductsCount(r),
                uniqueProducts: this.getUniqueProducts(r)
            })
        }
        return e.prototype.getUniqueProductsFromTransaction = function(e) {
            return e.map(function(e) {
                return e.item.productId
            }).filter(function(e, t, n) {
                return n.indexOf(e) === t
            }).sort()
        }, e.prototype.getUniqueProductsCount = function(e) {
            return this.getUniqueProductsFromTransaction(e).length
        }, e.prototype.getUniqueProducts = function(e) {
            return this.getUniqueProductsFromTransaction(e).join(", ")
        }, e
    }();
    t.UXDataTransaction = r
}), define("service/ux/data/user-experience-data", ["require", "exports", "aurelia-dependency-injection", "services/storage/tatts-storage", "./user-experience-data-page", "./user-experience-data-customer", "./user-experience-data-cart", "./user-experience-data-login", "moment"], function(e, t, n, r, i, a, c, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e() {
            this.page = new i.UXDataPage, this.component = [], this.login = new s.UXDataLogin, this.event = [], this.customer = new a.UXDataCustomer, this.cart = new c.UXDataCart
        }
        return Object.defineProperty(e, "StorageKey", {
            get: function() {
                return "UserExperienceData"
            },
            enumerable: !0,
            configurable: !0
        }), e.persist = function() {
            var t = (new n.Container).get(r.TattsStorage);
            window.digitalData.lastStoredAt = o().valueOf(), t.set(e.StorageKey, JSON.stringify(window.digitalData))
        }, e.isWithinAcceptableTimePeriod = function(e, t) {
            if (!t) return !1;
            return e - t < 108e5
        }, e.initialize = function() {
            var t = (new n.Container).get(r.TattsStorage),
                i = new e,
                a = t.get(e.StorageKey);
            if (a) {
                var c = JSON.parse(a);
                !0 === e.isWithinAcceptableTimePeriod(o().valueOf(), c.lastStoredAt) && (i.customer = c.customer, i.cart = c.cart, i.login = c.login)
            }
            return i
        }, e.updateFromTransientInstance = function(t) {
            var n = t.get(e.StorageKey);
            if (n) {
                var r = JSON.parse(n);
                window.digitalData.customer = r.customer, window.digitalData.cart = r.cart, window.digitalData.lastStoredAt = r.lastStoredAt, window.digitalData.login = r.login
            }
        }, e
    }();
    t.UserExperienceData = u
}), define("text!ux-service-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/ux-service/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});