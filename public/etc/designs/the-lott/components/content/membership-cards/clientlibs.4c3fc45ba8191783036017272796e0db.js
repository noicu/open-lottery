/* membership-cards-prod-aem-v1.2.68 */
define("text!service/membership-cards/activate-your-card/activate-your-card-modal.html", ["module"], function(e) {
    e.exports = '<template><require from="./activate-your-card-modal.css"></require><require from="../common-styles/membership-modals.css"></require><require from="elements/tatts-dialog/tatts-dialog"></require><require from="elements/radio-button/radio-button"></require><require from="elements/loading-button/loading-button"></require><tatts-dialog class="membership-modal activate-your-card-modal ${membershipNameCssClass} modal-with-membership-card-in-header" title="Activate your card" error-message.bind="errorMessage"><section class="select-membership" data-test-id="select-membership"><div class="membership-options"><div repeat.for="option of options" class="option ${option === selectedOption ? \'selected\' : \'\'}"><div class="option-heading">${option.years} Year Membership</div><div class="option-details"><div class="option-price">${option.price | formatCurrency}</div><radio-button name="membershipOption" model.bind="option" checked.bind="selectedOption"></radio-button></div></div></div><input type="checkbox" name="physical-card-opt-in" id="opt-in-chcekbox" checked.bind="physicalCardOptIn" data-test-id="physical-card-checkbox"> <label for="opt-in-chcekbox" class="opt-in-label">Send me a physical card to use in-store to my <a href="/account/settings" target="_blank">postal address</a>.</label><p class="fine-print">By selecting the button below, your ${membershipDurationYears} Year ${membershipName} membership will be purchased and ${membershipDurationPrice | formatCurrency} will be debited from your online account balance.</p><loading-button class="purchase-button" button-clicked.call="purchase()">Buy ${membershipDurationYearsTextPluralised} - ${membershipDurationPrice | formatCurrency}</loading-button></section></tatts-dialog></template>'
}), define("text!service/membership-cards/link-an-existing-card/link-an-existing-card-modal.html", ["module"], function(e) {
    e.exports = '<template><require from="./link-an-existing-card-modal.css"></require><require from="elements/tatts-dialog/tatts-dialog"></require><require from="elements/loading-button/loading-button"></require><tatts-dialog title="Link an existing card" class="link-an-existing-card-modal ${membershipNameCssClass} modal-with-membership-card-in-header" error-header.bind="errorHeader" error-message.bind="errorMessage"><section class="link-card"><p class="instructions">If you have an existing ${membershipNameCardText}, please enter your card number so that we can link it to your online account. Doing so will allow you to view your offline (retail store) purchases and prizes online.</p><div class="card-number-container validation-container"><label for="cardNumber">${membershipNameCardText} number</label> <input id="cardNumber" type="text" value.bind="cardNumber & validate" maxlength="11" change.delegate="setCardNumber($event.target.value)" keyup.delegate="setCardNumber($event.target.value)" data-test-id="card-number-input"></div><loading-button class="link-card-button" button-clicked.call="linkCard()" data-test-id="link-existing-card-button">Link card</loading-button></section></tatts-dialog></template>'
}), define("text!service/membership-cards/renew-your-card/renew-your-card-modal.html", ["module"], function(e) {
    e.exports = '<template><require from="../common-styles/membership-modals.css"></require><require from="elements/tatts-dialog/tatts-dialog"></require><require from="elements/radio-button/radio-button"></require><require from="elements/loading-button/loading-button"></require><tatts-dialog class="membership-modal renew-your-card-modal ${membershipNameCssClass} modal-with-membership-card-in-header" title="Renew your card" error-message.bind="errorMessage"><section class="select-membership" data-test-id="select-membership"><div class="membership-options"><div repeat.for="option of options" class="option ${option === selectedOption ? \'selected\' : \'\'}"><div class="option-heading">${option.years} Year Membership</div><div class="option-details"><div class="option-price">${option.price | formatCurrency}</div><radio-button name="membershipOption" model.bind="option" checked.bind="selectedOption"></radio-button></div></div></div><p class="fine-print">By selecting the button below, your ${membershipName} membership will be renewed for an additional ${membershipDurationYearsTextPluralised} and ${membershipDurationPrice | formatCurrency} will be debited from your online account balance.</p><loading-button class="purchase-button" button-clicked.call="purchase()">Renew for ${membershipDurationYearsTextPluralised} - ${membershipDurationPrice | formatCurrency}</loading-button></section></tatts-dialog></template>'
});
var __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/activate-card-service", ["require", "exports", "aurelia-framework", "services/tatts-http", "services/user-context", "errors/error-with-tatts-svc-error-info", "services/tatts-log", "services/tatts-event-service", "events/membership/index"], function(e, t, r, n, i, a, o, s, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l;
    ! function(e) {
        e.ActivateCardSucceeded = "ActivateCardSucceeded", e.ActivateByOptCardSucceeded = "ActivateByOptCardSucceeded"
    }(l = t.ActivateReturnKind || (t.ActivateReturnKind = {}));
    var u;
    ! function(e) {
        e.ReplacementSuccess = "ReplacementSuccess", e.ReplacementFailure = "ReplacementFailure"
    }(u = t.ReplaceReturnKind || (t.ReplaceReturnKind = {}));
    var d = function(e) {
            return 26 === e.SystemId && 128 === e.ErrorNo
        },
        p = function() {
            function e(e, t, r, n) {
                this.tattsHttp = e, this.userContext = t, this.tattsLog = r, this.events = n
            }
            return e.prototype.activateCard = function(e, t, r) {
                return void 0 === t && (t = !1), void 0 === r && (r = 0), __awaiter(this, void 0, void 0, function() {
                    var n, i, o, s;
                    return __generator(this, function(p) {
                        switch (p.label) {
                            case 0:
                                return [4, this.tattsHttp.fetchT("sales/vmax/web/account/lotto/cards/renew", {
                                    CustomerSession: {
                                        SessionId: this.userContext.sessionId
                                    },
                                    Years: e.years
                                })];
                            case 1:
                                if (n = p.sent(), !n.Success) {
                                    if (d(n.ErrorInfo)) return [2, {
                                        kind: "InsufficientFunds",
                                        years: e.years,
                                        requiredBalance: e.price,
                                        cardId: r
                                    }];
                                    throw new a.ErrorWithTattsSvcErrorInfo(n.ErrorInfo)
                                }
                                this.events.publishT(t ? new c.MembershipCardActivatedEvent : new c.MembershipCardRenewedEvent), p.label = 2;
                            case 2:
                                return p.trys.push([2, 4, , 5]), [4, this.userContext.refreshBalance()];
                            case 3:
                                return p.sent(), [3, 5];
                            case 4:
                                return i = p.sent(), this.tattsLog.error("ActivateCardService - activateCard - refreshBalance", "Caught {error}", [i]), [3, 5];
                            case 5:
                                return o = l.ActivateCardSucceeded, r ? [4, this.replaceCard(r)] : [3, 7];
                            case 6:
                                s = p.sent(), s === u.ReplacementFailure && (o = u.ReplacementFailure), p.label = 7;
                            case 7:
                                return [2, {
                                    kind: o,
                                    purchaseTime: n.PurchaseTime,
                                    totalCost: n.TotalCost,
                                    accountBalanceAfter: n.AccountBalanceAfter,
                                    accountBalanceBefore: n.AccountBalanceBefore,
                                    totalCommission: n.TotalCommission
                                }]
                        }
                    })
                })
            }, e.prototype.replaceCard = function(e) {
                return __awaiter(this, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.tattsHttp.fetchT("sales/vmax/web/account/lotto/cards/replace", {
                                    CustomerSession: {
                                        SessionId: this.userContext.sessionId
                                    },
                                    CardAccountId: e
                                })];
                            case 1:
                                return t = r.sent(), t && t.Success ? [2, u.ReplacementSuccess] : (this.tattsLog.error("ActivateCardService - replaceCard", "Caught {error}", t.ErrorInfo), [2, u.ReplacementFailure])
                        }
                    })
                })
            }, e.prototype.activateCardByOpt = function(e, t, r) {
                return void 0 === t && (t = !1), void 0 === r && (r = 0), __awaiter(this, void 0, void 0, function() {
                    var n, i, o;
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, this.tattsHttp.fetchT("sales/vmax/web/account/lotto/cards/renewbyopt", {
                                    CustomerSession: {
                                        SessionId: this.userContext.sessionId
                                    },
                                    Years: e.years,
                                    CardAccountId: r
                                })];
                            case 1:
                                if (n = s.sent(), !n.Success) throw this.tattsLog.error("ActivateCardService - activateCardByOpt", "Caught {error}", n.ErrorInfo), new a.ErrorWithTattsSvcErrorInfo(n.ErrorInfo);
                                if (!n.RenewLotteriesCardsResponse.Success) {
                                    if (d(n.RenewLotteriesCardsResponse.ErrorInfo)) return [2, {
                                        kind: "InsufficientFunds",
                                        years: e.years,
                                        requiredBalance: e.price,
                                        cardId: r
                                    }];
                                    throw this.tattsLog.error("ActivateCardService - activateCardByOpt - RenewLotteriesCardsResponse", "Caught {error}", n.RenewLotteriesCardsResponse.ErrorInfo), new a.ErrorWithTattsSvcErrorInfo(n.RenewLotteriesCardsResponse.ErrorInfo)
                                }
                                this.events.publishT(t ? new c.MembershipCardActivatedEvent : new c.MembershipCardRenewedEvent), s.label = 2;
                            case 2:
                                return s.trys.push([2, 4, , 5]), [4, this.userContext.refreshBalance()];
                            case 3:
                                return s.sent(), [3, 5];
                            case 4:
                                return i = s.sent(), this.tattsLog.error("ActivateCardService - activateCardByOpt - refreshBalance", "Caught {error}", [i]), [3, 5];
                            case 5:
                                return o = l.ActivateByOptCardSucceeded, n.ReplaceLotteriesCardResponse.Success || (this.tattsLog.error("ActivateCardService - activateCardByOpt - ReplaceLotteriesCardResponse", "Caught {error}", n.ReplaceLotteriesCardResponse.ErrorInfo), o = u.ReplacementFailure), [2, {
                                    kind: o,
                                    purchaseTime: n.RenewLotteriesCardsResponse.PurchaseTime,
                                    totalCost: n.RenewLotteriesCardsResponse.TotalCost,
                                    accountBalanceAfter: n.RenewLotteriesCardsResponse.AccountBalanceAfter,
                                    accountBalanceBefore: n.RenewLotteriesCardsResponse.AccountBalanceBefore,
                                    totalCommission: n.RenewLotteriesCardsResponse.TotalCommission
                                }]
                        }
                    })
                })
            }, e = __decorate([r.autoinject, __metadata("design:paramtypes", [n.TattsHttp, i.UserContext, o.TattsLog, s.default])], e)
        }();
    t.ActivateCardService = p
});
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/handle-insufficient-funds-upon-activation", ["require", "exports", "service/credit-card-deposit/credit-card-dialog-service", "services/tatts-dialog-service", "errors/error-with-tatts-svc-error-info"], function(e, t, r, n, i) {
    "use strict";
    var a = this;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleInsufficientFunds = function(e, t, o, s, c, l, u) {
        return void 0 === u && (u = !1), __awaiter(a, void 0, void 0, function() {
            var a, u, d, p, h, f, m;
            return __generator(this, function(b) {
                switch (b.label) {
                    case 0:
                        return [4, l.refreshBalance()];
                    case 1:
                        return b.sent(), a = l.accountTotalBalance, u = e - a, [4, s.showAddEditDepositCardDialog(u)];
                    case 2:
                        if (d = b.sent(), p = null === d) return [2, new n.DialogCancelled];
                        if (d instanceof r.DialogWasClosedAfterAccountSuspensionMessage) throw new Error("Unable to add funds because your account has been suspended.");
                        if (h = d, !h.response.Success) throw f = h.response.ErrorInfo, new i.ErrorWithTattsSvcErrorInfo(f);
                        return o ? [4, c.activateCardByOpt({
                            years: t,
                            price: e
                        }, !0, o)] : [3, 4];
                    case 3:
                        return m = b.sent(), [3, 6];
                    case 4:
                        return [4, c.activateCard({
                            years: t,
                            price: e
                        }, !0, o)];
                    case 5:
                        m = b.sent(), b.label = 6;
                    case 6:
                        if ("InsufficientFunds" === m.kind) throw new Error("Failed to ensure sufficient funds.");
                        return [2, m]
                }
            })
        })
    }
}), define("service/membership-cards/index", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = function(e) {
        e.aurelia.use.plugin("layout-base").plugin("aurelia-validation").plugin("aurelia-dialog", function(e) {
            e.useDefaults()
        }).plugin("service/credit-card-deposit/index")
    }
});
var __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/link-card-service", ["require", "exports", "aurelia-framework", "services/tatts-http", "services/user-context", "errors/error-with-tatts-svc-error-info", "services/tatts-event-service", "events/membership/index"], function(e, t, r, n, i, a, o, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(e, t, r) {
            this.tattsHttp = e, this.userContext = t, this.events = r
        }
        return e.prototype.linkCard = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.tattsHttp.fetchT("sales/vmax/web/account/lotto/cards/link", {
                                CustomerSession: {
                                    SessionId: this.userContext.sessionId
                                },
                                FmtCardNumber: e.cardNumber
                            })];
                        case 1:
                            if (t = r.sent(), !t.Success) throw new a.ErrorWithTattsSvcErrorInfo(t.ErrorInfo);
                            return this.events.publishT(new s.MembershipCardLinkExistingEvent), [2]
                    }
                })
            })
        }, e = __decorate([r.autoinject, __metadata("design:paramtypes", [n.TattsHttp, i.UserContext, o.default])], e)
    }();
    t.LinkCardService = c
});
var __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/list-card-service", ["require", "exports", "aurelia-framework", "services/tatts-http", "services/user-context", "errors/error-with-tatts-svc-error-info"], function(e, t, r, n, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            this.http = e, this.userContext = t
        }
        return e.prototype.getLinkedCards = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = {
                                CustomerSession: {
                                    SessionId: this.userContext.sessionId
                                }
                            }, [4, this.http.fetch("sales/vmax/web/account/lotto/cards/linked", {
                                method: "POST",
                                body: JSON.stringify(e)
                            })];
                        case 1:
                            if (t = r.sent(), !t.Success) throw new a.ErrorWithTattsSvcErrorInfo(t.ErrorInfo);
                            return [2, t.AccountCards || []]
                    }
                })
            })
        }, e = __decorate([r.autoinject, __metadata("design:paramtypes", [n.default, i.default])], e)
    }();
    t.ListCardService = o
});
var __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/membership-card-modals-service", ["require", "exports", "./link-an-existing-card/link-an-existing-card-modal", "./activate-your-card/activate-your-card-modal", "aurelia-framework", "services/tatts-dialog-service", "./activate-card-service", "service/credit-card-deposit/credit-card-dialog-service", "./handle-insufficient-funds-upon-activation", "./renew-your-card/renew-your-card-modal", "services/user-context", "services/tatts-configuration"], function(e, t, r, n, i, a, o, s, c, l, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function() {
        function e(e, t, r, n, i) {
            this.tattsDialogService = e, this.creditCardDialogService = t, this.activateCardService = r, this.userContext = n, this.config = i
        }
        return e.prototype.openActivateYourCard = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, this.openActivateOrRenewYourCard(n.ActivateYourCardModal)]
                })
            })
        }, e.prototype.openRenewYourCard = function() {
            return this.openActivateOrRenewYourCard(l.RenewYourCardModal)
        }, e.prototype.openActivateOrRenewYourCard = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.tattsDialogService.showDialog(e)];
                        case 1:
                            return t = r.sent(), t instanceof a.DialogCancelled ? [2, t] : "InsufficientFunds" !== t.kind ? [3, 3] : [4, c.handleInsufficientFunds(t.requiredBalance, t.years, t.cardId, this.creditCardDialogService, this.activateCardService, this.userContext)];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            return [2, t]
                    }
                })
            })
        }, e.prototype.openLinkAnExistingCard = function() {
            return this.tattsDialogService.showDialog(r.LinkAnExistingCardModal)
        }, e = __decorate([i.autoinject, __metadata("design:paramtypes", [a.TattsDialogService, s.CreditCardDialogService, o.ActivateCardService, u.UserContext, d.TattsConfiguration])], e)
    }();
    t.MembershipCardModalsService = p
}), define("service/membership-cards/membership-options", ["require", "exports", "tatts-api/idata/lotteries-company"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getOptionsForCompany = function(e) {
        switch (e) {
            case r.LotteriesCompany.GoldenCasket:
                return {
                    membershipName: "Winners Circle",
                    cssClass: "winners-circle"
                };
            case r.LotteriesCompany.SALotteries:
                return {
                    membershipName: "Easiplay Club",
                    cssClass: "easiplay-club"
                };
            case r.LotteriesCompany.NSWLotteries:
                return {
                    membershipName: "Players Club",
                    cssClass: "players-club"
                };
            case r.LotteriesCompany.NTLotteries:
            case r.LotteriesCompany.Tattersalls:
                return {
                    membershipName: "Tatts Card",
                    cssClass: "tatts-card"
                }
        }
    }
});
var __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/membership-periods-service", ["require", "exports", "aurelia-framework", "services/tatts-http", "services/tatts-log"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e() {}
        return e
    }();
    t.GetRenewPeriodsRequest = a;
    var o = function() {
        function e(e, t) {
            this.http = e, this.log = t, this.url = "sales/vmax/web/data/lotto/cards/periods"
        }
        return e.prototype.getRenewalOptions = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.getPredefinedRenewalOptions(e)];
                        case 1:
                            return t = n.sent(), r = t.map(function(e) {
                                return {
                                    years: e.NumberOfYears,
                                    price: e.Cost
                                }
                            }), [2, Promise.resolve(r)]
                    }
                })
            })
        }, e.prototype.getPredefinedRenewalOptions = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return e ? (t = {
                                CompanyId: e
                            }, [4, this.http.fetch(this.url, {
                                method: "POST",
                                body: JSON.stringify(t)
                            })]) : [2, Promise.resolve({})];
                        case 1:
                            return r = n.sent(), [2, r.RenewPeriods]
                    }
                })
            })
        }, e = __decorate([r.autoinject, __metadata("design:paramtypes", [n.TattsHttp, i.TattsLog])], e)
    }();
    t.MembershipPeriodsService = o
});
var __assign = this && this.__assign || Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    },
    __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/activate-your-card/activate-your-card-modal", ["require", "exports", "aurelia-framework", "services/user-context", "../activate-card-service", "aurelia-dialog", "errors/error-with-tatts-svc-error-info", "services/tatts-format", "services/tatts-log", "../membership-periods-service", "../membership-options", "../list-card-service", "services/tatts-configuration"], function(e, t, r, n, i, a, o, s, c, l, u, d, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var h = function() {
        function e(e, t, r, n, i, a, o) {
            this.userContext = e, this.activateCardService = t, this.dialogController = r, this.periodsService = n, this.cardService = i, this.config = a, this.log = o, this.options = [], this.physicalCardOptIn = !1
        }
        return e.prototype.activate = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.setupOptions()];
                        case 1:
                            return e.sent(), [2]
                    }
                })
            })
        }, e.prototype.setupOptions = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, r, n, i;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]), [4, this.periodsService.getRenewalOptions(this.userContext.jurisdictionCompany)];
                        case 1:
                            return e = a.sent(), this.options = e.map(function(e, t) {
                                return __assign({}, e, {
                                    selected: 0 === t
                                })
                            }), this.selectedOption = this.options[0], [3, 3];
                        case 2:
                            return t = a.sent(), this.handleError(new Error("An error has occurred...")), this.log.error("Membership Activate Dialog", t), [3, 3];
                        case 3:
                            return r = u.getOptionsForCompany(this.userContext.jurisdictionCompany), n = r.membershipName, i = r.cssClass, this.membershipName = n, this.membershipNameCssClass = i, [2]
                    }
                })
            })
        }, e.prototype.purchase = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, r, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 6, , 7]), e = void 0, [4, this.cardService.getLinkedCards()];
                        case 1:
                            return t = i.sent(), r = t ? t[0].AccountId : 0, this.physicalCardOptIn ? [4, this.activateCardService.activateCardByOpt(this.selectedOption, !0, r)] : [3, 3];
                        case 2:
                            return e = i.sent(), [3, 5];
                        case 3:
                            return [4, this.activateCardService.activateCard(this.selectedOption, !0)];
                        case 4:
                            e = i.sent(), i.label = 5;
                        case 5:
                            return this.dialogController.ok(e), [3, 7];
                        case 6:
                            return n = i.sent(), this.handleError(n), [3, 7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, e.prototype.handleError = function(e) {
            var t = o.ErrorWithTattsSvcErrorInfo.coalesce(e);
            t ? this.displayErrorMessage(t.errorInfo.DisplayMessage) : this.displayErrorMessage(e.message || "An error has occurred...")
        }, e.prototype.displayErrorMessage = function(e) {
            this.errorMessage = e
        }, Object.defineProperty(e.prototype, "membershipDurationYears", {
            get: function() {
                return this.selectedOption.years
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "membershipDurationYearsTextPluralised", {
            get: function() {
                return this.selectedOption.years + " " + s.TattsFormat.Pluralise(this.selectedOption.years, "Year", "s")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "membershipDurationPrice", {
            get: function() {
                return this.selectedOption.price
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([r.computedFrom("selectedOption"), __metadata("design:type", Object), __metadata("design:paramtypes", [])], e.prototype, "membershipDurationYears", null), __decorate([r.computedFrom("selectedOption"), __metadata("design:type", Object), __metadata("design:paramtypes", [])], e.prototype, "membershipDurationYearsTextPluralised", null), __decorate([r.computedFrom("selectedOption"), __metadata("design:type", Object), __metadata("design:paramtypes", [])], e.prototype, "membershipDurationPrice", null), e = __decorate([r.autoinject, __metadata("design:paramtypes", [n.UserContext, i.ActivateCardService, a.DialogController, l.MembershipPeriodsService, d.ListCardService, p.TattsConfiguration, c.TattsLog])], e)
    }();
    t.ActivateYourCardModal = h
}), define("service/membership-cards/api/index", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    ! function(e) {
        e.Active = "Active", e.NotActive = "NotActive", e.Cancelled = "Cancelled"
    }(t.AccountCardStatus || (t.AccountCardStatus = {}))
}), define("service/membership-cards/common/sanitize-string", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SANITIZE_REGEX = /[^a-zA-Z0-9]+/gi, t.sanitizeString = function(e) {
        return e.replace(t.SANITIZE_REGEX, "")
    }
});
var __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/link-an-existing-card/link-an-existing-card-modal", ["require", "exports", "aurelia-framework", "aurelia-dialog", "aurelia-validation", "validation/validation-renderer", "services/user-context", "./refined-error-messages", "errors/error-with-tatts-svc-error-info", "../link-card-service", "../membership-options", "services/body-dialog", "../common/sanitize-string"], function(e, t, r, n, i, a, o, s, c, l, u, d, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var h = function() {
        function e(e, t, r, n, o) {
            this.userContext = e, this.linkCardService = t, this.dialogController = r, this.validationController = n, this.bodyDialog = o, this.validationRenderer = new a.ValidationRenderer(a.ValidationPlacement.AppendInContainer), i.ValidationRules.ensure(function(e) {
                return e.cardNumber
            }).required().withMessage("Card number is required.").on(this)
        }
        return e.prototype.activate = function() {
            var e = u.getOptionsForCompany(this.userContext.jurisdictionCompany),
                t = e.membershipName,
                r = e.cssClass;
            this.membershipName = t, this.membershipNameCssClass = r
        }, e.prototype.attached = function() {
            this.validationController.addRenderer(this.validationRenderer)
        }, e.prototype.detached = function() {
            this.validationController.removeRenderer(this.validationRenderer)
        }, e.prototype.linkCard = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 3, , 4]), [4, this.validationController.validate()];
                        case 1:
                            return r.sent().valid ? [4, this.linkCardService.linkCard({
                                cardNumber: this.cardNumber.replace(/ /g, "")
                            })] : [2];
                        case 2:
                            return e = r.sent(), this.dialogController.ok(e), [3, 4];
                        case 3:
                            return t = r.sent(), this.handleError(t), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.setCardNumber = function(e) {
            this.cardNumber = p.sanitizeString(e)
        }, e.prototype.handleError = function(e) {
            var t = c.ErrorWithTattsSvcErrorInfo.coalesce(e);
            if (t) {
                var r = s.refinedErrorMessageFor(t),
                    n = r.title,
                    i = r.body;
                r.useBodyDialog ? (this.bodyDialog.openError(n, i), this.dialogController.cancel()) : (this.errorHeader = n, this.errorMessage = i)
            } else this.errorHeader = null, this.errorMessage = "An error has occurred..."
        }, Object.defineProperty(e.prototype, "membershipNameCardText", {
            get: function() {
                return this.membershipName.endsWith(" Card") ? this.membershipName : this.membershipName + " card"
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([r.computedFrom("membershipName"), __metadata("design:type", Object), __metadata("design:paramtypes", [])], e.prototype, "membershipNameCardText", null), e = __decorate([r.autoinject, __metadata("design:paramtypes", [o.UserContext, l.LinkCardService, n.DialogController, i.ValidationController, d.default])], e)
    }();
    t.LinkAnExistingCardModal = h
}), define("service/membership-cards/link-an-existing-card/refined-error-messages", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, n, i = (r = {}, r[26] = (n = {}, n[771] = {
        title: "Cancelled card",
        body: "Sorry, we cannot link this card to your account as it has been cancelled. We recommend activating a new membership card.",
        useBodyDialog: !0
    }, n[772] = {
        title: "Card already linked",
        body: "It looks like this card is already linked to your account.",
        useBodyDialog: !1
    }, n[770] = {
        title: "Issue linking card",
        body: "This card cannot be linked as the details entered are either incorrect, linked to another account or belong to a different program than your account. Please review and try again or call us on 131 868 to report this issue.",
        useBodyDialog: !1
    }, n[757] = {
        title: "Issue linking card",
        body: "This card cannot be linked as the details entered are either incorrect, linked to another account or belong to a different program than your account. Please review and try again or call us on 131 868 to report this issue.",
        useBodyDialog: !1
    }, n), r);
    t.refinedErrorMessageFor = function(e) {
        return i[e.errorInfo.SystemId] && i[e.errorInfo.SystemId][e.errorInfo.ErrorNo] || {
            title: "Uh ohhhhhh...",
            body: e.errorInfo.DisplayMessage,
            useBodyDialog: !1
        }
    }
});
var __assign = this && this.__assign || Object.assign || function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    },
    __decorate = this && this.__decorate || function(e, t, r, n) {
        var i, a = arguments.length,
            o = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
        else
            for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
        return a > 3 && o && Object.defineProperty(t, r, o), o
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? i(e.value) : new r(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(r) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (i = 1, a && (o = 2 & r[0] ? a.return : r[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, r[1])).done) return o;
                switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                    case 0:
                    case 1:
                        o = r;
                        break;
                    case 4:
                        return c.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        c.label++, a = r[1], r = [0];
                        continue;
                    case 7:
                        r = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (o = c.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                            c.label = r[1];
                            break
                        }
                        if (6 === r[0] && c.label < o[1]) {
                            c.label = o[1], o = r;
                            break
                        }
                        if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(r);
                            break
                        }
                        o[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                r = t.call(e, c)
            } catch (e) {
                r = [6, e], a = 0
            } finally {
                i = o = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var i, a, o, s, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
define("service/membership-cards/renew-your-card/renew-your-card-modal", ["require", "exports", "aurelia-framework", "services/user-context", "../membership-options", "../membership-periods-service", "../activate-card-service", "aurelia-dialog", "errors/error-with-tatts-svc-error-info", "services/tatts-format", "services/tatts-log"], function(e, t, r, n, i, a, o, s, c, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = function() {
        function e(e, t, r, n, i) {
            this.userContext = e, this.activateCardService = t, this.dialogController = r, this.periodsService = n, this.log = i, this.options = []
        }
        return e.prototype.activate = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.setupOptions()];
                        case 1:
                            return e.sent(), [2]
                    }
                })
            })
        }, e.prototype.setupOptions = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, r, n, a;
                return __generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), [4, this.periodsService.getRenewalOptions(this.userContext.jurisdictionCompany)];
                        case 1:
                            return e = o.sent(), this.options = e.map(function(e, t) {
                                return __assign({}, e, {
                                    selected: 0 === t
                                })
                            }), this.selectedOption = this.options[0], [3, 3];
                        case 2:
                            return t = o.sent(), this.handleError(new Error("An error has occurred...")), this.log.error("Membership Renewal Dialog", t), [3, 3];
                        case 3:
                            return r = i.getOptionsForCompany(this.userContext.jurisdictionCompany), n = r.membershipName, a = r.cssClass, this.membershipName = n, this.membershipNameCssClass = a, [2]
                    }
                })
            })
        }, e.prototype.purchase = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]), [4, this.activateCardService.activateCard(this.selectedOption)];
                        case 1:
                            return e = r.sent(), this.dialogController.ok(e), [3, 3];
                        case 2:
                            return t = r.sent(), this.handleError(t), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.handleError = function(e) {
            var t = c.ErrorWithTattsSvcErrorInfo.coalesce(e);
            t ? this.displayErrorMessage(t.errorInfo.DisplayMessage) : this.displayErrorMessage(e.message || "An error has occurred...")
        }, e.prototype.displayErrorMessage = function(e) {
            this.errorMessage = e
        }, Object.defineProperty(e.prototype, "membershipDurationYearsTextPluralised", {
            get: function() {
                return this.selectedOption.years + " " + l.TattsFormat.Pluralise(this.selectedOption.years, "Year", "s")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "membershipDurationPrice", {
            get: function() {
                return this.selectedOption.price
            },
            enumerable: !0,
            configurable: !0
        }), __decorate([r.computedFrom("selectedOption"), __metadata("design:type", Object), __metadata("design:paramtypes", [])], e.prototype, "membershipDurationYearsTextPluralised", null), __decorate([r.computedFrom("selectedOption"), __metadata("design:type", Object), __metadata("design:paramtypes", [])], e.prototype, "membershipDurationPrice", null), e = __decorate([r.autoinject, __metadata("design:paramtypes", [n.UserContext, o.ActivateCardService, s.DialogController, a.MembershipPeriodsService, u.TattsLog])], e)
    }();
    t.RenewYourCardModal = d
}), define("text!service/membership-cards/activate-your-card/activate-your-card-modal.css", ["module"], function(e) {
    e.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.activate-your-card-modal .select-membership > label {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  margin-bottom: 1.5rem;\n  margin-right: 0;\n  color: #444444;\n  vertical-align: top;\n  width: 256px; }\n"
}), define("text!service/membership-cards/common-styles/membership-modals.css", ["module"], function(e) {
    e.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.membership-modal .select-membership h1 {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #444444; }\n\n.membership-modal .select-membership .membership-options {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1.5rem; }\n  .membership-modal .select-membership .membership-options .option {\n    flex: 1;\n    padding-left: 0.5px;\n    padding-right: 0.5px; }\n    .membership-modal .select-membership .membership-options .option:first-child {\n      padding-left: 0; }\n    .membership-modal .select-membership .membership-options .option:last-child {\n      padding-right: 0; }\n    .membership-modal .select-membership .membership-options .option.selected .option-heading {\n      background-color: #118ACB;\n      color: #ffffff; }\n    .membership-modal .select-membership .membership-options .option.selected .option-details {\n      background-color: #E7F3F9; }\n    .membership-modal .select-membership .membership-options .option .option-heading {\n      font-size: 1rem;\n      line-height: 1.5rem;\n      background-color: #E8E8E8;\n      font-weight: 900;\n      padding: 0.5625rem;\n      text-align: center; }\n    .membership-modal .select-membership .membership-options .option .option-details {\n      background-color: #FAFAFA;\n      padding: 0.5rem 0 1rem; }\n      .membership-modal .select-membership .membership-options .option .option-details .option-price {\n        font-weight: 900;\n        text-align: center;\n        margin-bottom: 0.5rem; }\n      .membership-modal .select-membership .membership-options .option .option-details radio-button {\n        width: 100%; }\n        .membership-modal .select-membership .membership-options .option .option-details radio-button label.radio-button-control {\n          margin-left: 0;\n          text-align: center;\n          width: 100%; }\n          .membership-modal .select-membership .membership-options .option .option-details radio-button label.radio-button-control span {\n            display: block;\n            line-height: 0; }\n            .membership-modal .select-membership .membership-options .option .option-details radio-button label.radio-button-control span:before {\n              position: static; }\n\n.membership-modal .select-membership .fine-print {\n  margin-bottom: 1rem;\n  color: #444444;\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  text-align: center; }\n\n.membership-modal .select-membership .purchase-button button {\n  width: 100%; }\n"
}), define("text!service/membership-cards/link-an-existing-card/link-an-existing-card-modal.css", ["module"], function(e) {
    e.exports = "/**\n * Foundation for Sites by ZURB\n * Version 6.3.1\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.link-an-existing-card-modal .instructions {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: #444444;\n  margin-bottom: 1.5rem; }\n\n.link-an-existing-card-modal .card-number-container {\n  margin-bottom: 2rem; }\n\n.link-an-existing-card-modal .link-card-button button {\n  width: 100%; }\n"
}), define("text!membership-cards-environment.json", ["module"], function(e) {
    e.exports = '{\n  "debug": false,\n  "testing": false,\n  "assetPath": "/etc/designs/the-lott/components/content/membership-cards/clientlibs/assets/",\n  "baseUrl": "https://thelott.com/",\n  "logLevel": 2\n}\n'
});