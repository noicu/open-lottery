/* set-password-prod-aem-v1.2.131 */
define("text!service/set-password-prompt/set-password-prompt.html", ["module"], function(e) {
    e.exports = '<template><require from="./forms/change-password-form-with-token/change-password-form-with-token"></require><require from="./forms/change-password-form-without-token/change-password-form-without-token"></require><require from="./forms/change-password-form-success/change-password-form-success"></require><require from="./forms/change-password-form-fail-retry/change-password-form-fail-retry"></require><change-password-form-with-token if.bind="securityToken && !success && !failureRetryRequired" controller.bind="controller" security-token.bind="securityToken" success.bind="success" username.bind="username" new-password.bind="newPassword" failure-retry-required.bind="failureRetryRequired"></change-password-form-with-token><change-password-form-without-token if.bind="!securityToken && !success && !failureRetryRequired" controller.bind="controller" success.bind="success" username.bind="username" new-password.bind="newPassword" failure-retry-required.bind="failureRetryRequired"></change-password-form-without-token><change-password-form-success if.bind="success" controller.bind="controller" username.bind="username" new-password.bind="newPassword"></change-password-form-success><change-password-form-fail-retry if.bind="failureRetryRequired" controller.bind="controller" username.bind="username"></change-password-form-fail-retry></template>'
}), define("text!service/set-password-prompt/form-fields/new-password-with-token/new-password-with-token.html", ["module"], function(e) {
    e.exports = '<template><require from="attributes/password-strength-indicator"></require><require from="elements/password-tips/password-tips"></require><div class="row ${newPasswordErrors.length > 0 ? \'input-error\' : \'\'}"><div class="text-left xsmall-12 columns"><label class="middle" for="newPassword">New Password</label></div><div class="xsmall-12 columns end" validation-errors.bind="newPasswordErrors"><div class="input-group" data-test-id="reset-pwd-input"><input password-strength-indicator.bind="model.newPassword" type="${showPassword ? \'text\' : \'password\'}" class="truncate input-group-field" id="newPassword" name="new-password" maxlength="30" value.bind="model.newPassword & validate" keypress.delegate="keyPressed($event)" data-test-id="reset-new-pwd"><div class="input-group-button"><input type="button" class="button hollow show-button" click.delegate="showPassword = !showPassword" value="${showPassword ? \'Hide\' : \'Show\'}" tabindex="-1"></div></div><div class="help-text" show.bind="newPasswordErrors.length > 0"><span data-test-id="reset-pwd-validation-error" repeat.for="newPasswordErrorInfo of newPasswordErrors">${newPasswordErrorInfo.error.message}<br></span></div><div class="password-tips"><password-tips password-field-id="newPassword" has-bottom-separator.bind="false"></password-tips></div></div></div></template>'
}), define("text!service/set-password-prompt/form-fields/new-password-without-token/new-password-without-token.html", ["module"], function(e) {
    e.exports = '<template><require from="attributes/password-strength-indicator"></require><require from="elements/password-tips/password-tips"></require><div class="row ${temporaryPasswordErrors.length > 0 ? \'input-error\' : \'\'}"><div class="text-left xsmall-12 columns"><label class="middle" for="currentPassword">Temporary Password</label></div><div class="xsmall-12 columns" validation-errors.bind="temporaryPasswordErrors"><div class="input-group"><input type="password" id="currentPassword" class="truncate input-group-field input-container" name="current-password" value.bind="model.temporaryPassword & validate" minlength="6" maxlength="30" keypress.delegate="keyPressed($event)" data-test-id="reset-current-pwd" placeholder="Sent to your email"></div><div class="help-text" show.bind="temporaryPasswordErrors.length > 0"><span repeat.for="temporaryPasswordErrorInfo of temporaryPasswordErrors">${temporaryPasswordErrorInfo.error.message}<br></span></div></div></div><div class="row ${newPasswordErrors.length > 0 ? \'input-error\' : \'\'}"><div class="text-left xsmall-12 columns"><label class="middle" for="newPassword">New Password</label></div><div class="xsmall-12 columns end" validation-errors.bind="newPasswordErrors"><div class="input-group" data-test-id="change-pwd-input"><input password-strength-indicator.bind="model.newPassword" type="${showPassword ? \'text\' : \'password\'}" class="truncate input-group-field" id="newPassword" name="new-password" maxlength="30" value.bind="model.newPassword & validate" keypress.delegate="keyPressed($event)" data-test-id="reset-new-pwd"><div class="input-group-button"><input type="button" class="button hollow show-button" click.delegate="showPassword = !showPassword" value="${showPassword ? \'Hide\' : \'Show\'}" tabindex="-1"></div></div><div class="help-text" show.bind="newPasswordErrors.length > 0"><span data-test-id="change-pwd-validation-error" repeat.for="newPasswordErrorInfo of newPasswordErrors">${newPasswordErrorInfo.error.message}<br></span></div><div class="password-tips"><password-tips password-field-id="newPassword" has-bottom-separator.bind="false"></password-tips></div></div></div></template>'
}), define("text!service/set-password-prompt/form-fields/password-strength-bar/password-strength-bar.html", ["module"], function(e) {
    e.exports = "<template><div id=\"strength\"><div id=\"strengthBar\"><div class=\"point strength5 ${bar4 ? 'active' : ''}\"></div><div class=\"point strength4 ${bar3 ? 'active' : ''}\"></div><div class=\"point strength3 ${bar2 ? 'active' : ''}\"></div><div class=\"point strength2 ${bar1 ? 'active' : ''}\"></div><div class=\"point strength1 ${bar0 ? 'active' : ''}\"></div></div></div></template>"
}), define("text!service/set-password-prompt/form-fields/username/username.html", ["module"], function(e) {
    e.exports = '<template><div class="row ${usernameErrors.length > 0 ? \'input-error\' : \'\'}"><div class="text-left xsmall-12 columns"><label class="middle" for="username">Username</label></div><div class="xsmall-12 columns" validation-errors.bind="usernameErrors"><div class="input-group"><input type="text" id="username" class="truncate input-group-field input-container" name="user-password" value.bind="model.username & validate" keypress.delegate="keyPressed($event)" data-test-id="usernmane-field"></div><div class="help-text" show.bind="usernameErrors.length > 0"><span repeat.for="usernameErrorInfo of usernameErrors">${usernameErrorInfo.error.message}<br></span></div></div></div></template>'
}), define("text!service/set-password-prompt/forms/change-password-form-fail-retry/change-password-form-fail-retry.html", ["module"], function(e) {
    e.exports = '<template><div class="ux-dialog-middle login-prompt-container set-password"><ux-dialog class="login-prompt error error-invalid"><ux-dialog-header><h2 data-test-id="reset-header-title">Uh ohhhhh...</h2><span class="error-text" data-test-id="reset-error-message">It looks like the reset password link you have used has expired.</span></ux-dialog-header><ux-dialog-body><p>To receive a new link, please start the reset password process again.</p><button click.delegate="requestNewForgotPasswordEmail()" class="button expanded">RESET PASSWORD</button></ux-dialog-body><ux-dialog-footer></ux-dialog-footer></ux-dialog></div></template>'
}), define("text!service/set-password-prompt/forms/change-password-form-success/change-password-form-success.html", ["module"], function(e) {
    e.exports = '<template><div class="ux-dialog-middle login-prompt-container set-password cp-success"><ux-dialog class="login-prompt"><ux-dialog-header><h2 data-test-id="reset-header-title">Password Reset</h2><button type="button" class="dialog-close au-target" aria-label="Close" click.trigger="passwordSuccessAccepted()"><span aria-hidden="true">×</span></button></ux-dialog-header><ux-dialog-body><p data-test-id="reset-success-message">Your password has been successfully reset and you have been logged into your account.</p><button click.delegate="passwordSuccessAccepted()" class="button expanded">OK</button></ux-dialog-body><ux-dialog-footer></ux-dialog-footer></ux-dialog></div></template>'
}), define("text!service/set-password-prompt/forms/change-password-form-with-token/change-password-form-with-token.html", ["module"], function(e) {
    e.exports = '<template><div class="ux-dialog-middle login-prompt-container set-password"><ux-dialog class="login-prompt ${errorType ? \'error\': \'\'} ${errorType}"><ux-dialog-header><h2 data-test-id="reset-header-title">${headerText}</h2><span class="error-text" innerhtml.bind="errorText" data-test-id="reset-error-message"></span></ux-dialog-header><ux-dialog-body><require from="../../form-fields/username/username"></require><require from="../../form-fields/new-password-with-token/new-password-with-token"></require><require from="elements/loading-button/loading-button"></require><div class="cp-form"><username model.bind="model.username" view-model.ref="usernameVm" key-pressed.call="keyPressed($event)"></username><new-password-with-token model.bind="model.newPasswordWithToken" view-model.ref="newPasswordWithTokenVm" key-pressed.call="keyPressed($event)"></new-password-with-token><div class="row"><div class="xsmall-12 columns"><loading-button view-model.ref="submitButton" style.bind="\'expanded\'" button-clicked.call="submitSetPasswordAndLogin()" validation-async.call="formIsValid()">RESET MY PASSWORD</loading-button></div></div></div></ux-dialog-body><ux-dialog-footer></ux-dialog-footer></ux-dialog></div></template>'
}), define("text!service/set-password-prompt/forms/change-password-form-without-token/change-password-form-without-token.html", ["module"], function(e) {
    e.exports = '<template><require from="elements/loading-button/loading-button"></require><div class="ux-dialog-middle login-prompt-container set-password"><ux-dialog class="login-prompt ${errorType ? \'error\': \'\'} ${errorType}"><ux-dialog-header><h2 data-test-id="reset-header-title">${headerText}</h2><span class="error-text" innerhtml.bind="errorText" data-test-id="reset-error-message"></span></ux-dialog-header><ux-dialog-body><require from="../../form-fields/new-password-without-token/new-password-without-token"></require><require from="elements/loading-button/loading-button"></require><div class="cp-form"><new-password-without-token model.bind="model.newPasswordWithoutToken" view-model.ref="newPasswordWithoutTokenVm" key-pressed.call="keyPressed($event)"></new-password-without-token><div class="row"><div class="xsmall-12 columns"><loading-button view-model.ref="submitButton" style.bind="\'expanded\'" button-clicked.call="submitSetPassword()" validation-async.call="formIsValid()">RESET MY PASSWORD</loading-button></div></div></div></ux-dialog-body><ux-dialog-footer></ux-dialog-footer></ux-dialog></div></template>'
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, s) {
        return new(r || (r = Promise))(function(o, i) {
            function a(e) {
                try {
                    d(s.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function n(e) {
                try {
                    d(s.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function d(e) {
                e.done ? o(e.value) : new r(function(t) {
                    t(e.value)
                }).then(a, n)
            }
            d((s = s.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function r(e) {
            return function(t) {
                return s([e, t])
            }
        }

        function s(r) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; d;) try {
                if (o = 1, i && (a = 2 & r[0] ? i.return : r[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, r[1])).done) return a;
                switch (i = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                    case 0:
                    case 1:
                        a = r;
                        break;
                    case 4:
                        return d.label++, {
                            value: r[1],
                            done: !1
                        };
                    case 5:
                        d.label++, i = r[1], r = [0];
                        continue;
                    case 7:
                        r = d.ops.pop(), d.trys.pop();
                        continue;
                    default:
                        if (a = d.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                            d = 0;
                            continue
                        }
                        if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                            d.label = r[1];
                            break
                        }
                        if (6 === r[0] && d.label < a[1]) {
                            d.label = a[1], a = r;
                            break
                        }
                        if (a && d.label < a[2]) {
                            d.label = a[2], d.ops.push(r);
                            break
                        }
                        a[2] && d.ops.pop(), d.trys.pop();
                        continue
                }
                r = t.call(e, d)
            } catch (e) {
                r = [6, e], i = 0
            } finally {
                o = a = 0
            }
            if (5 & r[0]) throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
        var o, i, a, n, d = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: r(0),
            throw: r(1),
            return: r(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n
    };
define("service/set-password-service", ["require", "exports", "services/user-context", "aurelia-dialog", "../service/set-password-prompt/set-password-prompt", "services/tatts-event-service", "services/tatts-log", "container/global-registration", "aurelia-dependency-injection", "services/query-string", "services/query-string-rewriter", "services/login/session-service"], function(e, t, r, s, o, i, a, n, d, l, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function() {
        function e(e, t, r, s, o, i, a) {
            var n = this;
            this.userContext = e, this.dialogService = t, this.logging = r, this.tattsEvent = s, this.queryString = o, this.queryStringRewriter = i, this.sessionService = a, this.open = !1, this.securityToken = void 0, this.tattsEvent.subscribe("Login", "Success", function(e) {
                n.maybeShowSetPassword()
            })
        }
        return e.prototype.initialize = function() {
            this.checkSecurityToken(), this.maybeShowSetPassword()
        }, e.prototype.checkSecurityToken = function() {
            if ("enabled" === window.resetPasswordToken) {
                var e = this.queryString.getParameter("st") || this.queryString.getParameter("securitytoken");
                void 0 === this.securityToken && e && (this.securityToken = e, this.queryStringRewriter.setParam("securitytoken", null), this.queryStringRewriter.setParam("st", null))
            }
        }, e.prototype.maybeShowSetPassword = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return this.securityToken || this.userContext.isLoggedIn && this.userContext.pwdExpired ? [4, this.logoutExistingUserIfRequired()] : [3, 2];
                        case 1:
                            e.sent(), this.showSetPassword(), e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.logoutExistingUserIfRequired = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (!this.securityToken || !this.userContext.isLoggedIn) return [3, 4];
                            t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, this.sessionService.logout()];
                        case 2:
                            return t.sent(), [3, 4];
                        case 3:
                            return e = t.sent(), this.logging.error("SetPasswordService - logoutExistingUserIfRequired - Failed to log user out:", e.message), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.showSetPassword = function() {
            var e = this;
            this.open || this.dialogService.closeAll().then(function(t) {
                e.open || e.displaySetPassword()
            })
        }, e.prototype.displaySetPassword = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e = this;
                return __generator(this, function(t) {
                    return this.open = !0, this.dialogService.open({
                        viewModel: o.SetPasswordPrompt,
                        model: {
                            securityToken: this.securityToken
                        }
                    }).whenClosed(function(t) {
                        e.logging.debug("SetPasswordService", "finished displaying set password screen"), e.open = !1
                    }), this.securityToken = void 0, [2]
                })
            })
        }, e = __decorate([n.global("SetPasswordService"), d.autoinject(), __metadata("design:paramtypes", [r.UserContext, s.DialogService, a.TattsLog, i.TattsEvent, l.QueryString, c.QueryStringRewriter, u.SessionService])], e)
    }();
    t.SetPasswordService = p, t.default = p, document.addEventListener("aurelia-composed", function() {
        (new d.Container).get(p).initialize()
    })
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/set-password-prompt", ["require", "exports", "aurelia-framework", "aurelia-framework", "services/tatts-event-service", "services/user-context", "aurelia-dialog", "services/tatts-http", "services/tatts-log"], function(e, t, r, s, o, i, a, n, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
        function e(e, t, r, s, o) {
            var i = this;
            this.http = e, this.controller = t, this.eventService = r, this.log = s, this.userContext = o, this.success = !1, this.failureRetryRequired = !1, this.securityToken = void 0, this.username = void 0, this.newPassword = void 0, this.loggedIn = this.userContext.isLoggedIn, this.passwordExpired = this.userContext.pwdExpired, this.eventService.subscribe("PasswordReset", "Success", function(e) {
                i.controller.ok()
            })
        }
        return e.prototype.activate = function(e) {
            this.securityToken = e.securityToken, this.controller.settings.overlayDismiss = !!this.securityToken, this.controller.settings.keyboard = !!this.securityToken, this.controller.settings.lock = !this.securityToken, this.controller.settings.centerHorizontalOnly = !0
        }, __decorate([s.bindable({
            defaultBindingMode: s.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "username", void 0), __decorate([s.bindable({
            defaultBindingMode: s.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "newPassword", void 0), e = __decorate([r.autoinject(), __metadata("design:paramtypes", [n.TattsHttp, a.DialogController, o.TattsEvent, d.TattsLog, i.UserContext])], e)
    }();
    t.SetPasswordPrompt = l
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/forms/change-password-helper", ["require", "exports", "aurelia-dependency-injection", "services/user-context", "services/tatts-log", "services/tatts-event-service", "services/tatts-http", "services/tatts-account-service"], function(e, t, r, s, o, i, a, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = {
            InvalidCredentials: {
                UIClass: "error-set-password",
                Title: "Uh ohhhhhh…",
                Text: "The password you entered is invalid. Please review and try again."
            },
            ExistingPassword: {
                UIClass: "error-set-password",
                Title: "Try Again…",
                Text: "Your new password cannot be the same as one you used recently for your account."
            },
            InvalidSecurityToken: {
                UIClass: "error-invalid",
                Title: "",
                Text: ""
            }
        },
        l = {
            InvalidCredentials: {
                UIClass: "error-invalid",
                Title: "Not quite…",
                Text: "The details you entered did not match our records. Please review and try again."
            },
            AccountSuspended: {
                UIClass: "error-lock",
                Title: "Account Suspended",
                Text: 'It looks like your account is suspended. Call us on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span> to start playing again.'
            },
            AccountClosed: {
                UIClass: "error-closed",
                Title: "Account Closed",
                Text: 'It looks like your account is closed. Call us on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span> to start playing again.'
            },
            AccountLocked: {
                UIClass: "error-lock",
                Title: "Account Locked",
                Text: 'It looks like you’ve attempted to login too many times. Reset your password or call us on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span> to start playing again.'
            },
            AccountSelfExcluded: {
                UIClass: "error-lock",
                Title: "Account Self-Excluded",
                Text: 'It looks like you have self-excluded your account. You can call us on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span>.'
            },
            AccountBarred: {
                UIClass: "error-lock",
                Title: "Account Barred",
                Text: 'It looks like you have barred your account. You can call us on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span>.'
            },
            UbetOnlyAccount: {
                UIClass: "error-invalid",
                Title: "Uh ohhhhhh…",
                Text: 'Sorry, we can\'t process your transaction at this time. Please call our Customer Support team on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span> to report this issue.'
            },
            UnknownFailure: {
                UIClass: "error-invalid",
                Title: "Uh ohhhhhh…",
                Text: 'Sorry, we can\'t process your transaction at this time. Please call our Customer Support team on <a class="hide-for-medium" href="tel:131868">131 868</a><span class="show-for-medium">131 868</span> to report this issue.'
            }
        },
        c = function() {
            function e(e, t, r, s, o) {
                this.context = e, this.log = t, this.eventService = r, this.http = s, this.accountService = o, this.apiUrls = {
                    login: "sales/vmax/web/account/login",
                    setPassword: "/sales/vmax/web/account/password/edit"
                }, this.formRequiresProcessRestart = !1
            }
            return e.prototype.isLoggedInToLotteries = function(e) {
                return e.Success && e.Lotteries.IsLoggedIn
            }, e.prototype.isLoggedInToScratcheClubOnly = function(e) {
                return e.Success && e.ScratcheClub && e.ScratcheClub.IsLoggedIn
            }, e.prototype.processLoginEvent = function(e, t) {
                (this.isLoggedInToLotteries(e) || this.isLoggedInToScratcheClubOnly(e)) && (this.context.accountName = t, this.processSetPasswordSuccess(e.CustomerSession.SessionId))
            }, e.prototype.processSetPasswordSuccess = function(e) {
                var t = this;
                this.context.pwdExpired = !1, this.accountService.getAccountDetails(e).then(function(e) {
                    t.context.weeklySpendLimit = e.Details.LotteriesMaximumWeeklySpend
                }), this.eventService.publish("PasswordReset", "Success")
            }, e.prototype.getSetPasswordErrorMessage = function(e) {
                return e.ErrorInfo.DisplayMessage
            }, e.prototype.getErrorModel = function(e) {
                var t = this.getErrorInfo(e);
                return this.processError(t.ErrorNo, e)
            }, e.prototype.getErrorInfo = function(e) {
                var t = null;
                try {
                    t = e.ErrorInfo || e.Lotteries.LoginDetails.ErrorInfo
                } catch (e) {
                    this.log.error("ErrorInfo not found in API response:", e.message)
                }
                return t
            }, e.prototype.processError = function(e, t) {
                switch (e) {
                    case 3100:
                    case 3149:
                        return d.InvalidCredentials;
                    case 3192:
                        return d.ExistingPassword;
                    case 3291:
                    case 3292:
                    case 3293:
                        return this.formRequiresProcessRestart = !0, d.InvalidSecurityToken;
                    case 3106:
                        return l.InvalidCredentials;
                    case 107:
                    case 3107:
                        return l.AccountClosed;
                    case 108:
                    case 3108:
                        return l.AccountLocked;
                    case 109:
                        return this.getTagsExclusion(t.Lotteries.LoginDetails);
                    case 3109:
                        return l.AccountSuspended;
                    case 3297:
                        return l.UbetOnlyAccount;
                    default:
                        return l.UnknownFailure
                }
            }, e.prototype.processRestartRequired = function() {
                return this.formRequiresProcessRestart
            }, e.prototype.getTagsExclusion = function(e) {
                return this.customerSelfExcluded(e) ? this.fromBarredJurisdiction(e) ? l.AccountBarred : l.AccountSelfExcluded : l.AccountSuspended
            }, e.prototype.customerSelfExcluded = function(e) {
                return e.IsSelfBanned || e.IsSelfExcluded
            }, e.prototype.fromBarredJurisdiction = function(e) {
                return "AustraliaSA" === e.Jurisdiction
            }, e = __decorate([r.autoinject(), __metadata("design:paramtypes", [s.UserContext, o.TattsLog, i.TattsEvent, a.TattsHttp, n.TattsAccountService])], e)
        }();
    t.ChangePasswordHelper = c
}), define("service/set-password-prompt/requests/login-request", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this.Username = e, this.Password = t, this.Dob = null, this.DeviceName = "", this.DeviceKey = "", this.Referrer = "web", this.WebClientId = "10"
        }
        return e
    }();
    t.LoginRequest = r
}), define("service/set-password-prompt/requests/set-password-request", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, r) {
            this.OldPassword = t, this.NewPassword = r, this.CustomerSession = {
                SessionId: "00000000-0000-0000-0000-000000000000"
            }, this.CustomerSession.SessionId = e
        }
        return e
    }();
    t.SetPasswordRequest = r
}), define("service/set-password-prompt/form-fields/new-password-with-token/new-password-with-token-model", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.newPassword = ""
        }
        return e
    }();
    t.NewPasswordWithTokenModel = r
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/form-fields/new-password-with-token/new-password-with-token", ["require", "exports", "aurelia-framework", "aurelia-validation", "./new-password-with-token-model", "validation-rules/password-validation-rules"], function(e, t, r, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            this.validationController = e, this.passwordValidationRules = t
        }
        return e.prototype.attached = function() {
            s.ValidationRules.ensure(function(e) {
                return e.newPassword
            }).required().withMessage("Please enter your new password.").then().satisfiesRule("isPasswordCorrectLength").then().satisfiesRule("isPasswordAllAscii").then().satisfiesRule("isValidPassword").on(this.model), this.validationController.addObject(this.model)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", o.NewPasswordWithTokenModel)], e.prototype, "model", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "showPassword", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.oneWay
        }), __metadata("design:type", Function)], e.prototype, "keyPressed", void 0), e = __decorate([r.autoinject, r.customElement("new-password-with-token"), __metadata("design:paramtypes", [s.ValidationController, i.PasswordValidationRules])], e)
    }();
    t.NewPasswordWithToken = a
}), define("service/set-password-prompt/form-fields/new-password-without-token/new-password-without-token-model", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.newPassword = "", this.temporaryPassword = ""
        }
        return e
    }();
    t.NewPasswordWithoutTokenModel = r
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/form-fields/new-password-without-token/new-password-without-token", ["require", "exports", "aurelia-framework", "aurelia-validation", "./new-password-without-token-model", "validation-rules/password-validation-rules"], function(e, t, r, s, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            this.validationController = e, this.passwordValidationRules = t
        }
        return e.prototype.attached = function() {
            s.ValidationRules.customRule("doesNotMatch", function(e, t, r) {
                return null === e || void 0 === e || "" === e || null === t[r] || void 0 === t[r] || "" === t[r] || e !== t[r]
            }, "${$displayName} must not match ${$getDisplayName($config.otherPropertyName)}", function(e) {
                return {
                    otherPropertyName: e
                }
            }), s.ValidationRules.ensure(function(e) {
                return e.temporaryPassword
            }).required().ensure(function(e) {
                return e.newPassword
            }).required().withMessage("Please enter your new password.").then().satisfiesRule("isPasswordCorrectLength").then().satisfiesRule("isPasswordAllAscii").then().satisfiesRule("doesNotMatch", "temporaryPassword").then().satisfiesRule("isValidPassword").on(this.model), this.validationController.addObject(this.model)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", o.NewPasswordWithoutTokenModel)], e.prototype, "model", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "showPassword", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.oneWay
        }), __metadata("design:type", Function)], e.prototype, "keyPressed", void 0), e = __decorate([r.autoinject, r.customElement("new-password-without-token"), __metadata("design:paramtypes", [s.ValidationController, i.PasswordValidationRules])], e)
    }();
    t.NewPasswordWithoutToken = a
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/form-fields/password-strength-bar/password-strength-bar", ["require", "exports", "aurelia-framework"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e() {
            this.bar0 = !1, this.bar1 = !1, this.bar2 = !1, this.bar3 = !1, this.bar4 = !1
        }
        return e.prototype.attached = function() {
            this.setBarActive(5, !1)
        }, e.prototype.passwordToCheckChanged = function(e, t) {
            var r = e;
            if (this.setBarActive(5, !1), r) {
                var s = this.measureStrength(r),
                    o = this.getMaxIndicator(s);
                this.setBarActive(o, !0)
            }
        }, e.prototype.measureStrength = function(e) {
            for (var t = 0, r = /[$-\/:-?{-~!"^_`\[\]]/g, s = /[a-z]+/.test(e), o = /[A-Z]+/.test(e), i = /[0-9]+/.test(e), a = r.test(e), n = [s, o, i, a], d = 0, l = 0, c = n; l < c.length; l++) {
                d += !0 === c[l] ? 1 : 0
            }
            return t += 2 * e.length + (e.length >= 10 ? 1 : 0), t += 10 * d, t = e.length <= 6 ? Math.min(t, 10) : t, t = 1 === d ? Math.min(t, 10) : t, t = 2 === d ? Math.min(t, 20) : t, t = 3 === d ? Math.min(t, 40) : t
        }, e.prototype.getMaxIndicator = function(e) {
            return (e <= 10 ? 0 : e <= 20 ? 1 : e <= 30 ? 2 : e <= 40 ? 3 : 4) + 1
        }, e.prototype.setBarActive = function(e, t) {
            for (var r = 0; r < e; r++) switch (r) {
                case 0:
                    this.bar0 = t;
                    break;
                case 1:
                    this.bar1 = t;
                    break;
                case 2:
                    this.bar2 = t;
                    break;
                case 3:
                    this.bar3 = t;
                    break;
                case 4:
                    this.bar4 = t
            }
        }, __decorate([r.bindable(), __metadata("design:type", String)], e.prototype, "passwordToCheck", void 0), e
    }();
    t.PasswordStrengthBarCustomElement = s
}), define("service/set-password-prompt/form-fields/username/username-model", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.username = ""
        }
        return e
    }();
    t.UsernameModel = r
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/form-fields/username/username", ["require", "exports", "aurelia-framework", "aurelia-validation", "./username-model"], function(e, t, r, s, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e) {
            this.validationController = e
        }
        return e.prototype.attached = function() {
            s.ValidationRules.ensure(function(e) {
                return e.username
            }).required().withMessage("Please enter your username").on(this.model), this.validationController.addObject(this.model)
        }, __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.twoWay
        }), __metadata("design:type", o.UsernameModel)], e.prototype, "model", void 0), __decorate([r.bindable({
            defaultBindingMode: r.bindingMode.oneWay
        }), __metadata("design:type", Function)], e.prototype, "keyPressed", void 0), e = __decorate([r.inject(r.NewInstance.of(s.ValidationController)), r.customElement("username"), __metadata("design:paramtypes", [s.ValidationController])], e)
    }();
    t.UserName = i
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/forms/change-password-form-fail-retry/change-password-form-fail-retry", ["require", "exports", "aurelia-dependency-injection", "aurelia-configuration", "aurelia-framework", "services/tatts-login", "aurelia-dialog"], function(e, t, r, s, o, i, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this.configuration = e, this.loginService = t
        }
        return e.prototype.requestNewForgotPasswordEmail = function() {
            this.loginService.openForgotPassword(), this.controller.cancel()
        }, __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", a.DialogController)], e.prototype, "controller", void 0), e = __decorate([r.autoinject(), __metadata("design:paramtypes", [s.AureliaConfiguration, i.LoginService])], e)
    }();
    t.ChangePasswordFormFailRetry = n
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/forms/change-password-form-success/change-password-form-success", ["require", "exports", "aurelia-dependency-injection", "aurelia-configuration", "aurelia-framework", "services/user-context", "../change-password-helper", "services/login/session-service"], function(e, t, r, s, o, i, a, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var d = function() {
        function e(e, t, r, s) {
            this.configuration = e, this.userContext = t, this.sessionService = r, this.changePasswordHelper = s
        }
        return e.prototype.passwordSuccessAccepted = function() {
            var e = this;
            if (this.userContext.isLoggedIn) return void this.changePasswordHelper.processSetPasswordSuccess(this.userContext.sessionId);
            this.sessionService.login(this.username, this.newPassword).then(function(t) {
                e.changePasswordHelper.processLoginEvent(t.loginResponse, e.username)
            })
        }, __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "username", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "newPassword", void 0), e = __decorate([r.autoinject(), __metadata("design:paramtypes", [s.AureliaConfiguration, i.UserContext, n.SessionService, a.ChangePasswordHelper])], e)
    }();
    t.ChangePasswordFormSuccess = d
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/forms/change-password-form-with-token/change-password-form-with-token", ["require", "exports", "aurelia-dependency-injection", "aurelia-configuration", "aurelia-framework", "services/user-context", "services/tatts-log", "services/tatts-http", "aurelia-dialog", "../change-password-helper", "services/login/session-service", "../../form-fields/username/username-model", "../../form-fields/new-password-with-token/new-password-with-token-model"], function(e, t, r, s, o, i, a, n, d, l, c, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var f = function() {
        function e(e, t, r, s, o, i) {
            this.configuration = e, this.sessionService = t, this.tattsHttp = r, this.tattslog = s, this.userContext = o, this.changePasswordHelper = i, this.headerText = "Password Reset", this.errorType = "", this.errorText = "", this.model = {
                username: new u.UsernameModel,
                newPasswordWithToken: new p.NewPasswordWithTokenModel
            }
        }
        return e.prototype.keyPressed = function(e) {
            var t = e.srcElement.id,
                r = "newPassword" === t,
                s = e.keyCode || e.which;
            return r && 13 === s && this.submitButton.doWork(), !0
        }, e.prototype.submitHandler = function() {
            this.submitSetPasswordAndLogin()
        }, e.prototype.formIsValid = function() {
            return Promise.all([this.usernameVm.validationController.validate(), this.newPasswordWithTokenVm.validationController.validate()]).then(function(e) {
                return !e.find(function(e) {
                    return !1 === e.valid
                })
            })
        }, e.prototype.submitSetPasswordAndLogin = function() {
            var e = this;
            this.tattsHttp.client.fetch("/sales/vmax/web/account/password/set", {
                method: "POST",
                body: JSON.stringify({
                    Username: this.model.username.username,
                    SecurityToken: this.securityToken,
                    NewPassword: this.model.newPasswordWithToken.newPassword,
                    WebClientId: "10"
                })
            }, !1).then(function(t) {
                if (e.submitButtonCssClass = "", t.Success) return e.setPasswordSuccess(), Promise.resolve(t);
                var r = e.changePasswordHelper.getErrorModel(t);
                return e.changePasswordHelper.processRestartRequired() ? e.setPasswordRequiresRetry() : e.setError(r), Promise.resolve(t)
            }, function(t) {
                return e.tattslog.error("change-password-form-with-token", t), e.submitButtonCssClass = "", Promise.reject(t)
            }).then(function(t) {
                return e.userContext.forceRefreshUserData()
            })
        }, e.prototype.setPasswordSuccess = function() {
            this.username = this.model.username.username, this.newPassword = this.model.newPasswordWithToken.newPassword, this.securityToken = null, this.success = !0, this.controller.settings.lock = !0, this.controller.settings.overlayDismiss = !1, this.controller.settings.keyboard = !1
        }, e.prototype.setPasswordRequiresRetry = function() {
            this.username = this.model.username.username, this.failureRetryRequired = !0, this.controller.settings.lock = !1, this.controller.settings.overlayDismiss = !0, this.controller.settings.keyboard = !0
        }, e.prototype.setError = function(e) {
            this.headerText = e.Title, this.errorType = e.UIClass, this.errorText = e.Text
        }, __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", d.DialogController)], e.prototype, "controller", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "success", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "failureRetryRequired", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "username", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "newPassword", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "securityToken", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "headerText", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "errorType", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "errorText", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "submitButtonCssClass", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), e = __decorate([r.autoinject(), __metadata("design:paramtypes", [s.AureliaConfiguration, c.SessionService, n.TattsHttp, a.TattsLog, i.UserContext, l.ChangePasswordHelper])], e)
    }();
    t.ChangePasswordFormWithToken = f
});
var __decorate = this && this.__decorate || function(e, t, r, s) {
        var o, i = arguments.length,
            a = i < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, s);
        else
            for (var n = e.length - 1; n >= 0; n--)(o = e[n]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a
    },
    __metadata = this && this.__metadata || function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    };
define("service/set-password-prompt/forms/change-password-form-without-token/change-password-form-without-token", ["require", "exports", "aurelia-dependency-injection", "aurelia-configuration", "aurelia-framework", "services/user-context", "services/tatts-log", "services/tatts-http", "aurelia-dialog", "../change-password-helper", "services/login/session-service", "../../form-fields/new-password-without-token/new-password-without-token-model"], function(e, t, r, s, o, i, a, n, d, l, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function() {
        function e(e, t, r, s, o, i) {
            this.configuration = e, this.sessionService = t, this.tattsHttp = r, this.tattslog = s, this.userContext = o, this.changePasswordHelper = i, this.headerText = "Password Reset", this.errorType = "", this.errorText = "", this.model = {
                newPasswordWithoutToken: new u.NewPasswordWithoutTokenModel
            }
        }
        return e.prototype.keyPressed = function(e) {
            var t = e.srcElement.id,
                r = "temporaryPassword" === t || "newPassword" === t,
                s = e.keyCode || e.which;
            return r && 13 === s && this.submitButton.doWork(), !0
        }, e.prototype.formIsValid = function() {
            return Promise.all([this.newPasswordWithoutTokenVm.validationController.validate()]).then(function(e) {
                return !e.find(function(e) {
                    return !1 === e.valid
                })
            })
        }, e.prototype.submitSetPassword = function() {
            var e = this;
            this.tattsHttp.client.fetch("/sales/vmax/web/account/password/edit", {
                method: "POST",
                body: n.json({
                    CustomerSession: {
                        SessionId: this.userContext.sessionId
                    },
                    OldPassword: this.model.newPasswordWithoutToken.temporaryPassword,
                    NewPassword: this.model.newPasswordWithoutToken.newPassword
                })
            }, !1).then(function(t) {
                if (e.submitButtonCssClass = "", t.Success) return e.setPasswordSuccess(), Promise.resolve(t);
                var r = e.changePasswordHelper.getErrorModel(t);
                return e.setError(r), Promise.resolve(t)
            }, function(t) {
                return e.tattslog.error("change-password-form-without-token", t), e.submitButtonCssClass = "", Promise.reject(t)
            }).then(function(t) {
                return e.userContext.forceRefreshUserData()
            })
        }, e.prototype.setPasswordSuccess = function() {
            this.newPassword = this.model.newPasswordWithoutToken.newPassword, this.success = !0, this.controller.settings.lock = !0, this.controller.settings.overlayDismiss = !1, this.controller.settings.keyboard = !1
        }, e.prototype.setPasswordRequiresRetry = function() {
            this.failureRetryRequired = !0, this.controller.settings.lock = !1, this.controller.settings.overlayDismiss = !0, this.controller.settings.keyboard = !0
        }, e.prototype.setError = function(e) {
            this.headerText = e.Title, this.errorType = e.UIClass, this.errorText = e.Text
        }, __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", d.DialogController)], e.prototype, "controller", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "success", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", Boolean)], e.prototype, "failureRetryRequired", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "newPassword", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "headerText", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "errorType", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "errorText", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", String)], e.prototype, "submitButtonCssClass", void 0), __decorate([o.bindable({
            defaultBindingMode: o.bindingMode.twoWay
        }), __metadata("design:type", Object)], e.prototype, "model", void 0), e = __decorate([r.autoinject(), __metadata("design:paramtypes", [s.AureliaConfiguration, c.SessionService, n.TattsHttp, a.TattsLog, i.UserContext, l.ChangePasswordHelper])], e)
    }();
    t.ChangePasswordFormWithoutToken = p
});